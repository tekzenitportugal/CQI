import type { Metadata } from 'next';
import { articlesData } from '@/data/articles';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { PageHeroBanner } from '@/components/sections/PageHeroBanner';
import { PublishedPiecesSection } from '@/components/sections/PublishedPiecesSection';

export const metadata: Metadata = {
  title: articlesData.metaTitle,
  description: articlesData.metaDescription,
};

export default function ArticlesPage() {
  return (
    <>
      <PageHeroBanner data={articlesData.hero} mirror={false} />
      <PublishedPiecesSection data={articlesData.published} />
      <CtaBannerSection data={articlesData.conversationCta} variant="flushTop" />
    </>
  );
}
