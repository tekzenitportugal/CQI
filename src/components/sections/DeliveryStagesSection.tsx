'use client';

import { useState } from 'react';
import type { implementationData } from '@/data/implementation';
import { Container } from '@/components/ui/Container';
import { DeliveryStageCard } from '@/components/ui/DeliveryStageCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './DeliveryStagesSection.module.scss';

type DeliveryStagesSectionProps = {
  data: typeof implementationData.delivery;
};

function StageControl({
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
      aria-label={direction === 'next' ? 'Next stage' : 'Previous stage'}
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

/**
 * Figma "CQI IMPLEMENTATION" instance: a single-card pager (1/4 counter, prev/next arrows),
 * contained within the page's 1436px content column — unlike the shared `Carousel` component,
 * this one does NOT bleed to the viewport edge.
 */
export function DeliveryStagesSection({ data }: DeliveryStagesSectionProps) {
  const total = data.stages.length;
  const [index, setIndex] = useState(0);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headingRow}>
          <SectionHeading
            eyebrow={data.eyebrow}
            title={data.title}
            titleHighlight={data.titleHighlight}
            align="center"
            className={styles.heading}
          />
        </div>

        <div className={styles.pager}>
          <div className={styles.controls}>
            <p className={styles.counter}>
              {index + 1} / {total}
            </p>
            <div className={styles.controlGroup}>
              <StageControl
                direction="prev"
                enabled={index > 0}
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
              />
              <StageControl
                direction="next"
                enabled={index < total - 1}
                onClick={() => setIndex((i) => Math.min(total - 1, i + 1))}
              />
            </div>
          </div>

          <div className={styles.viewport}>
            <div
              className={styles.track}
              style={{
                width: `${total * 100}%`,
                transform: `translateX(-${index * (100 / total)}%)`,
              }}
            >
              {data.stages.map((item, i) => (
                <div
                  key={item.title}
                  className={styles.slide}
                  style={{ width: `${100 / total}%` }}
                  aria-hidden={i !== index}
                  inert={i !== index}
                >
                  <DeliveryStageCard stage={item} priority />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
