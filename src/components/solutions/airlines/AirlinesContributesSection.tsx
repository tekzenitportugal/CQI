'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { airlinesPageData } from '@/data/solutions/airlines-page';
import styles from './AirlinesContributesSection.module.scss';

type AirlinesContributesSectionProps = {
  data: typeof airlinesPageData.contributes;
};

type ControlProps = {
  direction: 'prev' | 'next';
  enabled: boolean;
  onClick: () => void;
};

function Control({ direction, enabled, onClick }: ControlProps) {
  const src = enabled ? '/images/shared/common/carousel/arrow-next.svg' : '/images/shared/common/carousel/arrow-prev-disabled.svg';
  const flip = direction === 'next' ? !enabled : enabled;

  return (
    <button
      type="button"
      className={`${styles.controlBtn} ${enabled ? styles.controlActive : styles.controlInactive}`}
      onClick={onClick}
      disabled={!enabled}
      aria-label={direction === 'next' ? 'Next slide' : 'Previous slide'}
    >
      <img src={src} alt="" width={24} height={24} className={flip ? styles.controlIconFlipped : undefined} aria-hidden="true" />
    </button>
  );
}

/** "What CQI contributes": heading + intro, then a carousel card (Figma "USE CASE (AIRLINES) - V2", 3 slides). */
export function AirlinesContributesSection({ data }: AirlinesContributesSectionProps) {
  const total = data.slides.length;
  const [index, setIndex] = useState(0);
  const slide = data.slides[index];

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <SectionHeading
            eyebrow={data.eyebrow}
            title={data.title}
            titleHighlight={data.titleHighlight}
            align="left"
            className={styles.heading}
          />
          <p className={styles.intro}>{data.description}</p>
        </div>

        <div className={styles.controls}>
          <p className={styles.counter}>
            {index + 1} / {total}
          </p>
          <div className={styles.controlGroup}>
            <Control direction="prev" enabled={index > 0} onClick={() => setIndex((i) => Math.max(0, i - 1))} />
            <Control direction="next" enabled={index < total - 1} onClick={() => setIndex((i) => Math.min(total - 1, i + 1))} />
          </div>
        </div>

        <article className={styles.card}>
          <div className={styles.cardCopy}>
            <div className={styles.cardIntro}>
              <p className={styles.cardTag}>{slide.tag}</p>
              <h3 className={styles.cardTitle}>{slide.title}</h3>
              <p className={styles.cardDescription}>{slide.description}</p>
            </div>
          </div>
          <div className={styles.cardMedia}>
            <Image
              key={slide.image}
              src={slide.image}
              alt={slide.title}
              fill
              unoptimized
              className={`${styles.cardImage} ${slide.imageFocusLow ? styles.cardImageLow : ""}`}
              sizes="(min-width: 1024px) 707px, 100vw"
            />
          </div>
        </article>
      </Container>
    </section>
  );
}
