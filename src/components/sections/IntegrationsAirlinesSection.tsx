'use client';

import { useId, useState } from 'react';
import type { IntegrationsAirlinesData } from '@/data/integrations';
import { Container } from '@/components/ui/Container';
import { highlightText } from '@/utils/highlightText';
import styles from './IntegrationsAirlinesSection.module.scss';

const NAME_WIDTH_CLASS: Record<number, string> = {
  109: styles.nameW109,
  113: styles.nameW113,
  194: styles.nameW194,
  226: styles.nameW226,
  279: styles.nameW279,
};
const SLOT_CLASS: Record<number, string> = {
  30: styles.slot30,
  32: styles.slot32,
  50: styles.slot50,
};

type IntegrationsAirlinesSectionProps = {
  data: IntegrationsAirlinesData;
};

/**
 * Figma "Airline-specific source systems": a centred heading over a stack of light cards, one per airline
 * source system. A card that lists vendor systems opens (one at a time) to show their logos; the first
 * one is open to begin with, as in the design.
 */
export function IntegrationsAirlinesSection({ data }: IntegrationsAirlinesSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>

        <ul className={styles.list}>
          {data.items.map((item, index) => {
            const expandable = item.systems.length > 0;
            const isOpen = expandable && openIndex === index;
            const panelId = `${baseId}-panel-${index}`;

            return (
              <li key={item.title} className={`${styles.card} ${isOpen ? styles.open : ''}`.trim()}>
                <div className={styles.head}>
                  <h3 className={styles.name}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>

                {expandable && (
                  <button
                    type="button"
                    className={styles.toggle}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    aria-label={`${isOpen ? 'Hide' : 'Show'} ${item.title} systems`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path
                        className={styles.bar}
                        d="M12 5v14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                )}

                {expandable && (
                  <div id={panelId} className={styles.panel} role="region" aria-label={`${item.title} systems`}>
                    <div className={styles.panelInner}>
                      <ul className={`${styles.systems} ${item.systemsAlign === 'end' ? styles.alignEnd : ''}`.trim()}>
                        {item.systems.map((system) =>
                          system.text === undefined ? (
                            <li key={system.logoAlt} className={styles.system}>
                              <img
                                src={system.logo}
                                alt={system.logoAlt}
                                width={system.logoWidth}
                                height={system.logoHeight}
                                className={styles.logo}
                              />
                              {system.name && (
                                <span
                                  className={`${styles.systemName} ${system.nameWidth ? NAME_WIDTH_CLASS[system.nameWidth] : ''}`.trim()}
                                >
                                  {system.name}
                                </span>
                              )}
                            </li>
                          ) : (
                            <li key={system.text} className={`${styles.system} ${styles.textOnly} ${SLOT_CLASS[system.slotHeight]}`}>
                              <span className={styles.systemName}>{system.text}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
