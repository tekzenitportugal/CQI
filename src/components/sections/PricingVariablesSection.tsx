import type { PricingVariablesData } from '@/data/pricing';
import { CarouselCard } from '@/components/ui/CarouselCard';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './PricingVariablesSection.module.scss';

type PricingVariablesSectionProps = {
  data: PricingVariablesData;
};

/** Figma "What drives the number": centred heading + 4 equal-width dark cards. */
export function PricingVariablesSection({ data }: PricingVariablesSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          titleHighlight={data.titleHighlight}
          align="center"
          className={styles.heading}
        />

        <div className={styles.cards}>
          {data.cards.map((card) => (
            <CarouselCard
              key={card.title}
              title={card.title}
              description={card.description}
              className={styles.card}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
