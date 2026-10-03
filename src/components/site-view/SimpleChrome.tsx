'use client';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { PRODUCT } from '@/lib/product';
import Mark from './Mark';
import ViewControls from './ViewControls';

export function SimpleHeader() {
  return (
    <header className="sv-nav">
      <Link className="sv-brand" href="/" aria-label={`${PRODUCT.name} MCP home`}>
        <span className="sv-mark">
          <Mark />
        </span>
        {PRODUCT.name} MCP
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#start">Add the server</Link>
        <Link href="/#example">Tools</Link>
        <Link href="/#cost">Pricing</Link>
        <Link href="/guides/install-parserail-mcp">Guide</Link>
      </nav>
    </header>
  );
}

export function SimpleFooter() {
  return (
    <footer className="sv-footer">
      <div>
        <Link href="/">
          {PRODUCT.name} MCP · {PRODUCT.packageName}
        </Link>
        <nav aria-label="Footer">
          <Link href="/guides/install-parserail-mcp">Install guide</Link>
          <a href={PRODUCT.repo} target="_blank" rel="noreferrer">
            Repository ↗
          </a>
          <a href={PRODUCT.api} target="_blank" rel="noreferrer">
            ParseRail ↗
          </a>
          <a href="mailto:hello@thecompound.tech">Contact ↗</a>
        </nav>
        <p className="sv-credit">
          <a href="https://thecompound.tech">Built by Compound Labs</a>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="studio-credit-mark" src="/brand/compound-labs.svg" alt="Compound Labs" width={20} height={20} />
        </p>
      </div>
      <ViewControls />
    </footer>
  );
}

export function SimpleFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <SimpleHeader />
      <main className="sv-main">{children}</main>
      <SimpleFooter />
    </>
  );
}
