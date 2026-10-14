import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { PageHeroBanner } from '@/components/sections/PageHeroBanner';
import { AirlinesContributesSection } from '@/components/solutions/airlines/AirlinesContributesSection';
import { AirlinesJourneySection } from '@/components/solutions/airlines/AirlinesJourneySection';
import { AirlinesPulseSection } from '@/components/solutions/airlines/AirlinesPulseSection';
import { AirlinesWhySection } from '@/components/solutions/airlines/AirlinesWhySection';
import { airlinesPageData as data } from '@/data/solutions/airlines-page';
import styles from './AirlinesSolutionView.module.scss';

/**
 * /solutions/airlines (Figma AIRLINES 6544:38038). This page has its own view and styles so nothing
 * here can leak into the other industry pages, which still render through IndustrySolutionView.
 */
export function AirlinesSolutionView() {
  return (
    <>
      <PageHeroBanner
        data={{
          ...data.hero,
          image: data.heroImage,
          mobileImage: data.heroImageMobile,
          imageUnoptimized: true,
          // Tall mobile art: keep the cabin (bottom) in view instead of centre-cropping it.
          mobilePhotoFit: true,
        }}
      />
      <AirlinesWhySection data={data.why} />
      <div className={styles.band}>
        <AirlinesPulseSection data={data.pulse} />
        <AirlinesContributesSection data={data.contributes} />
      </div>
      <AirlinesJourneySection data={data.journey} />
      <FaqSection data={data.faq} />
      <CtaBannerSection data={data.cta} />
    </>
  );
}
