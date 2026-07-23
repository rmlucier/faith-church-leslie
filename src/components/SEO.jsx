import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://faithchurchleslie.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/**
 * Per-page SEO metadata: <title>, description, canonical, and Open Graph /
 * Twitter Card tags. Google executes the SPA JS and reads these per route;
 * index.html carries static fallbacks for older scrapers.
 */
export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  noindex = false,
}) {
  const canonical = `${SITE_URL}${path}`;
  // Home gets a clean title; inner pages append the church name.
  const fullTitle = path === '/' ? title : `${title} | Faith Church`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Faith Church" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
