/**
 * Same curve as the `fluid-space()` Sass function: exact Figma px at 1536px+,
 * scaling down to 40% on small screens. For spacing that comes from page data.
 */
export function fluidSpace(px: number): string {
  if (px === 0) return '0px';
  return `clamp(${px * 0.4}px, ${(px / 1536) * 100}vw, ${px}px)`;
}
