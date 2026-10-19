import Link from 'next/link';
import { FpoImage } from '@/components/ui/FpoImage';
import styles from './ArticleCard.module.scss';

export type ArticleCardData = {
  image?: string;
  tags?: string[];
  title: string;
  description: string;
  readTime: string;
  href: string;
};

type ArticleCardProps = ArticleCardData & {
  /** `horizontal` = image left, text right (single-article landing); falls back to vertical on mobile. */
  layout?: 'vertical' | 'horizontal';
};

/** Figma "CARD ARTICLE": image + title/text, "N min read" / "Read →" footer. Tags (top-right of the image) are optional. */
export function ArticleCard({
  image,
  tags = [],
  title,
  description,
  readTime,
  href,
  layout = 'vertical',
}: ArticleCardProps) {
  const cardClass = [styles.card, layout === 'horizontal' && styles.horizontal].filter(Boolean).join(' ');

  return (
    <Link href={href} className={cardClass}>
      <div className={`${styles.media} ${image ? '' : styles.mediaEmpty}`.trim()}>
        <FpoImage
          src={image}
          alt=""
          width={447}
          height={253}
          overlay={false}
          fillContainer
          objectPosition="center top"
          borderRadius={14}
        />
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className={styles.copy}>
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.footer}>
          <span className={styles.readTime}>{readTime}</span>
          <span className={styles.readLink}>
            Read
            <img src="/images/shared/common/arrow-right-blue.svg" alt="" width={16} height={16} aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
