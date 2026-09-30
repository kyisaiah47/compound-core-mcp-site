import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import { PRODUCT } from '@/lib/product';
import './globals.css';

const mono = IBM_Plex_Mono({ variable: '--font-mono', subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata: Metadata = {
  title: `${PRODUCT.name} MCP | metered tool calls`,
  description: 'The parserail-mcp tool surface, with each call and its current credit cost.',
  metadataBase: new URL(`https://${PRODUCT.host}`),
  alternates: { canonical: '/' },
  openGraph: { title: `${PRODUCT.name} MCP | metered tool calls`, description: 'Native ParseRail document and data tools for an MCP client, with visible pay-per-call costs.', url: `https://${PRODUCT.host}`, siteName: PRODUCT.name, type: 'website', images: [{ url: 'https://parserail.thecompound.tech/og.jpg', width: 1200, height: 630, alt: 'ParseRail MCP document and data tools' }] },
  twitter: { card: 'summary_large_image', title: `${PRODUCT.name} MCP | metered tool calls`, description: 'Native ParseRail document and data tools for an MCP client.', images: ['https://parserail.thecompound.tech/og.jpg'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: PRODUCT.name, applicationCategory: 'DeveloperApplication', publisher: { '@type': 'Organization', '@id': 'https://thecompound.tech/#organization', name: 'Compound Labs', url: 'https://thecompound.tech' } };
  return <html lang="en" className={mono.variable}><body><SmoothScroll />{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></body></html>;
}
