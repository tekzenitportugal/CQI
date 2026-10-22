'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { highlightText } from '@/utils/highlightText';
import type { airlinesPageData } from '@/data/solutions/airlines-page';
import styles from './AirlinesWhySection.module.scss';

type AirlinesWhySectionProps = {
  data: typeof airlinesPageData.why;
};

const AUTOPLAY_MS = 5000;

/** "The flight is tracked. The feeling is missed." — dashboard carousel left (autoplays), copy right. */
export function AirlinesWhySection({ data }: AirlinesWhySectionProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = data.slides.length;

  // Advance every few seconds; picking a dot changes `index`, which restarts the wait. Paused while the
  // pointer or keyboard focus is on the carousel, and off for people who prefer reduced motion.
  useEffect(() => {
    if (paused || count < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % count), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, count]);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div
            className={styles.mediaColumn}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div className={styles.media}>
              {data.slides.map((slide, slideIndex) => (
                <Image
                  key={slideIndex}
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  unoptimized
                  className={`${styles.image} ${slideIndex === index ? styles.imageActive : ''}`.trim()}
                  sizes="(min-width: 1024px) 587px, 100vw"
                />
              ))}
            </div>
            <div className={styles.dots} role="group" aria-label="Dashboard screenshots">
              {data.slides.map((slide, slideIndex) => (
                <button
                  key={slideIndex}
                  type="button"
                  className={`${styles.dot} ${slideIndex === index ? styles.dotActive : ''}`.trim()}
                  aria-label={`Show screenshot ${slideIndex + 1}`}
                  aria-current={slideIndex === index}
                  onClick={() => setIndex(slideIndex)}
                />
              ))}
            </div>
          </div>
          <div className={styles.copy}>
            <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>
            <div className={styles.body}>
              <p className={styles.eyebrow}>{data.eyebrow}</p>
              <div className={styles.paragraphs}>
                {data.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
