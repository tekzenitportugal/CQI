import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { HeroCopy, type HeroCopyData } from '@/components/ui/HeroCopy';
import { HeroBanner } from '@/components/sections/HeroBanner';
import styles from './GradientHero.module.scss';

type GradientHeroProps = {
  data: HeroCopyData;
  /** Figma Rectangle 85 — 8px inset, 20px radius (product explore / industry pages). */
  variant?: 'default' | 'inset';
  /** Some product/capability pages composite a product mockup or photo over the gradient band: full-bleed cover on "inset", right-anchored cutout on "default" (Figma: image layered inside Rectangle 85). */
  image?: string;
};

/** Text-only hero on the 864px gradient band; copy is centred in the space below the header. */
export function GradientHero({ data, variant = 'default', image }: GradientHeroProps) {
  if (variant === 'inset') {
    return (
      <section className={styles.insetBanner}>
        <div className={styles.heroBox} aria-hidden="true">
          {image && (
            <Image src={image} alt="" fill priority className={styles.heroBoxImage} sizes="100vw" />
          )}
        </div>
        <Container className={styles.insetContentWrap}>
          <HeroCopy {...data} className={styles.insetContent} />
        </Container>
      </section>
    );
  }

  return (
    <HeroBanner>
      <section className={styles.section}>
        {image && (
          <div className={styles.graphic} aria-hidden="true">
            <Image
              src={image}
              alt=""
              fill
              priority
              className={styles.graphicImage}
              sizes="(min-width: 1536px) 779px, 60vw"
            />
          </div>
        )}
        <Container className={styles.inner}>
          <HeroCopy {...data} />
        </Container>

        {/* Figma mobile (6225:43827): below lg the cutout has no room to float
            beside the copy, so it stacks under it instead — same source image,
            just laid out in normal flow instead of the absolute full-bleed cutout. */}
        {image && (
          <Container className={styles.mobileGraphicWrap}>
            <div className={styles.mobileGraphicBox} aria-hidden="true">
              <Image
                src={image}
                alt=""
                fill
                className={styles.mobileGraphicImage}
                sizes="100vw"
              />
            </div>
          </Container>
        )}
      </section>
    </HeroBanner>
  );
}
