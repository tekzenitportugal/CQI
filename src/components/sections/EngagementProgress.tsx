'use client';

import { useEffect, useId, useRef, type ReactNode } from 'react';
import styles from './PartnershipEngagementSection.module.scss';

type EngagementProgressProps = {
  className?: string;
  children: ReactNode;
};

/**
 * Desktop connector, one segment per gap between dots. The paths are Figma's connector-main
 * split at its dots; they run right to left in the SVG's own (pre-flip) space, so `reverse`.
 */
const DESKTOP_SEGMENTS = [
  'M289.672 0.5C287.634 0.5 285.595 0.5 283.593 0.607169C171.028 4.39383 93.8631 115.957 126.403 223.627L163.769 347.265C196.344 454.97 119.144 566.498 6.57881 570.285C4.54062 570.356 2.53818 570.392 0.5 570.392',
  'M578.843 570.392C576.805 570.392 574.767 570.392 572.765 570.285C460.2 566.498 383.035 454.934 415.574 347.265L452.941 223.627C485.516 115.922 408.315 4.39383 295.751 0.607169C293.712 0.535723 291.71 0.5 289.672 0.5',
  'M874.094 0.607169C872.056 0.535723 870.053 0.5 868.015 0.5C865.977 0.5 863.939 0.5 861.936 0.607169C749.371 4.39383 672.207 115.957 704.746 223.627L742.113 347.265C774.688 454.97 697.487 566.498 584.922 570.285C582.884 570.356 580.882 570.392 578.843 570.392',
];

/** Mobile connector (viewBox 303x1242): one arc per gap between dots, drawn top to bottom. */
const MOBILE_SEGMENTS = [
  { d: 'M151 315C234.4 315 302 246.5 302 162C302 77.5 234.4 9 151 9', reverse: true },
  { d: 'M151 315C67.6 315 0 383.5 0 468C0 552.5 67.6 621 151 621', reverse: false },
  { d: 'M151 621C234.4 621 302 689.5 302 774C302 858.5 234.4 927 151 927', reverse: false },
  { d: 'M151 927C67.6 927 0 995.5 0 1080C0 1164.5 67.6 1233 151 1233', reverse: false },
];
const MOBILE_DOTS_Y = [9, 315, 621, 927, 1233];

/**
 * Figma "How we work" diagram: the dashed line fills dark as the section scrolls into view, and
 * each grey dot turns blue as the fill reaches it. Scroll position is written straight to a
 * `--p` custom property (0 to 1) and `data-reached` on the dots, so scrolling never re-renders.
 */
export function EngagementProgress({ className, children }: EngagementProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const uid = useId().replace(/:/g, '');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const dots = Array.from(el.querySelectorAll<SVGElement | HTMLElement>('[data-at]'));
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.65 - rect.top) / rect.height));
      el.style.setProperty('--p', progress.toFixed(4));
      for (const dot of dots) {
        dot.toggleAttribute('data-reached', progress >= Number(dot.dataset.at) - 0.001);
      }
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

  const desktopStops = DESKTOP_SEGMENTS.length;

  return (
    <div ref={ref} className={className}>
      <svg className={styles.mConnectors} viewBox="0 0 303 1242" fill="none" aria-hidden="true">
        <defs>
          {MOBILE_SEGMENTS.map((segment, i) => (
            <mask key={i} id={`${uid}-m${i}`} maskUnits="userSpaceOnUse" x="-20" y="0" width="343" height="1242">
              <path
                d={segment.d}
                pathLength={1}
                stroke="#fff"
                strokeWidth={8}
                className={segment.reverse ? styles.fillReverse : styles.fillForward}
                style={{ '--i': i, '--n': MOBILE_SEGMENTS.length } as React.CSSProperties}
              />
            </mask>
          ))}
        </defs>
        <g strokeLinecap="round" strokeDasharray="4 4">
          {MOBILE_SEGMENTS.map((segment, i) => (
            <g key={i}>
              <path d={segment.d} stroke="#AFAFAF" />
              <path d={segment.d} stroke="#4D4D4D" mask={`url(#${uid}-m${i})`} />
            </g>
          ))}
        </g>
        {MOBILE_DOTS_Y.map((cy, i) => (
          <circle
            key={cy}
            className={i === 0 ? `${styles.svgDot} ${styles.dotStart}` : styles.svgDot}
            cx="151"
            cy={cy}
            r="9"
            data-at={i / MOBILE_SEGMENTS.length}
          />
        ))}
      </svg>

      <div className={styles.connectors} aria-hidden="true">
        <svg
          className={styles.connectorMain}
          viewBox="0 0 874.594 570.892"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            {DESKTOP_SEGMENTS.map((d, i) => (
              <mask key={i} id={`${uid}-d${i}`} maskUnits="userSpaceOnUse" x="-20" y="-20" width="920" height="620">
                <path
                  d={d}
                  pathLength={1}
                  stroke="#fff"
                  strokeWidth={8}
                  className={styles.fillReverse}
                  style={{ '--i': i, '--n': desktopStops } as React.CSSProperties}
                />
              </mask>
            ))}
          </defs>
          <g strokeLinecap="round" strokeDasharray="4 4">
            {DESKTOP_SEGMENTS.map((d, i) => (
              <g key={i}>
                <path d={d} stroke="#AFAFAF" />
                <path d={d} stroke="#4D4D4D" mask={`url(#${uid}-d${i})`} />
              </g>
            ))}
          </g>
        </svg>
        {[styles.dot0, styles.dot1, styles.dot2, styles.dot3].map((position, i) => (
          <span
            key={position}
            className={`${styles.dot} ${position} ${i === 0 ? styles.dotStart : ''}`.trim()}
            data-at={i / desktopStops}
          />
        ))}
      </div>

      {children}
    </div>
  );
}
