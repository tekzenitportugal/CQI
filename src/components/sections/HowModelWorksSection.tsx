import { Container } from '@/components/ui/Container';
import styles from './HowModelWorksSection.module.scss';

export type HowModelWorksRow = {
  label: string;
  description: string;
};

export type HowModelWorksSectionData = {
  eyebrow: string;
  title: string;
  rows: HowModelWorksRow[];
};

type HowModelWorksSectionProps = {
  data: HowModelWorksSectionData;
};

/** Figma "How the model works" (6079:38466): heading + dashed-divided assumption rows. */
export function HowModelWorksSection({ data }: HowModelWorksSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>{data.eyebrow}</p>
            <h2 className={styles.title}>{data.title}</h2>
          </div>

          <ul className={styles.list}>
            {data.rows.map((row) => (
              <li key={row.label} className={styles.row}>
                <p className={styles.label}>{row.label}</p>
                <p className={styles.description}>{row.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
