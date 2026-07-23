# Faith Church — Current Site Content Map

Crawled **2026-07-22** from faithchurchleslie.com using Playwright/Chromium (JS-rendered pages fully hydrated — sermon list, event feed, and CSS-background hero images all captured). Used as source-of-truth for the new site's content structure. Every string on the new site either (a) comes from this map or (b) is marked `proposed` for James's review.

**Platform note:** the current site is built on a hosted church-website builder (app-sources.com / web-repository.com CMS — the "Sharefaith/Clover"-style stack). This matters for two reasons: (1) images are served from a CMS bucket with signed/expiring URLs, so I downloaded local copies of everything; (2) the builder ships default pages we don't want (an empty **Store** with cart/checkout) that showed up in the deep crawl — flagged below and excluded from the new site.

---

## Site tree

**Real content pages (6):**
- `/` (home)
- `/about-faith`
- `/events`
- `/engagegroups` (nav label: "Discipleship Pathway")
- `/sermons` (nav label: "Sermons" → "Message Archive")
- `/contact`

**Nav labels (as they appear live):** About Faith · Upcoming Events · Discipleship Pathway · Sermons · Giving · Contact
- "Giving" is **not a page** — it links straight to the Church Center giving modal.

**Discovered-but-empty (platform defaults — DO NOT rebuild):**
- `/store`, `/store/cart`, `/store/checkout` — empty storefront shipped by the site builder. "Your cart is empty," no products, no shipping/payment methods configured. Pure platform chrome.

---

## Page: `/` (home)

**Title:** `Faith Church, Leslie, MI`
**Meta description:** (none set)

### Extracted headings
- H1: "Gather. Engage. Serve."
- H4: "Sundays at 10:00 AM"
- H3: "We exist to be a Jesus-centered family experiencing whole life transformation."
- H2: "GATHER"
- H2: "This Weekend at Faith"
- H5: "Watch our Most Recent Gathering"
- H3: "ENGAGE"
- H2: "SERVE"
- H4 (footer): "Faith Church exists to be a Jesus-centered family experiencing whole life transformation."

### Extracted body copy
> "You're invited to join us this Sunday and be a part of our Jesus-centered family!"

> "Join us as we spend July in the theological and spiritual DNA that made Faith Church what it is — the kind of church that steps out in faith, serves its community, and plants seeds it may not live to harvest. As we ready ourselves for our 50th Year Celebration on August 16th." *(time-sensitive / seasonal — this is a July 2026 promo tied to the 50th anniversary. Note the "plants seeds it may not live to harvest" line — it already echoes the Feed & Seed direction.)*

**ENGAGE block:**
> "At Faith Church we believe that the most effective discipleship takes place 'around tables' as opposed to sitting in rows. We believe this is best carried out in small groups, which we call 'Engage Groups.'"
> "Engaging God, Engaging Life, Engaging one-another"
> "Interested in joining an Engage Group to do life-on-life discipleship?"

**SERVE / Kingdom Builders block:**
> "When partnering with Kingdom Builders you support local, global, and future initiatives."
> "Kingdom Builders giving supports ministries like Jackson Interfaith Shelter, Youth Haven Ranch and the Leslie Outreach. Our Kingdom Builders fund supports our national and global workers/missionaries."
> "Make a difference by partnering with Kingdom Builders."

**Footer (repeats site-wide):**
> "Sundays at 10 AM · 4020 North Main Street, Leslie, MI 49251 · Email: Office@FaithChurchLeslie.com · Tel: (517) 589-9121 · © Copyright 2026, Faith Church"

### Links to
- About Faith, Upcoming Events, Discipleship Pathway, Sermons, Giving, Contact (nav)
- Giving → `https://faithchurchleslie.churchcenter.com/giving`
- Engage Groups → `https://faithchurchleslie.churchcenter.com/registrations/events/3390062`
- YouTube "most recent gathering" embed (see below)

### Embedded assets
- image (hero bg): `images/from-current-site/IMG_1195_Large-1591768.jpeg` — B&W congregation gathered in a prayer huddle inside the sanctuary. **Strong hero / "Gather" candidate.**
- image (bg): `images/from-current-site/IMG_4233_Large-1591768.jpeg` — B&W Pastor James preaching on stage ("A Father's Legacy" slide). **Strong About/hero candidate.**
- image (bg): `images/from-current-site/Orange_and_Black_Modern_Sermon_Presentation_2-3787300.jpg` — sermon series graphic.
- video: "Watch our Most Recent Gathering" — YouTube channel `UCQcteR3ANgrgtEUvNFLry8w`

### Events / dates visible
- "50th Year Celebration — August 16[, 2026]" (referenced in July promo copy; full event = "50th Celebration- Faith Forward, Sun Aug 16 at 9:00am" per /events)

---

## Page: `/about-faith`

**Title:** `About Faith`

### Extracted headings
- H3: "More about who we are"
- H3: "Our history"
- H4: "Core Values/What we believe"
- H3: "Mission, Vision, Strategy, & Values of FAITH CHURCH"
- H3: "Core Values"
- H4: "Our leadership"
- H3: "James and Crystal Courter"

### Extracted body copy

**Our history** (verbatim — usable as-is):
> "Our history as a church dates back to 1976 when the church was planted and founded as Faith Assembly of God. Our founders started in their homes and elected Samuel Steadman to be the first Lead Pastor. Pastor Sam would faithfully serve as the Lead Pastor for the next 44 years until the fall of 2020."
> "Soon after launching, Faith Assembly rented a storefront on Main St. in downtown Leslie. Just a few short years later the church was able to purchase the former Free Methodist building on Church St in downtown Leslie. This location would be home for Faith Assembly for over 20 years before acquiring the current property on 4020 N. Main St. next to Leslie High School."
> "Faith Church has a history because of the men and women of God who paved the way before us. While methods have changed, the vision that launched the church in 1976 remains the same- make disciples."
> "Fast forward to 2020 when Faith Assembly elected James Courter as the next (2nd) Lead Pastor in the church's history. In 2022 the name of the church was changed to Faith Church."
> "Today Faith Church exists to be a Jesus-centered family experiencing whole-life transformation."
> "This cannot be accomplished without people like you! We invite you to join us on this journey! If we can help you along your faith journey in any way please don't hesitate to reach out."
> "Together in Mission, — The Faith Leadership Team"

**Mission / Vision / Strategy** (verbatim):
> "FAITH Church exists to be a Jesus-centered family experiencing whole life transformation." *(mission)*
> "Our vision is to reach the unchurched and to disciple believers to become thriving followers of Jesus. We seek to be a church who equips and sends." *(vision)*
> "Our strategy is to Gather, Engage, and Serve." *(strategy)*
> "As we Gather, worship, pray and share the Gospel of Jesus Christ, we seek the glory of God."
> "For His glory, we Serve and care for one another, our community, our nation, and our world."
> "Part of this service is helping people Engage in their faith and community while growing in a personal relationship with Jesus through Engage Groups, our small group ministry."

**Core Values** (verbatim — 7 bullets):
> "• We believe that God's presence is essential to transformation in a community, and thus seeking His presence must always take precedence over our plans and programs."
> "• We are determined to preach Jesus Christ and Him crucified (1 Cor. 2:2) and to be a people who live a lifestyle of being crucified with Christ (Gal. 2:20)."
> "• We believe God's Word, the Bible, should be the guide for all ministry practice."
> "• We are committed to God shaping our own ideas, agendas, and culture in order that we might walk out His call and purpose."
> "• We believe that prayer is the center of everything, the sole way to nurture spiritual intimacy."
> "• We esteem honesty, integrity, and a commitment to holiness that begins with personal transformation."
> "• We reject apathetic and traditional thinking as unrepresentative of a dynamic God."

**AG affiliation** (verbatim):
> "Faith Church is part of the fellowship of churches known as the Assemblies of God. We are a Christian church that abides by Our Fundamental Truths." (links to AG Statement of Fundamental Truths)

**Leadership — James & Crystal Courter** (verbatim):
> "In September of 2020, Pastor James was elected as Faith Church's second Lead Pastor in the history of the church. Pastor James and his family have returned full-circle to where he grew up after being away from the state of Michigan for 17 years. Pastor James brings his unique experience serving ten years overseas as a missionary in Haiti combined with a passion to witness personal and community transformation."
> "Pastor Crystal serves as the Worship Pastor at Faith as well as the social media director. Crystal brings a passion for the presence of Jesus during our times of corporate gathering. God uses her creativity and willingness to wait, to lead the gathering church in times of refreshing in His presence."
> "Pastor James and Crystal have 10 children, 7 grandchildren, and a French Bulldog named Moose. Together, their love for Jesus and love for people, fosters a Kingdom culture at Faith Church."

### Links to
- AG beliefs → `https://ag.org/Beliefs/Statement-of-Fundamental-Truths`
- (Pastor James bio references Haiti — related social handles found in markup: `instagram.com/james.courter`, `facebook.com/arisehaiti`, `twitter.com/arisehaiti`. These are James's personal / Arise Haiti mission accounts, not Faith Church accounts. **Confirm with James before reusing.**)

### Embedded assets
- image: `images/from-current-site/308837470_...n-5552613.jpg` — the outdoor Faith Church road sign ("www.faithchurchleslie.com" / green F-logo) with the church building behind it. **Good location/contact image.**
- image (James & Crystal): best candidate is `images/from-current-site/IMG_0415-7515353.jpeg` — the two of them seated on stools, "Faith Family Sunday" slide behind. *(Note: this file has a color-fringe rendering artifact from the source — may want a cleaner portrait from James.)*

---

## Page: `/events`

**Title:** `Upcoming Events | Faith Church`

### Extracted headings
- H2: "Upcoming Events"
- H3: "Upcoming Events at Faith Church"

### Recurring / upcoming events visible (verbatim)
- **Prayer Thursday** — Every Thursday at 12:00pm
- **50 Days of Prayer** — Every Thursday at 7:00pm
- **Sunday Morning Gathering** — Every Sunday at 10:00am
- **Communion (Sunday Morning)** — The first Sunday of every month at 10:00am
- **Encounter Night** — The first Sunday of every month at 6:00pm
- **50th Celebration - Faith Forward** — Sun, Aug 16 at 9:00am

### Embedded assets
- event card background images: `images/from-current-site/img-13.jpg` … `img-18.jpg` (6 images, all Planning Center-hosted event graphics), plus `image-asset-6929259.jpeg`. *(PCO-signed URLs — local copies saved; originals expire.)*

> **Phase 5 relevance:** this page is the live PCO calendar feed. The new site's `/api/events.js` + `<EventsFeed />` will replace this. The six recurring events above are the fallback/mock-data seed.

---

## Page: `/engagegroups` (Discipleship Pathway)

**Title:** `Groups | Faith Church`

### Extracted headings
- H2: "The Discipleship Pathway"
- H2: "Engage Groups"
- H2: "The Journey at Faith (the Discipleship Pathway at Faith Church)"
- Pathway stops (H4): "Welcome to Faith" · "The Rooted Experience" · "Discover Partnership" · "Emotionally Healthy Discipleship" · "Engage Groups"
- Tagline: "Be/Become/Do"

### Extracted body copy (verbatim)

**Engage Groups:**
> "Engage Groups function as micro-churches within our larger church family. They are relational, pastoral, and missional. They create space for meaningful friendships and deeper growth in Jesus. Each group is unique—meeting weekly, twice a month, or as determined by the group."

**Core Elements of Engage Groups:**
> "• Food & Fellowship: Gathering in homes, sharing meals, and connecting relationally."
> "• Scripture: Reading, discussing, and discerning what God is speaking personally and communally."
> "• Conversation: Reflecting and asking, 'Where do we see God in this? How might this shape our daily lives?'"
> "• Prayer & Ministry: Praying together, sharing needs, and at times engaging in listening or prophetic prayer."
> "• Mission & Service: Many groups incorporate serving neighbors or caring for those in need as part of their rhythm."

**Core Engage Classes:**
> "Engage Classes focus on specific teaching and the core discipleship values of Faith Church. They provide the foundation for spiritual and emotional health within our community."

**The Rooted Experience (10 weeks):**
> "• Purpose: Helps people connect with God, the church, and their purpose through key rhythms of faith."
> "• Focus: Daily devotion, prayer, repentance, generosity, serving, and sharing your story."
> "• Format: Groups of 10–15 gather weekly for discussion, journaling, prayer, and service experiences."
> "• Best for: A first step to grow in faith and connect with others."

**Emotionally Healthy Discipleship (8 weeks):**
> "• Purpose: Integrates emotional health and spiritual depth, moving beyond surface-level practices."
> "• Focus: Addressing emotionally unhealthy spirituality, discovering your authentic self in Christ, integrating grief, practicing Sabbath, and healing family patterns."
> "• Format: Two 8-week courses (Emotionally Healthy Spirituality and Emotionally Healthy Relationships) with readings, video teaching, and small-group discussion."
> "• Best For: Those who have completed the Rooted Experience."

> **⚠ Content gap:** Two of the five pathway stops — **"Welcome to Faith"** and **"Discover Partnership"** — appear as labels only, with **no description text** on the current site. These will need `proposed:` copy in Phase 4 for James to approve.

### Links to
- Engage Groups reg → `https://faithchurchleslie.churchcenter.com/registrations/events/3390062`
- Engage Classes reg → `https://faithchurchleslie.churchcenter.com/registrations/events/3367911`

### Embedded assets
- image (bg): `images/from-current-site/black-forest-...-1087055.jpg` — coniferous evergreen forest. *(The current site already uses evergreen/forest imagery — aligns with the Feed & Seed rural-vernacular direction.)*
- image (bg): `images/from-current-site/Grace-Church-BG-SS-1-4647861.jpg` — stock worship-service background.
- graphic: `images/from-current-site/engage-groups-graphic.png` — Faith Church "Engage Groups" lockup.

---

## Page: `/sermons` (Message Archive)

**Title:** `Message Archive | Faith Church`
**H2:** "Message Archive" · subhead "Watch past services and more!"

### Sermon / message list visible (most recent first, verbatim titles + dates)
| Length | Title | Date | Notes |
|---|---|---|---|
| 01:40:27 | Roots- Week 2, Faith Church Leslie | 7/20/2026 | Sunday gathering |
| 01:40:27 | Roots- Week 2 | 7/19/2026 | Pastor James Courter |
| 01:01:21 | Midweek Noon Prayer — Thursday Prayer | 7/17/2026 | #50 Days of Prayer |
| 00:50 | "Don't forget the goodness of God in every season." | 7/13/2026 | short/clip |
| 01:22:16 | Sunday Service - Roots | 7/13/2026 | Sunday Morning |
| 01:22:21 | Sunday Service - Roots | 7/12/2026 | Sunday Morning |
| 59:52 | Thursday Prayer- 50 Days of Prayer | 7/10/2026 | Noon session |
| 59:48 | Thursday Prayer- 50 Days of Prayer | 7/10/2026 | Noon session |
| — | Thursday Prayer- 50 Days of Prayer | 7/9/2026 | Noon session |
| 01:41:26 | Sunday Morning Service July 5 2026 — "Real Freedom- Galatians 5" | 7/7/2026 | Pastor James Courter |
| 58:10 | Thursday Prayer- 50 Days of Prayer | 7/3/2026 | Noon session |

*(Current series: **"Roots"** — again on-theme with Feed & Seed. Prior: "Real Freedom / Galatians 5.")*

### Links to
- YouTube channel → `https://www.youtube.com/channel/UCQcteR3ANgrgtEUvNFLry8w`
- Individual video watch URLs captured (11 video IDs) — see Reusable URLs section.

### Embedded assets
- YouTube thumbnails saved: `hqdefault.jpg` … `hqdefault-10.jpg`, `hqdefault_live.jpg` (12 files).
- image (bg): `images/from-current-site/IMG_3634_Large-1591768.jpeg` — B&W congregation worship, hands raised. **Strong worship/gather image.**

---

## Page: `/contact`

**Title:** `Contact | Faith Church`
**H2:** "Contact Us" / "Get in Touch"

### Extracted body copy (verbatim — all usable)
**Service Times:**
> "Sunday Morning Gathering - Sundays at 10:00 am. Coffee, Refreshments and Fellowship 9:45 am"

**Office Hours:**
> "Tues - Thurs: 9:00 AM – 3:00 pm (by appointment only). Sunday: 9:30 am - 12:30 pm"

**Contact Info:**
> "4020 North Main Street, Leslie, MI 49251 · Email: Office@FaithChurchLeslie.com · Telephone: (517) 589-9121"

**Form:**
> "Have question? Need prayer? Just want to say hi?" — with a "Send" button (the current form is a CMS form protected by Google reCAPTCHA).

### Embedded assets
- Google Maps embed: place query `4020 North Main Street, Leslie, MI 49251` (roadmap, zoom 8).
- image (bg): `images/from-current-site/349087265_...n-2288164.jpg` — community/congregation photo.

---

## Image manifest

47 image files saved to `public/images/from-current-site/`. Categorized below. The Faith Church horizontal logo (white) was intentionally **not** re-saved — we already have `outputs/assets/FC_Horizontal_Black.png` + `White.png`.

### Content photos (reuse candidates)
| Filename | Source page | Description | Suggested new use |
|---|---|---|---|
| `IMG_1195_Large-1591768.jpeg` | home | B&W congregation prayer huddle | **Home hero** ("Gather") |
| `IMG_4233_Large-1591768.jpeg` | home | B&W Pastor James preaching, "A Father's Legacy" | About hero / preaching |
| `IMG_3634_Large-1591768.jpeg` | sermons | B&W worship, hands raised | Worship / Gather section |
| `IMG_0415-7515353.jpeg` | (leadership) | James & Crystal on stools, "Faith Family Sunday" *(has color-fringe artifact)* | About → leadership (or request clean portrait) |
| `IMG_1593-1064945.jpeg` | (groups) | B&W group selfie at a coffee shop | Engage Groups / community |
| `308837470_...n-5552613.jpg` | about | Outdoor Faith Church road sign + building | Contact / Visit / location |
| `349087265_...n-2288164.jpg` | contact | Community/congregation photo | Contact / community |
| `black-forest-...-1087055.jpg` | engagegroups | Evergreen forest | Texture/background (on-brand) |
| `Untitled_1920x1080-3575893.png` | (brand) | Faith Church logo over pine-forest photo | Reference — old logo lockup over forest |
| `engage-groups-graphic.png` | engagegroups | "Engage Groups" brand lockup | Reference |
| `kingdom-builders-2025.png` | home | "Kingdom Builders 2025" graphic | Reference — Give/Serve |
| `Orange_and_Black_..._2-3787300.jpg` | home | Sermon series graphic | Reference |
| `image-asset-6929259.jpeg` | events | Event graphic | Reference |
| `img-13.jpg` … `img-18.jpg` | events | 6 PCO event card graphics | Will be replaced by live PCO feed (Phase 5) |
| `hqdefault*.jpg` (12) | sermons | YouTube sermon thumbnails | Will be replaced by live YouTube/PCO data |
| `Grace-Church-BG-SS-1-4647861.jpg` | engagegroups | Stock worship bg | Likely drop (generic stock) |

### Platform chrome (downloaded for completeness — DO NOT reuse)
`feed-close.png`, `border_3.gif`, `spacer.gif`, `bubbleSprite_3.png`, `bubbleDropR_3.png`, `bubbleDropB_3.png`, `cvc.png`, `stripe-safe.png`, `klarna-small.svg`, `iDeal.png`, `twispay.svg`, `payfast.png`, `mercadopago.png`, `powered-by-mollie-en.png` — these are the site-builder's Google-translate widget bubbles and the empty Store's payment-provider logos.

### Failed / broken
- `https://content.app-sources.com/uploads/` — a malformed bare-directory `<img src>` in the CMS markup, returned **403**. Not real content; a stray broken reference on the live site.

---

## Reusable external URLs (do not change)

| Purpose | URL |
|---|---|
| Giving | `https://faithchurchleslie.churchcenter.com/giving` |
| Engage Groups reg | `https://faithchurchleslie.churchcenter.com/registrations/events/3390062` |
| Engage Classes reg | `https://faithchurchleslie.churchcenter.com/registrations/events/3367911` |
| AG beliefs | `https://ag.org/Beliefs/Statement-of-Fundamental-Truths` |
| Facebook | `https://www.facebook.com/FaithChurchLeslie` |
| YouTube channel | `https://www.youtube.com/channel/UCQcteR3ANgrgtEUvNFLry8w` |
| Google Maps | place query: `4020 North Main Street, Leslie, MI 49251` |

**Pastor James / Arise Haiti personal handles (confirm before reuse — NOT Faith Church accounts):** `instagram.com/james.courter`, `facebook.com/arisehaiti`, `twitter.com/arisehaiti`.

**Sermon video IDs** (YouTube, for optional most-recent embed): `hGfgOox07ZM`, `FN4AtPLlvDM`, `R8nKVMtCTl4`, `-OodKOcY2vM`, `__G9KOLSZFs`, `GxTp49NWY0M`, `yGMgG5T0DN8`, `ihmSHz6wmBo`, `FwNYXCmv8dg`, `8Njc_N2X1Vg` (live), `9sMkvuNCMtc`, `Vwfz497t7E4`.

---

## What's NOT on the current site (proposed additions for Phase 4)

The build brief calls for a fuller site than what exists today. Gaps found in the crawl, and my read on each:

1. **Plan-a-Visit page** — none exists. The current site has service times scattered across home/contact but no "what to expect on Sunday" walkthrough (parking, kids, arrive-at-9:45, service length, staying after). Brief Phase 4 wants a full `/visit`. → all `proposed`.
2. **Dedicated Serve page** — "Serve" and "Kingdom Builders" live only as a home-page block. No standalone page detailing service opportunities or community outreach (Fall Festival, homecoming dinners, gifts to officers/teachers are mentioned in the brief but **were not found on the live site** — those need to come from James). → mostly `proposed`.
3. **Kids / youth ministry** — **nothing on the current site.** If Faith Church has kids programming, it's undocumented online. Flag for James: do we add a kids/family section, or omit?
4. **Discipleship pathway — 2 empty stops** — "Welcome to Faith" and "Discover Partnership" have no copy anywhere. Need `proposed` descriptions.
5. **Give page** — "Giving" is only a Church Center link today; no page explaining Kingdom Builders vs. general giving, year-end statements, or transparency. Brief wants a real `/give`. → `proposed`.
6. **Sermon archive with structure** — current archive is a raw YouTube dump. Brief's `/sermons` can present it more cleanly (series, dates). Data exists; presentation is new.
7. **About depth** — history/mission/values/leadership are all solid and verbatim-usable; the main additions would be section framing and the Feed & Seed voice layer. Low proposed-content risk here.

---

## Crawl summary (for the checkpoint report)

- **Pages crawled:** 9 (6 real + 3 empty platform-default store pages)
- **Total crawled copy:** ~1,926 words (substance concentrated in `/about-faith` ~740, `/engagegroups` ~355, `/` ~250)
- **Images downloaded:** 47 (≈16 real content photos/graphics, ~18 sermon/event thumbnails that live data will replace, ~14 platform-chrome junk)
- **Pages that failed to render:** none — all 6 real pages hydrated fully, including JS-loaded sermon and event feeds
- **Broken content on live site:** 1 malformed `<img>` (`app-sources.com/uploads/`, 403)
- **Surprises worth flagging to Roy:**
  - The current site **already leans into evergreen/forest imagery** and language about *"planting seeds it may not live to harvest"* and a *"Roots"* series — the Feed & Seed direction isn't a departure, it's an amplification of where they already are.
  - **No kids/youth content anywhere** — decision needed.
  - The current **"Store" is a live but empty** platform default — worth James knowing it's publicly reachable today.
  - Pastor James's bio ties to **10 years as a missionary in Haiti** (Arise Haiti) — a strong, underused story element.
  - Leadership photo of James & Crystal has a **color-artifact glitch** in the source file — may want a clean replacement.
