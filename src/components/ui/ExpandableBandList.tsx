'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import type { ExpandableBandItem } from '@/types/content';
import { Button } from '@/components/ui/Button';
import styles from './ExpandableBandList.module.scss';

type ExpandableBandListProps = {
  items: ExpandableBandItem[];
  /** Figma tints each band a fixed shade by position, regardless of which one is open. */
  colors: string[];
  defaultOpen?: number;
  className?: string;
  /** Pin the list while scrolling and open each band in turn by scroll position (click still works). */
  scrollDriven?: boolean;
};

/** Scroll distance (in vh) the page travels per band while the list is pinned. */
const SCROLL_VH_PER_BAND = 45;

/**
 * Figma "CARDS EXPAND": full-width bands, progressively tinted blue, one open at a time.
 * The open band shows its copy (plain text or a ruled-rows list); the rest are just title bars.
 */
export function ExpandableBandList({
  items,
  colors,
  defaultOpen = 0,
  className,
  scrollDriven = false,
}: ExpandableBandListProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const [pinned, setPinned] = useState(false);
  const baseId = useId();
  const trackRef = useRef<HTMLDivElement>(null);

  // Pin offset and distance are read from layout so they follow the header token and viewport.
  const getMetrics = useCallback(() => {
    const track = trackRef.current;
    if (!track) return null;
    const pinTop = parseFloat(getComputedStyle(track.firstElementChild as Element).top) || 0;
    const distance = ((items.length - 1) * SCROLL_VH_PER_BAND * window.innerHeight) / 100;
    const trackTop = track.getBoundingClientRect().top + window.scrollY;
    return { distance, start: trackTop - pinTop };
  }, [items.length]);

  useEffect(() => {
    if (!scrollDriven) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setPinned(true);
  }, [scrollDriven]);

  useEffect(() => {
    if (!pinned) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const m = getMetrics();
      if (!m) return;
      const progress = Math.min(Math.max((window.scrollY - m.start) / m.distance, 0), 1);
      setOpenIndex(Math.min(items.length - 1, Math.floor(progress * items.length)));
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
  }, [pinned, items.length, getMetrics]);

  const handleSelect = (index: number) => {
    setOpenIndex(index);
    const m = pinned ? getMetrics() : null;
    if (m) {
      // Land inside this band's slice of the pinned range so the scroll handler agrees.
      const target = m.start + ((index + 0.5) / items.length) * m.distance;
      window.scrollTo({ top: target, behavior: 'smooth' });
    }
  };

  const list = (
    <div className={[styles.list, className].filter(Boolean).join(' ')}>
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        const hasBody = Boolean(item.rows?.length || item.description);
        const background = colors[index % colors.length];
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.title} className={styles.item} style={{ background }}>
            <button
              type="button"
              className={[styles.header, isOpen && hasBody ? styles.headerOpen : ''].filter(Boolean).join(' ')}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => handleSelect(index)}
            >
              {item.title}
            </button>
            <div
              id={panelId}
              className={[styles.collapse, isOpen ? styles.open : ''].filter(Boolean).join(' ')}
            >
              <div className={styles.collapseInner}>
                <div
                  className={[
                    styles.panel,
                    hasBody ? (index === 0 ? styles.panelGap60 : styles.panelGap90) : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {item.rows ? (
                    <ul className={styles.rows}>
                      {item.rows.map((row, rowIndex) => (
                        <li key={`${rowIndex}-${row.description}`} className={styles.row}>
                          {row.description}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    item.description && (
                      <div className={styles.descriptionWrap}>
                        <p className={styles.description}>{item.description}</p>
                        {item.link && (
                          <Button label={item.link.label} href={item.link.href} variant="text" showArrow />
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  if (!pinned) return list;

  return (
    <div ref={trackRef} className={styles.track}>
      <div className={styles.pin}>{list}</div>
      {/* Sticky is bounded by the track's content box (not its padding), so the scroll room is a real element. */}
      <div aria-hidden="true" style={{ height: `${(items.length - 1) * SCROLL_VH_PER_BAND}vh` }} />
    </div>
  );
}
