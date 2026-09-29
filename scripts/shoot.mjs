#!/usr/bin/env node
import { chromium } from 'playwright';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const base = process.argv.find((arg) => arg.startsWith('http')) ?? 'http://localhost:3313';
const root = resolve(new URL('..', import.meta.url).pathname);
const out = resolve(root, 'review');
rmSync(out, { recursive: true, force: true }); mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ headless: true, executablePath: '/Users/admin/Library/Caches/ms-playwright/chromium-1243/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await page.goto(base, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const height = await page.evaluate(() => document.documentElement.scrollHeight);
const tiles = Math.ceil(height / 900);
for (let i = 0; i < tiles; i++) { await page.evaluate((y) => scrollTo(0, y), i * 900); await page.waitForTimeout(220); await page.screenshot({ path: resolve(out, `home-${String(i + 1).padStart(2, '0')}.png`) }); }
const box = await page.evaluate(() => ({ clientWidth: document.documentElement.clientWidth, scrollWidth: document.documentElement.scrollWidth }));
writeFileSync(resolve(out, 'ledger.json'), JSON.stringify({ at: new Date().toISOString(), vw: 1440, height, tiles, ...box }, null, 1));
await browser.close();
if (box.scrollWidth > box.clientWidth + 1) process.exit(1);
console.log(`shot / at 1440, ${tiles} tile(s), ${height}px tall`);
