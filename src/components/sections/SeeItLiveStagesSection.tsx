'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { GhostLink } from '@/components/ui/GhostLink';
import { Container } from '@/components/ui/Container';
import styles from './SeeItLiveStagesSection.module.scss';

export type SeeItLiveStage = {
  stageLabel: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  mobileImage?: string;
  imageWidth: number;
  imageHeight: number;
};

export type SeeItLiveStagesSectionData = {
  stages: SeeItLiveStage[];
  disclaimer: string;
  cta: { label: string; href: string };
};

type SeeItLiveStagesSectionProps = {
  data: SeeItLiveStagesSectionData;
};

/** Figma "5 stages" walkthrough (6079:31287): alternating text/screenshot rows down a centre line. */
export function SeeItLiveStagesSection({ data }: SeeItLiveStagesSectionProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [reached, setReached] = useState<boolean[]>(() => data.stages.map(() => false));
  // A stage's content fades in the first time its dot is reached, and stays shown after that.
  const [revealed, setRevealed] = useState<boolean[]>(() => data.stages.map(() => false));

  // Scroll progress: the line starts fully dotted; as the user scrolls, a solid blue fill grows down
  // from the top of the line, and each dot turns blue once the fill passes its centre.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const timeline = timelineRef.current;
      const line = lineRef.current;
      const fill = fillRef.current;
      if (!timeline || !line || !fill) return;
      // The dotted line starts at the first dot's centre (lineCapTop covers the stretch above it);
      // the blue fill starts at the top of lineCapTop, 20px above the first row, so it covers both.
      const firstDot = dotRefs.current[0];
      const firstRow = firstDot?.parentElement;
      if (firstDot && firstRow && firstDot.offsetParent) {
        const timelineTop = timeline.getBoundingClientRect().top;
        const dotRect = firstDot.getBoundingClientRect();
        timeline.style.setProperty('--line-top', `${dotRect.top + dotRect.height / 2 - timelineTop}px`);
        timeline.style.setProperty('--fill-top', `${firstRow.getBoundingClientRect().top - timelineTop - 20}px`);
      }
      const trigger = window.innerHeight * 0.55;
      const lineRect = (fill.parentElement ?? line).getBoundingClientRect();
      // Whatever the trigger point already covers at the top of the page is subtracted, so the line
      // is fully dotted until the user scrolls and the solid fill grows from the first dot.
      const lineTopInDocument = lineRect.top + window.scrollY;
      const initialOffset = Math.max(trigger - lineTopInDocument, 0);
      const height = Math.min(Math.max(trigger - lineRect.top - initialOffset, 0), lineRect.height);
      fill.style.height = `${height}px`;
      // A dot is reached once the fill's leading edge passes its centre.
      const fillEnd = lineRect.top + height;
      const next = dotRefs.current.map((dot) => {
        if (!dot) return false;
        const rect = dot.getBoundingClientRect();
        return height > 0 && rect.top + rect.height / 2 <= fillEnd;
      });
      setReached((prev) => (prev.length === next.length && prev.every((v, i) => v === next[i]) ? prev : next));
      setRevealed((prev) => (next.every((v, i) => !v || prev[i]) ? prev : prev.map((v, i) => v || next[i])));    };
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
    <section className={styles.section}>
      <Container>
        <div ref={timelineRef} className={styles.timeline}>
          <div ref={lineRef} className={styles.line} aria-hidden="true" />
          <div className={styles.lineProgress} aria-hidden="true">
            <div ref={fillRef} className={styles.lineFill} />
          </div>

          {/* .rows is its own container so .line isn't a sibling — otherwise it shifts every
              row's :nth-child parity by one and inverts the whole alternating layout. */}
          <div className={styles.rows}>
            {data.stages.map((stage, index) => (
              <div
                key={stage.stageLabel}
                className={`${styles.row} ${revealed[index] ? styles.rowRevealed : ''}`.trim()}
              >
                <div className={styles.copy}>
                  <p className={styles.stageLabel}>{stage.stageLabel}</p>
                  <div className={styles.heading}>
                    <p className={styles.title}>{stage.title}</p>
                    <p className={styles.subtitle}>{stage.subtitle}</p>
                  </div>
                  <p className={styles.description}>{stage.description}</p>
                </div>

                {index === 0 && <div className={styles.lineCapTop} aria-hidden="true" />}
                <div
                  ref={(el) => {
                    dotRefs.current[index] = el;
                  }}
                  className={`${styles.dot} ${reached[index] ? styles.dotReached : ''}`.trim()}
                  aria-hidden="true"
                />

                <div className={styles.media}>
                  <Image
                    src={stage.image}
                    alt=""
                    width={stage.imageWidth}
                    height={stage.imageHeight}
                    className={`${styles.image} ${stage.mobileImage ? styles.desktopImage : ''}`.trim()}
                    sizes="(max-width: 1023px) 100vw, 466px"
                  />
                  {stage.mobileImage && (
                    <Image
                      src={stage.mobileImage}
                      alt=""
                      width={stage.imageWidth}
                      height={stage.imageHeight}
                      className={`${styles.image} ${styles.mobileImage}`}
                      sizes="100vw"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.disclaimer}>{data.disclaimer}</p>
          <GhostLink label={data.cta.label} href={data.cta.href} />
        </div>
      </Container>
    </section>
  );
}
