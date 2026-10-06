import type { PercentMetricCard as PercentMetricCardData } from '@/types/content';
import { highlightText } from '@/utils/highlightText';
import styles from './PercentMetricCard.module.scss';

type PercentMetricCardProps = {
  data: PercentMetricCardData;
};

export function PercentMetricCard({ data }: PercentMetricCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.valueBlock}>
        <p className={styles.value}>{data.value}</p>
      </div>
      <p className={styles.label}>{highlightText(data.label)}</p>
    </article>
  );
}
