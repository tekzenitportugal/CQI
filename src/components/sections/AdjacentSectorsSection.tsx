import type { AdjacentSectorsData } from '@/types/content';
import { Carousel } from '@/components/ui/Carousel';
import { Container } from '@/components/ui/Container';
import { FpoImage } from '@/components/ui/FpoImage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './AdjacentSectorsSection.module.scss';

type AdjacentSectorsSectionProps = {
  data: AdjacentSectorsData;
};

export function AdjacentSectorsSection({ data }: AdjacentSectorsSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <Carousel
          itemLabel="sector"
          stackHeaderOnMobile
          className={styles.carousel}
          header={
            <SectionHeading
              eyebrow={data.eyebrow}
              title={data.title}
              titleHighlight={data.titleHighlight}
              description={data.description}
              align="left"
              className={styles.heading}
            />
          }
        >
          {data.cards.map((card) => (
            <article key={card.title} className={styles.card}>
              <div className={styles.cardMedia}>
                <FpoImage src={card.image} alt={card.title} width={256} height={250} overlay={false} fillContainer />
              </div>
              <div className={styles.cardCopy}>
                <p className={styles.cardTitle}>{card.title}</p>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </article>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
