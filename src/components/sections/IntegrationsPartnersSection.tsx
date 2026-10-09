'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { IntegrationsPartnersData } from '@/data/integrations';
import { Container } from '@/components/ui/Container';
import { TagPill } from '@/components/ui/TagPill';
import { highlightText } from '@/utils/highlightText';
import styles from './IntegrationsPartnersSection.module.scss';

type IntegrationsPartnersSectionProps = {
  data: IntegrationsPartnersData;
};


/**
 * Figma "integrations": a category tab bar, an intro line and a card grid, all driven by
 * whichever category tab is active — Figma's 7 "Property 1" variants of this component are
 * exactly the 7 categories, each with its own intro copy and partner/vendor cards.
 */
export function IntegrationsPartnersSection({ data }: IntegrationsPartnersSectionProps) {
  const [activeCategoryId, setActiveCategoryId] = useState(data.defaultCategoryId);
  const activeCategory =
    data.categories.find((category) => category.id === activeCategoryId) ?? data.categories[0];

  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.tabs}>
          {data.categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`${styles.tab} ${category.id === activeCategoryId ? styles.tabActive : ''}`.trim()}
              aria-pressed={category.id === activeCategoryId}
              onClick={() => setActiveCategoryId(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <p className={styles.intro}>{highlightText(activeCategory.intro)}</p>

        <ul className={styles.grid}>
          {activeCategory.cards.map((card, index) => (
            <li key={`${activeCategory.id}-${index}`} className={styles.card}>
              <TagPill label={card.tag} variant={card.tagVariant} />
              <div className={styles.cardBody}>
                {card.logo ? (
                  <div className={styles.logo}>
                    <Image
                      src={card.logo}
                      alt={card.logoAlt ?? ''}
                      width={card.logoWidth}
                      height={card.logoHeight}
                      className={styles.logoImage}
                      style={{ height: card.logoHeight, width: 'auto' }}
                    />
                  </div>
                ) : (
                  card.title && <p className={styles.cardTitle}>{card.title}</p>
                )}
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className={styles.footnote}>{data.footnote}</p>
      </Container>
    </section>
  );
}
