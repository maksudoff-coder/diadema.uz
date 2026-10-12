# Diadema — Bridal Salon & Beauty Studio (Farg'ona)

Luxury, mobile-first landing page for **Diadema** (@diademauz.official), founded by **Dinara Nishanova** (@dinara_nishanovaa).
Wedding dress rental (Прокат свадебных платьев) + beauty services (Beauty услуги). Uzbek by default, with a Russian toggle (UZ / RU).

## Stack
- Static HTML5 + **Tailwind CSS v3** (compiled, purged → ~38 KB CSS) + vanilla JS (no frameworks, no runtime deps)
- Fonts: Cormorant Garamond (serif) + Jost (sans) via Google Fonts
- Illustrated SVG placeholders are generated in JS, so the site looks finished before real photos arrive

## Structure
```
index.html            all sections: hero, about, services, catalog, how-it-works, beauty & packages,
                      gallery, testimonials, FAQ, booking form + map, footer
src/input.css         Tailwind source (design tokens & components)
tailwind.config.js    brand palette: ivory, blush, champagne/gold, cocoa
assets/css/styles.css compiled CSS (committed, ready to deploy)
assets/js/data.js     ← EDIT: contacts, dress catalog, gallery
assets/js/i18n.js     Russian translations + UI strings
assets/js/main.js     menu, filters, modal, lightbox, booking → Telegram/WhatsApp, language switch
assets/img/           favicon; put photos here
```

## Before launch: things to replace
1. **Contacts**: `assets/js/data.js` → `contacts` (phone, Telegram username). Also update the `tel:` and `t.me` fallbacks and the JSON-LD `telephone` in `index.html` (search `+998900000000` and `diademauz`).
2. **Photos**:
   - `assets/img/hero.jpg` (hero, portrait 3:4) and `assets/img/dinara.jpg` (portrait 4:5). They show up automatically once added.
   - Dresses: set `image: 'assets/img/dresses/<name>.jpg'` for each dress in `data.js`.
   - Gallery: set `src` for each item in `data.js`.
   - Use WebP/JPEG at about 1200px on the long side, under 250 KB each.
3. **Prices, stats (150+, 2k+, 8+), dress names and testimonials are sample content.** Replace them with real data and real client reviews before publishing.
4. **Map**: in `index.html`, replace the `iframe` `src` with Google Maps → Share → *Embed a map* for the exact salon address, and update the address text (`ct.addrV`).

## Develop
```bash
npm install
npm run dev     # watch & rebuild CSS
npm run serve   # http://localhost:3000
npm run build   # minified production CSS
```
After adding new Tailwind classes in HTML/JS, run `npm run build` and commit `assets/css/styles.css`.

## Deploy
The site is plain static files. Upload the repo root (without `node_modules`) to any host: GitHub Pages, Netlify, Vercel, or cPanel for the diadema.uz domain.

## Booking flow
The form checks name and phone, then opens a Telegram chat (`t.me/<username>?text=…`) or WhatsApp (`wa.me/<phone>?text=…`) with a pre-filled request. The request includes the chosen dress or package from the catalog modal or package cards. For Telegram, the text is also copied to the clipboard, because some clients ignore `?text=`.
