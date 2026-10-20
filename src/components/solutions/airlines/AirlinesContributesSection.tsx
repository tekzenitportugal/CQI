import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { airlinesPageData } from '@/data/solutions/airlines-page';
import styles from './AirlinesContributesSection.module.scss';

type AirlinesContributesSectionProps = {
  data: typeof airlinesPageData.contributes;
};

/** "What CQI contributes": heading + intro, then three Sense / Flag / Fix cards (Figma Frame 1000003596). */
export function AirlinesContributesSection({ data }: AirlinesContributesSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <SectionHeading
            eyebrow={data.eyebrow}
            title={data.title}
            titleHighlight={data.titleHighlight}
            align="left"
            className={styles.heading}
          />
          <p className={styles.intro}>{data.description}</p>
        </div>

        <div className={styles.cards}>
          {data.cards.map((card) => (
            <article key={card.tag} className={styles.card}>
              <p className={styles.cardTag}>{card.tag}</p>
              <div className={styles.cardCopy}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
