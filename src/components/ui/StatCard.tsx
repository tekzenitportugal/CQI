import { highlightText } from '@/utils/highlightText';
import styles from './StatCard.module.scss';

type StatCardProps = {
  value: string;
  label: string;
  source?: string;
  /** `compact`: 214px value box (homepage). `split`: value box takes half the card (research grid). */
  layout?: 'compact' | 'split';
  className?: string;
};

/** Figma "CARDS %": blue value box + label, on a light-blue gradient card. */
export function StatCard({ value, label, source, layout = 'compact', className }: StatCardProps) {
  return (
    <article className={[styles.card, styles[layout], className].filter(Boolean).join(' ')}>
      <div className={styles.valueBox}>
        <p className={styles.value}>{value}</p>
      </div>
      <div className={styles.copy}>
        <p className={styles.label}>{highlightText(label)}</p>
        {source && <p className={styles.source}>{source}</p>}
      </div>
    </article>
  );
}
