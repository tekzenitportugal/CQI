import type { howWeDoItData } from '@/data/how-we-do-it';
import { Carousel } from '@/components/ui/Carousel';
import { CarouselCard } from '@/components/ui/CarouselCard';
import { Container } from '@/components/ui/Container';
import styles from './RiskDecompositionCarouselSection.module.scss';

type RiskDecompositionCarouselSectionProps = {
  data: typeof howWeDoItData.riskDecomposition;
};

export function RiskDecompositionCarouselSection({ data }: RiskDecompositionCarouselSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="risk-decomposition-title">
      <Container>
        <Carousel
          itemLabel="risk factor"
          className={styles.carousel}
          header={
            <h2 id="risk-decomposition-title" className={styles.title}>
              {data.title}
            </h2>
          }
        >
          {data.cards.map((card) => (
            <CarouselCard key={card.title} title={card.title} description={card.description} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
