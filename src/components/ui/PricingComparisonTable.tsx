import type { PricingComparisonRow } from '@/data/pricing';
import styles from './PricingComparisonTable.module.scss';

type PricingComparisonTableProps = {
  headers: [string, string, string];
  rows: PricingComparisonRow[];
  className?: string;
};

/**
 * Figma "Frame 1000003395": a rounded off-white card with a 3-column header row
 * (factor / the question it answers / with CQI, the last one highlighted blue) over
 * 7 data rows. CSS Grid keeps all three columns aligned row-by-row regardless of how
 * much each cell's text wraps (Figma's own export hardcodes a slightly different pixel
 * height per column per row, which doesn't reliably line up and isn't worth copying).
 */
export function PricingComparisonTable({ headers, rows, className }: PricingComparisonTableProps) {
  return (
    <div className={[styles.card, className].filter(Boolean).join(' ')}>
      <div className={styles.headerRow}>
        <p className={styles.headerCell}>{headers[0]}</p>
        <p className={styles.headerCell}>{headers[1]}</p>
        <p className={`${styles.headerCell} ${styles.headerCqi}`}>{headers[2]}</p>
      </div>
      <div className={styles.divider} aria-hidden="true" />
      <div className={styles.grid}>
        {rows.map((row) => (
          <div className={styles.row} key={row.factor}>
            <p className={styles.factor}>{row.factor}</p>
            <p className={styles.question}>{row.question}</p>
            <p className={styles.withCqi}>{row.withCqi}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
