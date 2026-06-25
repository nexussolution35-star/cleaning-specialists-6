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

## 6. Head-office segment brochures (PDFs)

Source: head-office "The Specialists" segment one-pagers (2016 series), supplied by the
client and permitted for branch use. National helpline **0860 08 08 08**, info@thespecialists.co.za,
www.thespecialists.co.za. Full text in `extracted/*.txt`; raw PDFs in `raw/pdfs/`.
**5 of ~8 received** (3 more expected). These are gold for service-page copy, stats and
proof points — to be re-skinned in our design, with branch contacts swapping in.

### 6a. Cleaning for Business Health (office segment)
- **Proof stats:** 94% of visitors would avoid a business after encountering a dirty restroom ·
  R12bn/yr production loss from absenteeism (SA economy) · "We clean for health, not just appearance."
- **Office hotspots for dirt/dust/bacteria:** washroom ablutions, kitchen & eating areas,
  carpets & waste disposal, storage, office equipment, external areas.
- **Areas cleaned** — *Office:* carpets, hard flooring, soft furnishings, all horizontal/vertical
  surfaces, glass/windows/skylights/waste bins. *Washrooms:* all surfaces, urinals, toilets,
  basins, feminine-hygiene bins, showers. *Kitchen/eating:* surfaces, utensils, appliances,
  canopies, fat traps, waste bins. *External:* waste-disposal areas, parking/courtyards,
  undercover parking, garden surfaces (weeds, grass).
- **Specialised:** deep cleaning of ablutions & kitchens, carpets, computers & office equipment,
  ceilings & air vents.
- **Benefits angle:** fewer slips/trips, better tool/inventory control, reduced property damage,
  decreased fire hazards, eco-friendly products, "improved morale = improved productivity."

### 6b. Hospitality Industry Cleaning
- **Proof stats:** 9/10 wouldn't return to a hotel/guest house they perceived as dirty ·
  10g dead skin shed/week · 200× more faecal bacteria on avg cutting board than a toilet seat ·
  microbes float ~2 weeks after flushing · 90% more dust on carpets than floorboards ·
  up to 10 million mites in a mattress.
- **Facility types:** Hotels · Guest Houses · B&Bs · Lodges · Conference Centres · Casinos ·
  Golf Clubs · Country Clubs · Event Venues · Restaurants & Pubs.
- **Areas:** rooms & bathrooms, kitchen, F&B serving areas, gym, swimming pool & spa,
  lounge areas, public restrooms, external areas.
- **Services:** basic housekeeping (surfaces, bins, glass, beds/linen, floors/carpets, dusting,
  in-stay restroom cleaning, restocking) · kitchen & food-service cleaning (sanitising,
  stoves/fryers/grills/ovens, floors, under-cooker mopping) · restroom cleaning & sanitation ·
  kitchen deep cleaning (canopy, fat traps, biological dosing) · ablution deep cleaning
  (tile/grout, mould/mildew) · plus mattress, upholstery, carpet, window, office, spa, high-level.

### 6c. Managed Properties Cleaning
- **Clients:** realtors · property managers · building contractors · property owners & tenants.
- **Property types:** apartment · house · holiday home · gated community.
- **Services:** pre-occupation · post-occupation · end-of-tenancy · post-renovation ·
  pre/post-event (open houses & showings) · managed holiday homes · common areas in residential
  estates/apartment blocks/townhouse complexes · cleaning of newly built premises (offices,
  factories, hotels, hostels, houses) · high-level access & difficult-to-reach areas.
- **Room-by-room** solutions covered (living room, bedrooms, bathrooms, kitchen & dining, hallway)
  + **common areas:** lobbies, corridors, canteen, lobby washrooms, stairways, parking/ramps/
  driveways, laundry rooms, rooftops, elevators, store rooms, security guard houses, waste areas.

### 6d. Window & Common Areas Cleaning
- **Window:** internal atrium & skylight cleaning · high-level access cleaning (trained/certified
  teams, strict H&S) · contract cleaning (regular low & high-level, commercial + domestic) ·
  for office blocks, show rooms, factories, apartment complexes "and anywhere else with glass."
  Audiences: business owners, managing agents.
- **Common areas (8-point service):** lobby/corridor floors · vacuum carpets · entrances & glass
  doors · kitchen surfaces & floors · canteen/communal eating · washroom surfaces + replenish
  hygiene products · disinfect handrails & stairwell surfaces · elevator floors + disinfect walls
  & control panels. Coverage list: lobbies, corridors, canteen, lobby washrooms, stairways,
  parking/ramps/driveways, laundry rooms, rooftops, elevators, store rooms, security guard houses,
  waste-disposal areas.

### 6e. Pest – Bed Bugs + Mattress & Upholstery Cleaning
- **Bed bugs:** infestation is unrelated to cleanliness; bed bugs are nocturnal blood-feeding
  parasites that travel via luggage/belongings/furniture/clothing; need an experienced pest
  specialist. Early-detection signs in mattress seams, sheets, furniture, behind baseboards,
  outlet plates, picture frames (black-to-brown stains/mounds).
- **Mattress (5-step clean):** 1) vacuum dry dust/dead skin/mite excrement · 2) treat to kill
  viruses/bacteria/mould spores · 3) treat stains (incl. urine) · 4) deodorise/neutralise odour
  (incl. cigarette smoke) · 5) avoid over-dampening (bed usable within 20 min).
  Stats: new mattress infested with dust mites in ~6 months · 25% of allergies due to dust mites ·
  90% of dust mites live in the mattress · 300 dust mites fit on a match head.
- **Upholstery:** cleaning, spot removal & deodorising of sofas, chairs, cushions, curtains,
  drapes; handles cotton, wool, polyester, suede, leather, etc.
- **CTA throughout:** "Contact us for a FREE assessment and quotation."

> Note: brochures carry **head-office** contact (0860 08 08 08 / thespecialists.co.za). On the
> new branch site these become **Nelspruit/Highveld** contacts (§2); use the copy/stats, swap the numbers.

## 7. Open questions for later (not blocking)
- Confirm whether the new site preserves the exact 22 paths or 301-maps them.
- Confirm primary public phone/email to surface site-wide vs per-branch.
- Confirm whether all three "geographies" (Nelspruit, Highveld, Mbombela-Emalahleni) become
  city pages in our structure, and how the Highveld **PPC** landing page is handled.
- Images deferred per client instruction (do later).
