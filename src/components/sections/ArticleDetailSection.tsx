import Image from 'next/image';
import { ArticleSidebar } from '@/components/sections/ArticleSidebar';
import { Container } from '@/components/ui/Container';
import { GhostLink } from '@/components/ui/GhostLink';
import type { ArticleBlock, ArticlePost } from '@/data/article-posts';
import { highlightText } from '@/utils/highlightText';
import styles from './ArticleDetailSection.module.scss';

type ArticleDetailSectionProps = {
  post: ArticlePost;
};

function renderBlock(block: ArticleBlock, index: number) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={index} className={styles.paragraph}>
          {highlightText(block.text, block.highlight)}
        </p>
      );
    case 'image':
      return (
        <div key={index} className={`${styles.photo} ${styles.photoWide}`}>
          <Image src={block.src} alt={block.alt} fill sizes="(max-width: 1023px) 100vw, 951px" unoptimized className={styles.photoImage} />
        </div>
      );
    case 'quote':
      return (
        <blockquote key={index} className={styles.quote}>
          {highlightText(block.text, block.highlight)}
        </blockquote>
      );
    case 'link':
      return <GhostLink key={index} label={block.label} href={block.href} className={styles.link} />;
  }
}

/** Figma "ARTICLE WAF2026" body: article column + sticky contents/share sidebar, then a full-width photo row. */
export function ArticleDetailSection({ post }: ArticleDetailSectionProps) {
  const tocItems = post.sections
    .filter((section) => section.title)
    .map((section) => ({ id: section.id, label: section.tocLabel ?? section.title ?? '' }));

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.article}>
            {post.sections.map((section) => (
              <div key={section.id} id={section.id} className={styles.articleSection}>
                {section.title && <h2 className={styles.heading}>{highlightText(section.title, section.titleHighlight)}</h2>}
                <div className={styles.blocks}>{section.blocks.map(renderBlock)}</div>
              </div>
            ))}
          </div>

          <ArticleSidebar items={tocItems} title={post.hero.title.replace('\n', ' ')} />
        </div>

        {post.gallery && (
          <div className={styles.gallery}>
            {post.gallery.map((photo) => (
              <div key={photo.src} className={styles.photo}>
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1023px) 100vw, 951px" unoptimized className={styles.photoImage} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
