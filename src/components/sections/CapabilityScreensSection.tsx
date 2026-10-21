'use client';

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent, type TransitionEvent } from 'react';
import styles from './CapabilityScreensSection.module.scss';

export type CapabilityScreensData = {
  /** Screenshots in carousel order. The first one starts in the middle. */
  images: { src: string; alt: string }[];
};

type CapabilityScreensSectionProps = {
  data: CapabilityScreensData;
};

/** Sets of cloned items either side of the real ones, so the loop never runs out of track. */
const CLONE_SETS = 2;
const DRAG_START_PX = 6;

/**
 * Figma 6733:63942, built the way Owl Carousel works: every item sits in one long track and the whole track
 * slides; the active item is centred and enlarged; the items repeat endlessly (clones either side, and the
 * track jumps back unseen once a slide has landed on a clone); dots jump straight to an item; the track
 * follows a mouse or touch drag. There is no autoplay. Below lg each item fills the width.
 */
export function CapabilityScreensSection({ data }: CapabilityScreensSectionProps) {
  const count = data.images.length;
  const [position, setPosition] = useState(0); // may run past 0 … count - 1 onto the clones
  const [instant, setInstant] = useState(false); // true for the frame in which the track jumps back
  const [drag, setDrag] = useState<number | null>(null); // px the track is being dragged, null when not dragging
  const pointer = useRef<{ x: number; moved: boolean } | null>(null);

  const wrap = (index: number) => ((index % count) + count) % count;
  const active = wrap(position);

  // Download and decode every screenshot up front so none is blank when it slides in.
  useEffect(() => {
    data.images.forEach(({ src }) => {
      const preload = new Image();
      preload.src = src;
      preload.decode().catch(() => {});
    });
  }, [data.images]);

  // After a slide lands on a clone, jump back to the matching real item with no transition (Owl does the same).
  const onTransitionEnd = (event: TransitionEvent) => {
    if (event.target !== event.currentTarget || event.propertyName !== 'transform') return;
    if (position < 0 || position >= count) {
      setInstant(true);
      setPosition(wrap(position));
    }
  };
  useEffect(() => {
    if (!instant) return;
    let second = 0;
    const first = window.requestAnimationFrame(() => {
      second = window.requestAnimationFrame(() => setInstant(false));
    });
    return () => {
      window.cancelAnimationFrame(first);
      window.cancelAnimationFrame(second);
    };
  }, [instant]);

  const step = (direction: 1 | -1) => setPosition((current) => current + direction);
  const goTo = (index: number) => setPosition((current) => current + (index - wrap(current)));

  const onPointerDown = (event: PointerEvent) => {
    pointer.current = { x: event.clientX, moved: false };
  };
  const onPointerMove = (event: PointerEvent) => {
    const start = pointer.current;
    if (!start) return;
    const delta = event.clientX - start.x;
    if (!start.moved && Math.abs(delta) < DRAG_START_PX) return;
    if (!start.moved) event.currentTarget.setPointerCapture(event.pointerId);
    start.moved = true;
    setDrag(delta);
  };
  const onPointerUp = (event: PointerEvent) => {
    const start = pointer.current;
    pointer.current = null;
    if (!start?.moved) return;
    const delta = event.clientX - start.x;
    setDrag(null);
    // Dragged far enough → move one item in that direction; otherwise it springs back.
    if (Math.abs(delta) > 60) step(delta < 0 ? 1 : -1);
  };

  const items = [];
  for (let virtual = -CLONE_SETS * count; virtual < (CLONE_SETS + 1) * count; virtual += 1) {
    const image = data.images[wrap(virtual)];
    const offset = virtual - position;
    items.push(
      <div
        key={virtual}
        className={`${styles.item} ${offset === 0 ? styles.center : ''}`.trim()}
        aria-hidden={offset !== 0}
        onClick={() => {
          // A click on a neighbour brings it to the middle; the end of a drag is not a click.
          if (offset !== 0 && !pointer.current?.moved) setPosition(virtual);
        }}
      >
        <img src={image.src} alt={image.alt} draggable={false} className={styles.shot} />
      </div>,
    );
  }

  const trackStyle = {
    '--slot': position + CLONE_SETS * count,
    '--drag': `${drag ?? 0}px`,
  } as CSSProperties;

  return (
    <section className={styles.section}>
      <div
        className={styles.stage}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className={`${styles.track} ${instant || drag !== null ? styles.still : ''}`.trim()}
          style={trackStyle}
          onTransitionEnd={onTransitionEnd}
        >
          {items}
        </div>
      </div>

      <div className={styles.dots}>
        {data.images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={`${styles.dot} ${index === active ? styles.dotActive : ''}`.trim()}
            aria-label={`Show screen ${index + 1} of ${count}`}
            aria-current={index === active}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
