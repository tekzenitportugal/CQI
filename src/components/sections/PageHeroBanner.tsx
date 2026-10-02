import Image from 'next/image';
import type { PageHeroData } from '@/types/content';
import { Container } from '@/components/ui/Container';
import { HeroCopy } from '@/components/ui/HeroCopy';
import styles from './PageHeroBanner.module.scss';

type PageHeroBannerProps = {
  data: PageHeroData;
  /** Most photos are prepped mirrored per Figma; set false when the source image reads correctly as-is. */
  mirror?: boolean;
};

export function PageHeroBanner({ data, mirror = true }: PageHeroBannerProps) {
  return (
    <section className={styles.banner}>
      <div className={styles.heroBox} aria-hidden="true">
        <div className={`${styles.imageWrap} ${mirror ? '' : styles.unmirrored}`.trim()}>
          <Image src={data.image} alt="" fill priority className={styles.heroImage} sizes="100vw" />
        </div>
        <div className={`${styles.overlay} ${mirror ? '' : styles.overlayUnmirrored}`.trim()} />
      </div>

      <Container className={styles.contentWrap}>
        <HeroCopy
          title={data.title}
          titleHighlight={data.titleHighlight}
          eyebrow={data.eyebrow}
          description={data.description}
          titleMaxWidth={data.titleMaxWidth}
          copyMaxWidth={data.copyMaxWidth}
          className={styles.content}
        />
      </Container>
    </section>
  );
}
