'use client';

import { useEffect, useState } from 'react';
import styles from './CookieBanner.module.scss';

const CONSENT_COOKIE = 'cqi_cookie_consent';
const CONSENT_MAX_AGE = 60 * 60 * 24 * 30; // one month

function hasConsent() {
  return document.cookie.split('; ').some((entry) => entry.startsWith(`${CONSENT_COOKIE}=`));
}

/**
 * Figma "COOKIES" (6418:31158): dark card pinned bottom right. Either action stores a
 * first-party consent cookie for a month, so the banner stays away until it expires.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  // Read the cookie after mount so the server and first client render both start hidden.
  useEffect(() => {
    setVisible(!hasConsent());
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    document.cookie = `${CONSENT_COOKIE}=1; max-age=${CONSENT_MAX_AGE}; path=/; SameSite=Lax`;
    setVisible(false);
  };

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie notice">
      <button type="button" className={styles.close} onClick={dismiss} aria-label="Close cookie notice">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div className={styles.copy}>
        <p className={styles.title}>We use cookies!</p>
        <p className={styles.text}>
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
          traffic.
          <br />
          By proceeding into the website, you consent to our use of cookies.
        </p>
      </div>
      <button type="button" className={styles.accept} onClick={dismiss}>
        Ok, understood
      </button>
    </div>
  );
}
