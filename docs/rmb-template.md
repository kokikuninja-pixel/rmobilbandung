# RMB Template Rules

RMB is the **reference landing template**. Other brands (RMC, RMJP, Nethen) must keep the same structure and only change theme tokens + content via brand config.

## Architecture

```text
src/brands/
  types.ts      # shared BrandConfig shape
  rmb.ts        # RMB reference tokens
  index.ts      # getBrand() + helpers (WA, site URL, GTM, Ads)
```

Active brand: `NEXT_PUBLIC_BRAND=rmb` (default).

## Homepage section order (do not reorder casually)

1. Header  
2. Hero  
3. About  
4. Fleet  
5. Process  
6. Pricing  
7. Testimonials  
8. FAQ  
9. OrderForm (`#pesan`)  
10. CTA  
11. Footer  
12. Floating WhatsApp  

## Design tokens (RMB)

| Token | Role |
| --- | --- |
| Primary yellow `43 100% 54%` | CTA / accent |
| Foreground olive `80 24% 9%` | Text / dark surfaces |
| Background cream `43 67% 96%` | Page background |
| Font sans | Inter |
| Font display | Plus Jakarta Sans |

Theme CSS lives in `src/app/globals.css`. Brand theme values are also listed in `src/brands/rmb.ts` for multi-brand cloning.

## SEO rules (Ads + organic)

- Canonical & Open Graph always use production HTTPS domain via `getSiteUrl()`  
- Structured data: `LocalBusiness` + `WebSite` (layout), `FAQPage` (home + `/faq`)  
- Location SEO pages use `generateSeoMetadata()` with OG/Twitter  
- `/admin` disallowed in `robots.ts`  
- Do not put `localhost` in `NEXT_PUBLIC_SITE_URL` on Vercel  


- Primary conversion path: form `#pesan` → WhatsApp prefilled message  
- Secondary: floating WA button + section CTA + FAQ CTA  
- Promo popup (scarcity): once per session, after delay/scroll — copy in `brand.promoPopup`  
- Tracking: **GTM only** (`NEXT_PUBLIC_GTM_ID`). Configure Google Ads tags inside GTM — do not dual-load gtag.js.  
- WhatsApp number comes from `getWhatsAppNumber()` / env override  
- Do not invent new CTA patterns per brand; restyle only  
- Avoid fake countdown timers that hurt trust / Ads quality  

## What other brands may change

- Colors / logo / OG image  
- Copy, FAQ, fleet, pricing data  
- Domain, WhatsApp, GTM, Ads IDs  
- Social links  
- SEO location list  

## What other brands must keep

- Section order and IA (Information Architecture)  
- Route shapes (`/armada`, `/harga`, `/#pesan`, SEO location pages)  
- WhatsApp-first conversion (no required backend)  
- Shared components under `src/components` + `src/sections`  

## Adding a new brand (later)

1. Copy `src/brands/rmb.ts` → `src/brands/<id>.ts`  
2. Register in `src/brands/index.ts`  
3. Add assets under `public/images/` (or `public/brands/<id>/`)  
4. Deploy a Vercel project with `NEXT_PUBLIC_BRAND=<id>` + env overrides  
