import Image from 'next/image';
import type { CSSProperties } from 'react';
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
  /** Natural aspect ratio ("w / h") of `image`, used to size the mobile-stacked copy below lg. */
  imageAspectRatio?: string;
  /** Figma mobile cutout (inset variant): a wide mockup pinned to the bottom-left of the hero card, cropped by it. */
  mobileImage?: string;
};

/** Text-only hero on the 864px gradient band; copy is centred in the space below the header. */
export function GradientHero({
  data,
  variant = 'default',
  image,
  imageAspectRatio,
  mobileImage,
}:GradientHeroProps) {
  if (variant === 'inset') {
    return (
      <section
        className={`${styles.insetBanner} ${mobileImage ? styles.insetBannerCutout : ''}`.trim()}
        style={
          {
            ...(data.mobileMinHeight && { '--hero-min-height': `${data.mobileMinHeight}px` }),
            ...(data.mobilePaddingTop && { '--hero-mobile-pad-top': `${data.mobilePaddingTop}px` }),
          } as CSSProperties
        }
      >
        <div className={styles.heroBox} aria-hidden="true">
          {image && (
            <Image src={image} alt="" fill priority className={styles.heroBoxImage} sizes="100vw" />
          )}
        </div>
        <Container
          className={`${styles.insetContentWrap} ${!image ? styles.insetContentWrapCentered : ''}`.trim()}
        >
          <HeroCopy {...data} className={styles.insetContent} />
        </Container>

        {/* Below lg the device mockup has no room to sit behind the copy without
            covering it, so — same pattern as the "default" variant's mobile stack —
            it drops into normal flow under the text instead of overlapping it. */}
        {mobileImage && (
          <div className={styles.insetMobileCutout} aria-hidden="true">
            <Image
              src={mobileImage}
              alt=""
              width={3000}
              height={2000}
              className={styles.insetMobileCutoutImage}
              sizes="590px"
            />
          </div>
        )}
        {image && !mobileImage && (
          <Container className={styles.insetMobileGraphicWrap}>
            <div
              className={styles.insetMobileGraphicBox}
              style={imageAspectRatio ? ({ '--hero-mobile-aspect': imageAspectRatio } as CSSProperties) : undefined}
              aria-hidden="true"
            >
              <Image src={image} alt="" fill className={styles.insetMobileGraphicImage} sizes="100vw" />
            </div>
          </Container>
        )}
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
