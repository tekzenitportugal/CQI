import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { IndustrySolutionView } from '@/components/solutions/IndustrySolutionView';
import { getIndustrySolution, industrySlugs, isIndustrySlug } from '@/data/solutions';

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustrySolution(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function IndustrySolutionPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  if (!isIndustrySlug(slug)) notFound();

  const data = getIndustrySolution(slug);
  if (!data) notFound();

  return <IndustrySolutionView data={data} />;
}
