import type { TaggedInsightItem } from '@/data/implementation';
import { Container } from '@/components/ui/Container';
import { TagPill } from '@/components/ui/TagPill';
import { highlightText } from '@/utils/highlightText';
import styles from './TaggedInsightsRow.module.scss';

export type TaggedInsightsRowProps = {
  eyebrow: string;
  title: string;
  titleHighlight?: string[];
  description?: string;
  items: TaggedInsightItem[];
  className?: string;
  /** Figma Implementation mobile: open 200px section, 64px header gap, no dashed rule. */
  figmaMobile?: boolean;
  /** With `figmaMobile`: keep the title on one line instead of breaking after the highlighted phrase. */
  inlineMobileTitle?: boolean;
  /** With `figmaMobile`: uppercase, fixed-size tag pills with a 200px bottom gap (Figma Pricing mobile). */
  largeMobileTags?: boolean;
  /** Line ramps dark -> light behind each tag (Figma Pricing "Three steps"). */
  labelGradient?: boolean;
};

/**
 * Figma "tag" + "6" (title/text) frames, repeated 3-across under one dashed rule.
 * Recurs verbatim across the Product sibling pages (Implementation, PoC Approach, How We
 * Prove It) as its own Figma component — built here as a shared, generic section so this
 * page can use it; a little duplication if other pages independently rebuild it is expected.
 */
export function TaggedInsightsRow({
  eyebrow,
  title,
  titleHighlight,
  description,
  items,
  className,
  figmaMobile,
  inlineMobileTitle,
  largeMobileTags,
  labelGradient,
}: TaggedInsightsRowProps) {
  return (
    <section className={[
        styles.section,
        figmaMobile && styles.figmaMobile,
        inlineMobileTitle && styles.inlineMobileTitle,
        largeMobileTags && styles.largeMobileTags,
        labelGradient && styles.labelGradient,
        className,
      ].filter(Boolean).join(' ')}>
      <Container>
        <div className={styles.header}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 className={styles.title}>{highlightText(title, titleHighlight)}</h2>
          </div>
          {description && <p className={styles.description}>{description}</p>}
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
