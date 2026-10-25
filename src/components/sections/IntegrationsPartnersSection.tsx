'use client';

import { useState, type CSSProperties } from 'react';
import Image from 'next/image';
import type { IntegrationsAirlineCard, IntegrationsPartnersData } from '@/data/integrations';
import { Container } from '@/components/ui/Container';
import { TagPill } from '@/components/ui/TagPill';
import { highlightText } from '@/utils/highlightText';
import styles from './IntegrationsPartnersSection.module.scss';

type IntegrationsPartnersSectionProps = {
  data: IntegrationsPartnersData;
};

/** Figma "Airlines" tab card: several logos with captions over a description, spaced per card. */
function AirlineCard({ card }: { card: IntegrationsAirlineCard }) {
  const { layout } = card;
  const classes = [
    styles.airlineCard,
    layout.spread ? styles.airlineCardSpread : '',
    layout.logosAlignEnd ? styles.airlineLogosEnd : '',
    layout.logosSpaceBetween ? styles.airlineLogosBetween : '',
    layout.logosWrap ? styles.airlineLogosWrap : '',
  ]
    .filter(Boolean)
    .join(' ');
  const vars = {
    '--airline-gap': layout.gap !== undefined ? `${layout.gap}px` : undefined,
    '--airline-logos-pb': layout.logosPaddingBottom !== undefined ? `${layout.logosPaddingBottom}px` : undefined,
    '--airline-logos-gap': layout.logosGap !== undefined ? `${layout.logosGap}px` : undefined,
  } as CSSProperties;

  return (
    <li className={classes} style={vars}>
      <div className={styles.airlineLogos}>
        {card.logos.map((logo, index) =>
          logo.text !== undefined ? (
            <p
              key={logo.text}
              className={styles.airlineText}
              style={{ width: logo.width, paddingRight: logo.paddingRight, paddingTop: logo.paddingTop }}
            >
              {logo.text}
            </p>
          ) : (
            <div key={`${logo.alt}-${index}`} className={styles.airlineLogo}>
              <div
                className={`${styles.airlineLogoSlot} ${logo.clip ? styles.airlineLogoClip : ''}`.trim()}
                style={{ width: logo.width, height: logo.height }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={styles.airlineLogoImage}
                  style={
                    logo.fit
                      ? {
                          left: `${logo.fit.left}%`,
                          top: `${logo.fit.top}%`,
                          width: `${logo.fit.width}%`,
                          height: `${logo.fit.height}%`,
                        }
                      : { left: 0, top: 0, width: '100%', height: '100%' }
                  }
                />
              </div>
              {logo.caption && <p className={styles.airlineCaption}>{logo.caption}</p>}
            </div>
          ),
        )}
      </div>
      <p className={styles.cardDescription}>{card.description}</p>
    </li>
  );
}

/**
 * Figma "integrations": a category tab bar, an intro line and a card grid, all driven by
 * whichever category tab is active — Figma's 7 "Property 1" variants of this component are
 * exactly the 7 categories, each with its own intro copy and partner/vendor cards.
 * The Airlines tab has no intro line and shows multi-logo cards. Only the Contact Centre, Data platform and
 * Airlines tabs carry the footnote.
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

        {activeCategory.intro && <p className={styles.intro}>{highlightText(activeCategory.intro)}</p>}

        <ul className={styles.grid}>
          {activeCategory.airlineCards?.map((card) => (
            <AirlineCard key={card.description} card={card} />
          ))}
          {activeCategory.cards?.map((card, index) => (
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

        {activeCategory.showFootnote && <p className={styles.footnote}>{data.footnote}</p>}
      </Container>
    </section>
  );
}
