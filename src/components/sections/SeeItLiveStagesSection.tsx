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
  const fillRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [reached, setReached] = useState<boolean[]>(() => data.stages.map((_, i) => i === 0));

  // Scroll progress: the blue fill grows down the line to a trigger point in the viewport, and each
  // dot turns blue once its centre has been passed by that point.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = lineRef.current;
      const fill = fillRef.current;
      if (!line || !fill) return;
      const trigger = window.innerHeight * 0.55;
      const lineRect = line.getBoundingClientRect();
      const height = Math.min(Math.max(trigger - lineRect.top, 0), lineRect.height);
      fill.style.height = `${height}px`;
      const next = dotRefs.current.map((dot, i) => {
        if (i === 0 || !dot) return true;
        const rect = dot.getBoundingClientRect();
        return rect.top + rect.height / 2 <= trigger;
      });
      setReached((prev) => (prev.length === next.length && prev.every((v, i) => v === next[i]) ? prev : next));
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
    <section className={styles.section}>
      <Container>
        <div className={styles.timeline}>
          <div ref={lineRef} className={styles.line} aria-hidden="true" />
          <div className={styles.lineProgress} aria-hidden="true">
            <div ref={fillRef} className={styles.lineFill} />
          </div>

          {/* .rows is its own container so .line isn't a sibling — otherwise it shifts every
              row's :nth-child parity by one and inverts the whole alternating layout. */}
          <div className={styles.rows}>
            {data.stages.map((stage, index) => (
              <div key={stage.stageLabel} className={styles.row}>
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
                  className={[styles.dot, index === 0 ? styles.dotActive : '', reached[index] ? styles.dotReached : '']
                    .filter(Boolean)
                    .join(' ')}
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
