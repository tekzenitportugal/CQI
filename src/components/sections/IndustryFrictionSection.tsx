import type { IndustryFrictionData } from '@/types/content';
import { Container } from '@/components/ui/Container';
import { FpoImage } from '@/components/ui/FpoImage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TagPill } from '@/components/ui/TagPill';
import styles from './IndustryFrictionSection.module.scss';

type IndustryFrictionSectionProps = {
  data: IndustryFrictionData;
};

export function IndustryFrictionSection({ data }: IndustryFrictionSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <SectionHeading
              title={data.title}
              titleHighlight={data.titleHighlight}
              description={data.description}
              align="left"
              className={styles.heading}
            />
            <div className={styles.tagGroups}>
              {data.tagGroups.map((group) => (
                <div key={group.label} className={styles.tagGroup}>
                  <p className={styles.tagGroupLabel}>{group.label}</p>
                  <div className={styles.tags}>
                    {group.tags.map((tag) => (
                      <TagPill key={tag} label={tag} variant={group.variant} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.media}>
            <FpoImage
              src={data.image}
              alt=""
              width={495}
              height={507}
              overlay={0.5}
              objectPosition="center"
              fillContainer
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
