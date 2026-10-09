import Image from 'next/image';
import type { homepageData } from '@/data/homepage';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { highlightText } from '@/utils/highlightText';
import styles from './HeroSection.module.scss';

type HeroSectionProps = {
  data: typeof homepageData.hero;
};

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className={styles.section} id="see-it-live">
      <div className={styles.graphic} aria-hidden="true">
        <Image
          src={data.image}
          alt=""
          fill
          className={styles.graphicImage}
          sizes="(min-width: 1536px) 779px, 60vw"
          priority
          unoptimized
        />
      </div>

      <Container className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {highlightText(data.title, data.titleHighlight)}
          </h1>

          <div className={styles.body}>
            <div className={styles.copyBlock}>
              <div className={styles.eyebrowBlock}>
                <p className={styles.eyebrow}>{data.eyebrow}</p>
                <p className={styles.subtitle}>{highlightText(data.subtitle)}</p>
              </div>
              <p className={styles.description}>{data.description}</p>
            </div>

            <Button
              label={data.cta.label}
              href={data.cta.href}
              variant={data.cta.variant}
              showArrow
            />
          </div>
        </div>

        {/* Figma mobile hero (6225:42439) is its own outer gradient box, independent
            of the desktop graphic art — a dedicated mobile-only export, not the
            desktop image cropped down. */}
        <div className={styles.mobileMedia} aria-hidden="true">
          <div className={styles.mobileImageBox}>
            <Image
              src="/images/shared/home/hero-banner-mobile.png"
              alt=""
              fill
              className={styles.mobileImage}
              sizes="100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
