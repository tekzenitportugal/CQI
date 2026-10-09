'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import type { CtaLink } from '@/types/content';
import { GhostLink } from '@/components/ui/GhostLink';
import { Container } from '@/components/ui/Container';
import { highlightText } from '@/utils/highlightText';
import styles from './LayerStackSection.module.scss';

export type StackLayer = {
  title: string;
  description: string;
  tags: string[];
  /** Figma layer colour: back layers are darker blues, the front is B50. */
  tone: 'b200' | 'b100' | 'b75' | 'l100' | 'b50';
};

export type LayerStackSectionData = {
  eyebrow: string;
  title: string;
  titleHighlight?: string[];
  description: string;
  cta: CtaLink;
  /** Back → front, as in Figma; the last layer starts in front. */
  layers: StackLayer[];
};

type LayerStackSectionProps = {
  data: LayerStackSectionData;
};

// Time each layer stays in front during the scroll-triggered walkthrough.
const AUTO_REVEAL_MS = 3500;

/**
 * Figma "CARDS - PRODUCT OVERVIEW": five platform layers stacked like a deck, each deeper
 * layer 20px higher and 20px narrower per side. Clicking a peeking layer brings it to the front.
 * Content never depends on a click: once the deck scrolls into view it walks through every layer
 * on a timer, front card first then each one behind it in turn, then back to the front card, and any user interaction hands control back.
 */
export function LayerStackSection({ data }: LayerStackSectionProps) {
  const lastIndex = data.layers.length - 1;
  const [frontIndex, setFrontIndex] = useState(lastIndex);
  const stackRef = useRef<HTMLDivElement>(null);
  const autoPlayStopped = useRef(false);
  const paused = useRef(false);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let timer: ReturnType<typeof setTimeout> | undefined;
    let step = lastIndex;

    const advance = () => {
      if (autoPlayStopped.current) return;
      if (paused.current) {
        timer = setTimeout(advance, 500);
        return;
      }
      setFrontIndex(step);
      if (step <= 0) {
        // Last card has had its turn: return to the default front card and finish.
        timer = setTimeout(() => {
          if (autoPlayStopped.current) return;
          autoPlayStopped.current = true;
          setFrontIndex(lastIndex);
        }, AUTO_REVEAL_MS);
        return;
      }
      step -= 1;
      timer = setTimeout(advance, AUTO_REVEAL_MS);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || autoPlayStopped.current) return;
        observer.disconnect();
        advance();
      },
      { threshold: 0.6 },
    );
    observer.observe(stack);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [lastIndex]);

  const selectLayer = (index: number) => {
    autoPlayStopped.current = true;
    setFrontIndex(index);
  };

  // Depth 0 = front. The chosen layer comes forward; the others keep their order behind it.
  const behind = data.layers.map((_, index) => index).filter((index) => index !== frontIndex);
  const depthOf = (index: number) =>
    index === frontIndex ? 0 : behind.length - behind.indexOf(index);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div className={styles.copy}>
            <div className={styles.heading}>
              <p className={styles.eyebrow}>{data.eyebrow}</p>
              <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>
            </div>
            <p className={styles.description}>{data.description}</p>
          </div>
          <GhostLink label={data.cta.label} href={data.cta.href} />
        </div>

        <div
          ref={stackRef}
          className={styles.stack}
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
          onFocus={() => (paused.current = true)}
          onBlur={() => (paused.current = false)}
        >
          {data.layers.map((layer, index) => {
            const depth = depthOf(index);
            const isFront = depth === 0;

            return (
              <button
                key={layer.title}
                type="button"
                className={`${styles.layer} ${styles[layer.tone]} ${isFront ? styles.front : ''}`.trim()}
                style={{ '--depth': depth } as CSSProperties}
                onClick={() => selectLayer(index)}
                aria-pressed={isFront}
                aria-label={isFront ? undefined : `Show ${layer.title}`}
              >
                <span className={styles.layerTitle}>{layer.title}</span>
                <span className={styles.layerRow}>
                  <span className={styles.layerDescription}>{layer.description}</span>
                  <span className={styles.tags}>
                    {layer.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
