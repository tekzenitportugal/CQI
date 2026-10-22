'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { GhostButton } from '@/components/ui/GhostButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { clamp01, easeInOut, usePinnedSteps } from '@/utils/usePinnedSteps';
import styles from './CapabilityFlowSection.module.scss';

export type CapabilityFlowData = {
  eyebrow: string;
  title: string;
  titleHighlight?: string[];
  /** One entry per animation state. `label` may contain a line break (shown uppercase inside the half-disc). */
  steps: { label: string; description: string }[];
};

type CapabilityFlowSectionProps = {
  data: CapabilityFlowData;
};

// Ring geometry in the 415 × 755 diagram frame (from the Figma export).
const RING = { cx: -59.4, cy: 377.6, r: 375 };
const NODE = { x: 389.5, y: 376 }; // the blue node
/** Mobile (Figma 6759:38709) is this same drawing turned a quarter, with the blue node nearer the ring. */
const NODE_COMPACT = { x: 338.5, y: 376 };
/** Angle between neighbouring dots on the ring (Figma rests two of them at ±39°). */
const SPACING = 39;
/** The dots circulate over this arc; a dot leaving one end re-enters at the other while invisible. */
const WRAP = 78;
/** Within this many degrees of the centre a dot slides out along the connector and becomes the blue node. */
const CENTER_RANGE = 22;
const GREY = [136, 136, 136];
const BLUE = [0, 68, 255];


/** Where dot `index` sits on the ring when the ring has turned `rotation` dots. */
function dotAt(index: number, rotation: number, count: number, node: { x: number; y: number }) {
  const span = count * SPACING;
  let angle = (index - rotation) * SPACING;
  angle = ((((angle + WRAP) % span) + span) % span) - WRAP;
  const radians = (angle * Math.PI) / 180;
  // 0 on the ring, 1 once it has slid out to the blue node's spot.
  const arrival = easeInOut(clamp01(1 - Math.abs(angle) / CENTER_RANGE));
  const ringX = RING.cx + RING.r * Math.cos(radians);
  const ringY = RING.cy + RING.r * Math.sin(radians);
  const mix = GREY.map((grey, i) => Math.round(grey + (BLUE[i] - grey) * arrival));
  return {
    x: ringX + (node.x - ringX) * arrival,
    y: ringY + (node.y - ringY) * arrival,
    // Fades out before it wraps round, so the jump from one end of the arc to the other is never seen.
    opacity: clamp01((WRAP - Math.abs(angle)) / 24),
    arrival,
    fill: `rgb(${mix.join(',')})`,
  };
}

/**
 * Capability "What it does" (Figma 6733:63861, animation 6733:64668): a half-disc with a dashed ring on
 * the left, a card beside the blue node, and the section heading on the right. From lg up the section
 * pins to the viewport and each scroll step turns the ring on a timer: four grey dots circulate round it, and
 * the next one always travels all the way to the blue spot, where it turns blue while the disc label and card
 * text change to match. The page stays pinned until the fourth dot has been through.
 * Below lg the same diagram is turned a quarter so the arc runs along the bottom, with the card above it.
 */
export function CapabilityFlowSection({ data }: CapabilityFlowSectionProps) {
  const count = data.steps.length;
  const { trackRef, rotation, active, skip } = usePinnedSteps(count);
  // Below lg the diagram is turned to lie along the bottom of the card; only the blue node's spot differs.
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(max-width: 1023.98px)');
    const update = () => setCompact(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  const node = compact ? NODE_COMPACT : NODE;

  // The card fits the current text (no empty space under short ones), so each text's height is measured
  // and the card eases between them. Re-measured whenever the texts reflow (resize, font load).
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [textHeights, setTextHeights] = useState<{ byStep: number[]; max: number } | null>(null);
  useEffect(() => {
    const texts = textRefs.current.filter((el): el is HTMLParagraphElement => !!el);
    const measure = () => {
      const byStep = textRefs.current.map((el) => el?.offsetHeight ?? 0);
      setTextHeights({ byStep, max: Math.max(...byStep) });
    };
    measure();
    const observer = new ResizeObserver(measure);
    texts.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [data.steps]);

  return (
    <section ref={trackRef} className={styles.section}>
      <div className={styles.pin}>
        <div className={styles.inner}>
          <div className={styles.diagram}>
            <div className={styles.stage}>
              <svg className={styles.art} viewBox="0 0 415 755" aria-hidden="true">
                <defs>
                  <linearGradient id="flow-disc-fill" gradientUnits="userSpaceOnUse" x1="-57" y1="0" x2="210" y2="0">
                    <stop stopColor="#FEFEFE" stopOpacity="0" />
                    <stop offset="0.411" stopColor="#D8E3FF" stopOpacity="0.5" />
                    <stop offset="1" stopColor="#B2C7FF" />
                  </linearGradient>
                  <linearGradient id="flow-disc-edge" gradientUnits="userSpaceOnUse" x1="268" y1="0" x2="-4.5" y2="0">
                    <stop stopColor="#B2C7FF" />
                    <stop offset="1" stopColor="#FEFEFE" />
                  </linearGradient>
                  <linearGradient id="flow-ring" gradientUnits="userSpaceOnUse" x1="315.6" y1="0" x2="-87.5" y2="0">
                    <stop stopColor="#AFAFAF" />
                    <stop offset="1" stopColor="#FEFEFE" />
                  </linearGradient>
                </defs>
                <circle cx="-57" cy="377" r="324.5" fill="url(#flow-disc-fill)" stroke="url(#flow-disc-edge)" />
                <circle
                  cx={RING.cx}
                  cy={RING.cy}
                  r={RING.r}
                  fill="none"
                  stroke="url(#flow-ring)"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                />
                <line x1="357.5" y1="376" x2="274.5" y2="376" stroke="#AFAFAF" strokeLinecap="round" />

                {data.steps.map((_, index) => {
                  const dot = dotAt(index, rotation, count, node);
                  return (
                    <g key={index} opacity={dot.opacity}>
                      {/* Dashed ring while on the ring, solid ring once it has become the node. */}
                      <circle
                        cx={dot.x}
                        cy={dot.y}
                        r={19 + 6.5 * dot.arrival}
                        fill="#FEFEFE"
                        stroke="#AFAFAF"
                        strokeWidth="1.118"
                        strokeLinecap="round"
                        strokeDasharray="4.47 4.47"
                        opacity={1 - dot.arrival}
                      />
                      <circle
                        cx={dot.x}
                        cy={dot.y}
                        r={19 + 6.5 * dot.arrival}
                        fill="#FEFEFE"
                        stroke="#AFAFAF"
                        opacity={dot.arrival}
                      />
                      <circle cx={dot.x} cy={dot.y} r={8 + 5.5 * dot.arrival} fill={dot.fill} />
                    </g>
                  );
                })}

                {/* Radiates from the blue node's spot; re-keyed on every arrival so it restarts. */}
                <circle key={active} className={styles.pulse} cx={node.x} cy={node.y} r="25.5" />
              </svg>

              <div className={styles.labels}>
                {data.steps.map((step, index) => (
                  <p
                    key={step.label}
                    className={`${styles.label} ${index === active ? styles.current : ''}`.trim()}
                    aria-hidden={index !== active}
                  >
                    {step.label}
                  </p>
                ))}
              </div>
            </div>

            <div
              className={styles.cardSlot}
              style={textHeights ? ({ '--card-slot-text-h': `${textHeights.max}px` } as CSSProperties) : undefined}
            >
              <div className={styles.card} aria-live="off">
                <div
                  className={styles.cardBody}
                  style={
                    textHeights ? ({ '--card-body-h': `${textHeights.byStep[active]}px` } as CSSProperties) : undefined
                  }
                >
                  {data.steps.map((step, index) => (
                    <p
                      key={step.label}
                      ref={(el) => {
                        textRefs.current[index] = el;
                      }}
                      className={`${styles.cardText} ${index === active ? styles.current : ''}`.trim()}
                      aria-hidden={index !== active}
                    >
                      {step.description}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <GhostButton label="Skip" direction="down" onClick={skip} className={styles.skip} />

          <SectionHeading
            eyebrow={data.eyebrow}
            title={data.title}
            titleHighlight={data.titleHighlight}
            className={styles.heading}
          />
        </div>
      </div>
    </section>
  );
}
