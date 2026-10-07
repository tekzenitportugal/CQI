'use client';

import { useState } from 'react';
import type { IndustryScenariosData } from '@/types/content';
import { Container } from '@/components/ui/Container';
import { FpoImage } from '@/components/ui/FpoImage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './IndustryScenariosSection.module.scss';

type IndustryScenariosSectionProps = {
  data: IndustryScenariosData;
};

function ScenarioControl({
  direction,
  enabled,
  onClick,
}: {
  direction: 'prev' | 'next';
  enabled: boolean;
  onClick: () => void;
}) {
  const src = enabled ? '/images/shared/common/carousel/arrow-next.svg' : '/images/shared/common/carousel/arrow-prev-disabled.svg';
  const flip = direction === 'next' ? !enabled : enabled;

  return (
    <button
      type="button"
      className={`${styles.controlBtn} ${enabled ? styles.controlActive : styles.controlInactive}`}
      onClick={onClick}
      disabled={!enabled}
      aria-label={direction === 'next' ? 'Next scenario' : 'Previous scenario'}
    >
      <img
        src={src}
        alt=""
        width={24}
        height={24}
        className={flip ? styles.controlIconFlipped : undefined}
        aria-hidden="true"
      />
    </button>
  );
}

export function IndustryScenariosSection({ data }: IndustryScenariosSectionProps) {
  const total = data.scenarios.length;
  const [index, setIndex] = useState(0);
  const scenario = data.scenarios[index];

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          title={data.title}
          titleHighlight={data.titleHighlight}
          align="left"
          className={styles.heading}
        />

        <div className={styles.carousel}>
          <div className={styles.controls}>
            <p className={styles.counter}>
              {index + 1} / {total}
            </p>
            <div className={styles.controlGroup}>
              <ScenarioControl
                direction="prev"
                enabled={index > 0}
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
              />
              <ScenarioControl
                direction="next"
                enabled={index < total - 1}
                onClick={() => setIndex((i) => Math.min(total - 1, i + 1))}
              />
            </div>
          </div>

          <article className={styles.card}>
            <div className={styles.cardCopy}>
              <div className={styles.cardIntro}>
                <h3 className={styles.cardTitle}>{scenario.title}</h3>
                <p className={styles.cardDescription}>{scenario.description}</p>
              </div>
              <div className={styles.outcome}>
                <p className={styles.outcomeLabel}>{scenario.outcomeLabel ?? 'outcome'}</p>
                <p className={styles.outcomeText}>{scenario.outcome}</p>
              </div>
            </div>
            <div className={styles.cardMedia}>
              {scenario.image && (
                <FpoImage
                  src={scenario.image}
                  alt={scenario.title}
                  width={707}
                  height={400}
                  overlay={scenario.imageOverlay ?? 0}
                  overlayBlend={scenario.imageBlend}
                  objectPosition={scenario.imagePosition}
                  fillContainer
                />
              )}
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
