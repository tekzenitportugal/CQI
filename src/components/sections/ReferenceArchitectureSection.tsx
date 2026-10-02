import type { CSSProperties } from 'react';
import type { implementationData } from '@/data/implementation';
import { Container } from '@/components/ui/Container';
import { TagPill } from '@/components/ui/TagPill';
import { highlightText } from '@/utils/highlightText';
import styles from './ReferenceArchitectureSection.module.scss';

type ReferenceArchitectureSectionProps = {
  data: typeof implementationData.referenceArchitecture;
};

/**
 * Figma "CARDS - CQI IMPLEMENTATION": every tier is permanently open (not an accordion).
 * Each tier's card is fronted by a fanned stack of narrow "peek" tabs, one per tier that
 * follows it, in that tier's own colour — tier 6 has none, tier 1 has all five others
 * peeking above it. Figma builds this by hand-placing one fully-open instance per tier;
 * it's generated here from the tier list instead.
 */
export function ReferenceArchitectureSection({ data }: ReferenceArchitectureSectionProps) {
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

        <ul className={styles.stack}>
          {data.tiers.map((tier) => {
            const peeks = data.tiers.filter((candidate) => candidate.index > tier.index).reverse();

            return (
              <li key={tier.index} className={styles.tierBlock}>
                {peeks.map((peek) => (
                  <div
                    key={peek.index}
                    className={styles.peek}
                    style={{ background: peek.background, '--peek-index': peek.index - tier.index } as CSSProperties}
                  />
                ))}
                <div
                  className={`${styles.tierCard} ${tier.text === 'light' ? styles.light : styles.dark}`}
                  style={{ background: tier.background }}
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
                </div>
              </li>
            );
          })}
        </ul>

        <p className={styles.footnote}>{data.footnote}</p>
      </Container>
    </section>
  );
}
