import Image from 'next/image';
import Link from 'next/link';
import styles from './CarouselCard.module.scss';

type CarouselCardProps = {
  title: string;
  description: string;
  /** Pill above the copy (Figma "tag"). */
  tag?: string;
  /** 72px pictogram above the copy. */
  icon?: string;
  /** Makes the whole card a link with an "Explore →" row. */
  href?: string;
  linkLabel?: string;
  /** Figma sets a few titles in Regular instead of Medium. */
  titleWeight?: 400 | 500;
  /** Desktop description at 16px instead of 17.5px (Figma "See it live" coverage cards). */
  smallDescription?: boolean;
  className?: string;
};

/**
 * Figma "CARDS" (dark gradient, 384.89px wide): top content (tag or icon + copy),
 * bottom content (copy or link), pushed apart when cards in a row stretch to equal height.
 */
export function CarouselCard({
  title,
  description,
  tag,
  icon,
  href,
  linkLabel = 'Explore',
  titleWeight,
  smallDescription,
  className,
}: CarouselCardProps) {
  const copy = (
    <div className={styles.copy}>
      <h3 className={styles.title} style={titleWeight ? { fontWeight: titleWeight } : undefined}>
        {title}
      </h3>
      <p className={[styles.description, smallDescription && styles.descriptionSmall].filter(Boolean).join(' ')}>
        {description}
      </p>
    </div>
  );

  const body = (
    <>
      {tag && <span className={styles.tag}>{tag}</span>}
      {icon ? (
        <div className={styles.iconBody}>
          <Image src={icon} alt="" width={72} height={72} className={styles.icon} />
          {copy}
        </div>
      ) : (
        copy
      )}
      {href && (
        <span className={styles.link}>
          {linkLabel}
          <img src="/images/shared/common/carousel/arrow-explore.svg" alt="" width={16} height={16} aria-hidden="true" />
        </span>
      )}
    </>
  );

  const classNames = [styles.card, className].filter(Boolean).join(' ');

  return href ? (
    <Link href={href} className={classNames}>
      {body}
    </Link>
  ) : (
    <article className={classNames}>{body}</article>
  );
}
