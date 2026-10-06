import type { Metadata } from 'next';
import { contactData } from '@/data/contact';
import { ContactChannelsSection } from '@/components/sections/ContactChannelsSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { PageHeroBanner } from '@/components/sections/PageHeroBanner';

export const metadata: Metadata = {
  title: 'Get in Touch — CQI Verified CX',
  description:
    'Talk to the CQI team about sales, partnerships, security & procurement, media, careers or the company — pick the conversation you need.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeroBanner data={contactData.hero} />
      <ContactChannelsSection data={contactData.channels} />
      <CtaBannerSection data={contactData.cta} variant="flushTop" />
    </>
  );
}
