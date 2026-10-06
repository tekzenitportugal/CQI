import type { CtaBannerData, PageHeroData } from '@/types/content';
import type { FaqSectionData } from '@/components/sections/FaqSection';
import type { HowModelWorksSectionData } from '@/components/sections/HowModelWorksSection';
import type { RoiCalculatorSectionData } from '@/components/sections/RoiCalculatorSection';

export const roiCalculatorData = {
  metaTitle: 'ROI Calculator — CQI Verified CX',
  metaDescription:
    'Enter your contact-centre and customer-base figures. The calculator applies the outcome ceilings from CQI programme material and shows a conservative case alongside them, so you can see the shape of the business case before anyone builds one for you.',
  hero: {
    title: 'Model the range on your\nown numbers',
    titleHighlight: ['Model the range'],
    eyebrow: 'ROI Calculator',
    description:
      'Enter your contact-centre and customer-base figures. The calculator applies the outcome ceilings from CQI programme material and shows a conservative case alongside them, so you can see the shape of the business case before anyone builds one for you.',
  } satisfies PageHeroData,

  calculator: {
    defaults: {
      interactionVolume: 4_000_000,
      costPerInteraction: 3.6,
      repeatContactsPct: 20,
      customerBase: 900_000,
      churnRatePct: 20,
      revenuePerCustomer: 240,
    },
    footnote:
      'Indicative only. Ceilings are not averages and are not portable between sectors; the combined cost saving is capped at the 30% cost-to-serve ceiling so the two contact lines cannot double-count. Your defensible figure comes from a proof of concept measured against a control group.',
  } satisfies RoiCalculatorSectionData,

  howModelWorks: {
    eyebrow: 'How the model works',
    title: 'What each line assumes',
    rows: [
      {
        label: 'Repeat contacts\nremoved',
        description:
          'Repeat contacts are your volume × your repeat rate. CQI’s FCR ceiling of 30% is applied to that subset only — the contacts that exist because something was left unresolved.',
      },
      {
        label: 'Handling-time saving',
        description:
          'The AHT ceiling of 15% is applied to the volume that remains after repeat contacts are removed, on the basis that agents arrive with verified context rather than discovering it live.',
      },
      {
        label: 'Cost-to-serve cap',
        description:
          'CQI programme material states a cost-to-serve ceiling of 30%. The two contact lines above are capped at that figure combined, so the model cannot claim more than the ceiling.',
      },
      {
        label: 'Revenue retained',
        description:
          'Revenue at risk is base × churn rate × annual revenue per customer. The churn ceiling of 25% is applied to that figure.',
      },
      {
        label: 'Conservative case',
        description:
          'One third of each ceiling. Most business cases that survive a finance review are built closer to this line than to the ceiling.',
      },
      {
        label: 'What is not modelled',
        description:
          'Revenue expansion from intent signals, regulatory complaint avoidance, warranty and field-cost reduction, and the cost of the CQI programme itself. Those are scoped in a proposal, not a calculator.',
      },
    ],
  } satisfies HowModelWorksSectionData,

  faq: {
    eyebrow: 'Frequently asked',
    title: 'About this calculator',
    items: [
      {
        question: 'Where do the percentages come from?',
        answer:
          'They are the outcome ceilings published in CQI programme material: up to 30% cost-to-serve reduction, up to 30% FCR improvement, up to 15% AHT reduction and up to 25% churn reduction. They are ceilings for programmes where friction is identified and resolved before it compounds — not averages, and not portable between sectors.',
        link: { label: 'How we prove it', href: '/products/how-we-prove-it' },
      },
      {
        question: 'Is this a quote?',
        answer:
          'No. It sizes the value at stake, not the cost of the platform. Pricing is scoped to journeys, channels, volume and users.',
      },
      {
        question: 'How would we validate these numbers?',
        answer:
          'A proof of concept baselines your actual friction map, repeat-contact ratios and promise-breach rates, and every treatment group runs against a control group so the delta is measured rather than asserted.',
      },
    ],
  } satisfies FaqSectionData,

  conversationCta: {
    title: 'Validate it on your own data',
    titleHighlight: ['your own data'],
    description: 'Every assumption on this page can be replaced with a measurement from your own operation.',
    image: '/images/resources/roi-calculator/cta-tablet.jpg',
    imageWidth: 579,
    imageHeight: 289,
    buttons: [
      { label: 'Request a demo', href: '/request-a-demo', variant: 'primary' },
      { label: 'PoC approach', href: '/products/poc-approach', variant: 'secondary' },
    ],
  } satisfies CtaBannerData,
};
