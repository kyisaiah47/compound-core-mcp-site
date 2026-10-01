/* GENERATED FILE. DO NOT EDIT, AND DO NOT DRAW THIS MARK ANYWHERE ELSE.
 *
 * Written by compound-ops/brand/app-icons/sync.mjs out of
 * compound-ops/brand/app-icons/icons/compound-core-mcp-site.svg, which is the estate's ONE source for this
 * app's mark. The browser tab, this app's own header and the product tile on the studio site
 * are the same drawing because all three are fed from that file. To change the mark, change it
 * there and run:
 *
 *   node ~/CompoundLabs/compound-ops/brand/app-icons/sync.mjs
 *
 * compound-ops/tools/gates/one-logo-per-app.mjs fails the nightly sweep when this file stops
 * matching the registry, or when a component starts drawing the mark by hand again.
 */
export const MARK_SLUG = "compound-core-mcp-site";
export const MARK_VIEWBOX = "0 0 64 64";
export const MARK_WIDTH = 64;
export const MARK_HEIGHT = 64;
/** The root <svg>'s own fill, where the registry file sets one. */
export const MARK_ROOT_FILL: string | null = null;
/** The ink the glyph is painted in, this product's accent. null when it draws in currentColor. */
export const MARK_INK: string | null = "#82C57E";
/** Everything inside the registry file's own <svg>. */
export const MARK_INNER = "<rect width=\"64\" height=\"64\" fill=\"#0b0d0d\"/><rect x=\"12\" y=\"12\" width=\"40\" height=\"40\" fill=\"#82C57E\"/><path d=\"M24 20h10c8 0 12 4 12 10s-4 10-12 10h-4v5h-6V20Zm6 6v8h4c4 0 6-1 6-4s-2-4-6-4h-4Z\" fill=\"#102313\"/>";
/** The plate the family paints behind the glyph, where this mark has one. */
export const MARK_PLATE: string | null = "<rect width=\"64\" height=\"64\" fill=\"#0b0d0d\"/>";
/** The glyph without that plate, for a header that paints its own ground. */
export const MARK_GLYPH = "<rect x=\"12\" y=\"12\" width=\"40\" height=\"40\" fill=\"#82C57E\"/><path d=\"M24 20h10c8 0 12 4 12 10s-4 10-12 10h-4v5h-6V20Zm6 6v8h4c4 0 6-1 6-4s-2-4-6-4h-4Z\" fill=\"#102313\"/>";
/** The registry file entire, for a header that injects the whole mark. */
export const MARK_SVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\"><rect width=\"64\" height=\"64\" fill=\"#0b0d0d\"/><rect x=\"12\" y=\"12\" width=\"40\" height=\"40\" fill=\"#82C57E\"/><path d=\"M24 20h10c8 0 12 4 12 10s-4 10-12 10h-4v5h-6V20Zm6 6v8h4c4 0 6-1 6-4s-2-4-6-4h-4Z\" fill=\"#102313\"/></svg>";

/** The same markup with the ink swapped, for a header that recolours the mark. */
export function markInner(color?: string): string {
  return color && MARK_INK ? MARK_INNER.split(MARK_INK).join(color) : MARK_INNER;
}

/** The glyph alone, ink swapped the same way. */
export function markGlyph(color?: string): string {
  return color && MARK_INK ? MARK_GLYPH.split(MARK_INK).join(color) : MARK_GLYPH;
}
