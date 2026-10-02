import type { coreFunctionalitiesData } from '@/data/core-functionalities';
import { Carousel } from '@/components/ui/Carousel';
import { CarouselCard } from '@/components/ui/CarouselCard';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './ModulesCarouselSection.module.scss';

type ModulesCarouselSectionProps = {
  data: typeof coreFunctionalitiesData.modules;
};

export function ModulesCarouselSection({ data }: ModulesCarouselSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.intro}>
          <SectionHeading
            title={data.title}
            titleHighlight={data.titleHighlight}
            align="left"
            className={styles.sectionHeading}
          />
          <p className={styles.introDescription}>{data.description}</p>
        </div>

        <Carousel itemLabel="module" className={styles.carousel}>
          {data.items.map((item) => (
            <CarouselCard
              key={item.title}
              tag={item.tag}
              title={item.title}
              description={item.description}
              titleWeight={item.titleWeight}
            />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
