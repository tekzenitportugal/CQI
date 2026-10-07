import type { CSSProperties } from 'react';
import { Container } from '@/components/ui/Container';
import { FpoImage } from '@/components/ui/FpoImage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fluidSpace } from '@/utils/fluidSpace';
import styles from './CapabilityFeaturesSection.module.scss';

export type CapabilityFeaturesData = {
  eyebrow: string;
  title: string;
  titleHighlight?: string[];
  /** Figma title box width (708 or 774). */
  titleMaxWidth: number;
  cards: { title: string; description: string }[];
  image: {
    src: string;
    /** Screenshot position inside the 587×550 dimmed frame. */
    inset: { top: number; left: number; width: number; height: number };
  };
};

type CapabilityFeaturesSectionProps = {
  data: CapabilityFeaturesData;
  spaceTop?: number;
  spaceBottom?: number;
};

/** Capability "What it does": heading + 2×2 light cards on the left, dimmed FPO screenshot on the right. */
export function CapabilityFeaturesSection({ data, spaceTop = 200, spaceBottom = 200 }: CapabilityFeaturesSectionProps) {
  const style = {
    paddingTop: fluidSpace(spaceTop),
    paddingBottom: fluidSpace(spaceBottom),
    '--section-heading-title-max-width': `${data.titleMaxWidth}px`,
  } as CSSProperties;

  return (
    <section className={styles.section} style={style}>
      <Container className={styles.inner}>
        <div className={styles.content}>
          <SectionHeading
            eyebrow={data.eyebrow}
            title={data.title}
            titleHighlight={data.titleHighlight}
            className={styles.heading}
          />

          <div className={styles.cards}>
            {data.cards.map((card) => (
              <article key={card.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.media}>
          <FpoImage
            src={data.image.src}
            alt={data.title}
            width={587}
            height={550}
            inset={data.image.inset}
            overlay={false}
            sizes="(max-width: 992px) 100vw, 587px"
            className={styles.mediaImage}
          />
        </div>
      </Container>
    </section>
  );
}
