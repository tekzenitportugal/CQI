import Link from 'next/link';
import { FpoImage } from '@/components/ui/FpoImage';
import styles from './ArticleCard.module.scss';

export type ArticleCardData = {
  image?: string;
  tags: string[];
  title: string;
  description: string;
  readTime: string;
  href: string;
};

/** Figma "CARD ARTICLE" (6079:30696): image (tags top-right) + title/text, "N min read" / "Read →" footer. */
export function ArticleCard({ image, tags, title, description, readTime, href }: ArticleCardData) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.media}>
        <FpoImage
          src={image}
          alt=""
          width={447}
          height={212}
          overlay={false}
          fillContainer
          borderRadius={14}
        />
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
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
