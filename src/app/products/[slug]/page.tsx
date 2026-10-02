import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { capabilityPages, getCapabilityPage } from '@/data/capabilities';
import { CapabilityFeaturesSection } from '@/components/sections/CapabilityFeaturesSection';
import { CapabilityPagerSection } from '@/components/sections/CapabilityPagerSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { GradientHero } from '@/components/sections/GradientHero';
import { RuledRowsSection } from '@/components/sections/RuledRowsSection';

type CapabilityPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return capabilityPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: CapabilityPageProps): Promise<Metadata> {
  const page = getCapabilityPage((await params).slug);
  return page ? { title: page.metaTitle, description: page.metaDescription } : {};
}

export default async function CapabilityPage({ params }: CapabilityPageProps) {
  const page = getCapabilityPage((await params).slug);
  if (!page) notFound();

  return (
    <>
      <GradientHero data={page.hero} variant="inset" image={page.heroImage} />
      <CapabilityFeaturesSection data={page.features} spaceTop={200} spaceBottom={page.spacing.afterFeatures} />
      <RuledRowsSection
        data={page.howItWorks}
        spaceBottom={page.spacing.afterHowItWorks}
        descriptionOffset={page.howItWorks.descriptionOffset}
      />
      <CapabilityPagerSection data={page.pager} />
      <FaqSection data={page.faq} />
      <CtaBannerSection data={page.cta} />
    </>
  );
}
