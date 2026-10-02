import type { ResearchMetricCard as ResearchMetricCardData } from '@/types/content';
import styles from './ResearchMetricCard.module.scss';

type ResearchMetricCardProps = {
  data: ResearchMetricCardData;
};

export function ResearchMetricCard({ data }: ResearchMetricCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.valueBlock}>
        <p className={styles.value}>{data.value}</p>
      </div>
      <div className={styles.copy}>
        <p className={styles.label}>{data.label}</p>
        {data.source && <p className={styles.source}>{data.source}</p>}
      </div>
    </article>
  );
}
