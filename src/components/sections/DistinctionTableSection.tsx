import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './DistinctionTableSection.module.scss';

export type DistinctionTableRow = {
  category: string;
  question: string;
  blindSpot: string;
  /** The CQI row gets a highlighted blue background and blue category label. */
  highlight?: boolean;
};

export type DistinctionTableSectionData = {
  eyebrow: string;
  title: string;
  headers: { category: string; question: string; blindSpot: string };
  rows: DistinctionTableRow[];
};

type DistinctionTableSectionProps = {
  data: DistinctionTableSectionData;
};

/** Figma "The distinction that matters" (6079:38467). */
export function DistinctionTableSection({ data }: DistinctionTableSectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.content}>
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          align="center"
          className={styles.heading}
        />

        <div className={styles.table}>
          <div className={styles.headerRow}>
            <p className={styles.headerCategory}>{data.headers.category}</p>
            <p className={styles.headerCell}>{data.headers.question}</p>
            <p className={styles.headerCell}>{data.headers.blindSpot}</p>
          </div>

          {data.rows.map((row) => (
            <div
              key={row.category}
              className={`${styles.row} ${row.highlight ? styles.rowHighlight : ''}`.trim()}
            >
              <p className={`${styles.category} ${row.highlight ? styles.categoryHighlight : ''}`.trim()}>
                {row.category}
              </p>
              <div className={styles.cellWrap}>
                <span className={styles.cellLabel}>{data.headers.question}</span>
                <p className={styles.cell}>{row.question}</p>
              </div>
              <div className={styles.cellWrap}>
                <span className={styles.cellLabel}>{data.headers.blindSpot}</span>
                <p className={styles.cell} style={{ whiteSpace: 'pre-line' }}>
                  {row.blindSpot}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
