# The Cleaning Specialists — Client Source of Truth

> **Status:** ingestion in progress. This file is the single reference for the client's
> *real* business information, extracted from the materials they supplied. It feeds the
> redesign — it does **not** change the design system or page hierarchy we've already built.
> More PDFs (head-office company profile, tailored for this branch) are coming and will be
> folded in here.

## 0. Who this client is (context)

- **Client:** The Cleaning Specialists — **Nelspruit (Mbombela) branch**, in partnership with the **Highveld branch**.
- **Parent:** Part of **The Specialists Franchise Group** (head office). The head-office site
  (`thespecialists.co.za`) is our **design framework** (a.k.a. "Website B"). The client is
  permitted to use head-office material.
- **Conversion structure:** our Cloud Nine ("C9") template (a.k.a. "Website A").
- **This project:** a brand-new site that will **replace** the client's current live site
  (the zip in `raw/`). We are *not* building on top of it — we mine it for truth.
- **Current live domain:** `cleaningspecialist.co.za` (note: singular "specialist").
- **Brand line:** *"Protecting our customers' health, food and property since 1978 – safely and reliably."*
  Cleaning Specialists™ — leading provider of professionally outsourced cleaning services
  for homes, offices, factories and commercial buildings throughout Southern Africa
  (once-off and contract).

## 1. ⚠️ Redirects we MUST NOT break (22 live URLs)

These are the live routes on `cleaningspecialist.co.za` (from `_routes.json` in the zip).
When the new site goes live, **every one of these paths must still resolve** (keep the same
path or 301 to the closest new equivalent). Path = the part after the domain.

### Core / general (6)
| Live path | Page | Maps to (new site) |
|---|---|---|
| `/` | Home | `index.html` |
| `/cleaning/` | Cleaning overview | services hub / cleaning section |
| `/hygiene/` | Hygiene overview | washroom-hygiene service |
| `/contact/` | Contact | `contact.html` |
| `/sitemap/` | Sitemap | (generate) |
| `/success/` | Form success/thank-you | form success state |

### Branch service pages (Nelspruit / Highveld) (8)
| Live path | Notes |
|---|---|
| `/cleaning-services-nelspruit/` | Nelspruit cleaning |
| `/cleaning-services-highveld/` | Highveld cleaning |
| `/cleaning-services-highveld-ppc/` | Highveld **PPC landing page** (paid-ad variant) |
| `/hygiene-services-nelspruit/` | Nelspruit hygiene |
| `/hygiene-services-highveld/` | Highveld hygiene |
| `/pre-occupational-cleaning-nelspruit/` | Nelspruit pre-occupational |
| `/pre-occupational-cleaning-highveld/` | Highveld pre-occupational |
| `/success-nelspruit/`, `/success-highveld/` | Branch-specific thank-you pages (2) |

### Mbombela–Emalahleni service pages (6)
| Live path |
|---|
| `/cleaning-services-mbombela-emalahleni/` |
| `/gutter-cleaning-mbombela-emalahleni/` |
| `/deep-cleaning-mbombela-emalahleni/` |
| `/solar-panel-cleaning-mbombela-emalahleni/` |
| `/surface-cleaning-mbombela-emalahleni/` |
| `/fabric-material-cleaning-mbombela-emalahleni/` |
| `/pre-occupational-cleaning-mbombela-emalahleni/` |

*(Naming: "Nelspruit" = Mbombela; "Highveld" branch covers the Emalahleni/Witbank–Middelburg
region; "mbombela-emalahleni" pages target both metros for specific service types.)*

> **Decision still open:** whether our new site keeps these exact paths or 301s them to a
> cleaner structure. Either way the list above is the checklist — nothing here may 404.

## 2. Branches & contact details

| Branch | Tel | Mobile | Email | Region |
|---|---|---|---|---|
| **Nelspruit (Mbombela)** | 013 753 3502 | 073 770 7187 | nelspruit@thecs.co.za | Mpumalanga Lowveld |
| **Highveld** | 013 245 0071 | 065 801 0931 | highveld@thecs.co.za | Mpumalanga Highveld (Middelburg/Witbank base) |

- Email domain for branches: **@thecs.co.za** (distinct from head office `thespecialists.co.za`).
- Hygiene page also lists Mbombela `013 753 3502 / 073 770 7187` and Highveld `013 245 0071 / 065 801 0931`.

## 3. Services (authoritative — from `TCS_List_of_services.xlsx`)

### Markets
- **Commercial Cleaning** and **Domestic Cleaning** (two service tracks).

### Sectors / industries served
Hospitality & Tourism (hotels, resorts, lodges, travel agencies, cruise lines, event planning) ·
Food & Beverage (agriculture, food manufacturing & processing, restaurants, cafes, catering) ·
Healthcare & Life Sciences (hospitals, clinics, pharmaceuticals, veterinary, medical-device mfrs) ·
Automotive (manufacturing, dealerships, panelbeating, parts stores) ·
Retail (supermarkets, clothing brands, consumer goods) ·
Logistics & Transportation (shipping, trucking, supply chain, warehousing, aviation) ·
Education & Training (universities, schools, technikons, daycare) ·
Professional Services (banking, insurance, legal, accounting, consulting, advertising) ·
Government departments · Manufacturing & Heavy Industry (engineering shops, petrochemical, chemical) ·
Mining · Religious (churches, mosques, synagogues, temples).

### Cleaning services (full list)
High access cleaning (cleaning at heights) · Pre- and post-occupational cleaning · Construction cleaning ·
Carpet & upholstery cleaning · Mould remediation · Mattress cleaning · Window cleaning · Ablution cleaning ·
Roof & solar cleaning · Façade cleaning · Floor cleaning & restoration · Kitchen deep cleaning ·
Kitchen extraction system (canopy) cleaning · Grease trap cleaning · Oil interceptor cleaning ·
Forecourt cleaning · Contract cleaning · Retail cleaning · Hospital cleaning · Commercial cleaning ·
High-level disinfecting services · Frying-oil quality management system · Soak-tank rentals & servicing.

### Hygiene services
Deep cleaning of bathrooms · Ablution cleaning · Odour remediation · Swab testing ·
Supply of hygiene equipment · Fembin servicing · Toilet-paper dispensers.

### Hygiene products
Fembins · Hand paper-towel solutions · Hand dryer solutions · Hand soap · Waste bins ·
Toilet-paper solutions · Aircare solutions · Tork hygiene solutions · Ticra hygiene solutions.

### Products (supply)
Greenworx range of biodegradable detergents · Fembins · Hand paper dispensers · Hand dryer units ·
Hand soap dispensers · Waste bins · Toilet-paper dispensers · Aircare dispensers · Grease traps.

### Domestic cleaning track
Domestic workers · High access cleaning · Pre- & post-occupational cleaning · Construction cleaning ·
Carpet & upholstery cleaning · Mould remediation · Mattress cleaning · Window cleaning ·
Roof & solar cleaning · Façade cleaning · Floor cleaning & restoration · Kitchen deep cleaning ·
High-level disinfecting services · Deep cleaning of bathrooms · Odour remediation.
Products: Greenworx detergents · Toilet paper.

### Service list as shown on the current site (per location page)
Ablution Cleaning · Carpet Cleaning · Ceiling Cleaning · Food Safety · General Cleaning ·
Mattress Cleaning · Grease Trap Cleaning · Canopy Cleaning · Window Cleaning ·
Disinfecting Services · Upholstery Cleaning · Wet Carpet Cleaning · Solar Panel Cleaning.

## 4. Service areas / landmarks (per branch — keep on the relevant location pages)

### Nelspruit (Mbombela) branch — "covers the following areas" (102)
Abel Erasmuspas | Afsaal | Airlie | Argyle | Badplaas | Balule | Barberton | Berg En Dal | Boane | Bordergate | Bosbokrand | Bourkes Luck | Branddraai | Brondal | Bushbuckridge | Cabo De Santa Maria | Crocodile Bridge | Dwarsloop | Eerstehoek | Elukwatini | Figtree | Goedewil | Graskop | Hartbeeskop | Hazeyview | Hectorspruit | Hendriksdal | Hoedspruit | Holbank | Hoxani | Josefdal | Kaalrug | Kaapmuiden | Kaapsehoop | Kabokweni | Kampersrus | Kamshlushwa | Kangwane | Kanyamazane | Karino | Klaserie | Komatiepoort | Kowyn's Pass | Kromdraai | Lekazi | Lochiel | Long Tom Pass | Lothair | Lou's Creek | Lower Sabie | Lyndenburg | Machadadorp | Makhuhlu | Malelane | Manyaleti | Marieskop | Maritie | Marloth Park | Mauchberg | Mbazwane | Mhlala | Montrose | Mooiplaas | Mozambique 1 | Mpageni Pass | Mpumalanga | Mzinti | Naas | Newington | Ngodwana | Noordkaap | Numbi Gate | Nwanetsi | Ohrigstad | Olifants | Orpen | Paul Kruger Gate | Pilgrim's Rest | Plaston | Pretoriuskop | Pullen's Hope | Roodewal | Sabie Sand | Sabie | Satara | Schagen | Schoemanskloof | Shongwe | Skukuze | Sonheuwel | Strydom's Block | Swadini | Tenbosch | The Berg | Thulumahashe | Timbavati | Tonga | Vaalhoek | Waverley | West Acres | White River | Witrivier

### Highveld branch — "covers the following areas" (73)
Arbor | Argent | Belfast | Bethel | Bettiesdam | Bothleng | Breyten | Bronkhorstspruit | Carolina | Charl Cilliers | Chrissiesmeer | Clewer | Coalville | Coldmill | Dalmanutha | Damwal | Davel | Delmas | Dennilton | Devon | Dullstroom | Ekangala | Ermelo | Erts | Evander | Flora | Groblersdal | Hendrina | Hereford | Iswepi | Kafferspruit | Kendal | Kinross | Klipfontein | Kriel | Kwaggaskop | Kwandebele | Laersdrif | Lammerkop | Leandra | Leslies | Loskop Dam | Maartenshoop | Maizefield | Maleoskop | Marble Hall | Marburg | Middelberg | Minnaar | Moetzie | Monsterplus | Morgenzon | Mossiedal | Ogies | Roodebank | Rooikraal | Roossenenkal | Secunda | Selonsrivier | Seringkop | Siyabuswa | Stoffberg | Sybrandskraal | Tafetkop | Trichardt | Tweefontein | Vaalplaas | Vandyksdrif | Verena | Witbank | Witnek | Wonderfontein | Wonderhoek

### Mbombela–Emalahleni pages headline coverage
**MBOMBELA | WHITE RIVER | MIDDELBURG | WITBANK**

## 5. Reusable site copy / positioning (from current site)
- "Protecting our customers' health, food and property since 1978 – safely and reliably."
- "As part of The Specialists Franchise Group, Cleaning Specialists™ is the leading provider of
  professionally outsourced cleaning services for homes, offices, factories and commercial
  buildings throughout Southern Africa – specialising in both once-off [and contract]."
- Commercial CTA: *"Whether you're looking for cleaning services for an office block, or for a
  large-scale commercial operation, we'll tailor our services to meet your needs."*
- Domestic CTA: *"We provide ease to your life and mind with a range of flexible domestic
  cleaning services designed to keep every area of your home beautifully clean and well presented."*
- Pre/post-occupational hook: *"Before occupying your new home, office, retail outlet or
  warehouse, call The Cleaning Specialists."*
- "The Specialists are industry leaders in providing environmentally high standards of
  professionalism and performance…"

## 6. Open questions for later (not blocking)
- Confirm whether the new site preserves the exact 22 paths or 301-maps them.
- Confirm primary public phone/email to surface site-wide vs per-branch.
- Confirm whether all three "geographies" (Nelspruit, Highveld, Mbombela-Emalahleni) become
  city pages in our structure, and how the Highveld **PPC** landing page is handled.
- Images deferred per client instruction (do later).
