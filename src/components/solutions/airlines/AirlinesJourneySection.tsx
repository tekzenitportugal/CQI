'use client';

import { useEffect, useRef, type CSSProperties } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { airlinesPageData } from '@/data/solutions/airlines-page';
import styles from './AirlinesJourneySection.module.scss';

type AirlinesJourneySectionProps = {
  data: typeof airlinesPageData.journey;
};

const MOOD_FACE = {
  friction: { face: 'face-friction', tone: styles.friction },
  eroding: { face: 'face-eroding', tone: styles.eroding },
  risk: { face: 'face-risk', tone: styles.risk },
} as const;

/** "CQI in action": five-stop timeline, copy and image alternating around a centre line. */
export function AirlinesJourneySection({ data }: AirlinesJourneySectionProps) {
  const lastIndex = data.steps.length - 1;
  const listRef = useRef<HTMLOListElement>(null);

  // Scroll progress (same behaviour as See it live): the blue dashes fill each segment down to a trigger
  // point in the viewport, and a dot turns blue once its centre has been passed. Written straight to the
  // DOM so scrolling never re-renders.
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const markers = Array.from(list.querySelectorAll<HTMLElement>('[data-marker]'));
    const lines = Array.from(list.querySelectorAll<HTMLElement>('[data-line]'));
    let frame = 0;

    const update = () => {
      frame = 0;
      const trigger = window.innerHeight * 0.55;
      const centres = markers.map((marker) => {
        const rect = marker.getBoundingClientRect();
        return rect.top + rect.height / 2;
      });

      markers.forEach((marker, i) => {
        marker.toggleAttribute('data-reached', i === 0 || centres[i] <= trigger);
      });
      lines.forEach((line, i) => {
        const span = centres[i + 1] - centres[i];
        const fill = span > 0 ? Math.min(1, Math.max(0, (trigger - centres[i]) / span)) : 0;
        line.style.setProperty('--fill', fill.toFixed(4));
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="cqi-in-action" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          titleHighlight={data.titleHighlight}
          description={data.description}
          align="center"
          className={styles.heading}
        />

        <ol ref={listRef} className={styles.steps}>
          {data.steps.map((step, index) => {
            const mood = MOOD_FACE[step.mood];
            const [stepNumber, ...labelParts] = step.label.split(' ');

            return (
              <li
                key={step.label}
                className={`${styles.step} ${index % 2 === 1 ? styles.imageLeft : ''}`.trim()}
              >
                <div className={styles.copy}>
                  <div className={styles.iconRow}>
                    <span className={`${styles.icon} ${styles[`icon${index + 1}`] ?? ''}`.trim()} aria-hidden="true">
                      <img src={step.icon} alt="" />
                    </span>
                    <span className={styles.moodBadge} aria-hidden="true">
                      <span className={`${styles.mood} ${mood.tone}`}>
                        <img src={`/images/solutions/airlines/${mood.face}.svg`} alt="" />
                      </span>
                    </span>
                  </div>
                  <div className={styles.text}>
                    <div className={styles.intro}>
                      <h3 className={styles.label}>
                        {stepNumber} {labelParts.join(' ')}
                      </h3>
                      <p className={styles.headline}>{step.headline}</p>
                    </div>
                    <p className={styles.description}>{step.description}</p>
                  </div>
                </div>

                <div className={styles.marker} aria-hidden="true">
                  {index === 0 && <span className={styles.lineLead} />}
                  {index < lastIndex && (
                    <span
                      data-line
                      className={styles.line}
                    />
                  )}
                  {index === lastIndex && <span className={styles.lineTail} />}
                  <span data-marker className={styles.dot} />
                </div>

                {/* Figma shows grey placeholders here until the step artwork is supplied. */}
                <div className={styles.media} aria-hidden="true">
                  <img
                    src={step.mobileImage}
                    alt=""
                    width={step.mobileImageSize.width}
                    height={step.mobileImageSize.height}
                    className={styles.mobileArt}
                    style={{ '--art-width': step.mobileImageSize.width, '--art-height': step.mobileImageSize.height } as CSSProperties}
                  />
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
