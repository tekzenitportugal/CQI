import type { CSSProperties } from 'react';
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
              style={
                data.titleMaxWidth
                  ? ({
                      '--section-heading-title-max-width': `${data.titleMaxWidth}px`,
                    } as CSSProperties)
                  : undefined
              }
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
          <div
            className={`${styles.media} ${data.imageFramed ? styles.mediaFramed : ''}`.trim()}
            style={data.imageAspect ? { aspectRatio: data.imageAspect } : undefined}
          >
            <FpoImage
              src={data.image}
              alt=""
              width={587}
              height={341}
              overlay={data.imageOverlay ?? 0.5}
              objectPosition={data.imagePosition ?? 'center'}
              borderRadius={data.imageFramed ? 8 : undefined}
              fillContainer
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
