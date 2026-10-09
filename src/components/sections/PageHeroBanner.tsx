import type { CSSProperties } from 'react';
import type { PageHeroData } from '@/types/content';
import { Container } from '@/components/ui/Container';
import { HeroCopy } from '@/components/ui/HeroCopy';
import { heroImageUrl } from '@/utils/heroImageUrl';
import styles from './PageHeroBanner.module.scss';

type PageHeroBannerProps = {
  data: PageHeroData;
  /** Legacy path only (no `data.mobileImage`): most of those photos are prepped mirrored per Figma; set false when the source image reads correctly as-is. */
  mirror?: boolean;
};

export function PageHeroBanner({ data, mirror = true }: PageHeroBannerProps) {
  const mobileVars = {
    ...(data.mobilePaddingTop ? { '--hero-mobile-pad-top': `${data.mobilePaddingTop}px` } : {}),
    ...(data.mobileTextGap ? { '--hero-mobile-text-gap': `${data.mobileTextGap}px` } : {}),
    ...(data.mobileIntroGap ? { '--hero-mobile-intro-gap': `${data.mobileIntroGap}px` } : {}),
    ...(data.mobileImageShift ? { '--hero-mobile-img-shift': `${data.mobileImageShift}px`, '--hero-mobile-box-bg': '#050505' } : {}),
  } as CSSProperties;
  const frame = data.desktopImageFrame;
  const desktopFrameVars = frame
    ? ({
        '--hero-img-left': `${frame.left}%`,
        ...(frame.focusX ? { '--hero-img-focus-x': `-${frame.focusX}%` } : {}),
        '--hero-img-top': `${frame.top}%`,
        '--hero-img-width': `${frame.width}%`,
        '--hero-img-height': `${frame.height}%`,
        ...(frame.aspect ? { '--hero-img-aspect': String(frame.aspect) } : {}),
      } as CSSProperties)
    : undefined;
  const hasDedicatedMobile = Boolean(data.mobileImage);
  const unoptimized = data.imageUnoptimized;
  const imageVars = data.image
    ? ({
        '--hero-image': heroImageUrl(data.image, 1920, unoptimized),
        '--hero-image-mobile': heroImageUrl(data.mobileImage ?? data.image, 1080, unoptimized),
      } as CSSProperties)
    : undefined;
  const boxClass = [
    styles.heroBox,
    !data.image && styles.heroBoxGradient,
    data.image && (hasDedicatedMobile ? styles.photoDedicated : styles.photoLegacy),
    data.image && !hasDedicatedMobile && !mirror && styles.photoUnmirrored,
    frame && styles.photoFramed,
    frame?.aspect && styles.photoFramedRatio,
    data.mobilePortraitCrop && styles.photoPortrait,
    data.image && (hasDedicatedMobile ? (frame ? styles.washFramed : styles.washFlat) : mirror ? styles.washLegacy : styles.washLegacyUnmirrored),
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section
      className={`${styles.banner} ${data.image ? styles.hasPhoto : ''}`.trim()}
      style={{ ...mobileVars, ...imageVars, ...desktopFrameVars }}
    >
      {/* Photo = ::before and wash = ::after of this one box; breakpoints only swap CSS. */}
      <div className={boxClass} aria-hidden="true" />

      <Container className={styles.contentWrap}>
        <HeroCopy
          title={data.title}
          titleHighlight={data.titleHighlight}
          eyebrow={data.eyebrow}
          description={data.description}
          titleMaxWidth={data.titleMaxWidth}
          descriptionMaxWidth={data.descriptionMaxWidth}
          copyMaxWidth={data.copyMaxWidth}
          cta={data.cta}
          mobileInlineTitle={data.mobileInlineTitle}
          className={styles.content}
        />
      </Container>
    </section>
  );
}
