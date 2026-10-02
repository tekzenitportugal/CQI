import type { RuledRow } from '@/types/content';
import styles from './RuledRowsList.module.scss';

type RuledRowsListProps = {
  rows: RuledRow[];
  className?: string;
};

export function RuledRowsList({ rows, className }: RuledRowsListProps) {
  return (
    <ul className={[styles.list, className].filter(Boolean).join(' ')}>
      {rows.map((row, index) => {
        const labelLines = row.label?.split('\n') ?? [];

        return (
          <li key={`${index}-${row.label || row.description}`} className={styles.item}>
            {row.label && (
              <p className={styles.label}>
                {labelLines.map((line, index) => (
                  <span key={line}>
                    {line}
                    {index < labelLines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            )}
            <p className={styles.description}>{row.description}</p>
          </li>
        );
      })}
    </ul>
  );
}
