import type { MetadataRoute } from 'next';
import { PRODUCT } from '@/lib/product';
export const ROUTES = ['/', '/guides/install-parserail-mcp', '/guides/parserail-mcp-cost'] as const;
export default function sitemap(): MetadataRoute.Sitemap { return ROUTES.map((path) => ({ url: `https://${PRODUCT.host}${path}`, lastModified: new Date('2026-09-29') })); }
