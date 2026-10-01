import Link from 'next/link';
import PageViews from '@/components/site-view/PageViews';
import ViewControls from '@/components/site-view/ViewControls';
import SimplePage from '@/components/site-view/SimplePage';
import { SimpleFrame } from '@/components/site-view/SimpleChrome';
import { MARK_INNER, MARK_VIEWBOX } from '@/icons/mark.generated';
import { PRODUCT } from '@/lib/product';

/* A missing page, in whichever view the visitor reads. Both views offer the way back. */
export default function NotFound() {
  const links = (
    <nav className="sv-home-links" aria-label="Next steps">
      <Link href="/">Back to the tools ↗</Link>
      <Link href="/guides/install-parserail-mcp">Read the install guide ↗</Link>
      <a href={PRODUCT.repo} target="_blank" rel="noreferrer">Read the source ↗</a>
    </nav>
  );
  return (
    <PageViews
      simpleView={
        <SimpleFrame>
          <SimplePage eyebrow="PARSERAIL MCP" title="This page does not exist" intro={<p>The address may be old, or it may have a typo.</p>}>
            {links}
          </SimplePage>
        </SimpleFrame>
      }
      consoleView={
        <>
          <header className="topbar">
            <div className="topbar-inner">
              <Link className="brand" href="/">
                <svg className="brand-mark" aria-hidden="true" viewBox={MARK_VIEWBOX} dangerouslySetInnerHTML={{ __html: MARK_INNER }} />
                <span>{PRODUCT.name}</span>
                <span className="brand-type">MCP</span>
              </Link>
            </div>
          </header>
          <main className="guide section-frame">
            <h1>This page does not exist.</h1>
            <p className="guide-answer">The address may be old, or it may have a typo.</p>
            {links}
          </main>
          <footer className="footer">
            <div className="section-frame">
              <ViewControls />
            </div>
          </footer>
        </>
      }
    />
  );
}
