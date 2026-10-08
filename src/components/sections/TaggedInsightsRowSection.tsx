import type { TaggedInsightsRowData } from '@/data/how-we-prove-it';
import { Container } from '@/components/ui/Container';
import styles from './TaggedInsightsRowSection.module.scss';

type TaggedInsightsRowSectionProps = {
  data: TaggedInsightsRowData;
};

/**
 * Figma Group 960: a repeat of the "How the KPI curve typically moves" heading (the
 * duplicate copy is intentional, verified against Figma) followed by a 3-across row of
 * pill-tag + title + text, separated by a dashed line — visually distinct from
 * IndustryThreeThingsSection's numbered-circle variant, so this is its own small
 * component local to this page.
 */
export function TaggedInsightsRowSection({ data }: TaggedInsightsRowSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>{data.title}</h2>
        <div className={styles.timeline}>
          <div className={styles.lineTrack} aria-hidden="true" />
          <ul className={styles.grid}>
            {data.items.map((item) => (
              <li key={item.title} className={styles.item}>
                <span className={styles.tag}>{item.tag}</span>
                <div className={styles.itemCopy}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
