import Link from 'next/link';
import { PRODUCT } from '@/lib/product';
import PageViews from '@/components/site-view/PageViews';
import ViewControls from '@/components/site-view/ViewControls';
import { SimpleFrame } from '@/components/site-view/SimpleChrome';

export const metadata = {
  title: 'How much does ParseRail MCP cost in 2026?',
  description: 'ParseRail MCP pricing in 2026 covers its no-free-tier policy, prepaid credits from a $20 pack or a $19/mo plan, pay-per-call billing, and balance checks before tool calls.',
  alternates: { canonical: '/guides/parserail-mcp-cost' },
};

function GuideBody() {
  return <>
    <p className="eyebrow"><span className="signal" /> parserail-mcp · pricing / 02 OCT 2026</p>
    <h1>How much does ParseRail MCP cost in 2026?</h1>
    <p className="guide-answer">ParseRail MCP has no free tier. The README fetched on 2 October 2026 says you buy credits up front through a $20 pack or a plan from $19/mo. Successful calls debit the ParseRail wallet. Check the account balance before a workflow. Then choose the tool whose published credit price fits the job. The same README says an unsuccessful call is not charged.</p>
    <section className="guide-section"><h2>What does one ParseRail MCP credit cost?</h2><p>ParseRail&apos;s current product documentation describes a single credit wallet and pay-per-call endpoints, but the MCP README does not put a universal per-tool price in the package itself. Prices vary by endpoint, so use the live pricing surface linked from the MCP site instead of copying a remembered figure into a budget. The README&apos;s durable rule is: “you&apos;re only charged on a successful call,” fetched 2 October 2026.</p></section>
    <section className="guide-section"><h2>How do you check cost before calling a tool?</h2><p>Use this four-step procedure when wiring a client or estimating a document workflow:</p><ol><li>Open the <a href="https://parserail.thecompound.tech/docs/credits" target="_blank" rel="noreferrer">ParseRail credits and pricing documentation</a> and identify the endpoint price for the operation you need.</li><li>Connect <code>parserail-mcp</code> with <code>PARSERAIL_API_KEY</code>; the package README documents Claude Code, Claude Desktop, Cursor, and other MCP clients.</li><li>Call <code>parserail_account</code> first to read the wallet balance before sending a paid document or text request.</li><li>Run the task and record the endpoint, credits charged, and result; only a successful call should debit the wallet under the README&apos;s 2 October 2026 billing statement.</li></ol></section>
    <section className="guide-section"><h2>ParseRail MCP monthly subscription pricing</h2><p>You do not need a subscription. You pay at least $20 for a one-time credit pack. You pay at least $19/mo for a monthly plan, which adds its price in credits every month. ParseRail has no free tier, so you must buy credits before a call. The live endpoint price is the source of truth for each call.</p></section>
    <section className="guide-sources"><h2>Sources read 2 October 2026</h2><ul><li><a href="https://github.com/kyisaiah47/parserail-mcp#readme" target="_blank" rel="noreferrer">parserail-mcp README</a>: no free tier, supported clients, balance tool, and successful-call billing.</li><li><a href="https://parserail.thecompound.tech/docs" target="_blank" rel="noreferrer">ParseRail documentation</a> — current credits and pricing documentation route and one-wallet model.</li><li><a href="https://parserail.thecompound.tech/docs/credits" target="_blank" rel="noreferrer">ParseRail credits and pricing</a> — live endpoint pricing destination linked by the documentation.</li></ul></section>
  </>;
}

export default function ParserailMcpCostGuide() {
  const body = <GuideBody />;
  return <PageViews
    simpleView={<SimpleFrame><div className="sv-page"><div className="sv-guide">{body}</div><nav className="sv-home-links" aria-label="Next steps"><Link href="/guides/install-parserail-mcp">Install the server ↗</Link><Link href="/#tools">See the tool surface ↗</Link></nav></div></SimpleFrame>}
    consoleView={<><header className="topbar"><div className="topbar-inner"><Link className="brand" href="/">{PRODUCT.name}<span className="brand-type">MCP</span></Link><span className="standing">PRICING GUIDE / 02 OCT 2026</span><nav><Link href="/">Tool surface</Link><Link href="/guides/install-parserail-mcp">Install guide</Link></nav></div></header><main className="guide section-frame">{body}</main><footer className="footer"><div className="section-frame footer-inner"><p>ParseRail MCP · <Link href="/">Back to the tool surface</Link></p></div><div className="section-frame"><ViewControls /></div></footer></>}
  />;
}
