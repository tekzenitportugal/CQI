import type { HeroCopyData } from '@/components/ui/HeroCopy';
import type { NotListedPageData } from '@/types/content';

export const notListedPageData = {
  metaTitle: 'Not Listed? — CQI Verified CX',
  metaDescription:
    'Healthcare, retail and other complex service industries: the pattern holds wherever a commitment is made in a conversation and delivered by an operation.',
  hero: {
    title: 'Healthcare, retail and other complex service industries',
    titleHighlight: ['Healthcare, retail and other'],
    eyebrow: 'not listed?',
    description:
      'The pattern holds wherever a commitment is made in a conversation and delivered by an operation. If your sector isn’t listed, the fastest way to find out whether CQI fits is a two-week look at your own interactions.',
    titleMaxWidth: 587,
    descriptionMaxWidth: 587,
    copyMaxWidth: 587,
  } satisfies HeroCopyData,

  threeQuestions: {
    title: 'Three questions that decide whether CQI fits',
    titleHighlight: ['Three questions', 'CQI fits'],
    items: [
      {
        step: 1,
        title: 'Are promises made\nin conversations?',
        description:
          'A price, a callback, a delivery window, an approval, an appointment. If commitments are made verbally or in chat, there is a ledger to build.',
      },
      {
        step: 2,
        title: 'Does another system\nhave to execute them?',
        description:
          'Billing, dispatch, fulfilment, underwriting, provisioning. The gap between promise and execution is where CQI works.',
      },
      {
        step: 3,
        title: 'Do most unhappy\ncustomers stay silent?',
        description:
          'If your CX signal is a survey response rate in the single digits, most of the friction in your base is currently invisible.',
      },
    ],
  },

  adjacentSectors: {
    eyebrow: 'adjacent sectors',
    title: 'Where the pattern repeats',
    titleHighlight: ['pattern repeats'],
    description:
      'Different sectors, same four failure modes. Recognising which one you have determines who owns the fix.',
    cards: [
      {
        title: 'Healthcare & health insurance',
        description:
          'Appointment commitments, referral handoffs, claim and authorisation delays, and care instructions that never reach the right system.',
        image: '/images/solutions/not-listed/adjacent-sector.jpg',
      },
      {
        title: 'Retail & e-commerce',
        description:
          'Delivery windows, returns and refunds promised in chat, and stock or pricing inconsistencies that generate repeat contact.',
        image: '/images/solutions/not-listed/adjacent-sector.jpg',
      },
      {
        title: 'Transport & logistics',
        description:
          'Collection and delivery slots, claims for damage or loss, and multi-party handoffs where context does not travel.',
        image: '/images/solutions/not-listed/adjacent-sector.jpg',
      },
    ],
  },

  cta: {
    title: 'Tell us where your friction hides',
    titleHighlight: ['where your', 'friction hides'],
    description:
      'A 45-minute session on your operation, with no assumption that your sector has to look like telecom.',
    image: '/images/solutions/not-listed/cta-photo.jpg',
    imageWidth: 579,
    imageHeight: 289,
    imagePosition: 'center',
    buttons: [
      { label: 'Talk to our team', href: '/contact', variant: 'primary' },
      { label: 'PoC approach', href: '/products/poc-approach', variant: 'secondary' },
    ],
  },
} satisfies NotListedPageData;
