"use client";

import { useEffect, useRef } from "react";
import type { homepageData } from "@/data/homepage";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { highlightText } from "@/utils/highlightText";
import {
  CONFIG,
  stepEase,
  viewModel,
  type ContentModel,
  type DotModel,
} from "./fiveStagesCore";
import styles from "./HowItWorksSection.module.scss";

type HowItWorksSectionProps = {
  data: typeof homepageData.howItWorks;
};

type DotNodes = {
  line: SVGLineElement | null;
  ring: SVGCircleElement | null;
  core: SVGCircleElement | null;
  num: SVGTextElement | null;
  hit: SVGCircleElement | null;
};

function renderDot(node: DotNodes | undefined, m: DotModel) {
  if (!node?.ring || !node.core || !node.num || !node.line) return;
  const { x, y } = m.center;
  node.ring.setAttribute("opacity", m.opacity.toFixed(3));
  node.core.setAttribute("opacity", m.opacity.toFixed(3));
  node.num.setAttribute("opacity", m.opacity.toFixed(3));
  node.ring.setAttribute("cx", x.toFixed(2));
  node.ring.setAttribute("cy", y.toFixed(2));
  node.ring.setAttribute("r", m.outerR.toFixed(2));
  node.ring.setAttribute(
    "stroke-dasharray",
    `${m.dash.toFixed(2)} ${m.dash.toFixed(2)}`,
  );
  node.core.setAttribute("cx", x.toFixed(2));
  node.core.setAttribute("cy", y.toFixed(2));
  node.core.setAttribute("r", m.innerR.toFixed(2));
  node.core.setAttribute("fill", m.fill);
  node.num.setAttribute("x", x.toFixed(2));
  node.num.setAttribute("y", y.toFixed(2));
  node.num.setAttribute("font-size", m.font.toFixed(2));
  node.num.textContent = m.label;
  if (node.hit) {
    node.hit.setAttribute("cx", x.toFixed(2));
    node.hit.setAttribute("cy", y.toFixed(2));
    // Faded-out dots (and the active one) are not jump targets.
    node.hit.style.pointerEvents = m.opacity > 0.4 && m.active < 0.5 ? "auto" : "none";
  }
  node.line.setAttribute("x1", m.line.from.x.toFixed(2));
  node.line.setAttribute("y1", m.line.from.y.toFixed(2));
  node.line.setAttribute("x2", m.line.to.x.toFixed(2));
  node.line.setAttribute("y2", m.line.to.y.toFixed(2));
  node.line.setAttribute("opacity", m.line.opacity.toFixed(3));
}

function renderItem(
  el: HTMLLIElement | null,
  c: ContentModel,
  isActive: boolean,
) {
  if (!el) return;
  el.style.opacity = c.opacity.toFixed(3);
  el.style.transform = `translateY(calc(${c.shift.toFixed(2)} * var(--u)))`;
  if (isActive) el.setAttribute("aria-current", "step");
  else el.removeAttribute("aria-current");
}

const STEP_KEYS: Record<string, 1 | -1> = {
  ArrowDown: 1,
  PageDown: 1,
  " ": 1,
  ArrowUp: -1,
  PageUp: -1,
};

const TOUCH_THRESHOLD_PX = 30;
const SWIPE_THRESHOLD_PX = 40;
// Wheel/trackpad input closer together than this belongs to the same gesture (inertia).
// How far (px) the frame top may sit from the viewport top and still count as locked.
const LOCK_TOLERANCE_PX = 2;
// Scroll is "settled" (momentum finished) after this long without a scroll event.
const SCROLL_SETTLE_MS = 160;
const GESTURE_QUIET_MS = 140;
// Scroll jumps within this long of a wheel/touch-move are momentum, not a link or anchor jump.
const MOMENTUM_WINDOW_MS = 2500;
// The diagram is pinned (and the page locked to it) on desktop/large tablet and on phones;
// 768-1023px keeps the plain tap/swipe layout.
// Phones are not CSS-pinned: the page is held at the frame by the input lock alone, so once
// released the diagram scrolls away with the next block (gap stays constant). From 768px up
// the frame is CSS-pinned (sticky) like desktop and the lock only intercepts input.
const isStaticLock = () => window.matchMedia("(max-width: 767.98px)").matches;
const isPinned = () => true;
// Below 768px the numbers (tap) and horizontal swipes also drive the diagram.
const isCompactViewport = () => window.matchMedia("(max-width: 767.98px)").matches;

export function HowItWorksSection({ data }: HowItWorksSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dotNodesRef = useRef<DotNodes[]>(
    data.stages.map(() => ({ line: null, ring: null, core: null, num: null, hit: null })),
  );
  const goToRef = useRef<(target: number) => void>(() => {});
  const stageRef = useRef(0);
  const skippingRef = useRef(false);
  const swipeRef = useRef({ x: 0, y: 0 });
  const itemNodesRef = useRef<(HTMLLIElement | null)[]>(
    data.stages.map(() => null),
  );

  // The track's sticky frame holds the diagram in place for the length of this effect's
  // "engaged" window (rect.top <= 0 && rect.bottom > frame height). While engaged the page
  // is locked to the diagram: wheel/key/touch input is swallowed and one gesture (inertia
  // included) moves exactly one stage. The section is left only by scrolling down past
  // stage 5, scrolling up past stage 1 (both hand the gesture back to the browser), or Skip.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let reduceMotion = reduceMotionQuery.matches;
    let stage = 0;
    let p = 0;
    let anim: {
      from: number;
      to: number;
      start: number;
      duration: number;
    } | null = null;
    let rafId = 0;
    let lastUserInputAt = 0;
    // The sticky frame is what stays pinned; the track is frame + scroll runway.
    const frameHeight = () => (track.firstElementChild as HTMLElement | null)?.offsetHeight ?? window.innerHeight;

    const draw = (value: number) => {
      const vm = viewModel(value, CONFIG, true);
      vm.dots.forEach((m, i) => renderDot(dotNodesRef.current[i], m));
      vm.content.forEach((c, i) =>
        renderItem(itemNodesRef.current[i], c, i === vm.stage),
      );
    };

    const tick = (now: number) => {
      if (!anim) return;
      const t = stepEase(now - anim.start, anim.duration);
      p = t >= 1 ? anim.to : anim.from + (anim.to - anim.from) * t;
      draw(p);
      if (t < 1) rafId = requestAnimationFrame(tick);
      else anim = null;
    };

    const isEngaged = () => {
      if (!isPinned()) return false;
      const rect = track.getBoundingClientRect();
      if (isStaticLock()) return Math.abs(rect.top) <= LOCK_TOLERANCE_PX;
      return rect.top <= 0 && rect.bottom > frameHeight();
    };

    /** Eases to any stage; returns false when already there. */
    const goTo = (next: number): boolean => {
      if (next === stage) return false;
      const distance = Math.abs(next - p);
      stage = next;
      stageRef.current = next;
      anim = {
        from: p,
        to: next,
        start: performance.now(),
        duration: reduceMotion ? 0 : CONFIG.stepDurationMs * (1 + 0.3 * (distance - 1)),
      };
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(tick);
      return true;
    };
    goToRef.current = (target) => {
      if (anim) return;
      goTo(Math.min(Math.max(target, 0), CONFIG.count - 1));
    };

    // Scrolling past stage 5 (down) or stage 1 (up) hands the page back to the browser.
    const isBoundary = (direction: 1 | -1) =>
      (direction > 0 && stage === CONFIG.count - 1) || (direction < 0 && stage === 0);

    // One gesture = one stage. A gesture's mode is fixed when it starts:
    //  step    – started on a stage with somewhere to go; all its input is swallowed and
    //            at most one stage change happens (inertia included)
    //  release – started at stage 1 going up / stage 5 going down; the page scrolls on
    //  outside – started before the section was pinned; swallowed once pinned so a flick
    //            can't carry through the stages
    type Mode = "step" | "release" | "outside";
    const startMode = (direction: 1 | -1): Mode =>
      !isEngaged() ? "outside" : isBoundary(direction) ? "release" : "step";

    const markUserInput = () => {
      lastUserInputAt = performance.now();
      skippingRef.current = false;
    };

    const onReduceMotionChange = () => {
      reduceMotion = reduceMotionQuery.matches;
    };

    let wheelMode: Mode = "outside";
    let wheelStepped = false;
    let lastWheelAt = 0;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      const direction = e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0;
      if (!direction) return;
      markUserInput();
      const now = performance.now();
      // A new gesture starts only after the wheel/trackpad (inertia included) went quiet.
      if (now - lastWheelAt > GESTURE_QUIET_MS) {
        wheelMode = startMode(direction);
        wheelStepped = false;
      }
      lastWheelAt = now;
      if (wheelMode === "release" || !isEngaged()) return;
      e.preventDefault();
      if (wheelMode === "step" && !wheelStepped && !anim) {
        wheelStepped = goTo(stage + direction);
      }
    };

    let lastKeyStepAt = 0;
    const onKeyDown = (e: KeyboardEvent) => {
      const direction = STEP_KEYS[e.key];
      if (!direction || !isEngaged()) return;
      if (e.target instanceof HTMLElement && e.target.closest("button, input, textarea, select, [contenteditable]")) return;
      markUserInput();
      if (isBoundary(direction)) return;
      e.preventDefault();
      const now = performance.now();
      if (e.repeat || anim || now - lastKeyStepAt < GESTURE_QUIET_MS) return;
      if (goTo(stage + direction)) lastKeyStepAt = now;
    };

    let touchStartX = 0;
    let touchStartY = 0;
    let touchMode: Mode | "horizontal" | null = null;
    let touchStepped = false;
    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchMode = null;
      touchStepped = false;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isPinned()) return;
      const dx = touchStartX - e.touches[0].clientX;
      const dy = touchStartY - e.touches[0].clientY;
      if (touchMode === null) {
        if (dx === 0 && dy === 0) return;
        touchMode = Math.abs(dx) > Math.abs(dy) ? "horizontal" : startMode(dy > 0 ? 1 : -1);
      }
      if (touchMode === "horizontal") return;
      markUserInput();
      if (touchMode === "release" || !isEngaged()) return;
      if (e.cancelable) e.preventDefault();
      if (touchMode === "step" && !touchStepped && !anim && Math.abs(dy) >= TOUCH_THRESHOLD_PX) {
        touchStepped = goTo(stage + (dy > 0 ? 1 : -1));
      }
    };

    // Momentum can carry a fast flick straight over the pinned runway. If that happens
    // before the stages were seen, put the page back where the section locks.
    let crossedLock = false;
    let settleTimer = 0;
    let prevTop = track.getBoundingClientRect().top;
    let prevBottom = track.getBoundingClientRect().bottom;
    const onScroll = () => {
      const rect = track.getBoundingClientRect();
      const fh = frameHeight();
      const recentInput = performance.now() - lastUserInputAt < MOMENTUM_WINDOW_MS;
      if (isPinned() && !skippingRef.current && recentInput && isStaticLock()) {
        // Crossed the lock position (frame top at the viewport top) in one jump: stop on it.
        const crossedDown = prevTop > -LOCK_TOLERANCE_PX && rect.top < -LOCK_TOLERANCE_PX;
        const crossedUp = prevTop < LOCK_TOLERANCE_PX && rect.top > LOCK_TOLERANCE_PX;
        if ((crossedDown && stage < CONFIG.count - 1) || (crossedUp && stage > 0)) {
          window.scrollTo({ top: window.scrollY + rect.top, behavior: "instant" as ScrollBehavior });
          // A finger still dragging (touch) overrides the jump above, so once the page
          // settles pull it back to the lock position if it is still past it.
          crossedLock = true;
        }
      } else if (isPinned() && !skippingRef.current && recentInput) {
        if (prevTop > 0 && rect.top < 0 && rect.bottom <= fh && stage < CONFIG.count - 1) {
          window.scrollTo({ top: window.scrollY + rect.top, behavior: "instant" as ScrollBehavior });
        } else if (prevBottom <= fh && rect.top > 0 && stage > 0) {
          window.scrollTo({ top: window.scrollY + rect.bottom - fh - 1, behavior: "instant" as ScrollBehavior });
        }
      }
      prevTop = rect.top;
      prevBottom = rect.bottom;
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(() => {
        if (!crossedLock) return;
        crossedLock = false;
        const r = track.getBoundingClientRect();
        if (isStaticLock() && Math.abs(r.top) > LOCK_TOLERANCE_PX) {
          window.scrollTo({ top: window.scrollY + r.top, behavior: "instant" as ScrollBehavior });
        }
      }, SCROLL_SETTLE_MS);
    };

    draw(p);
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    reduceMotionQuery.addEventListener("change", onReduceMotionChange);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(settleTimer);
      reduceMotionQuery.removeEventListener("change", onReduceMotionChange);
      cancelAnimationFrame(rafId);
    };
  }, [data.stages]);

  // Jump past the pinned diagram to whatever follows the section.
  const skipSection = () => {
    skippingRef.current = true;
    const track = trackRef.current;
    if (!track) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    // Same top gap as in-page anchor jumps (html scroll-padding-top).
    const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    window.scrollTo({
      top: window.scrollY + track.getBoundingClientRect().bottom - offset,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.scrollTrack} ref={trackRef}>
        <div className={styles.stickyFrame}>
          <Container>
            <div className={styles.stage}>
              <SectionHeading
                eyebrow={data.eyebrow}
                title={data.title}
                align="center"
                className={styles.heading}
              />

              <div
                className={styles.diagram}
                aria-label="Five stages diagram"
                onTouchStart={(e) => {
                  swipeRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
                }}
                onTouchEnd={(e) => {
                  if (!isCompactViewport()) return;
                  const dx = swipeRef.current.x - e.changedTouches[0].clientX;
                  const dy = swipeRef.current.y - e.changedTouches[0].clientY;
                  if (Math.abs(dx) < SWIPE_THRESHOLD_PX || Math.abs(dx) < Math.abs(dy)) return;
                  goToRef.current(stageRef.current + (dx > 0 ? 1 : -1));
                }}
              >
                <svg
                  className={styles.art}
                  viewBox="0 0 780 440"
                  aria-hidden="true"
                  focusable="false"
                >
                  <defs>
                    <radialGradient
                      id="howItWorksDomeFill"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(390 461.5) rotate(-90) scale(267 3463.58)"
                    >
                      <stop offset="0" stopColor="#FEFEFE" stopOpacity="0" />
                      <stop
                        offset="0.411128"
                        stopColor="#D8E3FF"
                        stopOpacity="0.5"
                      />
                      <stop offset="1" stopColor="#B2C7FF" stopOpacity="1" />
                    </radialGradient>
                    <linearGradient
                      id="howItWorksDomeStroke"
                      gradientUnits="userSpaceOnUse"
                      x1="390"
                      y1="170"
                      x2="390"
                      y2="442.5"
                    >
                      <stop offset="0" stopColor="#B2C7FF" />
                      <stop offset="1" stopColor="#FEFEFE" />
                    </linearGradient>
                    <linearGradient
                      id="howItWorksArcStroke"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0" stopColor="#AFAFAF" stopOpacity="0" />
                      <stop offset="0.12" stopColor="#AFAFAF" stopOpacity="1" />
                      <stop offset="0.88" stopColor="#AFAFAF" stopOpacity="1" />
                      <stop offset="1" stopColor="#AFAFAF" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <circle
                    className={styles.arc}
                    cx={CONFIG.center.x}
                    cy={CONFIG.center.y}
                    r={CONFIG.arc.r}
                  />
                  <circle
                    className={styles.dome}
                    cx={CONFIG.center.x}
                    cy={CONFIG.center.y}
                    r={CONFIG.dome.r}
                  />
                  <circle
                    className={styles.domeStroke}
                    cx={CONFIG.center.x}
                    cy={CONFIG.center.y}
                    r={CONFIG.dome.r - 0.5}
                  />

                  <g>
                    {data.stages.map((stage, i) => (
                      <g key={stage.id}>
                        <line
                          className={styles.line}
                          ref={(el) => {
                            dotNodesRef.current[i].line = el;
                          }}
                        />
                        <circle
                          className={styles.ring}
                          ref={(el) => {
                            dotNodesRef.current[i].ring = el;
                          }}
                        />
                        <circle
                          className={styles.core}
                          ref={(el) => {
                            dotNodesRef.current[i].core = el;
                          }}
                        />
                        <text
                          className={styles.num}
                          ref={(el) => {
                            dotNodesRef.current[i].num = el;
                          }}
                        />
                        <circle
                          className={styles.hit}
                          r={22}
                          onClick={() => isCompactViewport() && goToRef.current(i)}
                          ref={(el) => {
                            dotNodesRef.current[i].hit = el;
                          }}
                        />
                      </g>
                    ))}
                  </g>
                </svg>

                <ol className={styles.itemsList}>
                  {data.stages.map((stage, i) => (
                    <li
                      key={stage.id}
                      className={styles.item}
                      ref={(el) => {
                        itemNodesRef.current[i] = el;
                      }}
                    >
                      <h3 className={styles.label}>{stage.title}</h3>
                      <div className={styles.icon}>
                        <img
                          src={`/images/shared/home/arc/${stage.title}.svg`}
                          alt=""
                          aria-hidden="true"
                        />
                      </div>
                      <p className={styles.description}>
                        {highlightText(stage.description)}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <button
                type="button"
                className={styles.skip}
                onClick={skipSection}
              >
                <span>Skip</span>
                <img
                  src="/images/shared/home/skip-arrow.svg"
                  alt=""
                  aria-hidden="true"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
