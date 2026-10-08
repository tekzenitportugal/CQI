'use client';

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import type { implementationData } from '@/data/implementation';
import { Container } from '@/components/ui/Container';
import { TagPill } from '@/components/ui/TagPill';
import { highlightText } from '@/utils/highlightText';
import styles from './ReferenceArchitectureSection.module.scss';

// Time each tier stays in front during the scroll-triggered walkthrough.
const AUTO_REVEAL_MS = 3500;

type ReferenceArchitectureSectionProps = {
  data: typeof implementationData.referenceArchitecture;
};

/**
 * Figma "CARDS - CQI IMPLEMENTATION": same peeking-deck pattern as the product overview's
 * LayerStackSection (`/products/overview`) — one card set, one tier open at a time, the
 * rest fanned behind it as peek tabs in tier order. Clicking a peek brings that tier forward.
 * Like the overview, once the deck scrolls into view it walks through every tier on a timer and
 * returns to tier 1; any click hands control back to the user.
 */
export function ReferenceArchitectureSection({ data }: ReferenceArchitectureSectionProps) {
  const [frontIndex, setFrontIndex] = useState(0);
  const stackRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLButtonElement>(null);
  const autoPlayStopped = useRef(false);
  const paused = useRef(false);
  const lastIndex = data.tiers.length - 1;

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let timer: ReturnType<typeof setTimeout> | undefined;
    let step = 1;

    const advance = () => {
      if (autoPlayStopped.current) return;
      if (paused.current) {
        timer = setTimeout(advance, 500);
        return;
      }
      if (step > lastIndex) {
        // Last tier has had its turn: reset to tier 1 and finish.
        autoPlayStopped.current = true;
        setFrontIndex(0);
        return;
      }
      setFrontIndex(step);
      step += 1;
      timer = setTimeout(advance, AUTO_REVEAL_MS);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || autoPlayStopped.current) return;
        observer.disconnect();
        timer = setTimeout(advance, AUTO_REVEAL_MS);
      },
      { threshold: 0.6 },
    );
    observer.observe(stack);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [lastIndex]);

  const selectTier = (index: number) => {
    autoPlayStopped.current = true;
    setFrontIndex(index);
  };

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

        <div
          ref={stackRef}
          className={styles.stack}
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
          onFocus={() => (paused.current = true)}
          onBlur={() => (paused.current = false)}
        >
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
                onClick={() => selectTier(index)}
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
