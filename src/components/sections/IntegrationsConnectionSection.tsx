'use client';

import type { IntegrationsConnectionData } from '@/data/integrations';
import { Container } from '@/components/ui/Container';
import { GhostLink } from '@/components/ui/GhostLink';
import { highlightText } from '@/utils/highlightText';
import { CONFIG, type DomeConfig } from './fiveStagesCore';
import { useDomeStages } from './useDomeStages';
import styles from './IntegrationsConnectionSection.module.scss';

type IntegrationsConnectionSectionProps = {
  data: IntegrationsConnectionData;
};

// The same dome engine as the homepage "How it works", on Figma's 755 × 415 frame for this section
// (dome centre (377.5, 474.5), four dots 39° apart instead of five 40° apart).
const DOME: DomeConfig = { ...CONFIG, count: 4, stepDeg: 39, center: { x: 377.5, y: 474.5 } };

/**
 * Figma "Frame 1410129158" on the soft-blue band: the heading on the left and, on the right, the dome with
 * four numbered dots (Direction, Security, Effort, Data quality). It behaves exactly like the homepage
 * "How it works": the page locks to the diagram and one wheel notch, key press or swipe moves one step;
 * the four ingestion cards follow.
 */
export function IntegrationsConnectionSection({ data }: IntegrationsConnectionSectionProps) {
  const { trackRef, dotNodesRef, itemNodesRef, skipSection, onDiagramTouchStart, onDiagramTouchEnd, jumpTo } =
    useDomeStages(DOME);

  return (
    <section className={styles.section}>
      <div className={styles.scrollTrack} ref={trackRef}>
        <div className={styles.stickyFrame}>
          <Container>
            <div className={styles.stage}>
              <div className={styles.header}>
                <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>
                <p className={styles.description}>{data.description}</p>
                <GhostLink label={data.button.label} href={data.button.href} />
              </div>

              <div
                className={styles.diagram}
                aria-label="Four ways data reaches CQI"
                onTouchStart={onDiagramTouchStart}
                onTouchEnd={onDiagramTouchEnd}
              >
                <svg className={styles.art} viewBox="0 0 755 415" aria-hidden="true" focusable="false">
                  <defs>
                    <radialGradient
                      id="waysDomeFill"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(377.5 441) rotate(-90) scale(267 3463.58)"
                    >
                      <stop offset="0" stopColor="#FEFEFE" stopOpacity="0" />
                      <stop offset="0.411128" stopColor="#D8E3FF" stopOpacity="0.5" />
                      <stop offset="1" stopColor="#B2C7FF" stopOpacity="1" />
                    </radialGradient>
                    <linearGradient id="waysDomeStroke" gradientUnits="userSpaceOnUse" x1="377.5" y1="149.5" x2="377.5" y2="422">
                      <stop offset="0" stopColor="#B2C7FF" />
                      <stop offset="1" stopColor="#FEFEFE" />
                    </linearGradient>
                    <linearGradient id="waysArcStroke" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#AFAFAF" stopOpacity="0" />
                      <stop offset="0.12" stopColor="#AFAFAF" stopOpacity="1" />
                      <stop offset="0.88" stopColor="#AFAFAF" stopOpacity="1" />
                      <stop offset="1" stopColor="#AFAFAF" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <circle className={styles.arc} cx={DOME.center.x} cy={DOME.center.y} r={DOME.arc.r} />
                  <circle className={styles.dome} cx={DOME.center.x} cy={DOME.center.y} r={DOME.dome.r} />
                  <circle className={styles.domeStroke} cx={DOME.center.x} cy={DOME.center.y} r={DOME.dome.r - 0.5} />

                  <g>
                    {data.steps.map((step, i) => (
                      <g key={step.title}>
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
                          onClick={() => jumpTo(i)}
                          ref={(el) => {
                            dotNodesRef.current[i].hit = el;
                          }}
                        />
                      </g>
                    ))}
                  </g>
                </svg>

                <ol className={styles.itemsList}>
                  {data.steps.map((step, i) => (
                    <li
                      key={step.title}
                      className={styles.item}
                      ref={(el) => {
                        itemNodesRef.current[i] = el;
                      }}
                    >
                      <h3 className={styles.label}>{step.title}</h3>
                      <p className={styles.stepText}>{step.description}</p>
                    </li>
                  ))}
                </ol>

                <button type="button" className={styles.skip} onClick={skipSection}>
                  <span>Skip</span>
                  <img src="/images/shared/home/skip-arrow.svg" alt="" aria-hidden="true" width={16} height={16} />
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <Container>
        <ul className={styles.cards}>
          {data.cards.map((card) => (
            <li key={card.title} className={styles.card}>
              <p className={styles.cardTitle}>{card.title}</p>
              <p className={styles.cardDescription}>{card.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
