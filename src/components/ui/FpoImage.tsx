import Image from 'next/image';
import type { CSSProperties } from 'react';
import styles from './FpoImage.module.scss';

/** Where the picture sits inside the frame, in design px (Figma: image smaller than its dimmed frame). */
type ImageInset = { top: number; left: number; width: number; height: number };

type FpoImageProps = {
  src?: string;
  alt?: string;
  /** Design size of the frame; sets the aspect ratio. */
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  /** Black dim layer on top: `true` = 50% (Figma default), a number = custom opacity, `false` = none. */
  overlay?: boolean | number;
  /** CSS mix-blend-mode for the overlay layer (Figma: 'color' tints instead of just dimming). */
  overlayBlend?: 'normal' | 'color';
  /** Shows the "FPO" placeholder label (Figma: 96px Poppins, 50% white). */
  label?: boolean;
  inset?: ImageInset;
  objectPosition?: string;
  /** Figma: source photo mirrored horizontally (net effect of a rotate-180 + scaleY(-1) pair). */
  flipX?: boolean;
  fillContainer?: boolean;
  sizes?: string;
  /** Figma default is 12px; override when a design calls for a different image radius. */
  borderRadius?: number;
};

export function FpoImage({
  src = '/images/shared/common/fpo.svg',
  alt = '',
  width,
  height,
  className = '',
  priority = false,
  overlay = true,
  overlayBlend,
  label = false,
  inset,
  objectPosition,
  flipX = false,
  fillContainer = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  borderRadius,
}: FpoImageProps) {
  const dim = overlay === true ? 0.5 : overlay === false ? 0 : overlay;

  const insetStyle: CSSProperties | undefined = inset && {
    top: `${(inset.top / height) * 100}%`,
    left: `${(inset.left / width) * 100}%`,
    width: `${(inset.width / width) * 100}%`,
    height: `${(inset.height / height) * 100}%`,
  };

  // Some insets sit inside the frame (letterboxed — dead space around the photo, which
  // we collapse on mobile below). Others deliberately overflow the frame (e.g. a tall
  // screenshot top-cropped into a short frame) to get a zoomed-in crop; those must keep
  // the frame's own ratio at every breakpoint or the crop changes.
  const insetFitsFrame = !!inset && inset.width <= width && inset.height <= height;

  return (
    <div
      className={[
        styles.wrapper,
        insetFitsFrame && styles.insetFitsFrame,
        fillContainer && styles.fillContainer,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        ...(fillContainer
          ? undefined
          : ({
              '--fpo-aspect-ratio': `${width} / ${height}`,
              ...(insetFitsFrame &&
                inset && { '--fpo-aspect-ratio-inset': `${inset.width} / ${inset.height}` }),
            } as CSSProperties)),
        ...(borderRadius ? { borderRadius: `${borderRadius}px` } : undefined),
      }}
    >
      <div className={styles.imageBox} style={insetStyle}>
        <Image
          src={src}
          alt={alt}
          fill
          className={styles.image}
          style={{
            ...(objectPosition ? { objectPosition } : undefined),
            ...(flipX ? { transform: 'scaleX(-1)' } : undefined),
          }}
          sizes={sizes}
          priority={priority}
        />
      </div>
      {dim > 0 && (
        <span
          className={styles.overlay}
          style={{ opacity: dim, mixBlendMode: overlayBlend }}
          aria-hidden="true"
        />
      )}
      {label && (
        <span className={styles.fpoLabel} aria-hidden="true">
          FPO
        </span>
      )}
    </div>
  );
}
