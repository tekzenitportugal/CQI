'use client';

import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import type { implementationData } from '@/data/implementation';
import { Container } from '@/components/ui/Container';
import { TagPill } from '@/components/ui/TagPill';
import { highlightText } from '@/utils/highlightText';
import styles from './ReferenceArchitectureSection.module.scss';

type ReferenceArchitectureSectionProps = {
  data: typeof implementationData.referenceArchitecture;
};

/**
 * Figma "CARDS - CQI IMPLEMENTATION": same peeking-deck pattern as the product overview's
 * LayerStackSection (`/products/capabilities`) — one card set, one tier open at a time, the
 * rest fanned behind it as peek tabs in tier order. Clicking a peek brings that tier forward.
 */
export function ReferenceArchitectureSection({ data }: ReferenceArchitectureSectionProps) {
  const [frontIndex, setFrontIndex] = useState(0);
  const stackRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLButtonElement>(null);

  // Mobile: the front card is in an absolute deck, so grow the deck to fit a tall tier's copy
  // instead of letting it spill over the footnote (desktop ignores --stack-height).
  useLayoutEffect(() => {
    const stack = stackRef.current;
    const front = frontRef.current;
    if (!stack || !front) return;
    const sync = () => stack.style.setProperty('--stack-height', `${60 + front.scrollHeight}px`);
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, [frontIndex]);

  // Depth 0 = front. The chosen tier comes forward; the rest keep tier order among
  // themselves (tier 1 always nearest the front, tier 6 always farthest/topmost) so the
  // light-to-dark colour ramp always reads correctly regardless of which tier is open.
  const behind = data.tiers.map((_, index) => index).filter((index) => index !== frontIndex);
  const depthOf = (index: number) => (index === frontIndex ? 0 : behind.indexOf(index) + 1);

  return (
    <section className={styles.section} id="reference-architecture">
      <Container>
        <div className={styles.header}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>{data.eyebrow}</p>
            <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>
          </div>
          <p className={styles.description}>{data.description}</p>
        </div>

        <div ref={stackRef} className={styles.stack}>
          {data.tiers.map((tier, index) => {
            const depth = depthOf(index);
            const isFront = depth === 0;

            return (
              <button
                key={tier.index}
                ref={isFront ? frontRef : undefined}
                type="button"
                className={`${styles.tierCard} ${tier.text === 'light' ? styles.light : styles.dark} ${isFront ? styles.front : ''}`.trim()}
                style={{ background: tier.background, '--depth': depth } as CSSProperties}
                onClick={() => setFrontIndex(index)}
                aria-pressed={isFront}
                aria-label={isFront ? undefined : `Show ${tier.title}`}
              >
                <p className={styles.tierTitle}>
                  {tier.index}. {tier.title}
                </p>
                <div className={styles.tierBody}>
                  <p className={styles.tierDescription}>{tier.description}</p>
                  <div className={styles.tierTags}>
                    {tier.tags.map((tag) => (
                      <TagPill key={tag.label} label={tag.label} variant={tag.variant} />
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <p className={styles.footnote}>{data.footnote}</p>
      </Container>
    </section>
  );
}
