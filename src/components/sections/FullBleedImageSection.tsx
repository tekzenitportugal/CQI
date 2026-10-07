import type { homepageData } from '@/data/homepage';
import { Container } from '@/components/ui/Container';
import styles from './FullBleedImageSection.module.scss';

type FullBleedImageSectionProps = {
  data: typeof homepageData.fullBleedImage;
};

export function FullBleedImageSection({ data }: FullBleedImageSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <video
          className={styles.video}
          src={data.videoSrc}
          width={data.width}
          height={data.height}
          aria-label="CQI product overview"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </Container>
    </section>
  );
}
