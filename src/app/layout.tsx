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
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: PRODUCT.name, applicationCategory: 'DeveloperApplication', publisher: { '@type': 'Organization', '@id': 'https://thecompound.tech/#organization', name: 'Compound Labs', url: 'https://thecompound.tech' } };
  return <html lang="en" className={mono.variable}><body><SmoothScroll />{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></body></html>;
}
