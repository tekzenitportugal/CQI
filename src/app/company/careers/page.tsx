import type { Metadata } from 'next';
import { careersData } from '@/data/careers';
import { CareersDisciplinesSection } from '@/components/sections/CareersDisciplinesSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { PageHeroBanner } from '@/components/sections/PageHeroBanner';

export const metadata: Metadata = {
  title: 'Careers — CQI',
  description:
    'CQI is an enterprise software company solving a problem most of its market has not yet named. See where we hire and what you would be working on.',
};

export default function CareersPage() {
  return (
    <>
      <PageHeroBanner data={careersData.hero} />
      <CareersDisciplinesSection data={careersData.disciplines} />
      <CtaBannerSection data={careersData.cta} />
    </>
  );
}
