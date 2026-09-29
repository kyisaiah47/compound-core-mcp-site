export const PRODUCT = {
  name: 'ParseRail',
  packageName: 'parserail-mcp',
  slug: 'compound-core-mcp',
  version: '0.5.5',
  host: 'compound-core-mcp.thecompound.tech',
  repo: 'https://github.com/kyisaiah47/compound-core-mcp',
  api: 'https://parserail.thecompound.tech',
  accent: '#82C57E',
  accentHover: '#94D891',
} as const;

export const SOURCES = [
  { id: 'readme-identity', quote: 'An MCP server for **[ParseRail](https://parserail.thecompound.tech)**, gives Claude, Cursor, and any Model Context Protocol client native tools', cite: 'README.md', url: 'https://github.com/kyisaiah47/compound-core-mcp#readme', read_at: '2026-09-29' },
  { id: 'readme-setup', quote: 'Get a key (and 500 free credits) at **[parserail.thecompound.tech](https://parserail.thecompound.tech)**, then add the server to your MCP client config.', cite: 'README.md', url: 'https://github.com/kyisaiah47/compound-core-mcp#setup', read_at: '2026-09-29' },
  { id: 'readme-inputs', quote: 'Documents can be passed as `fileUrl`, raw `text`, or `fileBase64` + `fileMimeType`.', cite: 'README.md', url: 'https://github.com/kyisaiah47/compound-core-mcp#tools', read_at: '2026-09-29' },
  { id: 'readme-pricing', quote: 'Pay-per-call credits, no subscription, you\'re only charged on a successful call.', cite: 'README.md', url: 'https://github.com/kyisaiah47/compound-core-mcp#pricing', read_at: '2026-09-29' },
  { id: 'source-server', quote: 'const server = new McpServer({ name: "parserail-mcp", version: "0.5.5" });', cite: 'src/index.ts', url: 'https://github.com/kyisaiah47/compound-core-mcp/blob/master/src/index.ts', read_at: '2026-09-29' },
  { id: 'source-tools', quote: 'Every ParseRail capability tool has the same shape: it calls the hosted API, debits the account\'s credit wallet, and returns a result.', cite: 'src/index.ts', url: 'https://github.com/kyisaiah47/compound-core-mcp/blob/master/src/index.ts', read_at: '2026-09-29' },
  { id: 'source-free', quote: 'Free public dataset, no key, no credits. Served from api.parserail.studio.', cite: 'src/index.ts', url: 'https://github.com/kyisaiah47/compound-core-mcp/blob/master/src/index.ts', read_at: '2026-09-29' },
  { id: 'pricing-json', quote: '"credit_usd": 0.01', cite: 'pricing.json', url: 'https://parserail.thecompound.tech/pricing.json', read_at: '2026-09-29' },
  { id: 'openapi-async', quote: 'async', cite: 'openapi.json', url: 'https://parserail.thecompound.tech/openapi.json', read_at: '2026-09-29' },
] as const;
