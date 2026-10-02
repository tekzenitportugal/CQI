import type { MilestoneItem } from '@/data/history';
import { Container } from '@/components/ui/Container';
import { TagPill } from '@/components/ui/TagPill';
import { highlightText } from '@/utils/highlightText';
import styles from './MilestonesRowSection.module.scss';

type MilestonesRowSectionProps = {
  eyebrow: string;
  title: string;
  titleHighlight?: string[];
  items: MilestoneItem[];
};

/**
 * Figma Group 961: "Milestones" eyebrow + title, then a 5-across pill-tag + title + text row
 * under a dashed rule. Same visual pattern as TaggedInsightsRow (Implementation / How We Prove
 * It / PoC Approach), just 5 narrower (239px) columns instead of 3 — built as its own component
 * rather than editing the shared TaggedInsightsRow's fixed 3-column grid.
 */
export function MilestonesRowSection({ eyebrow, title, titleHighlight, items }: MilestonesRowSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 className={styles.title}>{highlightText(title, titleHighlight)}</h2>
        </div>

        <div className={styles.row}>
          <div className={styles.lineTrack} aria-hidden="true" />
          <ul className={styles.grid}>
            {items.map((item) => (
              <li key={item.title} className={styles.item}>
                <TagPill label={item.tag} variant="goals" />
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
