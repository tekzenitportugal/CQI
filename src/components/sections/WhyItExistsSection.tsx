import type { QuoteCard } from '@/data/history';
import { Container } from '@/components/ui/Container';
import { TagPill } from '@/components/ui/TagPill';
import styles from './WhyItExistsSection.module.scss';

type WhyItExistsSectionProps = {
  eyebrow: string;
  title: string;
  cards: QuoteCard[];
};

const CARD_CLASS: Record<QuoteCard['tagVariant'], string> = {
  invisible: 'problem',
  goals: 'answer',
};

/**
 * Figma Frame 1000003315 "Why it exists": centred eyebrow + title, then two side-by-side
 * quote cards (problem in coral, answer in blue) — same tag-on-border + tinted panel
 * treatment as BrokenPromiseSection, but with a large quote heading instead of numbered rows,
 * so it's built fresh as its own small component.
 */
export function WhyItExistsSection({ eyebrow, title, cards }: WhyItExistsSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.cards}>
          {cards.map((card) => (
            <article key={card.tag} className={`${styles.card} ${styles[CARD_CLASS[card.tagVariant]]}`}>
              <span className={styles.tag}>
                <TagPill label={card.tag} variant={card.tagVariant} />
              </span>
              <div className={styles.cardBody}>
                <p className={styles.quote}>{card.quote}</p>
                <p className={styles.description}>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
