import type { PricingIncludedData } from '@/data/pricing';
import { Container } from '@/components/ui/Container';
import { RuledRowsList } from '@/components/ui/RuledRowsList';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './PricingIncludedSection.module.scss';

type PricingIncludedSectionProps = {
  data: PricingIncludedData;
};

/** Figma "What is included": centred heading over two label-less ruled-row lists, side by side. */
export function PricingIncludedSection({ data }: PricingIncludedSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading eyebrow={data.eyebrow} title={data.title} align="center" className={styles.heading} />

        <div className={styles.columns}>
          <RuledRowsList rows={data.leftRows} className={styles.list} />
          <RuledRowsList rows={data.rightRows} className={styles.list} />
        </div>
      </Container>
    </section>
  );
}
