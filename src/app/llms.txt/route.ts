import { PRODUCT, SOURCES } from '@/lib/product';
import { ROUTES } from '@/app/sitemap';
export function GET() { return new Response(`# ${PRODUCT.name}\n\n${PRODUCT.packageName} is an MCP server for ParseRail.\n\nRoutes:\n${ROUTES.map((route) => `- https://${PRODUCT.host}${route}`).join('\n')}\n\nSources:\n${SOURCES.map((source) => `- ${source.cite}: ${source.url}`).join('\n')}\n`, { headers: { 'content-type': 'text/plain; charset=utf-8' } }); }
