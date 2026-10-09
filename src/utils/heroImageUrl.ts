/**
 * CSS `url()` for a hero background image. Optimised images go through Next's image
 * endpoint (resized + recompressed, like <Image>); `unoptimized` serves the file untouched.
 */
export function heroImageUrl(src: string, width: number, unoptimized?: boolean): string {
  const href = unoptimized || src.endsWith('.svg') ? src : `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`;
  return `url("${href}")`;
}
