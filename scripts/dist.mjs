// Assemble the static site into ./public for hosting (Vercel, Netlify, etc.).
// CSS/JS bundles are prebuilt and committed, so this only copies files.
//   /          → 3D cinematic showroom (cinematic/index.html)
//   /klassik/  → classic landing page (index.html)
import { cpSync, rmSync, mkdirSync, existsSync } from 'node:fs';

const OUT = 'public';
const MAP = {
  'cinematic/index.html': 'index.html',
  'cinematic/assets': 'cinematic/assets',
  'index.html': 'klassik/index.html',
  'assets': 'assets',
};

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
for (const [from, to] of Object.entries(MAP)) {
  if (!existsSync(from)) throw new Error(`Missing ${from} — run "npm run build:all" first`);
  cpSync(from, `${OUT}/${to}`, { recursive: true });
}
console.log(`Static site ready in ./${OUT}`);
