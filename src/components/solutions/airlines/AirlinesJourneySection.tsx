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
  const timelineRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  // Scroll progress (same behaviour as See it live): the line starts fully dotted; as the user scrolls, a
  // solid blue fill grows down from the top of the lead-in, each dot turns blue once the fill passes its
  // centre, and that step's copy and art fade in (and stay). Written straight to the DOM so scrolling
  // never re-renders.
  useEffect(() => {
    const timeline = timelineRef.current;
    const list = listRef.current;
    const fill = fillRef.current;
    if (!timeline || !list || !fill) return;

    const steps = Array.from(list.children) as HTMLElement[];
    const markers = Array.from(list.querySelectorAll<HTMLElement>('[data-marker]'));
    const progress = fill.parentElement as HTMLElement;
    let frame = 0;

    const update = () => {
      frame = 0;
      // Run the dotted line from the first dot's centre to the last one's (desktop only; the dots are
      // hidden below lg, which leaves their rects empty).
      const first = markers[0]?.getBoundingClientRect();
      const last = markers[markers.length - 1]?.getBoundingClientRect();
      if (first && last && first.height > 0) {
        const box = timeline.getBoundingClientRect();
        timeline.style.setProperty('--line-top', `${first.top + first.height / 2 - box.top}px`);
        timeline.style.setProperty('--line-bottom', `${box.bottom - (last.top + last.height / 2)}px`);
      }

      const trigger = window.innerHeight * 0.55;
      const rect = progress.getBoundingClientRect();
      // Whatever the trigger point already covers at the top of the page is subtracted, so the line is
      // fully dotted until the user scrolls.
      const initialOffset = Math.max(trigger - (rect.top + window.scrollY), 0);
      const height = Math.min(Math.max(trigger - rect.top - initialOffset, 0), rect.height);
      fill.style.height = `${height}px`;

      const fillEnd = rect.top + height;
      markers.forEach((marker, i) => {
        const r = marker.getBoundingClientRect();
        const reached = height > 0 && r.height > 0 && r.top + r.height / 2 <= fillEnd;
        marker.toggleAttribute('data-reached', reached);
        if (reached) steps[i]?.setAttribute('data-revealed', '');
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

        <div ref={timelineRef} className={styles.timeline}>
          {/* One continuous dotted rule from the first stop to the last: fading lead-in above, fading
              tail below. The blue scroll fill runs over all three. */}
          <span className={styles.line} aria-hidden="true">
            <span className={styles.lineLead} />
            <span className={styles.lineTail} />
          </span>
          <span className={styles.lineProgress} aria-hidden="true">
            <span ref={fillRef} className={styles.lineFill} />
          </span>

        <ol ref={listRef} className={styles.steps}>
          {data.steps.map((step, index) => {
            const mood = MOOD_FACE[step.mood];
            const [stepNumber, ...labelParts] = step.label.split(' ');

            return (
              <li
                key={step.label}
                className={`${styles.step} ${index % 2 === 1 ? styles.imageLeft : ''}`.trim()}
                style={{ '--art-height': step.desktopImageSize.height } as CSSProperties}
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
                  <span data-marker className={styles.dot} />
                </div>

                <div className={styles.media} aria-hidden="true">
                  <img
                    src={step.desktopImage}
                    alt=""
                    width={step.desktopImageSize.width}
                    height={step.desktopImageSize.height}
                    className={styles.desktopArt}
                    style={{ '--art-width': step.desktopImageSize.width } as CSSProperties}
                  />
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
        </div>
      </Container>
    </section>
  );
}
