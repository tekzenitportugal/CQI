import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articlesData } from '@/data/articles';
import { articleSlugs, getArticlePost } from '@/data/article-posts';
import { ArticleDetailSection } from '@/components/sections/ArticleDetailSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { PageHeroBanner } from '@/components/sections/PageHeroBanner';

type ArticleDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getArticlePost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { slug } = await params;
  const post = getArticlePost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHeroBanner data={post.hero} />
      <ArticleDetailSection post={post} />
      <CtaBannerSection data={articlesData.conversationCta} variant="flushTop" />
    </>
  );
}
