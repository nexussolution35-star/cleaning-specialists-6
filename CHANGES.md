# CHANGES.md — Research findings + technical SEO pass

**Site:** https://www.cleaningspecialist.co.za · **Pages:** 49 · **Pass date:** 2026-07-07
Design, layout and branding untouched — all changes are content/meta/structured-data level.

## What was done this pass

### (A) Research findings organised onto pages
1. **Keywords** — already applied in the prior approved pass (titles/H1s/body per the optimisation map). *This pass made no further keyword/title changes* except one: the noindex PPC page got a unique meta description (it previously duplicated the Highveld page's). Long-tail improvement was done via the new city content (e.g. "guest house cleaning" / "changeover cleans" in Hazyview, "contractor facilities" in Secunda, "estate cleaning" in White River) rather than by touching any more titles — per your "don't over-optimise" instruction.
2. **Per-city local content** — all 7 city pages now carry genuinely unique local blocks (3 unique prose sections each: local intro naming real suburbs/landmarks, a locally-relevant capability section, a third local angle) **plus 3 unique local FAQs per city** (rendered with the existing FAQ design + emitted as FAQPage schema). Landmarks used are widely-known local facts only (e.g. Perry's Bridge & Kruger gates for Hazyview, Casterbridge for White River, Lone Creek Falls / forestry for Sabie, Sasol/contractor economy for Secunda, Riverside/CBD for Nelspruit, mining belt & malls for Middelburg/Witbank). Max cross-city prose similarity measured: **2%** (6-word shingles).
3. **Cities** — all kept, none dropped, none added (per instruction).
4. **NAP / hours / social** — already consistent in header/footer/contact (unchanged). Social links verified live: Facebook **HTTP 200**, Instagram **HTTP 200**.
5. **Trust signals** — already surfaced (FASA/SAPCA/NCCA in hero, About card, footer). Unchanged.

### (B) Technical SEO
1. **Canonicals** — self-referencing absolute URLs on every page (verified 49/49).
2. **Titles** — 0 duplicates sitewide.
3. **Descriptions** — 0 duplicates sitewide (fixed the one PPC duplicate).
4. **Headings** — exactly one H1 per page (verified 49/49).
5. **Open Graph + Twitter** — added per-page `og:title/og:description/og:url` (self-referencing), `og:image` (real hero photo), `og:site_name/locale/type`, and `twitter:card=summary_large_image` + title/description/image. New this pass, sitewide.
6. **Schema (JSON-LD)** — new this pass:
   - `LocalBusiness` on `/` and `/contact/` — real name, phones (+27 both branches), emails, opening hours, sameAs (FB/IG), areaServed towns.
   - `Service` on every service + service×area page (provider + areaServed).
   - `FAQPage` **only** where FAQs are visibly on-page (homepage + the 7 city pages).
   - `BreadcrumbList` on all deep pages (Home → Page; Home → Blog → Article).
   - **No AggregateRating** anywhere (see flags).
   All JSON-LD parses as valid JSON (verified).
7. **Alt text** — every `<img>` sitewide has an alt attribute (0 missing); decorative marquee marks use `alt=""`.
8. **Internal links** — 0 broken internal links or asset references (verified across all 49 pages).
9. **sitemap.xml** — at root; 48 absolute URLs (all indexable pages; noindex PPC excluded) with `lastmod` + priority.
10. **robots.txt** — at root; allows all, references the sitemap, no stray noindex. (The PPC page is excluded via its meta `noindex, follow` — deliberately *not* blocked in robots.txt so crawlers can see the noindex.)

## Verification results
| Check | Result |
|---|---|
| Duplicate titles | **0** |
| Duplicate descriptions | **0** |
| Self-referencing canonicals | **49/49 (100%)** |
| One H1 per page | **49/49** |
| OG + Twitter tags present & self-referencing | **49/49** |
| JSON-LD validity | **all blocks parse** |
| Images missing alt | **0** |
| Broken internal links | **0** |
| sitemap.xml | present, 48 absolute URLs, PPC excluded |
| robots.txt | present, allows all, references sitemap |
| City-page uniqueness | max 2% prose overlap between any two city pages |
| Social links | facebook.com/cleaningspecnels → 200 · instagram.com/cleaningspecialistsnelspruit → 200 |

## Could NOT do / flagged (needs your input or a visible change)
- **Street address & geo coordinates** — no physical street address exists anywhere in the client source material, so `LocalBusiness` schema deliberately omits `address`/`geo` rather than invent one. **Send the branch addresses and I'll add them** (this also matters for Google Business Profile consistency).
- **AggregateRating** — intentionally not added. The displayed reviews are real Google reviews, but Google's guidelines disallow LocalBusiness star markup sourced from third-party (Google) reviews; adding it risks a manual action. If you later collect first-party reviews on-site, we can add it legitimately.
- **Title lengths** — a few titles from the earlier approved keyword map run past 60 chars (e.g. the Carpet page, 82). Left as approved rather than re-editing; say the word if you want them trimmed to ~60.
- **Visible breadcrumbs** — BreadcrumbList schema is emitted, but no visible breadcrumb trail was added (that would change the design). Optional if you ever want it.
- **PPC canonical** — the noindex PPC page keeps a self-canonical + `noindex, follow` (standard for paid landing pages).
- **`docs/` folder restored** — the two reference PDFs were accidentally deleted by the site generator's cleanup on a previous rebuild; they're restored and the generator now protects `docs/`, `sitemap.xml`, `robots.txt` and `CHANGES.md`.
- **Staging robots override** — the surge.sh *preview* domain force-serves `Disallow: /` (surge's own staging protection; it ignores uploaded robots.txt on `.surge.sh` subdomains). That's desirable pre-launch: the preview can't get indexed. The repo's robots.txt (allow-all + sitemap) is what will be served once the site is hosted on **cleaningspecialist.co.za** — nothing to remove at go-live, but do verify `https://www.cleaningspecialist.co.za/robots.txt` shows the allow-all file after launch.

## Per-page table
| URL | Primary keyword | Title (chars) | Desc chars | Canonical self-ref | Schema | Local content |
|---|---|---|---|---|---|---|
| `/` | cleaning services (+ Nelspruit & Highveld) | The Cleaning Specialists \| Cleaning & Hygiene Services in Nelspruit & Highveld (78) | 161 | yes | FAQPage+LocalBusiness | n/a |
| `/about/` | - | About Us - The Cleaning Specialists (35) | 128 | yes | BreadcrumbList | n/a |
| `/blog/` | - | Blog - The Cleaning Specialists (31) | 107 | yes | BreadcrumbList | n/a |
| `/blog/dirty-solar-panels-cost-you-output/` | - | Dirty Solar Panels Are Costing You Output - The Cleaning Specialists (68) | 114 | yes | BreadcrumbList | n/a |
| `/blog/haccp-cleaning-compliance-explained/` | - | HACCP Cleaning Compliance, Explained - The Cleaning Specialists (63) | 125 | yes | BreadcrumbList | n/a |
| `/blog/what-dirty-carpets-and-mattresses-do-to-your-health/` | - | What Dirty Carpets and Mattresses Do to Your Health - The Cleaning Specialists (78) | 133 | yes | BreadcrumbList | n/a |
| `/blog/why-a-clean-restroom-protects-your-business/` | - | Why a Clean Restroom Protects Your Business - The Cleaning Specialists (70) | 111 | yes | BreadcrumbList | n/a |
| `/carpet-upholstery-cleaning/` | carpet upholstery cleaning | Carpet, Upholstery & Fabric Cleaning in Nelspruit & Highveld \| The Cleaning Specialists (87) | 105 | yes | BreadcrumbList+Service | n/a |
| `/ceiling-high-level-cleaning/` | - | Ceiling & High-Level Cleaning - The Cleaning Specialists (56) | 99 | yes | BreadcrumbList+Service | n/a |
| `/cleaning/` | cleaning services | Cleaning Services in Nelspruit & Highveld \| The Cleaning Specialists (68) | 130 | yes | BreadcrumbList+Service | n/a |
| `/cleaning-services-hazyview/` | - | Cleaning Services Hazyview - The Cleaning Specialists (53) | 145 | yes | BreadcrumbList+FAQPage+Service | unique local content + 3 FAQs |
| `/cleaning-services-highveld/` | - | Cleaning Services Highveld - The Cleaning Specialists (53) | 93 | yes | BreadcrumbList+FAQPage+Service | unique local content + 3 FAQs |
| `/cleaning-services-highveld-ppc/` | - | Cleaning Services Highveld PPC - The Cleaning Specialists (57) | 112 | yes | noindex | n/a |
| `/cleaning-services-mbombela-emalahleni/` | - | Cleaning Services Mbombela Emalahleni - The Cleaning Specialists (64) | 76 | yes | BreadcrumbList+FAQPage+Service | unique local content + 3 FAQs |
| `/cleaning-services-nelspruit/` | cleaning services nelspruit | Cleaning Services Nelspruit - The Cleaning Specialists (54) | 83 | yes | BreadcrumbList+FAQPage+Service | unique local content + 3 FAQs |
| `/cleaning-services-sabie/` | - | Cleaning Services Sabie - The Cleaning Specialists (50) | 149 | yes | BreadcrumbList+FAQPage+Service | unique local content + 3 FAQs |
| `/cleaning-services-secunda/` | - | Cleaning Services Secunda - The Cleaning Specialists (52) | 147 | yes | BreadcrumbList+FAQPage+Service | unique local content + 3 FAQs |
| `/cleaning-services-white-river/` | - | Cleaning Services White River - The Cleaning Specialists (56) | 145 | yes | BreadcrumbList+FAQPage+Service | unique local content + 3 FAQs |
| `/commercial-cleaning/` | commercial cleaning services | Commercial Cleaning Services in Nelspruit & Highveld \| The Cleaning Specialists (79) | 124 | yes | BreadcrumbList+Service | n/a |
| `/contact/` | - | Contact - The Cleaning Specialists (34) | 134 | yes | BreadcrumbList+LocalBusiness | n/a |
| `/curtain-fabric-cleaning/` | - | Curtain & Fabric Cleaning - The Cleaning Specialists (52) | 74 | yes | BreadcrumbList+Service | n/a |
| `/deep-cleaning/` | deep cleaning | Deep Cleaning Services in Nelspruit & Highveld \| The Cleaning Specialists (73) | 130 | yes | BreadcrumbList+Service | n/a |
| `/deep-cleaning-mbombela-emalahleni/` | - | Deep Cleaning Mbombela Emalahleni - The Cleaning Specialists (60) | 93 | yes | BreadcrumbList+Service | n/a |
| `/disinfecting-sanitising/` | - | Disinfecting & Sanitisation - The Cleaning Specialists (54) | 95 | yes | BreadcrumbList+Service | n/a |
| `/domestic-cleaning/` | domestic cleaning services | Domestic Cleaning Services in Nelspruit & Highveld \| The Cleaning Specialists (77) | 125 | yes | BreadcrumbList+Service | n/a |
| `/fabric-material-cleaning-mbombela-emalahleni/` | - | Fabric & Material Cleaning Mbombela Emalahleni - The Cleaning Specialists (73) | 94 | yes | BreadcrumbList+Service | n/a |
| `/gallery/` | - | Gallery - The Cleaning Specialists (34) | 103 | yes | BreadcrumbList | n/a |
| `/gutter-cleaning/` | gutter cleaning | Gutter Cleaning Services in Nelspruit & Highveld \| The Cleaning Specialists (75) | 94 | yes | BreadcrumbList+Service | n/a |
| `/gutter-cleaning-mbombela-emalahleni/` | - | Gutter Cleaning Mbombela Emalahleni - The Cleaning Specialists (62) | 77 | yes | BreadcrumbList+Service | n/a |
| `/hygiene/` | - | Hygiene - The Cleaning Specialists (34) | 131 | yes | BreadcrumbList+Service | n/a |
| `/hygiene-services-highveld/` | - | Hygiene Services Highveld - The Cleaning Specialists (52) | 139 | yes | BreadcrumbList+Service | n/a |
| `/hygiene-services-nelspruit/` | - | Hygiene Services Nelspruit - The Cleaning Specialists (53) | 148 | yes | BreadcrumbList+Service | n/a |
| `/kitchen-canopy-grease-trap-cleaning/` | grease trap cleaning | Kitchen Canopy & Grease Trap Cleaning in Nelspruit & Highveld \| The Cleaning Specialists (88) | 109 | yes | BreadcrumbList+Service | n/a |
| `/mattress-cleaning/` | mattress cleaning | Mattress Cleaning Services in Nelspruit & Highveld \| The Cleaning Specialists (77) | 82 | yes | BreadcrumbList+Service | n/a |
| `/pre-occupational-cleaning-highveld/` | - | Pre-occupational Cleaning Highveld - The Cleaning Specialists (61) | 118 | yes | BreadcrumbList+Service | n/a |
| `/pre-occupational-cleaning-mbombela-emalahleni/` | - | Pre-occupational Cleaning Mbombela Emalahleni - The Cleaning Specialists (72) | 115 | yes | BreadcrumbList+Service | n/a |
| `/pre-occupational-cleaning-nelspruit/` | - | Pre-occupational Cleaning Nelspruit - The Cleaning Specialists (62) | 90 | yes | BreadcrumbList+Service | n/a |
| `/pre-post-occupational-cleaning/` | - | Pre & Post-Occupational Cleaning - The Cleaning Specialists (59) | 88 | yes | BreadcrumbList+Service | n/a |
| `/service-areas/` | - | Service Areas - The Cleaning Specialists (40) | 136 | yes | BreadcrumbList | n/a |
| `/sitemap/` | - | Sitemap - The Cleaning Specialists (34) | 53 | yes | BreadcrumbList | n/a |
| `/solar-panel-cleaning/` | solar panel cleaning | Solar Panel Cleaning Services in Nelspruit & Highveld \| The Cleaning Specialists (80) | 101 | yes | BreadcrumbList+Service | n/a |
| `/solar-panel-cleaning-mbombela-emalahleni/` | - | Solar Panel Cleaning Mbombela Emalahleni - The Cleaning Specialists (67) | 70 | yes | BreadcrumbList+Service | n/a |
| `/success/` | - | Success - The Cleaning Specialists (34) | 42 | yes | BreadcrumbList | n/a |
| `/success-highveld/` | - | Success Highveld - The Cleaning Specialists (43) | 51 | yes | BreadcrumbList | n/a |
| `/success-nelspruit/` | - | Success Nelspruit - The Cleaning Specialists (44) | 52 | yes | BreadcrumbList | n/a |
| `/surface-cleaning-mbombela-emalahleni/` | - | Surface Cleaning Mbombela Emalahleni - The Cleaning Specialists (63) | 90 | yes | BreadcrumbList+Service | n/a |
| `/surface-general-cleaning/` | general cleaning services | General & Surface Cleaning Services in Nelspruit & Highveld \| The Cleaning Specialists (86) | 88 | yes | BreadcrumbList+Service | n/a |
| `/window-cleaning/` | window cleaning | Window Cleaning Services in Nelspruit & Highveld \| The Cleaning Specialists (75) | 103 | yes | BreadcrumbList+Service | n/a |
| `/window-solar-cleaning/` | window and solar cleaning (overview only) | Window & Solar Cleaning in Nelspruit & Highveld \| The Cleaning Specialists (74) | 109 | yes | BreadcrumbList+Service | n/a |

