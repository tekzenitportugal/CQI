import type { howWeDoItData } from '@/data/how-we-do-it';
import { Container } from '@/components/ui/Container';
import { RuledRowsList } from '@/components/ui/RuledRowsList';
import styles from './RootCauseAnalyticsSection.module.scss';

type RootCauseAnalyticsSectionProps = {
  data: typeof howWeDoItData.rootCause;
};

export function RootCauseAnalyticsSection({ data }: RootCauseAnalyticsSectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>{data.eyebrow}</p>
            <h2 className={styles.title}>{data.title}</h2>
          </div>
          <p className={styles.description}>{data.description}</p>
        </div>
        <RuledRowsList rows={data.rows} className={styles.table} />
      </Container>
    </section>
  );
}
