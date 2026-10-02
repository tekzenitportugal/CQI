'use client';

import { useState, type CSSProperties } from 'react';
import type { CtaLink } from '@/types/content';
import { Button } from '@/components/ui/Button';
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

/**
 * Figma "CARDS - PRODUCT OVERVIEW": five platform layers stacked like a deck, each deeper
 * layer 20px higher and 20px narrower per side. Clicking a peeking layer brings it to the front.
 */
export function LayerStackSection({ data }: LayerStackSectionProps) {
  const [frontIndex, setFrontIndex] = useState(data.layers.length - 1);

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
          <Button label={data.cta.label} href={data.cta.href} variant={data.cta.variant ?? 'secondary'} className={styles.cta} />
        </div>

        <div className={styles.stack}>
          {data.layers.map((layer, index) => {
            const depth = depthOf(index);
            const isFront = depth === 0;

            return (
              <button
                key={layer.title}
                type="button"
                className={`${styles.layer} ${styles[layer.tone]} ${isFront ? styles.front : ''}`.trim()}
                style={{ '--depth': depth } as CSSProperties}
                onClick={() => setFrontIndex(index)}
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
