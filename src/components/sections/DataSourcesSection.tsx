import type { implementationData } from '@/data/implementation';
import { CarouselCard } from '@/components/ui/CarouselCard';
import { Container } from '@/components/ui/Container';
import { highlightText } from '@/utils/highlightText';
import styles from './DataSourcesSection.module.scss';

type DataSourcesSectionProps = {
  data: typeof implementationData.dataSources;
};

/** Figma "How data reaches CQI": split heading + 3 equal-width dark cards (no carousel). */
export function DataSourcesSection({ data }: DataSourcesSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>{data.eyebrow}</p>
            <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>
          </div>
          <p className={styles.description}>{data.description}</p>
        </div>

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
