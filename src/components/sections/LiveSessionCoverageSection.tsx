import { CarouselCard } from '@/components/ui/CarouselCard';
import { Container } from '@/components/ui/Container';
import { highlightText } from '@/utils/highlightText';
import styles from './LiveSessionCoverageSection.module.scss';

export type LiveSessionCoverageCard = {
  title: string;
  description: string;
};

export type LiveSessionCoverageSectionData = {
  eyebrow: string;
  title: string;
  titleHighlight?: string[];
  description: string;
  cards: LiveSessionCoverageCard[];
};

type LiveSessionCoverageSectionProps = {
  data: LiveSessionCoverageSectionData;
};

/** Figma "Bring whoever needs convincing" (6079:31362): heading + 3 equal-width dark cards. */
export function LiveSessionCoverageSection({ data }: LiveSessionCoverageSectionProps) {
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
