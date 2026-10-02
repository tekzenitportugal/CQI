import type { fixBeforeFailureData } from '@/data/fix-before-failure';
import { Container } from '@/components/ui/Container';
import { FeatureIconCard } from '@/components/ui/FeatureIconCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './BlindSpotsSection.module.scss';

type BlindSpotsSectionProps = {
  data: typeof fixBeforeFailureData.blindSpots;
};

export function BlindSpotsSection({ data }: BlindSpotsSectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
          align="center"
          className={styles.heading}
        />

        <div className={styles.grid}>
          {data.cards.map((card) => (
            <FeatureIconCard key={card.title} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
