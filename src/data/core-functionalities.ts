import type { HeroCopyData } from '@/components/ui/HeroCopy';
import type {
  CtaBannerData,
  ModuleCard,
  RuledRow,
} from '@/types/content';

export const coreFunctionalitiesData = {
  hero: {
    title: 'Every module,\nand the job it does',
    titleHighlight: ['the job it does'],
    eyebrow: 'CORE FUNCTIONALITIES',
    description:
      'CQI ships as a working operating model rather than a toolkit: a health view, an evidence layer, an explainable risk engine, and the workflows that close the loop.',
  } satisfies HeroCopyData,

  modules: {
    title: 'Twelve modules, one operating model',
    titleHighlight: ['operating model'],
    description: 'Each one is a job the platform does, not a separately licensed product.',
    items: [
      {
        tag: 'Landing dashboard',
        title: 'Customer Pulse',
        description:
          'An always-on, single-pane read on CX health that replaces periodic NPS reporting. Fuses operational friction (broken promises, recontact cost) with sentiment, and pairs each friction pattern with an AI-narrated root cause and a recommended action',
      },
      {
        tag: 'Journey → stage → theme → KPI',
        title: 'Journey Health',
        description:
          'The drill-down layer that answers why a journey scores where it does. Reframes health as promise continuity across channels: containment, continuity and repetition.',
      },
      {
        tag: 'Evidence layer',
        title: 'Interactions',
        description:
          'Auto-classifies 100% of interactions into a topic and subtopic taxonomy and tags behavioural signals — churn intent, broken promise, advocacy, exit risk, refund demand. Includes reason evolution and volume × effort × satisfaction prioritisation.',
      },
      {
        tag: 'Cross-channel continuity',
        title: 'Channel Integrity',
        description:
          'Decomposes an integrity score into the actual conflicts behind it, each scored on containment, continuity and repetition friction. The cross-channel commitment ledger sits here.',
      },
      {
        tag: 'Explainable risk',
        title: 'Customer Brain',
        description:
          'Decomposes a red status into three transparent, threshold-benchmarked factors — frequency, variety and combination — shows the exact date the pattern tipped, and distinguishes voiced from silent friction.',
      },
      {
        tag: 'Delivery accountability',
        title: 'Workforce Insights',
        titleWeight: 400,
        description:
          'Ties friction to who delivers the service: throughput, quality and promise-keeping — promises made versus pending, strictly met, and met but late.',
      },
      {
        tag: 'Coaching at full resolution',
        title: 'Agent Performance',
        description:
          'Benchmarks each agent metric against the organisation and uses AI promise analysis to point at the root cause: topic, channel, tooling or knowledge gap.',
      },
      {
        tag: 'Prioritised worklist',
        title: 'Customer Directory',
        description:
          'Breached-promise, fragmented-journey and high-friction customers, each with an AI-generated next action and the revenue at stake.',
      },
      {
        tag: 'Closing the loop',
        title: 'Recovery',
        description:
          'Every case carries the customer’s own words, the exact promise and who made it, the SLA clock, system evidence, an AI-assigned root cause and the churn correlation — then routes to an owner and closes with verification.',
      },
      {
        tag: 'Commitment ledger',
        title: 'Prevent CX Frictions',
        description:
          'Rule-driven assignments that separate agent promise from company SLA, with time-to-SLA-remaining as the operative field. Catch the missed technician window in the four hours left.',
      },
      {
        tag: 'No-code orchestration',
        title: 'Workflows',
        description:
          'A task and workflow builder with a reactive/proactive toggle that turns a detected signal into an announcement, message, queue, transfer, escalation or export. CX operators own the automation, not developers.',
      },
      {
        tag: 'Live rule experimentation',
        title: 'Contextual AI Alerts',
        description:
          'Autonomous alerting on real data, with next-best-action cards carrying a churn estimate and live cost-to-serve visibility.',
      },
    ] satisfies ModuleCard[],
  },

  connectiveTissue: {
    eyebrow: 'Also included',
    title: 'The connective tissue',
    rows: [
      {
        label: 'Commitment ledger',
        description:
          'Cross-cutting: every promise tracked to kept or broken, every friction traced to its originating promise, spanning channels.',
      },
      {
        label: 'Friction\nsub-cause library',
        description:
          'A reusable library of friction sub-causes for targeting innovation and measuring the delta after a fix ships.',
      },
      {
        label: 'Recommended actions',
        description:
          'Next-best-action cards carrying a churn estimate and live cost-to-serve visibility, running your playbook first and AI recommendations second.',
      },
      {
        label: 'Built-in control group',
        description:
          'Every treatment group ships with a control group, so any KPI can be benchmarked automatically rather than argued about.',
      },
      {
        label: 'Interactive API',
        description:
          'A scalable REST API alongside the UI: pull requests, scheduled downloads, trigger updates, alarms, call reroutes and A/B tests.',
      },
    ] satisfies RuledRow[],
  },

  cta: {
    title: 'See the modules\nworking together',
    titleHighlight: ['working together'],
    description:
      'A live walkthrough of the health view, root cause screening and the recovery loop.',
    image: '/images/product/core-functionalities/cta-laptop.jpg',
    imageWidth: 579,
    imageHeight: 289,
    buttons: [
      { label: 'Request a demo', href: '/request-a-demo', variant: 'primary' as const },
      { label: 'How we prove it', href: '/products/how-we-prove-it', variant: 'secondary' as const },
    ],
  } satisfies CtaBannerData,
};
