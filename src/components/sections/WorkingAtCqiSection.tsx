import type { teamData } from '@/data/team';
import { GhostLink } from '@/components/ui/GhostLink';
import { CarouselCard } from '@/components/ui/CarouselCard';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './WorkingAtCqiSection.module.scss';

type WorkingAtCqiSectionProps = {
  data: typeof teamData.culture;
};

/** Figma "Group 891": heading + "Open roles" button row, then a 3-across dark card row. */
export function WorkingAtCqiSection({ data }: WorkingAtCqiSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <SectionHeading
            eyebrow={data.eyebrow}
            title={data.title}
            titleHighlight={data.titleHighlight}
            align="left"
            className={styles.sectionHeading}
          />
          <GhostLink label={data.button.label} href={data.button.href} />
        </div>

        <div className={styles.cards}>
          {data.cards.map((card) => (
            <CarouselCard
              key={card.title}
              title={card.title}
              description={card.description}
              className={styles.card}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
