import Image from 'next/image';
import type { CareersDisciplinesData } from '@/data/careers';
import { Button } from '@/components/ui/Button';
import { Carousel } from '@/components/ui/Carousel';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './CareersDisciplinesSection.module.scss';

type CareersDisciplinesSectionProps = {
  data: CareersDisciplinesData;
};

/**
 * Figma "Frame 1000003511": "Where we hire / Four disciplines" heading with a right-aligned
 * button on the same row (OutcomeRangeSection's header pattern), then the "CARDS - CAREERS"
 * carousel — four wide, bordered, light-gradient cards (photo left, copy right).
 */
export function CareersDisciplinesSection({ data }: CareersDisciplinesSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <SectionHeading
            eyebrow={data.eyebrow}
            title={data.title}
            align="left"
            className={styles.sectionHeading}
          />
          <Button label={data.cta.label} href={data.cta.href} variant={data.cta.variant ?? 'primary'} />
        </div>

        <Carousel itemLabel="discipline" className={styles.carousel}>
          {data.cards.map((card) => (
            <article key={card.title} className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={256}
                  height={234}
                  className={styles.image}
                />
              </div>
              <div className={styles.copy}>
                <h3 className={styles.title}>{card.title}</h3>
                <p className={styles.description}>{card.description}</p>
              </div>
            </article>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
