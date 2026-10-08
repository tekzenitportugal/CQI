import type { CSSProperties } from 'react';
import type { homepageData } from '@/data/homepage';
import { Container } from '@/components/ui/Container';
import { GhostLink } from '@/components/ui/GhostLink';
import styles from './StackInfographicSection.module.scss';

type StackInfographicSectionProps = {
  layers: typeof homepageData.stackLayers;
  /** Ghost links shown centred under the diagram. */
  ctas?: { label: string; href: string }[];
};

/** Figma "infographic layers - homepage" (6079:26105) is a 1084.616 × 495 canvas. */
const CANVAS = { width: 1084.616, height: 495 };

type Box = { left: number; top: number; width: number };

/** Geometry per layer, in canvas px, in the same order as `homepageData.stackLayers`. */
const LAYER_GEOMETRY: { card: Box; node: Box; line: Box; lineSrc: string; active?: boolean }[] = [
  {
    card: { left: 195, top: 124, width: 270 },
    node: { left: 484.5, top: 143.5, width: 34.83 },
    line: { left: 518.5, top: 158.3, width: 223.167 },
    lineSrc: '/images/shared/home/line-101.svg',
  },
  {
    card: { left: 0, top: 209, width: 270 },
    node: { left: 289.5, top: 218.5, width: 54 },
    line: { left: 342.5, top: 243.3, width: 323.167 },
    lineSrc: '/images/shared/home/line-102.svg',
    active: true,
  },
  {
    card: { left: 92, top: 294, width: 270 },
    node: { left: 381.5, top: 316.5, width: 34.83 },
    line: { left: 415.5, top: 331.3, width: 173.167 },
    lineSrc: '/images/shared/home/line-103.svg',
  },
];

/** Exposes a box as CSS variables; only the xl canvas layout reads them. */
const toCanvasVars = ({ left, top, width }: Box) =>
  ({
    '--left': `${(left / CANVAS.width) * 100}%`,
    '--top': `${(top / CANVAS.height) * 100}%`,
    '--width': `${(width / CANVAS.width) * 100}%`,
  }) as CSSProperties;

/**
 * Figma mobile "Where cqi fits" diagram (6225:42513, "Group 971" diagram half)
 * is a 374.043 × 664 canvas, reusing the same percentage-positioning approach
 * as the desktop xl layout above but with its own card/node/line geometry —
 * active only below 1024px, independent of the desktop breakpoint.
 */
const MOBILE_CANVAS = { width: 374.043, height: 664 };

type LineBox = { left: number; top: number; height: number };

const MOBILE_GEOMETRY: { card: Box; node: Box; line: LineBox }[] = [
  {
    card: { left: 195.04, top: 36, width: 179 },
    node: { left: 275, top: 202, width: 20 },
    line: { left: 285.04, top: 149.2, height: 49.54 },
  },
  {
    card: { left: 163.04, top: 564, width: 190 },
    node: { left: 240.06, top: 512, width: 36 },
    // Figma's dashed connector for this layer runs from the layer-stack
    // artwork down to the node, not from the node down to the card below it.
    line: { left: 258.07, top: 362.23, height: 123.82 },
  },
  {
    card: { left: 0.04, top: 0, width: 179 },
    node: { left: 29, top: 182, width: 20 },
    line: { left: 39.05, top: 129.35, height: 222.8 },
  },
];

const toMobileVars = ({ left, top, width }: Box) =>
  ({
    '--m-left': `${(left / MOBILE_CANVAS.width) * 100}%`,
    '--m-top': `${(top / MOBILE_CANVAS.height) * 100}%`,
    '--m-width': `${(width / MOBILE_CANVAS.width) * 100}%`,
  }) as CSSProperties;

const toMobileLineVars = ({ left, top, height }: LineBox) =>
  ({
    '--m-line-left': `${(left / MOBILE_CANVAS.width) * 100}%`,
    '--m-line-top': `${(top / MOBILE_CANVAS.height) * 100}%`,
    '--m-line-height': `${(height / MOBILE_CANVAS.height) * 100}%`,
  }) as CSSProperties;

export function StackInfographicSection({ layers, ctas }: StackInfographicSectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.infographic}>
          <img
            src="/images/shared/home/stack-layers.webp"
            alt=""
            width={484}
            height={495}
            className={styles.layersArt}
            aria-hidden="true"
          />
          <img
            src="/images/shared/home/stack-layers-mobile.svg"
            alt=""
            width={374}
            height={379}
            className={styles.layersArtMobile}
            aria-hidden="true"
          />

          {layers.map((layer, index) => {
            const geometry = LAYER_GEOMETRY[index];
            const mobileGeometry = MOBILE_GEOMETRY[index];

            return (
              <div key={layer.title} className={styles.layerGroup}>
                <article
                  className={styles.card}
                  style={{ ...toCanvasVars(geometry.card), ...toMobileVars(mobileGeometry.card) }}
                >
                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>{layer.title}</h3>
                    <span
                      className={`${styles.tag} ${layer.tagHighlight ? styles.tagHighlight : ''}`.trim()}
                    >
                      {layer.tag}
                    </span>
                  </div>
                  <p className={styles.cardDescription}>{layer.description}</p>
                </article>

                <span
                  className={`${styles.node} ${geometry.active ? styles.nodeActive : ''}`.trim()}
                  style={{ ...toCanvasVars(geometry.node), ...toMobileVars(mobileGeometry.node) }}
                  aria-hidden="true"
                />

                <img
                  src={geometry.lineSrc}
                  alt=""
                  className={styles.line}
                  style={toCanvasVars(geometry.line)}
                  aria-hidden="true"
                />

                <span
                  className={styles.lineMobile}
                  style={toMobileLineVars(mobileGeometry.line)}
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>

        {ctas && ctas.length > 0 && (
          <div className={styles.actions}>
            {ctas.map((cta) => (
              <GhostLink key={cta.label} label={cta.label} href={cta.href} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
