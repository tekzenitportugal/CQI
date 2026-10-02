import Image from 'next/image';
import type { teamData } from '@/data/team';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './TeamGroupsSection.module.scss';

type TeamGroupsSectionProps = {
  data: typeof teamData.groups;
};

/** Figma "Frame 1000003031": centered heading, then a 2x2 grid of light icon cards. */
export function TeamGroupsSection({ data }: TeamGroupsSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <SectionHeading
            eyebrow={data.eyebrow}
            title={data.title}
            titleHighlight={data.titleHighlight}
            align="center"
            className={styles.heading}
          />

          <ul className={styles.grid}>
            {data.cards.map((card) => (
              <li key={card.title} className={styles.card}>
                <Image src={card.icon} alt="" width={48} height={48} className={styles.icon} />
                <div className={styles.copy}>
                  <p className={styles.cardTitle}>{card.title}</p>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
