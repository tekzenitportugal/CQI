import type { CSSProperties } from 'react';
import type { CapabilityCard } from '@/types/content';
import { Carousel } from '@/components/ui/Carousel';
import { CarouselCard } from '@/components/ui/CarouselCard';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fluidSpace } from '@/utils/fluidSpace';
import styles from './CapabilitiesSection.module.scss';

export type CapabilitiesSectionData = {
  title: string;
  titleHighlight?: string[];
  items: CapabilityCard[];
};

type CapabilitiesSectionProps = {
  data: CapabilitiesSectionData;
  /** Figma values at 1536; defaults are the homepage's. */
  titleMaxWidth?: number;
  spaceTop?: number;
  spaceBottom?: number;
  cardMinHeight?: number;
  cardGradientAngle?: string;
};

/** "Six capabilities" heading + icon card carousel (homepage, Product overview). */
export function CapabilitiesSection({
  data,
  titleMaxWidth = 716,
  spaceTop = 290,
  spaceBottom = 0,
  cardMinHeight,
  cardGradientAngle,
}: CapabilitiesSectionProps) {
  const style = {
    paddingTop: fluidSpace(spaceTop),
    paddingBottom: fluidSpace(spaceBottom),
    '--section-heading-title-max-width': `${titleMaxWidth}px`,
    ...(cardMinHeight ? { '--capability-card-min-height': `${cardMinHeight}px` } : {}),
    ...(cardGradientAngle ? { '--card-gradient-angle': cardGradientAngle } : {}),
  } as CSSProperties;

  return (
    <section className={styles.section} style={style}>
      <Container>
        <SectionHeading title={data.title} titleHighlight={data.titleHighlight} align="left" />

        <Carousel itemLabel="capability" className={styles.carousel}>
          {data.items.map((item) => (
            <CarouselCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              href={item.href}
              titleWeight={item.titleWeight}
              className={styles.card}
            />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
