import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  compareDetailCopy,
  compareDetailCta,
  compareDetailPages,
  compareDetailSlugs,
  getCompareDetailPage,
} from '@/data/compare-cqi-pages';
import { CompareDetailCategorySection } from '@/components/sections/CompareDetailCategorySection';
import { CompareDetailRelatedSection } from '@/components/sections/CompareDetailRelatedSection';
import { CompareDetailTableSection } from '@/components/sections/CompareDetailTableSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { GradientHero } from '@/components/sections/GradientHero';

type CompareDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return compareDetailSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CompareDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getCompareDetailPage(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function CompareDetailPage({ params }: CompareDetailPageProps) {
  const { slug } = await params;
  const page = getCompareDetailPage(slug);
  if (!page) notFound();

  const { category, sideBySide } = compareDetailCopy;
  const otherPages = compareDetailPages.filter((other) => other.slug !== page.slug);

  return (
    <>
      <GradientHero data={page.hero} variant="inset" />
      <CompareDetailCategorySection
        data={{
          eyebrow: category.eyebrow,
          title: page.category.title,
          titleHighlight: page.category.titleHighlight,
          titleWidth: page.category.titleWidth,
          cards: (['strength', 'limit', 'addition'] as const).map((tone) => ({
            tone,
            tag: compareDetailCopy.labels[tone],
            title: compareDetailCopy.cardTitles[tone],
            description: page.category[tone],
          })),
        }}
      />
      <CompareDetailTableSection
        data={{
          eyebrow: sideBySide.eyebrow,
          title: sideBySide.title,
          description: sideBySide.description,
          headers: {
            dimension: sideBySide.dimensionHeader,
            competitor: page.sideBySide.competitorLabel,
            cqi: sideBySide.cqiHeader,
          },
          rows: page.sideBySide.rows,
        }}
      />
      <CompareDetailRelatedSection
        data={{
          links: otherPages.map((other) => ({ label: other.linkLabel, href: `/resources/compare-cqi/${other.slug}` })),
          all: compareDetailCopy.allCategories,
        }}
      />
      <CtaBannerSection data={compareDetailCta} />
    </>
  );
}
