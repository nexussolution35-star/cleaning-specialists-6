# The Cleaning Specialists — Static Site

Conversion-optimized static site for **The Cleaning Specialists** (Professional Cleaning &
Washroom Hygiene Services). Built in one shot from two locked specs:

- **`structure.md`** (Website A / Cloud Nine) — governs WHAT sections exist, their ORDER, and
  each section's conversion job (forms, trust components, CTAs, H1–H6 hierarchy).
- **`design-system.md`** (Website B / The Specialists) — governs HOW everything looks plus the
  real content, brand voice, services, contact details and imagery.

**Conflict rule applied:** structure/order/conversion → A wins; design/styling/content → B wins.
No foreign visual style leaks in (verified: zero roofing/Cloud Nine content in output).

## Structure (42 pages, mirrors structure.md exactly)

```
index.html                  Home — full 13-section funnel
about.html                  About / founder / values
services.html               Services overview (image-card grid + service blocks)
gallery.html                Filterable project gallery
financing.html              Plans & Pricing (ways businesses engage + payment FAQ)
blog.html                   Featured article + grid
contact.html                Contact form + info/hours sidebar
service-areas.html          Branches + ready-to-help

services/                   7 service detail pages
  office-cleaning  house-cleaning  carpet-upholstery-cleaning  window-cleaning
  industrial-cleaning  disinfecting-services  washroom-hygiene
service-areas/              6 city pages (link to local SEO pages)
  centurion  pretoria  johannesburg  durban  cape-town  port-elizabeth
blog/                       3 long-form articles
{service}-{city}.html       18 SEO long-tail pages (3 families × 6 cities)
```

Every page ends with the global **`#cta-form`** band → footer. Every page: exactly one H1,
one `#cta-form`, header, footer, and a lead form.

## Design system (from design-system.md, values verbatim)

- **Fonts:** Poppins (headings), Open Sans (body), Montserrat (eyebrows/footer) — self-hosted woff2.
- **Brand:** navy `#191245`, blue `#005bbb`, green `#58a618` (hover `#377f00`), heading `#181946`,
  body `#444444`, footer `#171240`.
- **Radii:** sections 50px, cards 30px, counters 35px, CTA rows 25px, pills 72px.
- **Shadows:** default `0 2px 5px rgba(0,0,0,.1)`; panel `0px 2px 18px rgba(0,0,0,0.3)`.
- **Motion:** `all 0.4s ease-in-out`; buttons `background-color 300ms, border 300ms`.
- Contained rounded panels are rendered as panels (radius + side margins + shadow + overflow),
  never flattened to bars — hero, dark CTA panel, offers-on-circles row, 50/50 split card.

## Assets — 100% local

`assets/` holds everything: `css/` (styles.css + fonts.css), `fonts/` (84 woff2),
`js/site.js`, and `images/` (logos, hero banner, circles decoration, accreditation strip,
16 service photos, 18 gallery photos, process icons) — all pulled from Website B's real folders.

## Interactivity (vanilla JS — `assets/js/site.js`)

- Form submit → `alert()` placeholder. **Replace with your CRM / email handler.**
- "Get My Free Quote" / nav CTA → smooth-scroll to `#cta-form`.
- Services nav → hover dropdown; mobile hamburger → slide-in menu.
- FAQ accordion open/close; gallery category filter.

## Serve locally

```
python -m http.server 8000   # then open http://localhost:8000
```
