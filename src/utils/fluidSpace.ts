/**
 * Spacing that comes from page data, in plain px (exact Figma value at every width).
 * Kept as a function so call sites read the same as the Sass `section-space()` mixin.
 */
export function fluidSpace(px: number): string {
  return `${px}px`;
}
