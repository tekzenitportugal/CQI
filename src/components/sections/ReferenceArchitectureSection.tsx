'use client';

import { useState } from 'react';
import type { implementationData } from '@/data/implementation';
import { Container } from '@/components/ui/Container';
import { TagPill } from '@/components/ui/TagPill';
import { highlightText } from '@/utils/highlightText';
import styles from './ReferenceArchitectureSection.module.scss';

type ReferenceArchitectureSectionProps = {
  data: typeof implementationData.referenceArchitecture;
};

/**
 * Figma "Six tiers, on Google Cloud" (6696:71240): six tall cards in a row, one expanded at a time
 * (accordion), same pattern as the product overview's LayerStackSection. Clicking a collapsed
 * card expands it while the open one collapses, both animated. Tier 1 is open by default. On
 * mobile every tier is shown expanded, stacked.
 */
export function ReferenceArchitectureSection({ data }: ReferenceArchitectureSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);

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

        <div className={styles.stack}>
          {data.tiers.map((tier, index) => {
            const isOpen = index === openIndex;

            return (
              <div
                key={tier.index}
                className={`${styles.tierCard} ${tier.text === 'light' ? styles.light : styles.dark} ${isOpen ? styles.open : ''}`.trim()}
                style={{ background: tier.background }}
              >
                <button
                  type="button"
                  className={styles.trigger}
                  onClick={() => setOpenIndex(index)}
                  aria-expanded={isOpen}
                  aria-controls={`tier-panel-${tier.index}`}
                >
                  <span className={styles.tierTitle}>{tier.title.replace(/(?<!AI) & /, '\n& ')}</span>
                </button>
                <div
                  id={`tier-panel-${tier.index}`}
                  className={styles.panel}
                  role="region"
                  aria-label={tier.title}
                >
                  <div className={styles.panelInner}>
                    <p className={styles.tierDescription}>{tier.description}</p>
                    <div className={styles.tierTags}>
                      {tier.tags.map((tag) => (
                        <TagPill key={tag.label} label={tag.label} variant={tag.variant} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className={styles.footnote}>{data.footnote}</p>
      </Container>
    </section>
  );
}
