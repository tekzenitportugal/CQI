import type { CtaBannerData, PageHeroData } from '@/types/content';
import type { LiveSessionCoverageSectionData } from '@/components/sections/LiveSessionCoverageSection';
import type { SeeItLiveStagesSectionData } from '@/components/sections/SeeItLiveStagesSection';

export const seeItLiveData = {
  metaTitle: 'See It Live — CQI Verified CX',
  metaDescription:
    'A self-guided walkthrough of what CQI does with a single verified misalignment: a tariff reduction promised on 412 calls and executed on none of them. Click through the stages in order.',
  hero: {
    title: 'Follow one broken promise through all five stages',
    titleHighlight: ['one broken promise', 'five stages'],
    copyMaxWidth: 708,
    descriptionMaxWidth: 651,
    eyebrow: 'See it live',
    description:
      'A self-guided walkthrough of what CQI does with a single verified misalignment: a tariff reduction promised on 412 calls and executed on none of them. Click through the stages in order.',
    image: '/images/resources/see-it-live/hero-desktop.jpg',
    imageUnoptimized: true,
    // Figma 6362:28750: photo 147.21% tall (as Figma), width kept at its native 4:3 ratio (Figma stretches it ~17%
    // wider), the figure (35.75% across the photo) is pinned at 62.2% of the box, where Figma has it, at any viewport width.
    desktopImageFrame: { left: 62.2, top: -0.11, width: 109.5, height: 147.21, aspect: 4 / 3, focusX: 35.75 },
    mobileImage: '/images/resources/see-it-live/hero-mobile.png',
    mobileIntroGap: 10,
    mobileImageShift: 70,
    imageWidth: 1520,
    imageHeight: 848,
  } satisfies PageHeroData,

  stages: {
    stages: [
      {
        stageLabel: 'Stage 1',
        title: 'Detect',
        subtitle: 'Read every interaction, correlate every event',
        description:
          '412 calls this week contained a tariff-reduction promise. CQI classified all of them, extracted the commitment and the agent who made it, and matched each one against billing. None of the adjustments exist. Nobody has complained yet.',
        image: '/images/resources/see-it-live/stage1-detect.png',
        imageWidth: 932,
        imageHeight: 866,
      },
      {
        stageLabel: 'Stage 2',
        title: 'Diagnose',
        subtitle: 'Trace it to a cause that has an owner',
        description:
          'The pattern is not agent error: the promise was captured correctly on the call and lost at the billing hand-off. CQI classifies it as a data gap, prices the exposure, and shows the exact date the pattern started.',
        image: '/images/resources/see-it-live/stage2-diagnose.png',
        imageWidth: 932,
        imageHeight: 1018,
      },
      {
        stageLabel: 'Stage 3',
        title: 'Decide',
        subtitle: 'Rank by what it costs, not by who shouted',
        description:
          'The affected customers are ranked by revenue at stake and recoverability. Three of them are already eroding, and one has crossed into imminent risk with €1,140 attached.',
        image: '/images/resources/see-it-live/stage3-decide.png',
        imageWidth: 932,
        imageHeight: 1012,
      },
      {
        stageLabel: 'Stage 4',
        title: 'Act',
        subtitle: 'Trigger the fix inside the systems you already run',
        description:
          'A rule routes the case to billing operations with the SLA clock attached, loads the context onto the agent desktop, and holds ten per cent of matched customers as a control group.',
        image: '/images/resources/see-it-live/stage4-act.png',
        imageWidth: 932,
        imageHeight: 898,
      },
      {
        stageLabel: 'Stage 5',
        title: 'Verify',
        subtitle: 'Close on evidence, not on a status change',
        description:
          'The case closes when the adjustment is evidenced in billing and no recontact occurs within seven days. The commitment ledger records it as strictly met, not as met but late.',
        image: '/images/resources/see-it-live/stage5-verify.png',
        imageWidth: 932,
        imageHeight: 1294,
      },
    ],
    disclaimer: 'Illustrative scenario and example figures drawn from CQI programme material, not a client result.',
    cta: { label: 'Request a live demo', href: '/request-a-demo' },
  } satisfies SeeItLiveStagesSectionData,

  liveSessionCoverage: {
    eyebrow: 'What a live session covers',
    title: 'Bring whoever needs convincing',
    titleHighlight: ['needs convincing'],
    description:
      'These sessions work best with the CX or customer-success owner, someone from operations, and someone from IT or data in the room, the three groups whose questions differ most.',
    cards: [
      {
        title: 'The executive view',
        description:
          'The health view, risk-band migration and how CX ties to churn, cost-to-serve and revenue at risk.',
      },
      {
        title: 'The operating model',
        description:
          'Root cause screening, the prioritised worklist, the recovery loop and how a case closes on evidence.',
      },
      {
        title: 'The architecture',
        description:
          'Connectors, data model, residency, PII handling and what a two-week non-intrusive proof of value needs from you.',
      },
    ],
  } satisfies LiveSessionCoverageSectionData,

  conversationCta: {
    title: 'See it on your own interactions',
    titleHighlight: ['your own interactions'],
    description:
      'A walkthrough on sample data answers what the platform does. A proof of value answers what it finds in your operation.',
    image: '/images/resources/compare-cqi/cta-photo.jpg',
    imageWidth: 579,
    imageHeight: 289,
    buttons: [
      { label: 'Request a demo', href: '/request-a-demo', variant: 'primary' },
      { label: 'PoC approach', href: '/products/poc-approach', variant: 'secondary' },
    ],
  } satisfies CtaBannerData,
};
