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

---

# 3D Cinematic Showroom (`/cinematic/`)

An immersive, real-time WebGL experience: while you scroll, the camera flies through a virtual Diadema showroom past golden archways, gowns on pedestals, a floating tiara, Dinara's portrait and the atelier podium.

| Requirement | Implementation |
|---|---|
| Three.js showroom | `cinematic/src/scene.js`: arch corridor with neon-gold trims, drapes, glossy floor, 4 procedural gowns on pedestals, crystal tiara, founder portrait, customizer podium, 2,600 shader-driven gold particles |
| Scroll-linked camera | `cinematic/src/main.js`: any element with `data-k="n"` is a camera waypoint. One GSAP ScrollTrigger timeline is scrubbed over the full scroll length and moves the camera along Catmull-Rom position and look-at splines |
| Post-processing | `EffectComposer`: Render → **Bokeh DOF** (focus follows the look-at target) → **Unreal Bloom** → Output → custom **film pass** (vignette, grain, chromatic aberration, warm grade) |
| Glass UI + Lenis | Tailwind glass panels for Hero, Collection, Founder Story, Atelier and VIP Booking. Lenis is driven by `gsap.ticker` and synced with `ScrollTrigger.update` |
| 3D customizer | `cinematic/src/dress.js`: lathe-built gown with pleats and a train. Drag to rotate (with inertia and idle auto-turn). Switch silhouette (Malika / A-siluet / Rusalka / Minimal), fabric (Atlas / Mikado / Tyul / Kruzheva lace) and 6 colours, and toggle the crystals. "Shu obrazni band qilish" copies the design into the VIP form |
| VIP booking | Sends a pre-filled request via Telegram or WhatsApp. Edit `CONTACTS` at the top of `cinematic/src/main.js` |

**Performance:** on phones and low-core devices it switches to a lighter mode: no DOF or shadows, fewer particles, lower pixel ratio. Rendering pauses in hidden tabs. `prefers-reduced-motion` turns off smooth scrolling. Without WebGL, the page falls back to a static gradient background.

**Build:** sources live in `cinematic/src/`; the compiled `cinematic/assets/app.js` and `app.css` are committed. Three.js, GSAP and Lenis are bundled locally, so there are no CDN dependencies.
```bash
npm install
npm run build:cinematic
npm run serve:cinematic        # http://localhost:4173/cinematic/
```
On macOS you can also double-click `Launch Showroom.command`.

## Deploy (Vercel)
`vercel.json` skips installing and builds nothing: `scripts/dist.mjs` only copies the prebuilt files into `public/`:
- `/` → 3D Cinematic Showroom
- `/klassik/` → classic landing page (UZ/RU)

Run `npm run build:all` before pushing if you changed any source files. Leave "Build Command" and "Output Directory" in Vercel Project Settings empty so `vercel.json` takes effect.
