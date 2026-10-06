import type { Metadata } from 'next';
import { glossaryData } from '@/data/glossary';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { GlossarySection } from '@/components/sections/GlossarySection';
import { PageHeroBanner } from '@/components/sections/PageHeroBanner';

export const metadata: Metadata = {
  title: glossaryData.metaTitle,
  description: glossaryData.metaDescription,
};

export default function GlossaryPage() {
  return (
    <>
      <PageHeroBanner data={glossaryData.hero} />
      <GlossarySection data={glossaryData.terms} />
      <CtaBannerSection data={glossaryData.conversationCta} variant="flushTop" />
    </>
  );
}
