import type { CrossSectorPatternsData } from '@/types/content';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './CrossSectorPatternsSection.module.scss';

type CrossSectorPatternsSectionProps = {
  data: CrossSectorPatternsData;
};

export function CrossSectorPatternsSection({ data }: CrossSectorPatternsSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          titleHighlight={data.titleHighlight}
          description={data.description}
          align="center"
          className={styles.heading}
        />
        <ul className={styles.grid}>
          {data.cards.map((card) => (
            <li
              key={card.title}
              className={`${styles.card} ${card.align === 'bottom' ? styles.cardBottom : ''}`.trim()}
            >
              <p className={styles.cardTitle}>{card.title}</p>
              <p className={styles.cardDescription}>{card.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
