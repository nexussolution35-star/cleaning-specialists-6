# The Specialists — Design System (`design-system.md`)
Verbatim design extraction from **Website B / `thespecialists50pages.zip`**. Two passes:
**Pass 1** = design tokens. **Pass 2** = section & component blueprint inventory.

**Platform:** WordPress + **Divi** theme/builder (+ **DiviPlus** plugin modules) static export. 49 page folders, each with its own `assets/css/p_<page>.css`; shared CSS = `customizer-global.css`, `fonts.css`, four `diviplus-*.css`, plus `whatsapp.css`/`cookieadmin.css`/`dflip.css`/`clone-interactions.css`. **All styling is in external CSS** — no `<style>` blocks, no design-bearing inline `style=` (only Divi per-module `style=` for a handful of computed values + the multi-view JSON data attrs). One JS file: `assets/js/clone-interactions.js`.

> Every value/markup below is copied literally from the code. Stock Divi defaults vs the client's per-module overrides are both shown and labeled. Sources cited as `file → selector`.

---
---

# PASS 1 — DESIGN TOKENS

## 1. Fonts
Three Google families, **self-hosted as `.woff2`** in `assets/fonts/` (84 files), declared in `fonts.css` with `font-display:swap` and full per-script `unicode-range` splitting (latin, latin-ext, cyrillic, cyrillic-ext, vietnamese, greek).

| Family | Weights present (normal **and** italic for each) | Role |
|---|---|---|
| **Poppins** | 100,200,300,400,500,600,700,800,900 | **All headings** `h1–h6`; pill CTA buttons |
| **Open Sans** | 300,400,500,600,700,800 | **All body text**, `input`, `textarea`, `select` |
| **Montserrat** | 100,200,300,400,500,600,700,800,900 | Footer widget headings; FAQ question titles |

**Stacks** (`customizer-global.css`):
- Headings: `'Poppins',Helvetica,Arial,Lucida,sans-serif`
- Body / form controls: `'Open Sans',Helvetica,Arial,Lucida,sans-serif`
- Accent (footer/FAQ): `'Montserrat',Helvetica,Arial,Lucida,sans-serif`

**Icon fonts** (declared per-page, served from `wp-content/themes/Divi/core/admin/fonts/`, `font-display:block`; `.woff2/.woff/.ttf/.eot/.svg` present in ZIP):
- **ETmodules** — Divi UI glyphs via `:before/:after` `content` (button arrow `content:"\35"`, toggles, read-more). `font-family:ETmodules`, weight 400.
- **FontAwesome** — `fa-regular-400`, `fa-solid-900`, `fa-brands-400`; weights 400 & 900.
- **DiviPlus** buttons render icons via `content:attr(data-icon)` / `attr(data-icon-hover)` with `@keyframes diplChangeIcon`.

### Type scale — desktop (≥981px) → mobile (≤980px). Source: `customizer-global.css`.
All headings **Poppins**, color `#181946`, `line-height:1.7em`.

| Element | Desktop | Mobile (≤980) | Notes |
|---|---|---|---|
| `h1` / contact main title / title-container h1 | **40px** | 29px | |
| `h2` | **34px** | 24px | |
| `h3` | **29px** | 21px | |
| `h4` (+ counters, blog/grid post h2) | **24px** | 17px | |
| `h5` | **21px** | 15px | |
| `h6` | **18px** | 13px | |
| Slider title `.et_pb_slide_title` | **61px** | 44px | (module not used on these pages) |
| Grid/portfolio item h2/h3 | **21px** | 15px | |
| **Hero text module** `.et_pb_text_0` | **50px / line-height 60px**, `width:90%` | — | `!important`, ≥981 only |
| Body base | **16px / line-height 2em**, color `#444444` | | `.et_pb_slide_content`/best-value = 18px |
| Top nav `#top-menu li a` | **13px** (customizer) / **14px** (`#top-menu li`, global) | `rgba(255,255,255,.6)` mobile | |
| Footer text `.et_pb_text_0_tb_footer` | 14px / line-height 25px | | |

### Component font specs (literal)
- **Divi base button** `.et_pb_button` — `font-size:20px; font-weight:500; line-height:1.7em`.
- **DiviPlus button text** — primary `18px`, secondary `14px`, both `line-height:1.5` (`diviplus-button.css`).
- **Pill CTA buttons** (`p_index.html.css`) — Poppins, `font-weight:600`, `font-size:13px`, `text-transform:uppercase` (`.et_pb_button_3` adds `letter-spacing:2px`).
- **Nav CTA** `li.techbru-cta-btn a` — `font-weight:700; line-height:1`.
- **Footer headings** (Montserrat) — `font-weight:700; text-transform:uppercase; font-size:15px; color:#7CDA24`.
- **FAQ question** (Montserrat) — `font-size:17px`.

## 2. Colors (by role)

### Brand palette (actually used)
| Hex / rgba | Role |
|---|---|
| `#191245` | **Primary brand navy/indigo** — fixed-header & secondary-nav bg, pill button (navy), active nav item, hover fills |
| `#1a1a3a` | Top-header bar bg (desktop) |
| `#171240` / `#191244` | Footer section bg / dark contained-panel bg (`section_0_tb_footer` / `section_4`) |
| `#181946` | Heading text color (`h1–h6`) |
| `#005bbb` | **Primary blue** — link-hover, footer `h4`, accents, blurb/column borders, pill button (blue), image-card icon circle, AJAX glow |
| `#001d39` | Deep navy accent |
| `#58a618` | **Primary green** — pill CTA fill & border; counter borders; DiviPlus button; blurb icon circle |
| `#377f00` | Green button **hover** |
| `#67a32b` → hover `#558723` | Nav CTA button green (`techbru-cta-btn`) |
| `#62a845` | Submenu (`.nav li ul`) border-color |
| `#7CDA24` | Bright green — footer heading text |
| `#985e23` | Brown accent |
| `#444444` | Body text |
| `#666` / `#999` / `#bbb` | Secondary / muted text |
| `#8c8c8c` | Footer-info text |
| `#797c82` | Hero sub-line grey (inline span) |
| `#333` | Dark text / borders |
| `#000000` | Default link color (`a`) |
| `#ffffff` / `#fff` | White (button text, panels, reversed text) |
| `#d9d9d9` | Split-card image column fallback bg |
| `#eee` `#ddd` `#d3d3d3` `#e8e8e8` | Light borders / dividers |
| `#2ea3f2` | **Divi stock accent** (default button/link) — left as theme default; overridden by brand colors on real CTAs |

### rgba / overlays
| Value | Role |
|---|---|
| `rgba(25,18,69,0.9)` | Navy overlay (=`#191245` @90%) — hero gradient stop |
| `rgba(88,166,24,0.22)` | Green tint — blurb icon-circle bg |
| `rgba(66,66,66,0.29)` | `.et_pb_button_0` translucent fill |
| `rgba(71,71,71,0.15)` | Rounded row bg (`.et_pb_row_5`) |
| `rgba(0,0,0,.1 / .05 / .03 / .07)` | Shadow tints, hairline borders, faint fills, inset |
| `rgba(0,0,0,.6 / .3 / .2)` | Text/shadow tints |
| `rgba(255,255,255,.6)` | Mobile nav link color |
| `rgba(0,139,219,.247059)` | AJAX-loader blue glow |
| `rgba(41,196,169,.15)` | Teal shadow tint (Divi default hover) |
| `rgba(103,163,43,0.3)` → `0.4` | Nav CTA shadow / hover shadow |

**Hero gradient (verbatim, `p_index.html.css`):**
`linear-gradient(90deg,rgba(25,18,69,0.9) 1%,#191245 17%,#191245 38%,#005bbb 100%)` layered over `homepage-banner-2.png` (≤980) / `homepage-banner.png` (desktop). Phone variant: `linear-gradient(90deg,#191245 0%,#191245 15%,#191245 34%,#005bbb 100%)`.

### Gutenberg default palette — DEFINED but NOT part of the design (ignore on rebuild)
`#0693e3, #00d084, #ff6900, #fcb900, #cf2e2e, #9b51e0, #7bdcb5, #8ed1fc, #f78da7, #abb8c3` (each appears exactly 50× = one per page; stock WP block presets).

## 3. Spacing scale
Divi uses per-module padding/margin rather than a strict token scale. Recurring literal values:

**Sections / rows** (`customizer-global.css` + page):
- `.et_pb_section_0` (hero): `padding-top:50px; padding-bottom:50px` (≥981 `!important`).
- `.et_pb_section_0_tb_footer`: `padding-top:25px; padding-bottom:0`.
- `.et_pb_section_4` (dark panel): `padding:0; margin:20px 35px 60px 35px`.
- `@min-width:2400px`: `.et_pb_section{padding:96px 0}`, `.et_pb_row{padding:48px 0}`.
- `@max-width:980px`: `.et_pb_row{padding:0}`.
- `@max-width:767px`: `.et_pb_section{padding:7px 0}`, `.et_pb_row{padding:7px 0}`.

**Recurring `padding-top` values (frequency-ranked):** `80, 25, 27, 18, 20, 33, 16, 30, 7, 58, 111, 177, 147` px.

**Panel / card inner padding (literal):**
- Blurb icon-image wrap: `16px 19px`.
- Bordered columns (`.et_pb_column_6/7`): `23px 39px`.
- Number counters: `15px 0`.
- Pill CTAs: `7px 30px` (btn_1), `8px 26px` (btn_2), `6px 26px` (btn_3); DiviPlus pills `5px 36px`.
- Nav CTA: `12px 20px`.
- Divi base button: `.3em 1em` (hover `.3em 2em .3em .7em`).

**Layout widths:** content max `1920px` (`.container/.et_pb_row`; boxed 2080px); hero row `.et_pb_row_0` `width:90%`.

**Gaps:** dominant `gap:0.5em` (Divi default); occasional `10/15/20/30/8/5px`; rem-based `0.25/0.5/1.5/2/3rem` (block presets).

**Top nav:** `#top-menu li{padding-right:15px}`, `#top-menu li li{padding:0 5px}`; `#et-top-navigation{padding:40px 0 0 0}`, link `padding-bottom:40px` (≥981).

## 4. Border-radius (every value, frequency-ranked)
| Value | Usage |
|---|---|
| `3px` | **Divi base button** default radius |
| `5px,4px,7px,2px,10px,25px,15px,20px,24px` | misc small cards/inputs |
| `50%` / `100%` | circular (avatars, dots, loader) |
| **`30px 30px 30px 30px`** | **cards / bordered columns / rounded rows / blurb icon wraps** (common panel radius) |
| **`35px 35px 35px 35px`** | **number-counter panels** |
| **`25px`** | CTA `.et_pb_row_8` (circles bg row); split-card image col uses one-sided `25px 0 0 25px` |
| **`50px` / `50px 50px 50px 50px`** | **large hero/feature SECTION panels** (`section_0`, `_4`, `_7` parallax wrap) |
| **`72px`** | **pill CTA buttons** (`.et_pb_button_1/2/3`) |
| **`102px 102px 102px 102px`** | **DiviPlus pill buttons** (`.dipl_button_item_0/1`) — fully rounded |
| Split radii: `50px 0 0 50px`, `0 50px 50px 0`, `50px 50px 0 0`, `0 0 50px 50px`, `40px 40px 0 0`, `25px 0 0 25px`, `2px 4px 2px 4px`, `5px 5px 8px 8px` | one-sided rounding |
| `9999px/999px` | block-preset pills (Gutenberg) |
| `inherit/unset/0` | resets |

> **Large-panel radii specifically:** sections **50px**, cards/columns **30px**, counters **35px**, CTA rows **25px**, pill buttons **72px** (Divi) / **102px** (DiviPlus).

## 5. Shadows (full box-shadow definitions, frequency-ranked)
| Definition | Usage |
|---|---|
| `0 2px 5px rgba(0,0,0,.1)` (and `,0.1`) | **default card/element shadow** |
| `none` | reset |
| `0 5px 10px rgba(41,196,169,.15)` | Divi hover (teal tint) |
| `0 0 7px rgba(0,0,0,0.1) !important` | soft glow |
| `inset 0 0 7px rgba(0,0,0,.07)` | inset field shadow |
| `0 1px 0 rgba(0,0,0,.1)` | hairline bottom edge |
| **`0px 2px 18px 0px rgba(0,0,0,0.3)`** | **hero section panel `section_0`** + CTA `row_8` — the prominent floating-panel shadow |
| `0 0 60px rgba(0,139,219,.247059)` | AJAX-loader blue glow |
| `inset 0 0 10px rgba(0,0,0,.1)` | inset panel |
| `0px 8px 20px rgba(0,0,0,0.15)!important` | elevated hover card |
| `0 0 10px rgba(0,0,0,.2 / .3)` | dropdown/menu shadow |
| Nav CTA: `0 4px 10px rgba(103,163,43,0.3)` → hover `0 6px 15px rgba(103,163,43,0.4)` | green button lift |
| Material set: `0 4px 8px 1px rgba(32,32,37,.09)`, `0 10px 10px 4px rgba(32,32,37,.23)`, `0 7px 15px 1px rgba(55,62,70,.07)`, `0 8px 17px 2px rgba(13,15,18,.2)`, `0 6px 8px 2px rgba(0,0,0,.14)`, `0 3px 4px 0 rgba(39,38,38,.26)` | DiviPlus/elevated |

## 6. Transitions & hover timing (frequency-ranked)
| Definition | Usage |
|---|---|
| **`all 0.4s ease-in-out`** | **dominant site transition** (cards, images, modules) |
| `none` | reset |
| `background-color .5s ease` | bg fades |
| `all .2s ease-in-out` / `all .2s` | **Divi button** (`transition-duration:.2s; transition-property:all`) |
| `all .3s` / `all .4s` | generic |
| `background .3s,box-shadow .3s` (± `-webkit-`) | hover lift |
| `background-color/color/opacity/transform 0.4s …` (many permutations) | overlay/blurb hovers |
| `opacity .2s, background-color .2s ease-in-out` | overlays |
| `margin-top 0.4s ease-in-out` | slide-up reveals |
| `color 300ms ease 0s`, `transform 300ms ease 0ms`, `all 300ms ease 0ms` | DiviPlus / nav |
| Pill buttons: `background-color 300ms ease 0ms, border 300ms ease 0ms` | CTA hover |
| Nav CTA: `all 0.3s ease-in-out` + `transform:translateY(-2px)` hover | green button |
| DiviPlus button: `background-image/background-color/border .3s linear`; effect wraps `.3s linear` | fill animations |

## 7. Icon font / inline-SVG setup
- **No SVG sprite.** Icons are **icon-font glyphs** (ETmodules + FontAwesome), not inline SVG. ~1 decorative inline `<svg>` per page.
- ETmodules glyphs via `content` on `:before/:after` (e.g. button arrow `\35`). DiviPlus list/icon glyphs via `<span class="et-pb-icon">` with character content (e.g. `^`) or `el-icon-square`.
- DiviPlus button icon swap animation = `@keyframes diplChangeIcon` (opacity/visibility 0→1, `content` `data-icon`→`data-icon-hover`); icon padding 6px from text; text `z-index:2` over fill `z-index:1`.

---
---

# PASS 2 — SECTION & COMPONENT BLUEPRINT INVENTORY

Module vocabulary across all 49 pages (frequency): `et_pb_text` (492), `et_pb_blurb` (396), `et_pb_image` (186), `dipl_list_item` (422), `et_pb_button` (121), `dipl_image_card` (58), `et_pb_social_media_follow` (49), `et_pb_menu` (48), `dipl_floating_image_item` (39), `dipl_faq_page_schema_item` (35), `et_pb_number_counter` (16), `et_pb_code` (12), `et_pb_testimonial` (6), `et_pb_cta` (2), `et_pb_contact_form` (2), `et_pb_divider` (1). No `et_pb_slider`/`accordion`/`toggle`/`tabs`/`gallery` modules are used.

Naming: every section/row/column/module carries a global ordinal class (`et_pb_section_4`, `et_pb_column_1_2 et_pb_column_6`, `et_pb_button_2`, `dipl_image_card_3`, …) which the per-page CSS targets. Theme-builder header/footer modules use the `_tb_footer` suffix.

---

## GLOBAL CHROME (shared on every page)

### G1 — Top utility bar `#top-header` — **REUSE-VERBATIM**
**Container:** full-bleed bar; bg `#1a1a3a` (desktop) / `#191245` (fixed & secondary). Inner `.container.clearfix` capped at 1920px.
**Layout:** left `#et-info` (phone + email + social) / right `#et-secondary-menu` (duplicate social).
**Markup (verbatim):**
```html
<div id="top-header"><div class="container clearfix"><div id="et-info"><span id="et-info-phone">0860 08 08 08</span><a href="mailto:info@thespecialists.co.za"><span id="et-info-email">info@thespecialists.co.za</span></a><ul class="et-social-icons"><li class="et-social-icon et-social-facebook"><a class="icon" href="https://www.facebook.com/specialists.sa"><span>Facebook</span></a></li><li class="et-social-icon et-social-instagram"><a class="icon" href="https://www.instagram.com/the_specialists_sa?igsh=MzRlODBiNWFlZA=="><span>Instagram</span></a></li><li class="et-social-icon et-social-rss"><a class="icon" href="https://www.thespecialists.co.za/comments/feed/"><span>RSS</span></a></li></ul></div><div id="et-secondary-menu"><div class="et_duplicate_social_icons"><ul class="et-social-icons">…</ul></div></div></div></div>
```

### G2 — Main header / primary nav `#main-header` — **REUSE-VERBATIM**
**Container:** sticky/fixed header (`et_fixed_nav`), `data-height-onload="120"`, `style="top:31px"`; `#page-container` gets `padding-top:151px`. Logo `max-height:79px` (centered/split header math in customizer).
**Layout:** `.logo_container` (left) + `#et-top-navigation` (right) holding `<nav id="top-menu-nav"><ul class="nav" id="top-menu">`, search trigger `#et_top_search`, and mobile `#et_mobile_nav_menu`.
**Nav structure:** About us ▸ (Company Profile) · Divisions ▸ (Pest Control / Cleaning / Hygiene Division) · Our Solutions ▸ (Pest Control / Cleaning / Washroom Hygiene Services) · Hygiene Products ▸ (Hygiene range and products) · Find a Branch · Contact Us · Franchise Info · Blog · **Get a Quote** (`li.techbru-cta-btn`).
**Logo:** `src="wp-content/uploads/2020/06/The-Specialists-Logo.png"` (163×77).
**Interactive:** dropdowns `.sub-menu` fade in (`et_primary_nav_dropdown_animation_fade`), border-color `#62a845`; current item color `#191245`; on mobile nav links `rgba(255,255,255,.6)`; **Get-a-Quote CTA** = green pill `#67a32b`, radius 50px, weight 700, padding `12px 20px`, shadow `0 4px 10px rgba(103,163,43,0.3)` → hover bg `#558723`, `translateY(-2px)`, shadow `0 6px 15px rgba(103,163,43,0.4)`. Search opens `.et_search_outer` overlay form.
**Markup (verbatim nav core):**
```html
<header id="main-header" data-height-onload="120" style="top: 31px;"><div class="container clearfix et_menu_container"><div class="logo_container"><span class="logo_helper"></span><a href="index.html"><img id="logo" src="wp-content/uploads/2020/06/The-Specialists-Logo.png" alt="The Specialists" width="163" height="77"/></a></div><div id="et-top-navigation" data-height="79" style="padding-left: 193px;"><nav id="top-menu-nav"><ul class="nav" id="top-menu"><li class="menu-item menu-item-has-children …"><a href="index.html">About us</a><ul class="sub-menu"><li class="menu-item"><a href="company-profile/index.html">Company Profile</a></li></ul></li> … <li class="techbru-cta-btn menu-item menu-item-type-custom menu-item-59916"><a href="contact-us/index.html#send-us-a-message">Get a Quote</a></li></ul></nav><div id="et_top_search"><span id="et_search_icon"></span></div><div id="et_mobile_nav_menu"><div class="mobile_nav closed"><span class="select_page">Select Page</span><span class="mobile_menu_bar mobile_menu_bar_toggle"></span><ul class="et_mobile_menu" id="mobile_menu">…</ul></div></div></div></div><div class="et_search_outer"><div class="container et_search_form_container"><form action="https://www.thespecialists.co.za/" class="et-search-form" method="get" role="search"><input class="et-search-field" name="s" type="search" placeholder="Search …"/></form><span class="et_close_search_field"></span></div></div></header>
```

### G3 — Footer `<footer class="et-l et-l--footer">` — **REUSE-VERBATIM**
**Container:** full-bleed, bg `#171240`, `padding-top:25px; padding-bottom:0`.
**Layout:** Row A = 4 columns (`et_pb_row_4col`): (1) white logo + "About Us" heading + paragraph; (2) "Our services" + `dipl_list` + "Disclaimer & Policy" + `dipl_list`; (3) "Contact details" + 4 `et_pb_blurb` (phone/email/whatsapp/address as left-icon blurbs); (4) white logo (sticky) + `et_pb_social_media_follow` (FB/IG/LinkedIn/TikTok). Row B = 4/4 heading "Industry Membership You Can Verify". Row C = 4/4 accreditation logo strip `LOGOOS.png`. Row D = 4/4 centered copyright.
**Footer headings:** `h1.et_pb_module_heading`, color `#005bbb` (Montserrat-styled per customizer override on `.footer-widget h4`).
**Copyright:** `© 2026 – The Specialists Franchise Group.`
**Markup (verbatim, abridged to one of each repeating piece):**
```html
<footer class="et-l et-l--footer"><div class="et_builder_inner_content et_pb_gutters3"><div class="et_pb_section et_pb_section_0_tb_footer et_pb_with_background et_section_regular"><div class="et_pb_row et_pb_row_0_tb_footer et_pb_row_4col">
  <div class="et_pb_column et_pb_column_1_4 et_pb_column_0_tb_footer …"><div class="et_pb_module et_pb_image et_pb_image_0_tb_footer"><span class="et_pb_image_wrap"><img src="wp-content/uploads/2016/08/The-Specialists-Logo-White.png" .../></span></div><div class="et_pb_module et_pb_heading et_pb_heading_0_tb_footer …"><div class="et_pb_heading_container"><h1 class="et_pb_module_heading">About Us</h1></div></div><div class="et_pb_module et_pb_text et_pb_text_0_tb_footer …"><div class="et_pb_text_inner"><p>The Specialists Franchise Group provides professional, tech-driven Pest Control and Cleaning and Washroom Hygiene solutions…</p></div></div></div>
  <div class="et_pb_column et_pb_column_1_4 et_pb_column_1_tb_footer …"><div class="et_pb_module et_pb_heading et_pb_heading_1_tb_footer …"><div class="et_pb_heading_container"><h1 class="et_pb_module_heading">Our services</h1></div></div><div class="et_pb_module dipl_list dipl_list_0_tb_footer"><div class="et_pb_module_inner"><div class="dipl_list_wrapper"><div class="dipl_list_layout dipl_list_default"><div class="et_pb_module dipl_list_item dipl_list_item_0_tb_footer et_clickable"><div class="et_pb_module_inner"><div class="dipl-list-item-wrap"><div class="dipl_list-icon use_icon use_square"><span class="et-pb-icon">^</span></div><a class="dipl_list-link" href="pest-control/index.html" target="_self"><div class="dipl_list-item_text"><p>Pest Control Services</p></div></a><div class="dipl_list-divider"></div></div></div></div> …</div></div></div></div> …</div>
  <div class="et_pb_column et_pb_column_1_4 et_pb_column_2_tb_footer …"><h1 class="et_pb_module_heading">Contact details</h1><div class="et_pb_module et_pb_blurb et_pb_blurb_0_tb_footer et_pb_blurb_position_left …"><div class="et_pb_blurb_content"><div class="et_pb_main_blurb_image"><span class="et_pb_image_wrap"><span class="et-waypoint … et-pb-icon"></span></span></div><div class="et_pb_blurb_container"><div class="et_pb_blurb_description"><p><a href="tel:0860080808">0860 08 08 08</a><br/><a href="tel:+27126601550">+27 12 660 1550</a></p></div></div></div></div> …</div>
  <div class="et_pb_column et_pb_column_1_4 et_pb_column_3_tb_footer et-last-child"><div class="et_pb_module et_pb_image et_pb_image_1_tb_footer et_pb_image_sticky">…white logo…</div><ul class="et_pb_module et_pb_social_media_follow et_pb_social_media_follow_0_tb_footer clearfix et_pb_text_align_right …"><li class="… et-social-facebook"><a class="icon et_pb_with_border" href="…" target="_blank" title="Follow on Facebook"><span aria-hidden="true" class="et_pb_social_media_follow_network_name">Follow</span></a></li>… (instagram, linkedin, tiktok)</ul></div>
</div><div class="et_pb_row et_pb_row_1_tb_footer"><div class="et_pb_column et_pb_column_4_4 …"><h1 class="et_pb_module_heading">Industry Membership You Can Verify</h1></div></div><div class="et_pb_row et_pb_row_2_tb_footer"><div class="et_pb_column et_pb_column_4_4 …"><div class="et_pb_module et_pb_image et_pb_image_2_tb_footer"><img src="wp-content/uploads/2026/04/LOGOOS.png" .../></div></div></div><div class="et_pb_row et_pb_row_3_tb_footer"><div class="et_pb_column et_pb_column_4_4 …"><div class="et_pb_module et_pb_text et_pb_text_1_tb_footer et_pb_text_align_center …"><div class="et_pb_text_inner"><p><span>© 2026 – The Specialists Franchise Group.</span></p></div></div></div></div>
</div></footer>
```

### G4 — Floating WhatsApp / chat widget — **REUSE-VERBATIM**
Present on pages via `whatsapp.css` (41KB) + `class="nta-whatsapp-default-avatar"` markup. Floating contact widget styling lives entirely in `whatsapp.css`.

---

## SECTION LAYOUTS (homepage `index.html`, the design's richest page)

### S1 — HERO panel — `et_pb_section_0` — **COMPOSABLE** (panel shell) + REUSE (eyebrow pill)
**Container:** **contained rounded PANEL** — `border-radius:50px; overflow:hidden; z-index:10; box-shadow:0px 2px 18px 0px rgba(0,0,0,0.3)`. Background = `homepage-banner.png` (desktop) / `homepage-banner-2.png` (≤980) under the navy→blue 90° gradient (see Pass 1 §2). `background-position:right 35% center`. Section padding `50px 0`.
**Layout:** 2-col **3/5 + 2/5** (`et_pb_column_3_5` text / `et_pb_column_2_5` empty, image shows through bg). Left column = eyebrow pill button + 50px hero headline (`et_pb_text_0`) + body paragraph (multi-view: desktop/tablet copy variants) + two DiviPlus pill buttons.
**Decorative:** banner photo + gradient overlay; no separate blobs in hero.
**Interactive:** eyebrow `a.et_pb_button_0` is a static label pill (`rgba(66,66,66,0.29)` fill, radius 34px, 10px font). Pill buttons = DiviPlus icon-on-hover (icon `data-icon="5"` reveals on hover).
**Markup (verbatim, abridged):**
```html
<div class="et_pb_section et_pb_section_0 et_pb_with_background et_section_regular"><div class="et_pb_row et_pb_row_0"><div class="et_pb_column et_pb_column_3_5 et_pb_column_0 …"><div class="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_phone_center et_pb_module"><a class="et_pb_button et_pb_button_0 et_pb_bg_layout_light" data-icon="" href="">Over 70+ Branches - EST. 1978</a></div><div class="et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_left …"><div class="et_pb_text_inner"><p><span style="color: #58a618;"><span style="color: #ffffff;">Most Established</span><br/><span style="color: #797c82;">Owner-Managed Network</span></span></p></div></div><div class="et_pb_module et_pb_text et_pb_text_1 … et_multi_view__hover_selector"><div class="et_pb_text_inner" data-et-multi-view='{"schema":{"content":{"desktop":"…","tablet":"…"}},"slug":"et_pb_text"}'><p>Founded in 1978. Built branch by branch…</p><p>FASA | SAPCA | NCCA Registered.</p></div></div><div class="et_pb_module dipl_button dipl_button_0">…(see C8)…</div></div><div class="et_pb_column et_pb_column_2_5 et_pb_column_1 et_pb_column_empty"></div></div></div>
```

### S2 — Centered intro text band — `et_pb_section_1` — **COMPOSABLE**
Full-width, single `et_pb_column_4_4`, one centered `et_pb_text_2` (`et_pb_text_align_center`). No panel, no bg. General-purpose section heading/intro band.

### S3 — 50/50 image-text split card — `et_pb_section_2` — **COMPOSABLE**
**Layout:** 2-col **1/2 + 1/2**. Left = `et_pb_image_0`; right = two text modules + a pill button (`et_pb_button_1`). Image placement LEFT, copy RIGHT.
**Container:** the image column (`.et_pb_column_3`) is a **rounded split-card face**: `background-image:url(.../70.jpg); background-size:contain; background-position:center top; background-color:#d9d9d9; border-radius:25px 0 0 25px; overflow:hidden` (left side rounded, butts against text).
**Interactive:** `et_pb_button_1` = white-outline navy pill (radius 72px, border 1px #fff, bg #191245, uppercase Poppins 600).

### S4 — Heading + 2-up blurb cards + closing text — `et_pb_section_3` — **COMPOSABLE**
**Layout:** Row1 4/4 (heading `text_6` + subtext `text_7`, centered) · Row2 **1/2 + 1/2** two blurb cards (`et_pb_column_6/7`) · Row3 4/4 centered text.
**Container:** each card column is a **bordered rounded card** — `border-radius:30px; overflow:hidden; border-width:3px; padding:23px 39px`; border-color alternates `#58a618` (col_6) / `#005bbb` (col_7).
**Component:** `et_pb_blurb` (see C1).

### S5 — Dark contained panel: FAQ + floating image — `et_pb_section_4` (`et_pb_section_parallax`) — **COMPOSABLE** shell
**Container:** **contained rounded dark PANEL** — `margin:20px 35px 60px 35px` (side insets), `border-radius:50px; overflow:hidden`, bg `#191244`, parallax wrap. The panel is NOT full-bleed — it floats with 35px side gutters.
**Layout:** **1/2 + 1/2** — left = centered heading (`text_9`) + **FAQ accordion** (`dipl_faq_page_schema`, see C5); right = **floating image** pair (`dipl_floating_image`, see C6).

### S6 — 4-up stat counters — `et_pb_section_5` — **COMPOSABLE** (band) + REUSE (counter)
**Layout:** Row `et_pb_row_4col` → 4× `et_pb_column_1_4` each holding a `et_pb_number_counter`.
**Container:** each counter is a **rounded outlined pill-panel** — `border-radius:35px; overflow:hidden; padding:15px 0`; border-color alternates `#005bbb` / `#58a618`. See C4.

### S7 — Split CTA band on decorative circles — `et_pb_section_6` / `et_pb_row_8` — **COMPOSABLE**
**Layout:** Row `et_pb_row_3-4_1-4` → **3/4 + 1/4** (left copy `text_10/11`, right button `et_pb_button_2`).
**Container/decoration:** `.et_pb_row_8` is a **rounded panel with a decorative background image** — `background-image:url(.../circles-1.png); border-radius:25px; overflow:hidden; box-shadow:0px 2px 18px 0px rgba(0,0,0,0.3)`. `circles-1.png` = corner-blob/circles decoration.
**Interactive:** `et_pb_button_2` green pill (radius 72px, bg/border #58a618) → hover bg+border `#191245`.

### S8 — Full-width parallax CTA — `et_pb_section_7` (`et_pb_section_parallax`) — **COMPOSABLE**
**Container:** parallax section, `.et_parallax_bg_wrap` child gets `border-radius:50px`. `background-size:cover; background-position:center`.
**Layout:** single 4/4 column, centered heading (`text_12`) + text (`text_13`) + pill button (`et_pb_button_3`, blue #005bbb, radius 72px, letter-spacing 2px) → hover `#377f00`.
**Parallax mechanics (verbatim):** `.et_parallax_bg{position:absolute;inset…;background-size:cover;background-position:top}`; `.et_parallax_bg.et_pb_parallax_css{background-attachment:fixed}`. Hover-swap variant via `.et_parallax_bg__hover`.

---

## RECURRING COMPONENTS

### C1 — Blurb card `et_pb_blurb` — **REUSE-VERBATIM**
Icon-topped card: `et_pb_main_blurb_image` (icon in a rounded square — `border-radius:30px; padding:16px 19px`; icon-circle bg `rgba(88,166,24,0.22)` / fill `#58a618`) + `h4.et_pb_module_header` + `.et_pb_blurb_description`. Variants: `et_pb_blurb_position_top` (homepage cards) and `et_pb_blurb_position_left` (footer contact rows).
```html
<div class="et_pb_module et_pb_blurb et_pb_blurb_0 et_pb_text_align_center et_pb_blurb_position_top et_pb_bg_layout_light"><div class="et_pb_blurb_content"><div class="et_pb_main_blurb_image"><span class="et_pb_image_wrap"><span class="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon et-animated"></span></span></div><div class="et_pb_blurb_container"><h4 class="et_pb_module_header"><span>For Homes</span></h4><div class="et_pb_blurb_description">You want a living space that’s safe for children and pets…</div></div></div></div>
```

### C2 — Image card `dipl_image_card` (grid) — **REUSE-VERBATIM**
Photo + content block with a circular icon and title. Used in service-grid sections.
**Container:** image in `dipl_image_card_image_wrapper`; content row with `dipl_image_card_icon` = circle (`background-color:#005bbb; color:#fff; .dipl_icon_shape_circle`) + `h4.dipl_image_card_title`.
**Interactive:** whole card hover = `transform:scaleX(1.05) scaleY(1.05)!important` (transition `all 0.4s ease-in-out`). `data-enable_lightbox="off"`.
```html
<div class="dipl_image_card_wrapper" data-enable_lightbox="off"><div class="dipl_image_card_image_wrapper"><img class="dipl_image_card_image" src="../wp-content/uploads/2026/04/ablution-cleaning.png" srcset="… 1080w, …-980x980.png 980w, …-480x480.png 480w" sizes="…" title="Cleaning Services" alt="" decoding="async"/></div><div class="dipl_image_card_content_wrapper"><div class="dipl_image_card_icon_wrapper"><span class="dipl_image_card_icon et-pb-icon dipl_icon_shape_circle"></span></div><div class="dipl_image_card_inner_content_wrapper"><h4 class="dipl_image_card_title">Ablution Cleaning</h4></div></div></div>
```

### C3 — Feature/checklist list `dipl_list` — **REUSE-VERBATIM**
Vertical list; each `dipl_list_item` = square icon (`dipl_list-icon use_icon use_square` → `<span class="et-pb-icon el-icon-square">`) + text + `dipl_list-divider`. Footer variant wraps text in `<a class="dipl_list-link">` and adds `et_clickable`.
```html
<div class="dipl_list_wrapper"><div class="dipl_list_layout dipl_list_default"><div class="et_pb_module dipl_list_item dipl_list_item_0"><div class="et_pb_module_inner"><div class="dipl-list-item-wrap"><div class="dipl_list-icon use_icon use_square"><span class="et-pb-icon el-icon-square" style=" background-color: RGBA(255,255,255,0);"></span></div><div class="dipl_list-item_text"><p><span>Keep food covered at all times</span></p></div><div class="dipl_list-divider"></div></div></div></div> …</div></div>
```

### C4 — Number counter `et_pb_number_counter` — **REUSE-VERBATIM**
Animated stat. `data-number-value` drives a JS canvas counter; `.percent .percent-value`/`.percent-sign` get filled; `h3.title` label below.
**Container:** rounded outlined pill-panel (radius 35px, border alternating #005bbb/#58a618, padding 15px 0) — see S6.
```html
<div class="et_pb_with_border et_pb_module et_pb_number_counter et_pb_number_counter_0 et_pb_text_align_center et_pb_bg_layout_light et_pb_with_title" data-number-separator="" data-number-value="48"><div class="percent"><p><span class="percent-value"></span><span class="percent-sign"></span></p></div><h3 class="title" id="years-of-industry-experience">Years of Industry Experience</h3><canvas height="0" width="0"></canvas></div>
```

### C5 — FAQ accordion `dipl_faq_page_schema` — **REUSE-VERBATIM**
Schema.org-marked accordion (`dipl_faq_accordion`, `dipl_faq_col_1`). Each item = `dipl_question_wrapper > h4[itemprop="name"]` + `dipl_answer_wrapper > [itemprop="text"]`. Open/close handled by `clone-interactions.js`; question font Montserrat 17px. FAQ question h6 styling = Montserrat (see Pass 1).
```html
<div class="et_pb_module dipl_faq_page_schema_item dipl_faq_page_schema_item_0"><div class="dipl_faq_item_wrapper" itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question"><div class="dipl_question_wrapper"><h4 itemprop="name">We communicate before, during and after every job.</h4></div><div class="dipl_answer_wrapper" itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer"><div itemprop="text">You are briefed at every stage…</div></div></div></div>
```

### C6 — Floating image pair `dipl_floating_image` — **REUSE-VERBATIM**
Two stacked/overlapping images that animate in (zoom). `data-animation-style="zoom"`, `data-animation-duration="1000ms"`, `data-animation-intensity="50%"`, `data-animation-starting-opacity="0%"`, `data-animation-speed-curve="ease-in-out"`.
```html
<div class="et_pb_module dipl_floating_image dipl_floating_image_0 et_animated" data-animation-style="zoom" data-animation-duration="1000ms" data-animation-intensity="50%" data-animation-starting-opacity="0%" data-animation-speed-curve="ease-in-out" data-animation-delay="0ms" data-animation-repeat=""><div class="et_pb_module_inner"><div class="dipl_floating_images_wrapper"><div class="et_pb_module dipl_floating_image_item dipl_floating_image_item_0"><div class="et_pb_module_inner"><img src="wp-content/uploads/2026/03/The-Specialists-QA-Lady.png" srcset="… 1080w, …-980x1225.png 980w, …-480x600.png 480w" sizes="…" title="About us" alt="" decoding="async"/></div></div><div class="et_pb_module dipl_floating_image_item dipl_floating_image_item_1"><div class="et_pb_module_inner"><img src="wp-content/uploads/2026/03/The-Specialists-Banners-2025-11-18T155445.519.png" srcset="…" .../></div></div></div></div></div>
```

### C7 — Divi base button `et_pb_button` + pill CTA variants — **COMPOSABLE**
Base `.et_pb_button`: transparent bg, `border:2px solid`, `border-radius:3px`, `font-size:20px/500`, color `#2ea3f2`, arrow glyph `content:"\35"` slides in on hover (`padding` shifts, bg → `rgba(0,0,0,.05)`).
Client **pill variants** (verbatim, `p_index.html.css`):
```css
.et_pb_button_1{color:#fff!important;border-width:1px!important;border-color:#fff;border-radius:72px;font-size:13px;font-family:'Poppins',…!important;font-weight:600!important;text-transform:uppercase!important;background-color:#191245}        /* padding 7px 30px */
.et_pb_button_2{…border-color:#58a618;border-radius:72px;…background-color:#58a618}  .et_pb_button_2:hover{border-color:#191245!important;background-color:#191245}   /* padding 8px 26px */
.et_pb_button_3{…border-width:0!important;border-radius:72px;letter-spacing:2px;…background-color:#005bbb}  .et_pb_button_3:hover{border-color:#377f00!important;background-color:#377f00}   /* padding 6px 26px */
```

### C8 — DiviPlus button `dipl_button` (icon-on-hover pill) — **REUSE-VERBATIM**
Fully-rounded pill (`border-radius:102px; padding:5px 36px`; bg `#58A618` item_0 / `#005BBB` item_1). `dipl_button_default_fill dipl_button_icon_on_hover dipl_button_icon_right` → arrow glyph (`data-icon="5"`) fades/reveals on hover.
```html
<div class="et_pb_module dipl_button dipl_button_0"><div class="et_pb_module_inner"><div class="et_pb_with_border et_pb_module dipl_button_item dipl_button_item_0"><div class="et_pb_module_inner"><div class="dipl_button_wrapper dipl_button_classic"><a class="dipl_button_link dipl_button_default_fill dipl_button_icon_on_hover dipl_button_icon_right" href="company-profile/index.html" target="_self"><span class="dipl_button_text dipl_button_icon" data-icon="5">Download our company profile</span></a></div></div></div><div class="et_pb_with_border et_pb_module dipl_button_item dipl_button_item_1"><div class="et_pb_module_inner"><div class="dipl_button_wrapper dipl_button_classic"><a class="dipl_button_link dipl_button_default_fill dipl_button_icon_on_hover dipl_button_icon_right" href="find-a-branch/index.html" target="_self"><span class="dipl_button_text dipl_button_icon" data-icon="5">Find a Branch</span></a></div></div></div></div></div>
```

### C9 — Testimonial card `et_pb_testimonial` — **REUSE-VERBATIM**
No-image variant (`et_pb_testimonial_no_image`): quote `.et_pb_testimonial_content > p` + `.et_pb_testimonial_meta > .et_pb_testimonial_company`.
```html
<div class="et_pb_module et_pb_testimonial et_pb_testimonial_0 clearfix et_pb_text_align_left et_pb_bg_layout_light et_pb_testimonial_no_image"><div class="et_pb_testimonial_description" style="margin-left: 0px;"><div class="et_pb_testimonial_description_inner"><div class="et_pb_testimonial_content"><p>“Outstanding service every time…”</p></div></div><p class="et_pb_testimonial_meta"><span class="et_pb_testimonial_company">Corporate Office Client</span></p></div></div>
```

### C10 — Contact form `et_pb_contact_form` — **REUSE-VERBATIM**
Divi native form. Fields: Full Name (half), Phone Number (half, `pattern="[0-9\s\-]*"`), Email Address (full), Your Region/Area (`select`, 40+ SA region options), Your Suburb (half), Home or business (`select`), **Company Name** (conditional — `data-conditional-logic`, shown only when business), Tell us more (`textarea`). Math captcha (`et_pb_contact_captcha_question` e.g. `4 + 15`). Submit = `button.et_pb_contact_submit.et_pb_button`. Hidden `_wpnonce` + `_wp_http_referer`.
```html
<div class="et_pb_module et_pb_contact_form_0 et_pb_contact_form_container clearfix et_pb_text_align_center" id="et_pb_contact_form_0" data-form_unique_num="0"><div class="et-pb-contact-message"></div><div class="et_pb_contact"><form action="https://www.thespecialists.co.za/contact-us/" class="et_pb_contact_form clearfix" method="post"><p class="et_pb_contact_field et_pb_contact_field_0 et_pb_contact_field_half" data-id="name" data-type="input"><label class="et_pb_contact_form_label" for="et_pb_contact_name_0">Full Name</label><input class="input" type="text" id="et_pb_contact_name_0" name="et_pb_contact_name_0" placeholder="Full Name" data-required_mark="required" data-field_type="input" data-original_id="name" value=""/></p> … <p class="et_pb_contact_field … et_pb_contact_field_half" data-id="phone" data-type="input"><input … pattern="[0-9\s\-]*" title="Only numbers allowed." …/></p> … <select class="et_pb_contact_select input" name="et_pb_contact_your_region_area_0"><option value="">Your Region / Area</option><option value="Gauteng - Centurion">Gauteng - Centurion</option> …</select> … <p … data-id="company_name" data-conditional-logic='[["home_or_business","is","Business"],["home_or_business","is","Home &amp; Business"]]' data-conditional-relation="any" style="display: none;"> …</p> … <textarea class="et_pb_contact_message input" name="et_pb_contact_service_needed_0" placeholder="Tell us more about the service you need."></textarea> … <div class="et_contact_bottom_container"><div class="et_pb_contact_right"><p class="clearfix"><span class="et_pb_contact_captcha_question">4 + 15</span> = <input class="input et_pb_contact_captcha" type="text" name="et_pb_contact_captcha_0" data-first_digit="4" data-second_digit="15" size="2"/></p></div><button class="et_pb_contact_submit et_pb_button" type="submit" name="et_builder_submit_button">Submit</button></div><input type="hidden" name="_wpnonce-et-pb-contact-form-submitted-0" value="…"/><input type="hidden" name="_wp_http_referer" value="/contact-us/"/></form></div></div>
```

### C11 — Promo / CTA module `et_pb_cta` — **COMPOSABLE**
Centered promo header + sub-copy (multi-view content per breakpoint). `et_pb_no_bg`.
```html
<div class="et_pb_module et_pb_cta_0 et_pb_promo et_pb_text_align_center et_pb_bg_layout_light et_pb_no_bg et_multi_view__hover_selector"><div class="et_pb_promo_description"><h2 class="et_pb_module_header" id="our-clients-experience">Our clients' experience</h2><div data-et-multi-view="{…desktop/tablet/phone content…}"><p>Trust IS NOT A CLAIM, IT’S A TRACK RECORD</p></div></div></div>
```

### C12 — Social media follow `et_pb_social_media_follow` — **REUSE-VERBATIM**
`<ul>` of `et_pb_social_icon` `<li>` (facebook/instagram/linkedin/tiktok), each `<a class="icon et_pb_with_border" target="_blank">` with hidden `.et_pb_social_media_follow_network_name` "Follow" label. TikTok uses `et-pb-social-fa-icon` (FontAwesome).

### C13 — Divider `et_pb_divider` — **COMPOSABLE**
`<div class="et_pb_module et_pb_divider et_pb_divider_0 et_pb_divider_position_ et_pb_space"><div class="et_pb_divider_internal"></div></div>` — spacing/rule.

### C14 — `et_pb_code` (third-party embed) — **REUSE-VERBATIM**
Container for external widgets (e.g. Trustindex Google reviews): `<div data-css-url="…trustindex-google-widget.css" data-src="https://cdn.trustindex.io/loader.js?wp-widget">`.

---

## REUSE vs COMPOSABLE — summary

| Block | Tag |
|---|---|
| Top bar (G1), Main nav+search+mobile (G2), Footer (G3), WhatsApp widget (G4) | **REUSE-VERBATIM** |
| Blurb card (C1), Image card grid (C2), Feature list (C3), Number counter (C4), FAQ accordion (C5), Floating image (C6), DiviPlus pill button (C8), Testimonial (C9), Contact form (C10), Social follow (C12), Code embed (C14) | **REUSE-VERBATIM** |
| Hero panel shell (S1), centered text band (S2), 50/50 split card (S3), heading+2-up cards (S4), dark FAQ panel (S5), stat band (S6), circles CTA band (S7), parallax CTA (S8), Divi/pill buttons (C7), promo CTA (C11), divider (C13) | **COMPOSABLE** |

---

## ASSET PATHS (as they exist in the ZIP)

The export is **self-contained**: `wp-content/` IS bundled — **997 image files** under `wp-content/uploads/` plus Divi icon fonts under `wp-content/themes/Divi/core/admin/fonts/`.

**Directory layout:**
```
/<page-slug>/index.html        × 49  (e.g. index.html is the homepage; the-specialists/, cleaning-main/, …)
/assets/fonts/                 84 × .woff2  (Poppins / Open Sans / Montserrat, all weights+styles)
/assets/css/                   60 files: fonts.css, customizer-global.css, dflip.css, cookieadmin.css,
                                          whatsapp.css, clone-interactions.css, diviplus-{button,faq,floatimg,list}.css,
                                          + p_<page>.css × 49
/assets/js/clone-interactions.js
/wp-content/uploads/<YYYY>/<MM>/…        997 images (.png/.jpg/.jpeg/.webp) incl. responsive -WxH variants
/wp-content/themes/Divi/core/admin/fonts/modules/all/modules.{woff,ttf,eot,svg}
/wp-content/themes/Divi/core/admin/fonts/fontawesome/fa-{solid-900,regular-400,brands-400}.{woff2,woff,ttf,eot,svg}
```
Upload month-buckets present: `2014/10, 2016/08, 2017/{04,09,12}, 2018/{01,03,05,07}, 2019/{01,03,04,06,07,08,09,10,11}, 2020/{06,08}, 2025/{03,04,06,07,09}, 2026/{02,03,04,05}`.

**Design-critical assets (verified present in ZIP):**
| Path | Role |
|---|---|
| `wp-content/uploads/2020/06/The-Specialists-Logo.png` (163×77) | Header logo |
| `wp-content/uploads/2016/08/The-Specialists-Logo-White.png` | Footer logo (white) |
| `wp-content/uploads/2017/04/icon.png` | Favicon (`rel="shortcut icon"`) |
| `wp-content/uploads/2017/04/The-Specialists-Logo-FB-01.png` | OG/social logo |
| `wp-content/uploads/2026/05/homepage-banner.png` | Hero bg (desktop) |
| `wp-content/uploads/2026/03/homepage-banner-2.png` | Hero bg (≤980) |
| `wp-content/uploads/2026/03/circles-1.png` | **Decorative circles/blob** bg (CTA `row_8`) |
| `wp-content/uploads/2026/04/70.jpg` | 50/50 split-card image face |
| `wp-content/uploads/2026/04/LOGOOS.png` (1800×204) | Accreditation logo strip (footer) |
| `wp-content/uploads/2026/02/{Start,Assess,Contact,Happy}.png` | Process-step icons |
| `wp-content/uploads/2026/03/005BBB-{15,27,38}.png` | Blue counter/section decorations |
| `wp-content/uploads/2026/03/The-Specialists-Banners-*.png` | Section/banner imagery (large set, 2025-11 batch) |
| `wp-content/uploads/2026/03/The-Specialists-QA-Lady.png` | Floating-image subject (about section) |
| `wp-content/uploads/2026/04/ablution-cleaning.png` (+ many service tiles) | Image-card grid photos |

> Content photography (pest/cleaning/hygiene service images, blog thumbnails, product shots) lives under the dated `wp-content/uploads/<YYYY>/<MM>/` buckets, each with Divi-generated responsive variants (`-480x…`, `-980x…`, `-1280x…`). 321 distinct base images are referenced across the 49 pages; all are present in the ZIP with their srcset variants.

**External services referenced (not bundled):** Trustindex review widget (`cdn.trustindex.io`), form posts to `https://www.thespecialists.co.za/contact-us/`, social links (facebook/instagram/linkedin/tiktok), WhatsApp (`wa.me/+27609699891`).
