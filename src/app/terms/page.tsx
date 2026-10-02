import type { Metadata } from 'next';
import { termsData, termsMeta } from '@/data/terms';
import { LegalPageSection } from '@/components/sections/LegalPageSection';

export const metadata: Metadata = {
  title: termsMeta.metaTitle,
  description: termsMeta.metaDescription,
};

export default function TermsPage() {
  return <LegalPageSection data={termsData} />;
}
