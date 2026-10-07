import type { CtaBannerData, PageHeroData } from '@/types/content';
import type { GlossarySectionData } from '@/components/sections/GlossarySection';

export const glossaryData = {
  metaTitle: 'Glossary — CQI Verified CX',
  metaDescription:
    'Verified CX introduces terms that overlap with, but do not mean the same as, the standard CX lexicon. These are the definitions used across this site and in CQI deployments.',
  hero: {
    title: 'The CQI vocabulary',
    titleHighlight: ['CQI vocabulary'],
    eyebrow: 'Glossary',
    mobilePaddingTop: 108,
    mobileIntroGap: 10,
    description:
      'Verified CX introduces terms that overlap with, but do not mean the same as, the standard CX lexicon. These are the definitions used across this site and in CQI deployments.',
    image: '/images/resources/glossary/hero.webp',
    mobileImage: '/images/resources/glossary/hero-mobile.webp',
    imageWidth: 1520,
    imageHeight: 848,
  } satisfies PageHeroData,

  terms: {
    categories: ['All', 'CQI Concepts', 'CX Metrics', 'Technology'],
    // TODO: each entry's `category` below is a placeholder guess — replace with the real mapping.
    entries: [
      {
        term: 'Average handling time (AHT)',
        definition:
          'Average time to handle an interaction. Falls when agents arrive with verified context rather than discovering it live.',
        category: 'CX Metrics',
      },
      {
        term: 'Broken promise',
        definition:
          'A commitment extracted from an interaction that no system can evidence as executed. The most common friction pattern and among the cheapest to fix.',
        category: 'CQI Concepts',
      },
      {
        term: 'Channel integrity',
        definition:
          'Whether context and commitments survive a move between channels. Decomposed into containment, continuity and repetition friction.',
        category: 'CQI Concepts',
      },
      {
        term: 'Commitment ledger',
        definition:
          'A record of every promise made to a customer, by an agent or by policy, tracked through to kept or broken, spanning every channel it touches.',
        category: 'Technology',
      },
      {
        term: 'Containment',
        definition:
          'Whether the channel the customer chose actually resolved the issue, rather than deflecting it onward.',
        category: 'CX Metrics',
      },
      {
        term: 'Control group',
        definition:
          'A matched set of customers deliberately left untreated so the effect of an intervention can be measured rather than asserted. Built into CQI by default.',
        category: 'Technology',
      },
      {
        term: 'Cost-to-serve',
        definition:
          'The fully loaded cost of handling a customer’s contacts. Reducing it by fixing issues at source is different from reducing it by deflecting contacts.',
        category: 'CX Metrics',
      },
      {
        term: 'Customer Pulse',
        definition:
          'The colour-coded lifecycle state derived from the index: healthy, friction, eroding, imminent, silent. Each state carries a root cause, a next action and an urgency.',
        category: 'CQI Concepts',
      },
      {
        term: 'Customer Quality Index',
        definition:
          'A continuous, per-customer lifecycle score built from every event, experience and interaction across the journey — as opposed to a survey score from a self-selecting minority.',
        category: 'CQI Concepts',
      },
      {
        term: 'First contact resolution (FCR)',
        definition:
          'The share of issues resolved on first contact. A conversation-derived FCR differs from a system-derived one, which is precisely the point.',
        category: 'CX Metrics',
      },
      {
        term: 'Friction',
        definition:
          'The gap between the experience a company intends to deliver and the experience a customer perceives. Friction is the unit CQI detects; churn is what it becomes.',
        category: 'CQI Concepts',
      },
      {
        term: 'Friction trigger',
        definition:
          'The specific moment or misalignment that starts the sequence: a promise not executed, an SLA missed, a system that reports success while the customer experiences failure.',
        category: 'CQI Concepts',
      },
      {
        term: 'Next best action',
        definition:
          'The recommended intervention attached to a customer state. In CQI it runs your own playbook first, with AI recommendations layered on once outcomes are observed.',
        category: 'Technology',
      },
      {
        term: 'Operational experience intelligence',
        definition:
          'The category CQI occupies: ensuring customer promises were actually fulfilled and executed, rather than measuring feeling or handling.',
        category: 'CQI Concepts',
      },
      {
        term: 'Recontact',
        definition:
          'A customer contacting again about an issue they already raised. Recontact rate at 4-hour, 24-hour and 7-day windows is the clearest proxy for unresolved friction.',
        category: 'CX Metrics',
      },
      {
        term: 'Root cause',
        definition:
          'The workforce, process or data condition that produced the friction. Naming it matters because only a root cause has an owner and a fix.',
        category: 'CQI Concepts',
      },
      {
        term: 'Silent churn',
        definition:
          'Customers who leave, or reduce spend, without ever complaining. Invisible to complaint-driven and survey-driven measurement; visible as a pattern of events.',
        category: 'CQI Concepts',
      },
      {
        term: 'Strictly met vs met but late',
        definition:
          'An SLA distinction. A commitment delivered outside the promised window still counts as met in most reporting, while the customer experienced a failure. That difference is a hidden friction driver.',
        category: 'CX Metrics',
      },
      {
        term: 'Technical churn',
        definition:
          'Churn driven by unresolved technical conditions (outages, faults, provisioning failures) that never surfaced as a diagnosable ticket.',
        category: 'Technology',
      },
      {
        term: 'Verified CX',
        definition:
          'A view of customer experience in which every signal from a conversation is checked against operational records before it is trusted. Verification is what separates a reported problem from a confirmed one.',
        category: 'CQI Concepts',
      },
      {
        term: 'Voice of the customer / voice of the business',
        definition:
          'The two sides of the CX coin: what customers tell you, and what your operational data records. CQI’s value is in the comparison, not either half.',
        category: 'CX Metrics',
      },
    ],
  } satisfies GlossarySectionData,

  conversationCta: {
    title: 'See these terms on live data',
    titleHighlight: ['live data'],
    description: 'A walkthrough uses your own interactions, so the vocabulary attaches to something real.',
    image: '/images/resources/glossary/cta-live-data.jpg',
    imageWidth: 579,
    imageHeight: 289,
    buttons: [
      { label: 'Request a demo', href: '/request-a-demo', variant: 'primary' },
      { label: 'Product overview', href: '/products', variant: 'secondary' },
    ],
  } satisfies CtaBannerData,
};
