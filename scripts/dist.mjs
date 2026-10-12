// Assemble the static site into ./public for hosting (Vercel, Netlify, etc.).
// CSS/JS bundles are prebuilt and committed, so this only copies files.
import { cpSync, rmSync, mkdirSync, existsSync } from 'node:fs';

const OUT = 'public';
const FILES = ['index.html', 'assets', 'cinematic/index.html', 'cinematic/assets'];

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
for (const f of FILES) {
  if (!existsSync(f)) throw new Error(`Missing ${f} — run "npm run build:all" first`);
  cpSync(f, `${OUT}/${f}`, { recursive: true });
}
console.log(`Static site ready in ./${OUT}`);
