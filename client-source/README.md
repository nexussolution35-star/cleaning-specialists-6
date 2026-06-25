# client-source/ — Client materials & source of truth

Everything the client supplies about their **real** business lives here. It informs the
content of the new site (services, branches, contact details, service areas, redirects)
**without changing** the design system or page hierarchy already built in the repo root.

## What's here
```
client-source/
├── README.md                ← this file (index + intake log)
├── SOURCE-OF-TRUTH.md       ← consolidated, structured client intel (read this first)
├── extracted/               ← plain-text extraction of each PDF (searchable)
└── raw/                     ← original supplied files, preserved as-is
    ├── current-site_cleaningspecialist.co.za.zip   ← client's CURRENT live site (being replaced)
    ├── TCS_List_of_services.xlsx                    ← authoritative services list
    └── pdfs/                 ← original head-office segment brochures (PDF)
```

## Intake log
| Date | Item | Status |
|---|---|---|
| 2026-06-25 | `current-site_…zip` (22-page export + screenshots + `_routes.json`) | ✅ stored + extracted into SOURCE-OF-TRUTH.md |
| 2026-06-25 | `TCS_List_of_services.xlsx` | ✅ stored + extracted into SOURCE-OF-TRUTH.md |
| 2026-06-25 | Head-office segment brochures ×5 (Office Health, Hospitality, Managed Properties, Window/Common Areas, Bed Bugs/Mattress/Upholstery) | ✅ stored in `raw/pdfs/`, text in `extracted/`, summarised in SOURCE-OF-TRUTH §6 |
| — | Remaining brochures (~3 more) | ⏳ awaiting upload → `raw/pdfs/` |

## How to use this
1. **Building/editing content?** Pull facts from `SOURCE-OF-TRUTH.md`, not from memory.
2. **New PDF arrives?** Save it in `raw/pdfs/`, tell me, and I'll extract it and fold the
   relevant facts into `SOURCE-OF-TRUTH.md` (and flag anything that conflicts with what's there).
3. **Before launch:** verify every path in SOURCE-OF-TRUTH §1 still resolves on the new site.

## Guardrails
- This folder is **reference only** — nothing here is served by the site.
- The current live site in `raw/` is the site we're **replacing**, not extending.
- Images are deferred per the client; we tailor copy/structure first.
