// Faith Church current-site crawler (Phase 1)
// Renders JS-heavy pages via Playwright/Chromium, extracts structured content,
// downloads every referenced image, and emits crawl-data.json + image-manifest.json.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const OUT_IMAGES = process.env.OUT_IMAGES; // faith-church-leslie/public/images/from-current-site
const OUT_DATA = process.env.OUT_DATA;     // scratchpad dir for json
const BASE = 'https://faithchurchleslie.com';

const SEED_URLS = [
  '/',
  '/about-faith',
  '/events',
  '/engagegroups',
  '/sermons',
  '/contact',
];

function abs(href) {
  if (!href) return null;
  try { return new URL(href, BASE).href; } catch { return null; }
}
function sameHost(u) {
  try { return new URL(u).hostname.replace(/^www\./, '') === 'faithchurchleslie.com'; }
  catch { return false; }
}

async function extractPage(page, url) {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => {});
  // give JS feeds a moment
  await page.waitForTimeout(2500);
  const data = await page.evaluate(() => {
    const clean = (s) => (s || '').replace(/\s+/g, ' ').trim();
    const headings = [];
    document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach((h) => {
      const t = clean(h.textContent);
      if (t) headings.push({ level: h.tagName.toLowerCase(), text: t });
    });
    const paragraphs = [];
    document.querySelectorAll('p, li, blockquote').forEach((p) => {
      const t = clean(p.textContent);
      if (t && t.length > 1) paragraphs.push({ tag: p.tagName.toLowerCase(), text: t });
    });
    const links = [];
    document.querySelectorAll('a[href]').forEach((a) => {
      links.push({ href: a.getAttribute('href'), text: clean(a.textContent) || clean(a.getAttribute('aria-label')) });
    });
    const images = [];
    document.querySelectorAll('img').forEach((img) => {
      const src = img.getAttribute('src') || img.getAttribute('data-src');
      if (src && !src.startsWith('data:')) images.push({ src, alt: img.getAttribute('alt') || '' });
    });
    // background-image urls
    const bgImages = [];
    document.querySelectorAll('*').forEach((el) => {
      const bg = getComputedStyle(el).backgroundImage;
      if (bg && bg.startsWith('url(')) {
        const m = bg.match(/url\(["']?([^"')]+)["']?\)/);
        if (m && m[1] && !m[1].startsWith('data:')) bgImages.push(m[1]);
      }
    });
    const iframes = [];
    document.querySelectorAll('iframe').forEach((f) => {
      const src = f.getAttribute('src') || f.getAttribute('data-src');
      if (src) iframes.push(src);
    });
    // youtube/video embeds referenced in scripts or links
    return {
      title: document.title,
      metaDescription: (document.querySelector('meta[name="description"]') || {}).content || '',
      headings, paragraphs, links, images,
      bgImages: [...new Set(bgImages)],
      iframes: [...new Set(iframes)],
      bodyText: clean(document.body.innerText),
    };
  });
  return data;
}

function download(url, dest) {
  return new Promise((resolve) => {
    const mod = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    const req = mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 crawl' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close(); fs.unlinkSync(dest);
        return download(new URL(res.headers.location, url).href, dest).then(resolve);
      }
      if (res.statusCode !== 200) { file.close(); try { fs.unlinkSync(dest); } catch {} return resolve({ ok: false, status: res.statusCode }); }
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve({ ok: true, size: fs.statSync(dest).size })));
    });
    req.on('error', (e) => { try { fs.unlinkSync(dest); } catch {} resolve({ ok: false, error: e.message }); });
    req.setTimeout(30000, () => { req.destroy(); resolve({ ok: false, error: 'timeout' }); });
  });
}

function filenameFor(url, seen) {
  let base = '';
  try { base = path.basename(new URL(url).pathname); } catch {}
  base = decodeURIComponent(base).split('?')[0];
  if (!base || !/\.[a-z0-9]{2,5}$/i.test(base)) {
    base = 'img-' + (seen.size + 1) + '.jpg';
  }
  let name = base, i = 1;
  while (seen.has(name)) { const ext = path.extname(base); name = path.basename(base, ext) + '-' + (i++) + ext; }
  seen.add(name);
  return name;
}

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ userAgent: 'Mozilla/5.0 (Macintosh) FaithChurchCrawl/1.0', viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();

  const results = {};
  const toVisit = SEED_URLS.map((u) => abs(u));
  const visited = new Set();

  // First pass: seed pages
  for (const url of toVisit) {
    if (visited.has(url)) continue;
    visited.add(url);
    console.error('CRAWL', url);
    try { results[url] = await extractPage(page, url); }
    catch (e) { results[url] = { error: e.message }; }
  }

  // Discover one level deep from nav/footer links on seed pages
  const discovered = new Set();
  for (const url of Object.keys(results)) {
    (results[url].links || []).forEach((l) => {
      const a = abs(l.href);
      if (a && sameHost(a) && !a.includes('#') && !visited.has(a) && !/\.(pdf|jpg|png|zip)$/i.test(a)) {
        discovered.add(a);
      }
    });
  }
  for (const url of discovered) {
    if (visited.has(url)) continue;
    visited.add(url);
    console.error('CRAWL(deep)', url);
    try { results[url] = await extractPage(page, url); }
    catch (e) { results[url] = { error: e.message }; }
  }

  await browser.close();

  // Collect all image urls
  const seen = new Set();
  const manifest = [];
  const imageUrls = new Map(); // absUrl -> {alt, pages:[]}
  for (const [pageUrl, d] of Object.entries(results)) {
    (d.images || []).forEach((im) => {
      const a = abs(im.src);
      if (!a) return;
      if (!imageUrls.has(a)) imageUrls.set(a, { alt: im.alt, pages: [] });
      imageUrls.get(a).pages.push(pageUrl);
      if (im.alt && !imageUrls.get(a).alt) imageUrls.get(a).alt = im.alt;
    });
    (d.bgImages || []).forEach((src) => {
      const a = abs(src);
      if (!a) return;
      if (!imageUrls.has(a)) imageUrls.set(a, { alt: '(css background)', pages: [] });
      imageUrls.get(a).pages.push(pageUrl);
    });
  }

  fs.mkdirSync(OUT_IMAGES, { recursive: true });
  for (const [url, meta] of imageUrls) {
    // skip obvious logo (horizontal mark) — we already have it
    const lower = url.toLowerCase();
    const isLogo = /logo|fc_horizontal|faith-church-logo/.test(lower);
    const name = filenameFor(url, seen);
    const dest = path.join(OUT_IMAGES, name);
    let dl = { ok: false, skipped: false };
    if (isLogo) { dl = { ok: false, skipped: true }; }
    else { dl = await download(url, dest); }
    manifest.push({ filename: dl.ok ? name : null, sourceUrl: url, alt: meta.alt, pages: [...new Set(meta.pages)], skipped: dl.skipped || false, status: dl.ok ? 'ok' : (dl.skipped ? 'skipped-logo' : ('failed:' + (dl.status || dl.error || '?'))), size: dl.size || 0 });
    console.error('IMG', dl.ok ? 'ok' : (dl.skipped ? 'skip' : 'FAIL'), name, url);
  }

  fs.writeFileSync(path.join(OUT_DATA, 'crawl-data.json'), JSON.stringify(results, null, 2));
  fs.writeFileSync(path.join(OUT_DATA, 'image-manifest.json'), JSON.stringify(manifest, null, 2));

  // word count of crawled copy
  let words = 0;
  for (const d of Object.values(results)) {
    if (d.bodyText) words += d.bodyText.split(/\s+/).filter(Boolean).length;
  }
  console.error('DONE pages=' + Object.keys(results).length + ' images=' + manifest.filter(m => m.status === 'ok').length + ' words=' + words);
})();
