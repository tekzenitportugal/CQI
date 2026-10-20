'use client';

import { useState } from 'react';
import type { CtaLink } from '@/types/content';
import { GhostLink } from '@/components/ui/GhostLink';
import { Container } from '@/components/ui/Container';
import { highlightText } from '@/utils/highlightText';
import styles from './LayerStackSection.module.scss';

export type StackLayer = {
  title: string;
  description: string;
  tags: string[];
  /** Figma layer colour: the lightest blue (b50) to the darkest (b200). */
  tone: 'b200' | 'b100' | 'b75' | 'l100' | 'b50';
};

export type LayerStackSectionData = {
  eyebrow: string;
  title: string;
  titleHighlight?: string[];
  description: string;
  cta: CtaLink;
  /** Back → front in the data; shown left → right in the accordion, so the order is reversed. */
  layers: StackLayer[];
};

type LayerStackSectionProps = {
  data: LayerStackSectionData;
};

/**
 * Figma "Five layers, one platform" (6689:69713): five tall cards in a row, one expanded at a
 * time (accordion). Clicking a collapsed card expands it while the open one collapses, both
 * animated. The first card (Data ingestion) is open by default. On mobile the row becomes a
 * vertical accordion.
 */
export function LayerStackSection({ data }: LayerStackSectionProps) {
  const layers = [...data.layers].reverse();
  const [openIndex, setOpenIndex] = useState(0);

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

        <div className={styles.stack}>
          {layers.map((layer, index) => {
            const isOpen = index === openIndex;

            return (
              <div
                key={layer.title}
                className={`${styles.layer} ${styles[layer.tone]} ${isOpen ? styles.open : ''}`.trim()}
              >
                <button
                  type="button"
                  className={styles.trigger}
                  onClick={() => setOpenIndex(index)}
                  aria-expanded={isOpen}
                  aria-controls={`layer-panel-${index}`}
                >
                  <span className={styles.layerTitle}>{layer.title.replace(' & ', '\n& ')}</span>
                </button>
                <div
                  id={`layer-panel-${index}`}
                  className={styles.panel}
                  role="region"
                  aria-label={layer.title}
                >
                  <div className={styles.panelInner}>
                    <p className={styles.layerDescription}>{layer.description}</p>
                    <ul className={styles.tags}>
                      {layer.tags.map((tag) => (
                        <li key={tag} className={styles.tag}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
