import type { securityTrustData } from '@/data/security-trust';
import { Container } from '@/components/ui/Container';
import { FeatureIconCard } from '@/components/ui/FeatureIconCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './SecurityBlindSpotsSection.module.scss';

type SecurityBlindSpotsSectionProps = {
  data: typeof securityTrustData.blindSpots;
};

/** Figma "Frame 1000003031": centred eyebrow + heading, then a 3x2 grid of dark icon cards. */
export function SecurityBlindSpotsSection({ data }: SecurityBlindSpotsSectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
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
