"use client";

import type { homepageData } from "@/data/homepage";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { highlightText } from "@/utils/highlightText";
import { CONFIG } from "./fiveStagesCore";
import { useDomeStages } from "./useDomeStages";
import styles from "./HowItWorksSection.module.scss";

type HowItWorksSectionProps = {
  data: typeof homepageData.howItWorks;
};

// The scroll-stepped behaviour (page lock, one gesture = one stage, keys, touch, Skip) lives in
// useDomeStages, shared with the integrations "four ways" section.
export function HowItWorksSection({ data }: HowItWorksSectionProps) {
  const { trackRef, dotNodesRef, itemNodesRef, skipSection, onDiagramTouchStart, onDiagramTouchEnd, jumpTo } =
    useDomeStages(CONFIG);

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
                onTouchStart={onDiagramTouchStart}
                onTouchEnd={onDiagramTouchEnd}
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
