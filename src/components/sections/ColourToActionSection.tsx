import type { howWeDoItData } from '@/data/how-we-do-it';
import { Container } from '@/components/ui/Container';
import { RoutingTreatmentCard } from '@/components/ui/RoutingTreatmentCard';
import { highlightText } from '@/utils/highlightText';
import styles from './ColourToActionSection.module.scss';

type ColourToActionSectionProps = {
  data: typeof howWeDoItData.colourToAction;
};

export function ColourToActionSection({ data }: ColourToActionSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.intro}>
          <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>
          <p className={styles.description}>{highlightText(data.description)}</p>
        </div>

        <div className={styles.grid}>
          <ul className={styles.cards}>
            {data.routingCards.map((card) => (
              <li key={card.title}>
                <RoutingTreatmentCard {...card} />
              </li>
            ))}
          </ul>
          <ul className={styles.list}>
            {data.list.map((item) => (
              <li key={item} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
