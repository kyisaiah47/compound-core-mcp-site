/* The two setup texts the install guide publishes, in one place for the Simple view. The key is
 * redacted exactly as the guide redacts it. */
export const CLAUDE_CODE_COMMAND = 'claude mcp add parserail -e PARSERAIL_API_KEY=ksk_live_… -- npx -y parserail-mcp';

export const MCP_SERVERS_JSON = `{
  "mcpServers": {
    "parserail": {
      "command": "npx",
      "args": ["-y", "parserail-mcp"],
      "env": { "PARSERAIL_API_KEY": "ksk_live_…" }
    }
  }
}`;
