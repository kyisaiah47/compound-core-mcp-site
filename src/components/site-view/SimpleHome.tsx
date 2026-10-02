'use client';

/* THE SIMPLE HOME. The outcome, adding the server, one tool explained, what calls cost, next steps.
 * Tools and prices are read from lib/captured.ts, which scripts/capture.mjs writes from the
 * package's own tools/list and ParseRail's pricing.json. Nothing here types a price. */
import Link from 'next/link';
import { CREDIT_USD, PRICES, TOOLS, COLLECTIONS, COLLECTION_OF, CAPTURED_AT } from '@/lib/captured';
import { PRODUCT } from '@/lib/product';
import { CLAUDE_CODE_COMMAND, MCP_SERVERS_JSON } from '@/lib/install';
import CopyCommand from './CopyCommand';
import Disclosure from './Disclosure';
import ThemedSelect from './ThemedSelect';
import { useViewState } from './SiteViewProvider';

const CLIENTS = [
  { value: 'claude-code', label: 'Claude Code', text: CLAUDE_CODE_COMMAND, how: 'Run this in your terminal.' },
  {
    value: 'json',
    label: 'Claude Desktop or Cursor',
    text: MCP_SERVERS_JSON,
    how: 'Add this entry to the client’s mcpServers configuration.',
  },
];

/* The two calls the Console's ledger marks free, by the same keys. */
const FREE = new Set(['late-fee-rules', 'account']);

type Tool = (typeof TOOLS)[number];
const usd = (n: number) => `$${n.toFixed(2)}`;
const what = (t: Tool) => t.description.replace(/ Costs credits from the account wallet\.$/, '');

function cost(t: Tool): string {
  if (FREE.has(t.key)) return 'This call is free.';
  const p = PRICES[t.key as keyof typeof PRICES];
  return p
    ? `A successful call costs ${p.credits} credits, which is ${usd(p.usd)} per ${p.unit}.`
    : 'The pricing document lists no price for this call.';
}

export default function SimpleHome() {
  const [client, setClient] = useViewState('simple:client', CLIENTS[0].value);
  const [toolName, setToolName] = useViewState<string>('simple:tool', TOOLS[0].name);
  const c = CLIENTS.find((x) => x.value === client) ?? CLIENTS[0];
  const tool = TOOLS.find((t) => t.name === toolName) ?? TOOLS[0];
  const group = COLLECTIONS.find((g) => g.key === COLLECTION_OF[tool.key])?.title ?? 'Account';
  const parse = PRICES.parse;
  const extract = PRICES.extract;
  const classify = PRICES.classify;

  return (
    <div className="sv-home">
      <section className="sv-hero">
        <div className="sv-pitch">
          <span className="sv-eyebrow">
            {PRODUCT.packageName} · {PRODUCT.version}
          </span>
          <h1>ParseRail gives an MCP client native document and data tools.</h1>
          <p>
            An MCP server for ParseRail gives Claude, Cursor, and any Model Context Protocol client native tools to
            parse documents, extract fields, redact PII, analyze contracts, fight chargebacks, and enrich companies.
          </p>
          <div className="sv-qualifier">
            You pay per successful call. One credit is {usd(CREDIT_USD)}. No subscription is required.
          </div>
        </div>

        <div className="sv-card" id="start">
          <div className="sv-step">
            <span>01 / ADD THE SERVER</span>
            <span>STDIO</span>
          </div>
          <h2>Add ParseRail to your client.</h2>
          <p className="sv-card-sub">Pick your client and copy the setup. Put your API key where it says ksk_live_….</p>
          <ThemedSelect label="Your client" options={CLIENTS} value={c.value} onChange={setClient} />
          <CopyCommand
            command={c.text}
            label={c.how}
            multiline={c.text.includes('\n')}
          />
          <p className="sv-terms">
            Get a key and buy credits at{' '}
            <a href={PRODUCT.api} target="_blank" rel="noreferrer">
              parserail.thecompound.tech
            </a>
            .
          </p>
        </div>
      </section>

      <section className="sv-section" id="example" aria-live="polite">
        <div className="sv-section-intro">
          <div>
            <span className="sv-eyebrow">02 / WHAT YOUR CLIENT GETS</span>
            <h2>{TOOLS.length} tools run one at a time.</h2>
          </div>
          <p>Pick a tool to see what it does, what it needs and what one call costs.</p>
        </div>
        <div className="sv-result">
          <div className="sv-step">
            <span>EXAMPLE · ONE TOOL</span>
            <span>{tool.name}</span>
          </div>
          <ThemedSelect
            label="Tool"
            options={TOOLS.map((t) => ({ value: t.name, label: t.title }))}
            value={tool.name}
            onChange={setToolName}
          />
          <div className="sv-result-summary">
            <h3>
              {tool.title}: {what(tool)}
            </h3>
            <p>{cost(tool)}</p>
          </div>
          <Disclosure title="What the call needs">
            <dl className="sv-facts">
              <div>
                <dt>Required inputs</dt>
                <dd>{tool.required.length ? tool.required.map((r) => <code key={r}>{r} </code>) : 'None'}</dd>
              </div>
              <div>
                <dt>Optional inputs</dt>
                <dd>{tool.optional.length ? tool.optional.map((r) => <code key={r}>{r} </code>) : 'None'}</dd>
              </div>
              <div>
                <dt>Group</dt>
                <dd>{group}</dd>
              </div>
              <div>
                <dt>Changes anything</dt>
                <dd>{tool.readOnly ? 'No. It only reads.' : 'It runs work on ParseRail and debits credits.'}</dd>
              </div>
            </dl>
            <p>Documents can be passed as fileUrl, raw text, or fileBase64 with fileMimeType.</p>
          </Disclosure>
          <p className="sv-note">
            This describes one tool from the package&rsquo;s own tool list, read on {CAPTURED_AT}. Nothing ran on your
            documents.
          </p>
        </div>
      </section>

      <section className="sv-section" id="cost">
        <div className="sv-section-intro">
          <div>
            <span className="sv-eyebrow">03 / WHAT IT COSTS</span>
            <h2>You pay for each successful call.</h2>
          </div>
          <p>ParseRail uses pay-per-call credits and requires no subscription. You pay only when a call succeeds.</p>
        </div>
        <div className="sv-cards">
          <div>
            <h3>One credit costs {usd(CREDIT_USD)}.</h3>
            <p>ParseRail has no free tier. You buy credits up front through a $20 pack or a plan from $19/mo. The credits come out of the account wallet.</p>
          </div>
          <div>
            <h3>Common calls</h3>
            <p>
              A document parse costs {parse.credits} credits ({usd(parse.usd)}). Field extraction costs{' '}
              {extract.credits} credits ({usd(extract.usd)}). Classification costs {classify.credits} credits (
              {usd(classify.usd)}).
            </p>
          </div>
          <div>
            <h3>Free calls</h3>
            <p>Account balance reads are free. The US late-fee ceilings dataset is free and needs no key.</p>
          </div>
        </div>
      </section>

      <nav className="sv-home-links" aria-label="Next steps">
        <Link href="/guides/install-parserail-mcp">Read the install guide ↗</Link>
        <a href={PRODUCT.api} target="_blank" rel="noreferrer">
          Get a ParseRail key ↗
        </a>
        <a href={PRODUCT.repo} target="_blank" rel="noreferrer">
          Read the source ↗
        </a>
      </nav>
    </div>
  );
}
