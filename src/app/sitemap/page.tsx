import type { Metadata } from 'next';
import { sitemapData } from '@/data/sitemap';
import { GradientHero } from '@/components/sections/GradientHero';
import { SitemapLinksSection } from '@/components/sections/SitemapLinksSection';

export const metadata: Metadata = {
  title: sitemapData.metaTitle,
  description: sitemapData.metaDescription,
};

export default function SitemapPage() {
  return (
    <>
      <GradientHero data={sitemapData.hero} variant="inset" />
      <SitemapLinksSection data={sitemapData.links} />
    </>
  );
}
