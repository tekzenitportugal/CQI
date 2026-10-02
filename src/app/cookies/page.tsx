import type { Metadata } from 'next';
import { cookiesData, cookiesMeta } from '@/data/cookies';
import { LegalPageSection } from '@/components/sections/LegalPageSection';

export const metadata: Metadata = {
  title: cookiesMeta.metaTitle,
  description: cookiesMeta.metaDescription,
};

export default function CookiesPage() {
  return <LegalPageSection data={cookiesData} />;
}
