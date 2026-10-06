'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import styles from './Carousel.module.scss';

const CARD_GAP = 20;

type CarouselControlProps = {
  direction: 'prev' | 'next';
  enabled: boolean;
  itemLabel: string;
  onClick: () => void;
};

/** Figma: enabled = blue with white arrow, disabled = B50 with off-white arrow. */
function CarouselControl({ direction, enabled, itemLabel, onClick }: CarouselControlProps) {
  // arrow-next points right and arrow-prev-disabled points left; flip whichever faces the wrong way
  const src = enabled ? '/images/shared/common/carousel/arrow-next.svg' : '/images/shared/common/carousel/arrow-prev-disabled.svg';
  const flip = direction === 'next' ? !enabled : enabled;

  return (
    <button
      type="button"
      className={`${styles.controlBtn} ${enabled ? styles.controlActive : styles.controlInactive}`}
      onClick={onClick}
      disabled={!enabled}
      aria-label={`${direction === 'next' ? 'Next' : 'Previous'} ${itemLabel}`}
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

type CarouselProps = {
  /** Used in the arrow buttons' labels, e.g. "capability". */
  itemLabel: string;
  /** Optional content on the left of the arrow row (the arrows sit on the right). */
  header?: ReactNode;
  /** Below 1024px, stack the header above the arrows (arrows stay right-aligned) instead of side by side. */
  stackHeaderOnMobile?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * Horizontal card carousel: cards start on the container grid and bleed to the viewport edge.
 * Cards are the direct children; spacing between rows is set by the parent via `--carousel-row-gap`.
 */
export function Carousel({ itemLabel, header, stackHeaderOnMobile, className, children }: CarouselProps) {
  const blockRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 1);
    setCanNext(track.scrollLeft < maxScroll - 1);
  }, []);

  // Align the first/last card with the container's content edges.
  const syncEdgeInset = useCallback(() => {
    const block = blockRef.current;
    const track = trackRef.current;
    const viewport = track?.parentElement;
    if (!block || !track || !viewport) return;

    const blockRect = block.getBoundingClientRect();
    const viewportRect = viewport.getBoundingClientRect();

    track.style.setProperty('--carousel-edge-inset', `${blockRect.left - viewportRect.left}px`);
    track.style.setProperty('--carousel-edge-inset-right', `${viewportRect.right - blockRect.right}px`);
    track.scrollLeft = 0;
    updateControls();
  }, [updateControls]);

  useLayoutEffect(() => {
    syncEdgeInset();
  }, [syncEdgeInset]);

  useEffect(() => {
    const track = trackRef.current;
    const block = blockRef.current;
    if (!track || !block) return;

    track.addEventListener('scroll', updateControls, { passive: true });
    const resizeObserver = new ResizeObserver(syncEdgeInset);
    resizeObserver.observe(block);

    return () => {
      track.removeEventListener('scroll', updateControls);
      resizeObserver.disconnect();
    };
  }, [syncEdgeInset, updateControls]);

  const scroll = (direction: 'prev' | 'next') => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>(`.${styles.track} > :not(.${styles.spacer})`);
    if (!track) return;

    const amount = (card?.offsetWidth ?? 385) + CARD_GAP;
    track.scrollBy({ left: direction === 'next' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <div ref={blockRef} className={[styles.block, className].filter(Boolean).join(' ')}>
      <div className={`${styles.controlRow} ${header ? styles.controlRowWithHeader : ''} ${stackHeaderOnMobile ? styles.controlRowStacked : ''}`.trim()}>
        {header}
        <div className={styles.controls}>
          <CarouselControl direction="prev" enabled={canPrev} itemLabel={itemLabel} onClick={() => scroll('prev')} />
          <CarouselControl direction="next" enabled={canNext} itemLabel={itemLabel} onClick={() => scroll('next')} />
        </div>
      </div>

      <div className={styles.viewport}>
        <div ref={trackRef} className={styles.track}>
          <span className={styles.spacer} aria-hidden="true" />
          {children}
          <span className={`${styles.spacer} ${styles.spacerEnd}`} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
