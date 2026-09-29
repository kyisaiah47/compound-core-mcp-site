#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => fs.readFileSync(path.join(ROOT, file), 'utf8');
const fail = (message) => { console.error(`FAIL ${message}`); process.exitCode = 1; };
const css = read('src/app/globals.css');
const product = read('src/lib/product.ts');
const page = read('src/app/page.tsx');
const files = ['src/app/globals.css', 'src/app/page.tsx', 'src/app/layout.tsx', 'src/lib/product.ts', 'src/components/SmoothScroll.tsx', 'scripts/deploy.sh'];

for (const file of files) {
  const text = read(file);
  if (/[\u2013\u2014\u2015\u2212]/u.test(text)) fail(`wide dash in ${file}`);
}
const accentHomes = ['src/app/globals.css', 'src/lib/product.ts'];
for (const file of files) if (!accentHomes.includes(file) && /#82C57E/i.test(read(file))) fail(`accent escaped its register in ${file}`);
if (!/#82C57E/.test(css) || !/#94D891/.test(css)) fail('accent or hover is missing');
if (/\.cost[^}]*var\(--accent/.test(css)) fail('accent paints a charge');
const h1 = Number(/h1\s*\{[^}]*font-size:clamp\(\d+px,[^,]+,(\d+)px/.exec(css)?.[1] || 0);
if ([...css.matchAll(/font-size:\s*(\d+)px/g)].some((match) => Number(match[1]) > h1)) fail('a fixed type size exceeds the h1 register');
if (/img[^}]*width:\s*100%/.test(css)) fail('a picture takes the reading column');
if (!/allowNestedScroll:\s*true/.test(read('src/components/SmoothScroll.tsx')) || !/lerp:\s*0\.35/.test(read('src/components/SmoothScroll.tsx'))) fail('Lenis register is incomplete');
if (!/prefers-reduced-motion/.test(read('src/components/SmoothScroll.tsx'))) fail('Lenis does not yield to reduced motion');
if (!/Built by/.test(page) || !/studio-credit-mark/.test(page) || !/hello@thecompound.tech/.test(page) || !/publisher/.test(read('src/app/layout.tsx'))) fail('Compound Labs credit is incomplete');
if ((product.match(/url:/g) || []).length < 8 || !/quote:/.test(product) || !/read_at:/.test(product)) fail('sources register is incomplete');
const deploy = read('scripts/deploy.sh');
if (!/npm run check/.test(deploy) || deploy.indexOf('\nnpm run check') > deploy.indexOf('\nnpx opennextjs-cloudflare build')) fail('deploy gate does not run before build');
if (!fs.existsSync(path.join(ROOT, 'src/app/robots.ts')) || !fs.existsSync(path.join(ROOT, 'src/app/sitemap.ts')) || !fs.existsSync(path.join(ROOT, 'src/app/llms.txt/route.ts'))) fail('crawl surface is incomplete');
if (process.exitCode) process.exit(1);
console.log('register: accent, type, claims, credit, Lenis, routes, and deploy order pass');
