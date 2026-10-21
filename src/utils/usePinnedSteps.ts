'use client';

import { useEffect, useRef, useState } from 'react';

/** How long the ring takes to bring the next dot to the active spot. */
const STEP_MS = 1000;

export const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
export const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/**
 * Drives the pinned, stepped dot animations (capability "What it does", integrations "four ways").
 *
 * Put `trackRef` on a tall section (400vh for four steps) that contains a sticky 100vh frame. The scroll
 * position inside that track picks which step (0 … count - 1) should be active, and `rotation` then turns
 * to it on a timer (so a dot never rests anywhere but on the active spot). While the track is pinned the
 * mouse wheel is taken over, so one wheel gesture moves exactly one step; at either end the page scrolls on.
 */
export function usePinnedSteps(count: number) {
  const trackRef = useRef<HTMLElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || count < 2) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let current = 0; // where the ring is now, in steps
    let target = 0;
    let tween: { from: number; to: number; start: number; duration: number } | null = null;
    let tweenFrame = 0;
    let scrollFrame = 0;
    let lockedUntil = 0; // wheel events are ignored until the current step has finished

    const tick = (now: number) => {
      tweenFrame = 0;
      if (!tween) return;
      const t = clamp01((now - tween.start) / tween.duration);
      current = tween.from + (tween.to - tween.from) * easeInOut(t);
      setRotation(current);
      if (t < 1) tweenFrame = window.requestAnimationFrame(tick);
      else tween = null;
    };

    const goTo = (next: number) => {
      target = next;
      if (reduceMotion) {
        current = next;
        setRotation(next);
        return;
      }
      // Re-aimed mid-turn: carry on from wherever the ring has got to.
      tween = {
        from: current,
        to: next,
        start: performance.now(),
        duration: STEP_MS * Math.max(1, Math.abs(next - current)),
      };
      if (!tweenFrame) tweenFrame = window.requestAnimationFrame(tick);
    };

    const update = () => {
      scrollFrame = 0;
      const { top, height } = track.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      if (scrollable <= 0) return;
      const next = Math.min(count - 1, Math.floor(clamp01(-top / scrollable) * count));
      if (next !== target) goTo(next);
    };
    const onScroll = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(update);
    };

    const onWheel = (event: WheelEvent) => {
      const { top, height } = track.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      // Only while the section is pinned, and never when the page should scroll on past either end.
      if (scrollable <= 0 || top > 0 || top < -scrollable || Math.abs(event.deltaY) < 4) return;
      const direction = event.deltaY > 0 ? 1 : -1;
      const next = target + direction;
      if (next < 0 || next > count - 1) return;

      event.preventDefault();
      if (performance.now() < lockedUntil) return;
      lockedUntil = performance.now() + STEP_MS * 0.8;
      // Park the page in the middle of the new step's stretch, so scroll position and dot agree.
      window.scrollTo({ top: window.scrollY + top + ((next + 0.5) / count) * scrollable, behavior: 'instant' });
      goTo(next);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('wheel', onWheel);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      if (tweenFrame) window.cancelAnimationFrame(tweenFrame);
    };
  }, [count]);

  // Scrolls straight past the pinned stretch, to whatever follows the track.
  const skip = () => {
    const track = trackRef.current;
    if (track) window.scrollTo({ top: window.scrollY + track.getBoundingClientRect().bottom, behavior: 'smooth' });
  };

  // The label and card change once the dot has (almost) reached the active spot, not as it sets off.
  const active = Math.min(count - 1, Math.floor(rotation + 0.9));

  return { trackRef, rotation, active, skip };
}
