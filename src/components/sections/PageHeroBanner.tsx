import type { CSSProperties } from 'react';
import Image from 'next/image';
import type { PageHeroData } from '@/types/content';
import { Container } from '@/components/ui/Container';
import { HeroCopy } from '@/components/ui/HeroCopy';
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
    ...(data.mobileOverlay ? { '--hero-mobile-overlay': data.mobileOverlay } : {}),
  } as CSSProperties;
  const frame = data.desktopImageFrame;
  const desktopFrameVars = frame
    ? ({
        '--hero-img-left': `${frame.left}%`,
        '--hero-img-top': `${frame.top}%`,
        '--hero-img-width': `${frame.width}%`,
        '--hero-img-height': `${frame.height}%`,
      } as CSSProperties)
    : undefined;
  const hasDedicatedMobile = Boolean(data.mobileImage);

  return (
    <section
      className={styles.banner}
      style={mobileVars}
    >
      <div className={styles.heroBox} aria-hidden="true">
        {!data.image ? (
          <div className={styles.gradientOnly} />
        ) : hasDedicatedMobile ? (
          <>
            {/* Flat full-bleed photo — no crop/mirror tricks; the wash is a separate overlay layer below. */}
            <Image
              src={data.image!}
              alt=""
              fill
              priority
              className={`${styles.heroImage} ${styles.desktopOnly} ${frame ? styles.framed : ''}`.trim()}
              style={desktopFrameVars}
              sizes="100vw"
            />
            <Image
              src={data.mobileImage!}
              alt=""
              fill
              priority
              className={`${styles.heroImage} ${styles.mobileOnly}`}
              sizes="100vw"
            />
            <div className={`${styles.overlayFlat} ${frame ? styles.overlayFramed : ''}`.trim()} />
          </>
        ) : (
          <>
            <div className={`${styles.imageWrap} ${mirror ? '' : styles.unmirrored}`.trim()}>
              <Image src={data.image!} alt="" fill priority className={styles.heroImage} sizes="100vw" />
            </div>
            <div className={`${styles.overlay} ${mirror ? '' : styles.overlayUnmirrored}`.trim()} />
          </>
        )}
      </div>

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
