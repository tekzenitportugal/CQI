/**
 * Five Stages — scroll-stepped arc animation, pure logic.
 * Dot/arc geometry ported from CQI_INTEGRATION_WEB/five-stages.core.js, with config
 * values swapped for our own design tokens (colours, geometry already match the
 * Figma dome/arc — see mask-group.svg / connector-line.svg: dome r325, arc r375,
 * line length 84).
 *
 * Unlike the reference, progress isn't scrubbed 1:1 with scroll position (that let a
 * dot rest stopped between two numbers if the user stopped scrolling mid-transition).
 * Instead, one scroll/key/swipe nudge commits to a full step, which this module eases
 * from one integer stage to the next over time — see stepEase() and the tween loop in
 * HowItWorksSection.tsx.
 *
 *   scroll/key/touch nudge ─► step(+1 | -1) ─► tween(from, to, duration) ─► p
 *                                                                            │
 *                                                     viewModel(p, config, loop)
 */

export const CONFIG = {
  count: 5,
  stepDeg: 40,
  stepDurationMs: 700,
  center: { x: 390, y: 495 },
  dome: { r: 325 },
  arc: { r: 375 },
  line: { gap: 8, length: 84 },
  zone: { full: 0.15, start: 0.6 },
  fade: { start: 1, end: 1.35 },
  content: { full: 0.12, end: 0.42, shift: 14 },
  dot: {
    inactive: { outer: 38, inner: 16, fill: '#888888', font: 9, dash: 4.47 },
    active: { outer: 51, inner: 27, fill: '#0044FF', font: 16, dash: 0 },
  },
} as const;

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smoothstep = (e0: number, e1: number, x: number) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};
const hexToRgb = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));

function mixHex(a: string, b: string, t: number): string {
  const A = hexToRgb(a);
  const B = hexToRgb(b);
  return '#' + A.map((v, i) => Math.round(lerp(v, B[i], t)).toString(16).padStart(2, '0')).join('');
}

/** Radius of the active dot centre: dome + gap + line + gap + half the white sphere. */
export function activeRadius(cfg: typeof CONFIG): number {
  return cfg.dome.r + 2 * cfg.line.gap + cfg.line.length + cfg.dot.active.outer / 2;
}

/** Eased progress (0…1) through a single step's duration — ease in/out, no linear phase. */
export function stepEase(elapsedMs: number, durationMs: number): number {
  if (durationMs <= 0) return 1;
  return smoothstep(0, 1, clamp(elapsedMs / durationMs, 0, 1));
}

/** Signed distance (in stages) of dot i to the active slot. + = right (next), − = left (previous). */
function offsetOf(i: number, p: number, count: number, loop: boolean): number {
  const d = i - p;
  if (!loop) return d;
  const m = ((d % count) + count) % count;
  return m > count / 2 ? m - count : m;
}

/** Point on a circle around the shared centre. theta 0 = top, + = clockwise. */
function polar(cfg: typeof CONFIG, r: number, theta: number) {
  return { x: cfg.center.x + r * Math.sin(theta), y: cfg.center.y - r * Math.cos(theta) };
}

/** Selection line: grows out of the dome during the second half of the activation. */
function lineModel(theta: number, active: number, cfg: typeof CONFIG) {
  const t = smoothstep(0.5, 1, active);
  const r0 = cfg.dome.r + cfg.line.gap;
  return { from: polar(cfg, r0, theta), to: polar(cfg, r0 + cfg.line.length * t, theta), opacity: t };
}

export type DotModel = ReturnType<typeof dotModel>;

/** Everything needed to draw dot i at progress p. */
function dotModel(i: number, p: number, cfg: typeof CONFIG, loop: boolean) {
  const d = offsetOf(i, p, cfg.count, loop);
  const active = 1 - smoothstep(cfg.zone.full, cfg.zone.start, Math.abs(d));
  const theta = (d * cfg.stepDeg * Math.PI) / 180;
  const { inactive: A, active: B } = cfg.dot;
  return {
    label: String(i + 1),
    active,
    opacity: 1 - smoothstep(cfg.fade.start, cfg.fade.end, Math.abs(d)),
    center: polar(cfg, lerp(cfg.arc.r, activeRadius(cfg), active), theta),
    outerR: lerp(A.outer, B.outer, active) / 2,
    innerR: lerp(A.inner, B.inner, active) / 2,
    fill: mixHex(A.fill, B.fill, active),
    font: lerp(A.font, B.font, active),
    dash: lerp(A.dash, B.dash, active),
    line: lineModel(theta, active, cfg),
  };
}

export type ContentModel = ReturnType<typeof contentModel>;

/** Cross-fade and vertical drift (design px) of the content of stage i. */
function contentModel(i: number, p: number, cfg: typeof CONFIG) {
  const d = p - i;
  return { opacity: 1 - smoothstep(cfg.content.full, cfg.content.end, Math.abs(d)), shift: -d * cfg.content.shift };
}

export type ViewModel = ReturnType<typeof viewModel>;

/** The whole frame as plain data. */
export function viewModel(p: number, cfg: typeof CONFIG, loop: boolean) {
  const idx = Array.from({ length: cfg.count }, (_, i) => i);
  return {
    p,
    stage: clamp(Math.round(p), 0, cfg.count - 1),
    dots: idx.map((i) => dotModel(i, p, cfg, loop)),
    content: idx.map((i) => contentModel(i, p, cfg)),
  };
}
