import type { LegalPageSectionData } from '@/components/sections/LegalPageSection';

export const cookiesMeta = {
  metaTitle: 'Cookie Policy — CQI Verified CX',
  metaDescription:
    'Which cookies this website sets, what each category does, and how to change your choice at any time.',
};

export const cookiesData = {
  eyebrow: 'Legal',
  title: 'Cookie policy',
  intro: 'Which cookies this website sets, what each category does, and how to change your choice at any time.',
  effectiveDate: '1 October 2026',
  contactEmail: 'marketing@cqisense.com',
  sections: [
    {
      title: 'What cookies are',
      body: 'Cookies are small text files placed on your device by a website. Similar technologies such as local storage and pixels are covered by this policy and referred to here as cookies.',
    },
    {
      title: 'Strictly necessary',
      body: 'Required for the site to function and to remember choices you have made, such as dismissing the announcement bar for the remainder of your browser session. These are set on the basis of legitimate interests and cannot be switched off without the site ceasing to work as intended. No strictly necessary cookie on this site is used for tracking or advertising.',
    },
    {
      title: 'Analytics',
      body: 'Aggregate measurement of how the site is used — pages viewed, referring source, approximate region and device class — so we can improve structure and content. Analytics cookies are set only where you have given consent, and IP addresses are truncated before storage.',
    },
    {
      title: 'Marketing',
      body: 'Used to measure the effectiveness of campaigns and, where applicable, to attribute an enquiry to its source. These are set only where you have given consent, and never where you have declined.',
    },
    {
      title: 'Managing your choice',
      body: 'You can review or withdraw consent at any time through the cookie settings link in the footer of this site. You can also block or delete cookies through your browser settings; if you do, parts of the site may not work as intended. Withdrawing consent does not affect processing carried out before withdrawal.',
    },
    {
      title: 'Retention',
      body: 'Consent choices are stored for 12 months, after which you will be asked again. Analytics identifiers expire no later than 14 months after they are set.',
    },
  ],
  footnote:
    'Questions about this policy: marketing@cqisense.com. Registered office and company number to be added before publication.',
} satisfies LegalPageSectionData;
