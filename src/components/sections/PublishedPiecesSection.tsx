'use client';

import { useState } from 'react';
import { ArticleCard, type ArticleCardData } from '@/components/ui/ArticleCard';
import { Container } from '@/components/ui/Container';
import { GhostButton } from '@/components/ui/GhostButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './PublishedPiecesSection.module.scss';

export type PublishedPiecesSectionData = {
  title: string;
  titleHighlight?: string[];
  items: ArticleCardData[];
};

type PublishedPiecesSectionProps = {
  data: PublishedPiecesSectionData;
};

// 1 article = wide card, 2 = two columns, 3+ = three columns. Past 9 the rest sit behind "Load more".
const INITIAL_VISIBLE = 9;
const LOAD_MORE_STEP = 6;

export function PublishedPiecesSection({ data }: PublishedPiecesSectionProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const visibleItems = data.items.slice(0, visibleCount);
  const hasMore = data.items.length > visibleCount;
  const layout = visibleItems.length === 1 ? 'horizontal' : 'vertical';
  const gridClass = [
    styles.grid,
    visibleItems.length === 1 && styles.gridOne,
    visibleItems.length === 2 && styles.gridTwo,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading title={data.title} titleHighlight={data.titleHighlight} align="left" />

        <ul className={gridClass}>
          {visibleItems.map((item) => (
            <li key={item.href + item.title} className={styles.item}>
              <ArticleCard {...item} layout={layout} />
            </li>
          ))}
        </ul>

        {hasMore && (
          <div className={styles.more}>
            <GhostButton label="Load more" onClick={() => setVisibleCount((count) => count + LOAD_MORE_STEP)} />
          </div>
        )}
      </Container>
    </section>
  );
}
