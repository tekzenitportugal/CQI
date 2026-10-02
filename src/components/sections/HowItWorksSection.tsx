'use client';

import { useEffect, useRef } from 'react';
import type { homepageData } from '@/data/homepage';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { highlightText } from '@/utils/highlightText';
import { CONFIG, stepEase, viewModel, type ContentModel, type DotModel } from './fiveStagesCore';
import styles from './HowItWorksSection.module.scss';

type HowItWorksSectionProps = {
  data: typeof homepageData.howItWorks;
};

type DotNodes = {
  line: SVGLineElement | null;
  ring: SVGCircleElement | null;
  core: SVGCircleElement | null;
  num: SVGTextElement | null;
};

function renderDot(node: DotNodes | undefined, m: DotModel) {
  if (!node?.ring || !node.core || !node.num || !node.line) return;
  const { x, y } = m.center;
  node.ring.setAttribute('opacity', m.opacity.toFixed(3));
  node.core.setAttribute('opacity', m.opacity.toFixed(3));
  node.num.setAttribute('opacity', m.opacity.toFixed(3));
  node.ring.setAttribute('cx', x.toFixed(2));
  node.ring.setAttribute('cy', y.toFixed(2));
  node.ring.setAttribute('r', m.outerR.toFixed(2));
  node.ring.setAttribute('stroke-dasharray', `${m.dash.toFixed(2)} ${m.dash.toFixed(2)}`);
  node.core.setAttribute('cx', x.toFixed(2));
  node.core.setAttribute('cy', y.toFixed(2));
  node.core.setAttribute('r', m.innerR.toFixed(2));
  node.core.setAttribute('fill', m.fill);
  node.num.setAttribute('x', x.toFixed(2));
  node.num.setAttribute('y', y.toFixed(2));
  node.num.setAttribute('font-size', m.font.toFixed(2));
  node.num.textContent = m.label;
  node.line.setAttribute('x1', m.line.from.x.toFixed(2));
  node.line.setAttribute('y1', m.line.from.y.toFixed(2));
  node.line.setAttribute('x2', m.line.to.x.toFixed(2));
  node.line.setAttribute('y2', m.line.to.y.toFixed(2));
  node.line.setAttribute('opacity', m.line.opacity.toFixed(3));
}

function renderItem(el: HTMLLIElement | null, c: ContentModel, isActive: boolean) {
  if (!el) return;
  el.style.opacity = c.opacity.toFixed(3);
  el.style.transform = `translateY(calc(${c.shift.toFixed(2)} * var(--u)))`;
  if (isActive) el.setAttribute('aria-current', 'step');
  else el.removeAttribute('aria-current');
}

const STEP_KEYS: Record<string, 1 | -1> = {
  ArrowDown: 1,
  PageDown: 1,
  ' ': 1,
  ArrowUp: -1,
  PageUp: -1,
};

const TOUCH_THRESHOLD_PX = 30;

export function HowItWorksSection({ data }: HowItWorksSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dotNodesRef = useRef<DotNodes[]>(data.stages.map(() => ({ line: null, ring: null, core: null, num: null })));
  const itemNodesRef = useRef<(HTMLLIElement | null)[]>(data.stages.map(() => null));

  // The track's sticky frame holds the diagram in place for the length of this effect's
  // "engaged" window (rect.top <= 0 && rect.bottom > viewport). While engaged, scroll/key/
  // touch input is intercepted and converted into discrete steps — one nudge commits to a
  // full move to the next or previous stage, eased to completion on its own, so the arc
  // never rests stopped half-way between two numbers. Input at stage 1 (scrolling up) or
  // stage 5 (scrolling down) is left alone so the page scrolls on normally.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduceMotion = reduceMotionQuery.matches;
    let stage = 0;
    let p = 0;
    let anim: { from: number; to: number; start: number; duration: number } | null = null;
    let rafId = 0;

    const draw = (value: number) => {
      const vm = viewModel(value, CONFIG, true);
      vm.dots.forEach((m, i) => renderDot(dotNodesRef.current[i], m));
      vm.content.forEach((c, i) => renderItem(itemNodesRef.current[i], c, i === vm.stage));
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
      const rect = track.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom > window.innerHeight;
    };

    /** Returns true when the input was consumed (caller should preventDefault). */
    const attemptStep = (direction: 1 | -1): boolean => {
      if (anim) return true;
      const next = Math.min(Math.max(stage + direction, 0), CONFIG.count - 1);
      if (next === stage) return false;
      stage = next;
      anim = { from: p, to: next, start: performance.now(), duration: reduceMotion ? 0 : CONFIG.stepDurationMs };
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(tick);
      return true;
    };

    const onReduceMotionChange = () => {
      reduceMotion = reduceMotionQuery.matches;
    };

    const onWheel = (e: WheelEvent) => {
      if (!isEngaged()) return;
      const direction = e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0;
      if (!direction) return;
      if (attemptStep(direction)) e.preventDefault();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (!isEngaged()) return;
      const direction = STEP_KEYS[e.key];
      if (!direction) return;
      if (attemptStep(direction)) e.preventDefault();
    };

    let touchStartY = 0;
    let touchStepped = false;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStepped = false;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isEngaged()) return;
      if (touchStepped) {
        e.preventDefault();
        return;
      }
      const delta = touchStartY - e.touches[0].clientY;
      if (Math.abs(delta) < TOUCH_THRESHOLD_PX) return;
      const direction = delta > 0 ? 1 : -1;
      if (attemptStep(direction)) {
        touchStepped = true;
        e.preventDefault();
      }
    };

    draw(p);
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    reduceMotionQuery.addEventListener('change', onReduceMotionChange);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      reduceMotionQuery.removeEventListener('change', onReduceMotionChange);
      cancelAnimationFrame(rafId);
    };
  }, [data.stages]);

  return (
    <section className={styles.section}>
      <div className={styles.scrollTrack} ref={trackRef}>
        <div className={styles.stickyFrame}>
          <Container>
            <SectionHeading
              eyebrow={data.eyebrow}
              title={data.title}
              align="center"
              className={styles.heading}
            />

            <div className={styles.diagram} aria-label="Five stages diagram">
              <svg className={styles.art} viewBox="0 0 780 440" aria-hidden="true" focusable="false">
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
                    <stop offset="0.411128" stopColor="#D8E3FF" stopOpacity="0.5" />
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
                  <linearGradient id="howItWorksArcStroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#AFAFAF" stopOpacity="0" />
                    <stop offset="0.12" stopColor="#AFAFAF" stopOpacity="1" />
                    <stop offset="0.88" stopColor="#AFAFAF" stopOpacity="1" />
                    <stop offset="1" stopColor="#AFAFAF" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <circle className={styles.arc} cx={CONFIG.center.x} cy={CONFIG.center.y} r={CONFIG.arc.r} />
                <circle className={styles.dome} cx={CONFIG.center.x} cy={CONFIG.center.y} r={CONFIG.dome.r} />
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
                      <img src={`/images/shared/home/arc/${stage.title}.svg`} alt="" aria-hidden="true" />
                    </div>
                    <p className={styles.description}>{highlightText(stage.description)}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
