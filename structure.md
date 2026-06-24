# Cloud Nine Roofing & Renovation — Conversion Architecture (`structure.md`)
Master conversion template extracted from **Website A / `cn9export.zip`**. This document captures **WHAT sections exist, in WHAT order, and WHAT conversion job each performs** — architecture only. No styling, no design, no visual treatment.

**Business:** Roofing / siding / concrete contractor, Hamilton County, Indiana. Owner: **Matt Leugers**. Phone **317‑900‑4262**, email **matt@callcloudnine.com**, address **605 Sheridan Road, Unit 6106, Noblesville, IN 46062**.
**Site:** 42 static HTML pages, hand-built (compiled Tailwind). Vanilla JS interactivity.

**Conversion thesis (how the whole site converts):** every page is a funnel to one action — **book a free, photo-documented inspection** — captured by the lead form. The *same* primary CTA ("**Get My Free Estimate**") repeats throughout and smooth-scrolls to the page's `#cta-form`. Trust is front-loaded (badges in hero, reviews immediately after) and risk is removed at every step ("free," "no pressure," "no deposit," "walk away at any step").

---

## 0. GLOBAL ELEMENTS (every page)

### Sticky Header / Nav — *job: persistent access to the CTA + wayfinding*
- Sticky top nav, present on all 42 pages.
- Left: logo → `index.html`.
- Center links: **Home, About, Services ▾, Gallery, Service Areas, Financing, Blog, Contact**.
- **Services ▾** dropdown (8 items): All Services + the 7 service detail pages.
- Right / persistent CTAs: **"Get My Free Estimate"** button (scrolls to `#cta-form`) + **"Call Now"** (`tel:+13179004262`).
- Mobile: hamburger → slide-in side panel with same links.

### Footer — *job: SEO interlinking + final contact capture path*
4 columns:
- **SERVICES** → 7 service pages (Residential Roofing, Commercial Roofing, Siding, Concrete, Gutters, Storm Damage Restoration, Exterior Renovations).
- **SERVICE AREAS** → 6 city pages (Noblesville, Carmel, Westfield, Fishers, Cicero, Sheridan).
- **COMPANY** → Home, About, All Services, Gallery, Service Areas, Financing, Blog, Contact.
- **GET IN TOUCH** → phone (`tel:`), email (`mailto:`), address. Tagline: "NEED ROOFING HELP? CALL TODAY."
- Credit link: "King Contractor" (build agency).

### Repeating CTA band `#cta-form` — *job: terminal conversion capture, on every page*
The last content section on **every** page is the `#cta-form` block (see Forms §F2). H2: **"GET YOUR FREE INSPECTION TODAY"**. This is the funnel floor for all 42 pages.

---

## 1. HOMEPAGE (`index.html`) — section sequence, top → bottom

| # | Section (`id`) | Conversion job | Heading |
|---|---|---|---|
| 1 | **`#hero`** | Capture the lead immediately. Value prop + full lead form above the fold + trust badge strip + phone CTA. | **H1:** *Hamilton County's Roofing, Siding and Concrete Contractor* |
| 2 | **`#reviews`** | Social proof. Reinforce the headline trust claim with real Google reviews. | **H2:** *5.0★ ON GOOGLE* (eyebrow: WHAT NEIGHBORS SAY) |
| 3 | **`#about`** | Founder credibility / "owner-led, local, not a storm chaser." Humanize. | **H2:** *OWNER‑LED. LOCAL. HAMILTON COUNTY.* (eyebrow: MEET THE FOUNDER) |
| 4 | **`#services`** | Show breadth — "one accountable team" for all exteriors. Route to service pages. | **H2:** *ROOFING + EXTERIORS, ONE ACCOUNTABLE TEAM* (eyebrow: WHAT WE DO) |
| 5 | **`#why`** | Differentiation / objection-handling. 6 reasons to pick them. | **H2:** *BUILT FOR YOUR NEIGHBORHOOD* (eyebrow: WHY HOMEOWNERS PICK US) |
| 6 | **`#gallery`** | Proof of work. Project photo grid. | **H2:** *ROOFS WE HAVE BUILT* |
| 7 | **`#process`** | Reduce friction / set expectations. 4-step "no surprises" process + inline CTA. | **H2:** *FOUR STEPS, NO SURPRISES* (eyebrow: HOW IT WORKS) |
| 8 | **`#financing`** | Remove cost objection. Free-inspection + military/veteran offer teasers. | **H2:** *FREE INSPECTIONS, ALWAYS* (eyebrow: OFFERS) |
| 9 | **`#blog`** | Authority / SEO. 3 featured articles. | **H2:** *ROOFING TIPS FOR HAMILTON COUNTY HOMEOWNERS* |
| 10 | **`#faq`** | Objection-handling at point of decision. 5 Q&A. | **H2:** *FREQUENTLY ASKED* (eyebrow: QUESTIONS) |
| 11 | **`#service-area`** | Local relevance / "we serve your town." | **H2:** *SERVING HAMILTON COUNTY* |
| 12 | **`#cta-form`** | Final conversion capture (global band). | **H2:** *GET YOUR FREE INSPECTION TODAY* |
| 13 | **`<footer>`** | Interlinking + contact. | **H4:** SERVICES / SERVICE AREAS / COMPANY / GET IN TOUCH |

### Section content detail (conversion-relevant)
- **#hero:** H1 value prop + sub-claims "Free Photo‑Documented Inspections", "We call you back in 5 minutes!"; lead form (F1); CTAs "Get My Free Estimate" + "Call Now"; **trust badge strip** (5 badges, see §T1).
- **#reviews:** "Trusted by Hamilton County families and businesses." 3 named 5.0 reviews — **The Jacksons, Jim Dine, David Shirley** (each "Google Review"); links **See All Google Reviews** / **See All Facebook Reviews**.
- **#about:** Founder **MATT LEUGERS / Owner**; "YEARS OF EXPERIENCE" stat; OUR VISION / OUR MISSION; value line "Honest inspections. Documented work. Local crews. Warranties that mean something."; CTA **LEARN MORE ABOUT US →** (`about.html`).
- **#services:** 7 services listed → Residential Roofing, Commercial Roofing, Siding, Concrete, Gutters, Storm Damage Restoration, Exterior Renovations.
- **#why:** 6 differentiators — *Local Crews, Never Storm Chasers · Insurance‑Claim Experts (We File, We Rebuild) · Free Photo‑Documented Inspections · Single‑Source: Roof + Gutter + Siding + Paint · Licensed and Insured in Indiana · Owner Walks Every Roof Before It Ships.*
- **#process:** 4 steps — **1 Free Inspection · 2 Documentation · 3 Insurance Navigation · 4 Build + Warranty**; reassurance "You're in control / Walk away at any step. No pressure."; inline CTA "Get My Free Estimate →".
- **#financing:** 2 offer cards — **FREE INSPECTIONS, ALWAYS** + **MILITARY & VETERANS** (discount); "No obligation. No pressure. Honest answers, every visit."
- **#blog:** 3 articles (see Blog template).
- **#faq:** 5 questions (see §T4).
- **#service-area:** Hamilton County coverage statement (links to service-areas).

---

## 2. PAGE TEMPLATES — section sequences & conversion jobs

> Every template ends with the global **`#cta-form`** band then **footer**. Listed once here, implied for all below.

### 2.1 Services overview (`services.html`) — *job: route to all 7 services, establish "one team"*
1. **Hero** — H1: *ROOFING + EXTERIORS, ONE ACCOUNTABLE TEAM*
2. `#services` — H2 same; 7-service icon grid.
3. Featured service blocks (alternating) — **H2: Residential Roofing**, **H2: Storm Damage Restoration**, **H2: Concrete**, **H2: Siding**.
4. `#financing` teaser — H2: *FREE INSPECTIONS, ALWAYS*.
5. `#cta-form` → footer.

### 2.2 Service detail (`services/{service}.html` ×7) — *job: convince + convert for one service*
Sequence (residential-roofing template):
1. **Hero** — H1: *RESIDENTIAL ROOFING IN HAMILTON COUNTY*
2. Long-form value section — **H2s:** *Hamilton County Roofing, Done By The Owner* · *Three Manufacturer Certifications, One Contractor* · *What the Inspection Covers* · *What Honest Pricing Looks Like* · *The Warranty That Travels With Your Home*
3. Why + inclusions — **H2:** *WHY CLOUD … FOR RESIDENTIAL ROOFING* · **H2:** *WHAT'S INCLUDED*
4. **H2:** *HOW IT WORKS* (process)
5. **H2:** *COMMON QUESTIONS* (service-specific FAQ)
6. **H2:** *YOU MAY ALSO NEED* (cross-sell to other services)
7. `#cta-form` → footer.

### 2.3 City / service-area page (`service-areas/{city}.html` ×6) — *job: local trust + route to local SEO pages*
1. **Hero** — H1: *ROOFING CONTRACTOR IN {CITY}, IN*
2. Local content — **H2s:** *Cloud Nine Is a {City} Company* · *What {City} Roofs Deal With* · *Why {City} Homeowners Choose Cloud Nine* · *Services Available in {City}* · *Schedule a Free Inspection*
3. `#cta-form`
4. **H2:** *Our {City} Service Pages* (links to the 3 SEO long-tail pages for that city)
5. Footer.

### 2.4 SEO long-tail page (`{service}-{city}-in.html` ×18 = 3 services × 6 cities) — *job: rank for "{service} {city}" + convert*
1. **Hero** — H1: *{SERVICE} IN HAMILTON COUNTY IN {CITY}, IN*
2. Local intro — **H2:** *Now Serving {City}, IN Homeowners*
3. Reuses the **service-detail body** (same H2 stack as 2.2: Done By The Owner / Certifications / Inspection / Pricing / Warranty / WHY / WHAT'S INCLUDED / HOW IT WORKS / COMMON QUESTIONS / YOU MAY ALSO NEED).
4. `#cta-form` → footer.
*(Internal linking: each SEO page links to its parent city + the other 5 cities for the same service.)*

### 2.5 About (`about.html`) — *job: deepen founder/brand trust*
1. **Hero** — H1: *FAMILY‑OWNED. OWNER‑MANAGED.*
2. Stat / intro band.
3. **H2:** *BUILT ON TRUST & CRAFT*
4. `#about` — **H2:** *OWNER‑LED. LOCAL. HAMILTON COUNTY.* (founder Matt Leugers, vision/mission) — **trust badges repeat here.**
5. **H2:** *THE VALUES WE WORK BY*
6. `#cta-form` → footer.

### 2.6 Contact (`contact.html`) — *job: capture via full contact form + provide direct contact*
1. **Hero** — H1: *CONTACT US*
2. **H2:** *SEND US A MESSAGE* — full contact form (F3) + sidebar **H3: CONTACT INFO** (phone, email, address) + **H3: BUSINESS HOURS** + "Same-day call-backs" + *View Our Service Area →*.
3. Map band.
4. `#cta-form` → footer.

### 2.7 Financing (`financing.html`) — *job: dissolve the cost objection*
1. **Hero** — H1: *HOW HOMEOWNERS PAY FOR ROOFS*
2. **H2:** *HOW IT WORKS*
3. **H2:** *WAYS HOMEOWNERS PAY* — 3 option cards:
   - **Insurance Claim** (MOST COMMON) — "Often zero out-of-pocket beyond your deductible."
   - **Third-Party Lender** (FLEXIBLE TERMS) — Synchrony Home, GreenSky, Hearth; "you apply with them, not us… no dealer markup."
   - **Pay on Completion** (NO PRESSURE) — "No deposit… settle when the work is signed off."
   - Banner: "STORM DAMAGE? OFTEN ZERO OUT‑OF‑POCKET."
4. **H2:** *PAYMENT FAQ* (see §T4).
5. `#cta-form` → footer.

### 2.8 Service areas hub (`service-areas.html`) — *job: prove coverage, route to city pages*
1. **Hero** — H1: *SERVING HAMILTON COUNTY*
2. Stat band.
3. **H2:** *WHERE WE WORK* (6 cities + map).
4. **H2:** *IN YOUR AREA. READY TO HELP.*
5. `#cta-form` → footer.

### 2.9 Gallery (`gallery.html`) — *job: proof of work*
1. **Hero** — H1: *OUR COMPLETED PROJECTS*
2. Filterable project grid (18 photos) — **filters:** All · Roofing · Storm Restoration · Siding · Concrete · Gutters · Exterior Renovation.
3. `#cta-form` → footer.

### 2.10 Blog index (`blog.html`) — *job: authority + SEO capture*
1. **Hero** — H1: *Roofing & Storm‑Damage Tips for Noblesville Homeowners*
2. Featured article (**H2:** *Roof Replacement Cost in Hamilton County 2026*) + grid (**H3** ×2 more articles) + category filter.
3. `#cta-form` → footer.

### 2.11 Blog article (`blog/{slug}.html` ×3) — *job: rank, inform, convert mid-read*
1. **Hero** — H1: article title.
2. Body with **H2** sub-sections (e.g. for the cost article: *The honest range for Hamilton County in 2026 · What moves the number · How to read the estimate you are holding · When insurance pays instead of you · What to do if you want a real number*).
3. **Inline mid/﻿end-article lead form** (F4 — Name/Phone/Email, 3-col).
4. `#cta-form` → footer.

---

## F. FORMS — every form and what it captures

| Form | Where | Fields captured | Submit |
|---|---|---|---|
| **F1 — Hero lead form** | Homepage `#hero` | Your Name · Phone Number (`tel`) · Email Address (`email`) · **Service** select ("How Can We Help?" + 7 services) · Property Address · Brief message (optional) | "Get My Free Estimate →" |
| **F2 — Global CTA form** | `#cta-form` on **every page** | Your Name · Phone Number (`tel`) · Email Address (`email`) · **Service** select (7 services) | "Get My Free Estimate →" (shorter form — no address/message) |
| **F3 — Contact form** | `contact.html` "SEND US A MESSAGE" | Name (placeholder *John Smith*) · Phone (`tel`, *(816) 000‑0000*) · Email (`email`) · Address (*123 Main St, Noblesville, IN*) · **Service** select · Message **textarea** ("Tell us about your project…") | Submit |
| **F4 — Inline article form** | Blog articles | Your Name · Phone (`tel`) · Email (`email`) — 3-column, no service select | "Get My Free Estimate →" |

**Service select options (F1/F2/F3):** *How Can We Help?* (placeholder) → Residential Roofing · Commercial Roofing · Siding · Concrete · Gutters · Storm Damage Restoration · Exterior Renovations.
**Submit behavior:** all forms POST to a JS `alert()` placeholder (README: "Replace with your CRM / email handler"). No deposit/payment fields anywhere — pure lead capture.

---

## T. TRUST COMPONENTS — what they are and where they sit

| # | Component | Placement |
|---|---|---|
| **T1** | **Badge strip (5 badges):** 100 5‑Star Reviews · Atlas Pro Plus Gold · Directorii · James Hardie · Nextdoor Fave 2025 | Homepage **`#hero`** (under form); repeats on **`about.html` `#about`** |
| **T2** | **Reviews block:** "5.0★ ON GOOGLE", 3 named reviews (The Jacksons, Jim Dine, David Shirley), See All Google / Facebook Reviews links | Homepage **`#reviews`** (position 2, right after hero) |
| **T3** | **Guarantees / risk-reversal:** "Free Photo‑Documented Inspections," "We call you back in 5 minutes," "No deposit," "Walk away at any step," "Warranty that travels with your home," Military & Veterans discount, "Licensed and Insured in Indiana" | Woven through **#hero, #why, #process, #financing**; warranty/certifications emphasized on **service detail** pages |
| **T4** | **FAQs (objection-handling):** Homepage `#faq` (5 Qs): *How fast can you inspect my roof? · Do you handle my insurance claim? · Are you licensed and insured? · Are you local or a storm chaser? · What is your warranty?* — Service pages: **COMMON QUESTIONS**. Financing: **PAYMENT FAQ** (*Do you offer in-house financing? · Will my insurance pay for the roof? · Do I need to put money down to schedule? · Which third-party lenders do other homeowners use?*) | `#faq` on home; per-page FAQ on service & financing pages |
| **T5** | **Founder / credibility:** Matt Leugers (owner), years of experience, "owner walks every roof," local-not-storm-chaser | Homepage `#about`; full `about.html` |
| **T6** | **Manufacturer certifications:** "Three Manufacturer Certifications, One Contractor" (Owens Corning Platinum Preferred, Atlas Pro Plus, James Hardie) | Service detail + SEO pages; blog article on Owens Corning |
| **T7** | **Project gallery:** 18 completed-project photos, filterable | Homepage `#gallery`; full `gallery.html` |

---

## C. CTAs — every CTA and its placement

**Primary CTA (repeats site-wide): "Get My Free Estimate"** — every instance smooth-scrolls to the page's `#cta-form`. Appears in: nav (sticky, all pages), hero, process section, financing, gallery, blog, and the `#cta-form` band — **multiple times per page** so a CTA is always in reach.

| CTA | Type | Placement / target |
|---|---|---|
| **Get My Free Estimate** | Primary button | Nav (persistent), `#hero`, `#process`, `#cta-form`, and repeated mid-page on every template → scroll to `#cta-form` |
| **Call Now** | Phone | Nav + hero → `tel:+13179004262` |
| **Get My Free Estimate →** (form submit) | Form CTA | F1, F2, F4 submit buttons |
| **LEARN MORE ABOUT US →** | Secondary nav-CTA | Homepage `#about` → `about.html` |
| **See All Google Reviews / See All Facebook Reviews** | Trust link | `#reviews` |
| **View Our Service Area →** | Nav link | Contact sidebar → `service-areas.html` |
| **All Services** | Nav link | Services dropdown / gallery → `services.html` |
| Service / city / SEO interlinks | Nav/SEO links | "YOU MAY ALSO NEED", "Our {City} Service Pages", "Services Available in {City}", footer columns |

---

## H. SEO / HEADING HIERARCHY

**Site-wide rule:** exactly **one H1 per page** (the page's value-prop / hero headline). Section titles are **H2**. Sub-items within a section (article cards, sidebar groups) are **H3**. **Footer** column titles are **H4**. No H5/H6 in use.

### Homepage H1–H6 (exact, in document order)
```
H1  Hamilton County's Roofing, Siding and Concrete Contractor      (#hero)
H2  5.0★ ON GOOGLE                                                 (#reviews)
H2  OWNER-LED. LOCAL. HAMILTON COUNTY.                             (#about)
H2  ROOFING + EXTERIORS, ONE ACCOUNTABLE TEAM                      (#services)
H2  BUILT FOR YOUR NEIGHBORHOOD                                    (#why)
H2  ROOFS WE HAVE BUILT                                            (#gallery)
H2  FOUR STEPS, NO SURPRISES                                       (#process)
H2  FREE INSPECTIONS, ALWAYS                                       (#financing)
H2  ROOFING TIPS FOR HAMILTON COUNTY HOMEOWNERS                    (#blog)
  H3  Roof Replacement Cost in Hamilton County 2026
  H3  Why Owens Corning Platinum Preferred Matters for Your Warranty
  H3  When Concrete and Roofing Belong on the Same Project
H2  FREQUENTLY ASKED                                               (#faq)
H2  SERVING HAMILTON COUNTY                                        (#service-area)
H2  GET YOUR FREE INSPECTION TODAY                                 (#cta-form)
  H4  SERVICES   H4  SERVICE AREAS   H4  COMPANY   H4  GET IN TOUCH (footer)
```

### Heading pattern per template (H1 + H2 stack)
- **Service detail / SEO page:** H1 = "{Service} in Hamilton County [in {City}, IN]"; H2 stack = Done By The Owner · Three Manufacturer Certifications · What the Inspection Covers · What Honest Pricing Looks Like · The Warranty That Travels With Your Home · WHY … · WHAT'S INCLUDED · HOW IT WORKS · COMMON QUESTIONS · YOU MAY ALSO NEED · GET YOUR FREE INSPECTION TODAY.
- **City page:** H1 = "Roofing Contractor in {City}, IN"; H2s = Cloud Nine Is a {City} Company · What {City} Roofs Deal With · Why {City} Homeowners Choose · Services Available in {City} · Schedule a Free Inspection · Our {City} Service Pages.
- **Financing:** H1 = "How Homeowners Pay for Roofs"; H2s = HOW IT WORKS · WAYS HOMEOWNERS PAY · PAYMENT FAQ · GET YOUR FREE INSPECTION TODAY.
- **Contact:** H1 = "Contact Us"; H2 = SEND US A MESSAGE; H3 = CONTACT INFO, BUSINESS HOURS.
- **About:** H1 = "Family-Owned. Owner-Managed."; H2s = BUILT ON TRUST & CRAFT · OWNER-LED. LOCAL. · THE VALUES WE WORK BY.
- **Gallery:** H1 = "Our Completed Projects".
- **Blog index:** H1 = page title; H2 = featured article; H3 = grid articles.
- **Blog article:** H1 = article title; H2s = article sub-sections.

---

## Page inventory (42 pages) & funnel role
| Group | Count | Pages | Funnel role |
|---|---|---|---|
| Home | 1 | `index.html` | Top-of-funnel catch-all; full funnel on one page |
| Core | 6 | about, services, gallery, financing, blog, contact, service-areas | Trust / routing / capture |
| Service detail | 7 | `services/*.html` | Mid-funnel convince-and-convert |
| City pages | 6 | `service-areas/*.html` | Local trust + route to SEO pages |
| SEO long-tail | 18 | `{roofing|siding|concrete}-{6 cities}-in.html` | Search capture (service × city) |
| Blog articles | 3 | `blog/*.html` | Authority + mid-read capture |

**Conversion flow:** Search/referral → (SEO long-tail / city / service / home) → trust stack (badges → reviews → founder → proof) → objection handling (why / process / financing / FAQ) → **lead form (`#cta-form`)** → JS handler (replace with CRM). Phone CTA is the parallel fast-path on every page.
