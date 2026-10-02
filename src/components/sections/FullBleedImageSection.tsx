import type { homepageData } from '@/data/homepage';
import { Container } from '@/components/ui/Container';
import { FpoImage } from '@/components/ui/FpoImage';
import styles from './FullBleedImageSection.module.scss';

type FullBleedImageSectionProps = {
  data: typeof homepageData.fullBleedImage;
};

export function FullBleedImageSection({ data }: FullBleedImageSectionProps) {
  return (
    <section className={styles.section} aria-hidden="true">
      <Container>
        <FpoImage
          src={data.src}
          alt=""
          width={data.width}
          height={data.height}
          className={styles.image}
          sizes="(max-width: 1536px) 100vw, 1436px"
          label
        />
      </Container>
    </section>
  );
}
