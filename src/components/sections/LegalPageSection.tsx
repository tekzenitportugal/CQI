'use client';

import { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui/Container';
import styles from './LegalPageSection.module.scss';

export type LegalSection = {
  title: string;
  body: string;
};

export type LegalPageSectionData = {
  eyebrow: string;
  title: string;
  intro: string;
  effectiveDate: string;
  sections: LegalSection[];
  contactEmail: string;
  footnote: string;
};

type LegalPageSectionProps = {
  data: LegalPageSectionData;
};

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function withEmailLink(text: string, email: string) {
  const parts = text.split(email);
  if (parts.length === 1) return text;
  return parts.map((part, index) => (
    <Fragment key={index}>
      {part}
      {index < parts.length - 1 && (
        <a href={`mailto:${email}`} className={styles.emailLink}>
          {email}
        </a>
      )}
    </Fragment>
  ));
}

/** Shared layout for Privacy Policy / Terms of Service / Cookies (6079:31437, 31530, 31617). */
export function LegalPageSection({ data }: LegalPageSectionProps) {
  const slugs = data.sections.map((section) => slugify(section.title));
  const [activeSlug, setActiveSlug] = useState(slugs[0]);
  const clickLockRef = useRef(false);
  const tocCardRef = useRef<HTMLDivElement>(null);
  const tocLinkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState<{ top: number; height: number } | null>(null);

  useEffect(() => {
    const sectionEls = slugs
      .map((slug) => document.getElementById(slug))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (clickLockRef.current) return;

        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const topMost = visible.reduce((closest, entry) =>
          entry.boundingClientRect.top < closest.boundingClientRect.top ? entry : closest
        );
        setActiveSlug(topMost.target.id);
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [slugs]);

  useLayoutEffect(() => {
    function updateIndicator() {
      const container = tocCardRef.current;
      const activeLink = tocLinkRefs.current[activeSlug];
      if (!container || !activeLink) return;

      const containerRect = container.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setIndicatorStyle({
        top: linkRect.top - containerRect.top,
        height: linkRect.height,
      });
    }

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSlug]);

  function handleTocClick(event: React.MouseEvent<HTMLAnchorElement>, slug: string) {
    event.preventDefault();
    document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth' });

    setActiveSlug(slug);
    clickLockRef.current = true;
    window.setTimeout(() => {
      clickLockRef.current = false;
    }, 1000);
  }

  return (
    <section className={styles.section}>
      <Container className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.intro}>
            <div className={styles.heading}>
              <p className={styles.eyebrow}>{data.eyebrow}</p>
              <h1 className={styles.title}>{data.title}</h1>
            </div>
            <p className={styles.introText}>{data.intro}</p>
            <p className={styles.effectiveDate}>Effective Date | {data.effectiveDate}</p>
          </div>

          <div className={styles.sections}>
            {data.sections.map((section) => (
              <div key={section.title} id={slugify(section.title)} className={styles.sectionBlock}>
                <p className={styles.sectionTitle}>{section.title}</p>
                <p className={styles.sectionBody}>{withEmailLink(section.body, data.contactEmail)}</p>
              </div>
            ))}
          </div>

          <p className={styles.footnote}>{withEmailLink(data.footnote, data.contactEmail)}</p>
        </div>

        <nav className={styles.toc} aria-label="Sections on this page">
          <div className={styles.tocCard} ref={tocCardRef}>
            {indicatorStyle && (
              <span
                className={styles.tocIndicator}
                style={{ top: indicatorStyle.top, height: indicatorStyle.height }}
                aria-hidden="true"
              />
            )}
            {data.sections.map((section) => {
              const slug = slugify(section.title);
              return (
                <a
                  key={section.title}
                  ref={(el) => {
                    tocLinkRefs.current[slug] = el;
                  }}
                  href={`#${slug}`}
                  onClick={(event) => handleTocClick(event, slug)}
                  className={`${styles.tocLink} ${slug === activeSlug ? styles.tocLinkActive : ''}`.trim()}
                >
                  {section.title}
                </a>
              );
            })}
          </div>
        </nav>
      </Container>
    </section>
  );
}
