import Image from 'next/image';
import type { ValuesInPracticeData } from '@/data/about';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { highlightText } from '@/utils/highlightText';
import styles from './ValuesInPracticeSection.module.scss';

type ValuesInPracticeSectionProps = {
  data: ValuesInPracticeData;
};

/** Figma "Frame 1000003031": centered "How we work" heading + 4 light icon cards (taller than the dark cards above). */
export function ValuesInPracticeSection({ data }: ValuesInPracticeSectionProps) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          align="center"
          className={styles.heading}
        />

        <div className={styles.cards}>
          {data.cards.map((card) => (
            <article key={card.title} className={styles.card}>
              <Image src={card.icon} alt="" width={48} height={48} className={styles.icon} />
              <div className={styles.copy}>
                <h3 className={styles.cardTitle}>{highlightText(card.title)}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
