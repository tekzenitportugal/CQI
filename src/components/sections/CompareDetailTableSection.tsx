import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './CompareDetailTableSection.module.scss';

export type CompareDetailTableSectionData = {
  eyebrow: string;
  title: string;
  description: string;
  headers: { dimension: string; competitor: string; cqi: string };
  rows: { dimension: string; competitor: string; cqi: string }[];
};

type CompareDetailTableSectionProps = {
  data: CompareDetailTableSectionData;
};

/** Figma "Side by side — How the two differ" (6469:32156). */
export function CompareDetailTableSection({ data }: CompareDetailTableSectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.content}>
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
          align="center"
          className={styles.heading}
        />

        <div className={styles.table}>
          <div className={styles.headerRow}>
            <p className={`${styles.headerCell} ${styles.headerDimension}`}>{data.headers.dimension}</p>
            <p className={styles.headerCell}>{data.headers.competitor}</p>
            <p className={`${styles.headerCell} ${styles.headerCqi}`}>{data.headers.cqi}</p>
          </div>

          <div className={styles.body}>
            {data.rows.map((row) => (
              <div key={row.dimension} className={styles.row}>
                <p className={styles.dimension}>{row.dimension}</p>
                <div className={styles.cell}>
                  <span className={styles.cellLabel}>{data.headers.competitor}</span>
                  <p className={styles.cellText}>{row.competitor}</p>
                </div>
                <div className={`${styles.cell} ${styles.cellCqi}`}>
                  <span className={`${styles.cellLabel} ${styles.cellLabelCqi}`}>{data.headers.cqi}</span>
                  <p className={styles.cellText}>{row.cqi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
