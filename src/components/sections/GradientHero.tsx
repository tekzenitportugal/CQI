import Image from 'next/image';
import type { CSSProperties } from 'react';
import { Container } from '@/components/ui/Container';
import { HeroCopy, type HeroCopyData } from '@/components/ui/HeroCopy';
import { HeroBanner } from '@/components/sections/HeroBanner';
import { heroImageUrl } from '@/utils/heroImageUrl';
import styles from './GradientHero.module.scss';

type GradientHeroProps = {
  data: HeroCopyData;
  /** Figma Rectangle 85 — 8px inset, 20px radius (product explore / industry pages). */
  variant?: 'default' | 'inset';
  /** Some product/capability pages composite a product mockup or photo over the gradient band: full-bleed cover on "inset", right-anchored cutout on "default" (Figma: image layered inside Rectangle 85). */
  image?: string;
  /** Natural aspect ratio ("w / h") of `image`, used to size the mobile-stacked copy below lg. */
  imageAspectRatio?: string;
  /** Serve `image` untouched (no Next resize/recompress). */
  imageUnoptimized?: boolean;
  /** Lay a gradient fade over the image's left edge so it sits behind the copy's gradient (inset variant). */
  imageBehindGradient?: boolean | 'wide';
  /** Inset variant, below lg: crop the image's transparent margins so the device spans the card width. */
  mobileFill?: boolean;
  /** Inset variant, lg+: vertically centre the cutout between the nav and the bottom of the hero. */
  imageCentered?: boolean;
  /** Figma mobile photo hero: a dedicated full-card photo (below lg) with a blue wash over the copy, replacing the stacked image. */
  mobileBackdrop?: string;
  /** Figma mobile cutout (inset variant): a wide mockup pinned to the bottom-left of the hero card, cropped by it. */
  mobileImage?: string;
  /**
   * Default variant, below lg: instead of letterboxing `image` inside the stacked
   * box, show it cropped by a full-width box (Figma mobile cutout). All values are
   * percentages of the box, so the image keeps its proportions and scales with it.
   */
  mobileCrop?: { aspect: string; width: number; left: number; top: number; imageWidth: number; imageHeight: number };
};

/** Text-only hero on the 864px gradient band; copy is centred in the space below the header. */
export function GradientHero({
  data,
  variant = 'default',
  image,
  imageAspectRatio,
  imageUnoptimized,
  imageBehindGradient,
  mobileFill,
  imageCentered,
  mobileBackdrop,
  mobileImage,
  mobileCrop,
}:GradientHeroProps) {
  // Photo hero (image sits behind the gradient wash): the photo is the box's ::before background and the
  // wash its ::after / the copy's ::before — no <img>, breakpoints only swap CSS. Transparent cutouts keep <Image>.
  const photo = Boolean(image && imageBehindGradient);
  const photoVars = photo
    ? ({
        '--hero-image': heroImageUrl(image!, 1920, imageUnoptimized),
        '--hero-image-mobile': heroImageUrl(mobileBackdrop ?? image!, 1080, imageUnoptimized),
      } as CSSProperties)
    : undefined;

  if (variant === 'inset') {
    return (
      <section
        className={`${styles.insetBanner} ${mobileImage ? styles.insetBannerCutout : ''} ${photo && mobileBackdrop ? styles.insetBannerBackdrop : ''}`.trim()}
        style={
          {
            ...(data.mobileMinHeight && { '--hero-min-height': `${data.mobileMinHeight}px` }),
            ...(data.mobilePaddingTop && { '--hero-mobile-pad-top': `${data.mobilePaddingTop}px` }),
            ...photoVars,
          } as CSSProperties
        }
      >
        <div className={`${styles.heroBox} ${photo ? styles.photoBox : ''} ${imageBehindGradient ? styles.heroBoxFade : ''} ${imageBehindGradient === 'wide' ? styles.heroBoxFadeWide : ''}`.trim()} aria-hidden="true">
          {image && !photo && (
            <Image src={image} alt="" fill priority unoptimized={imageUnoptimized} className={`${styles.heroBoxImage} ${imageCentered ? styles.heroBoxImageCentered : ""}`.trim()} sizes="100vw" />
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
        {image && !mobileImage && !photo && (
          <Container className={`${styles.insetMobileGraphicWrap} ${mobileFill ? styles.insetMobileGraphicWrapFill : ""}`.trim()}>
            <div
              className={styles.insetMobileGraphicBox}
              style={imageAspectRatio ? ({ '--hero-mobile-aspect': imageAspectRatio } as CSSProperties) : undefined}
              aria-hidden="true"
            >
              <Image src={image} alt="" fill unoptimized={imageUnoptimized} className={styles.insetMobileGraphicImage} sizes="100vw" />
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
              unoptimized={imageUnoptimized}
            />
          </div>
        )}
        <Container className={styles.inner}>
          <HeroCopy {...data} />
        </Container>

        {/* Figma mobile (6225:43827): below lg the cutout has no room to float
            beside the copy, so it stacks under it instead — same source image,
            just laid out in normal flow instead of the absolute full-bleed cutout. */}
        {image && mobileCrop && (
          <div className={styles.mobileGraphicWrap}>
            <div
              className={styles.mobileCropBox}
              style={
                {
                  '--crop-aspect': mobileCrop.aspect,
                  '--crop-width': `${mobileCrop.width}%`,
                  '--crop-left': `${mobileCrop.left}%`,
                  '--crop-top': `${mobileCrop.top}%`,
                } as CSSProperties
              }
              aria-hidden="true"
            >
              <Image
                src={image}
                alt=""
                width={mobileCrop.imageWidth}
                height={mobileCrop.imageHeight}
                className={styles.mobileCropImage}
                unoptimized={imageUnoptimized}
                sizes="100vw"
              />
            </div>
          </div>
        )}
        {image && !mobileCrop && (
          <Container className={styles.mobileGraphicWrap}>
            <div className={styles.mobileGraphicBox} aria-hidden="true">
              <Image
                src={image}
                alt=""
                fill
                className={styles.mobileGraphicImage}
                unoptimized={imageUnoptimized}
                sizes="100vw"
              />
            </div>
          </Container>
        )}
      </section>
    </HeroBanner>
  );
}
