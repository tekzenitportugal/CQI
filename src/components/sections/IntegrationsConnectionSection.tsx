import type { IntegrationsConnectionData } from '@/data/integrations';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { highlightText } from '@/utils/highlightText';
import styles from './IntegrationsConnectionSection.module.scss';

type IntegrationsConnectionSectionProps = {
  data: IntegrationsConnectionData;
};

/** Figma "Frame 1000003484": heading + description/button row, then four dark ingestion cards. */
export function IntegrationsConnectionSection({ data }: IntegrationsConnectionSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>{highlightText(data.title, data.titleHighlight)}</h2>
          <div className={styles.row}>
            <p className={styles.description}>{data.description}</p>
            <Button label={data.button.label} href={data.button.href} variant="primary" />
          </div>
        </div>

        <ul className={styles.cards}>
          {data.cards.map((card) => (
            <li key={card.title} className={styles.card}>
              <p className={styles.cardTitle}>{card.title}</p>
              <p className={styles.cardDescription}>{card.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
