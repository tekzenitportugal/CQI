'use client';

import { useEffect, useState } from 'react';
import styles from './ArticleSidebar.module.scss';

type ArticleSidebarProps = {
  items: { id: string; label: string }[];
  /** Article title, used in the share links. */
  title: string;
};

const ICON_DIR = '/images/resources/articles';

/** Figma sidebar: "contents" box that follows the section being read, and the share icons. */
export function ArticleSidebar({ items, title }: ArticleSidebarProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');
  const [pageUrl, setPageUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  // The active item is the last section whose top has passed the line just under the floating nav.
  useEffect(() => {
    const update = () => {
      const line = window.innerHeight * 0.3;
      let current = items[0]?.id ?? '';
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActiveId(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [items]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: nothing to do, the address bar still has the link.
    }
  };

  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(title);
  const shareLinks = [
    {
      label: 'Share on LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: `${ICON_DIR}/share-linkedin.png`,
    },
    {
      // Instagram has no web share URL, so this opens the Instagram site.
      label: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: `${ICON_DIR}/share-instagram.png`,
    },
    {
      label: 'Share on X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: `${ICON_DIR}/share-x.png`,
    },
  ];
  const mailLink = {
    label: 'Share by email',
    href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
    icon: `${ICON_DIR}/share-mail.png`,
  };

  // Each icon is exported from Figma with its grey tile included, so the image is the whole 28px button.
  const renderLink = (link: { label: string; href: string; icon: string }) => (
    <a
      key={link.label}
      href={link.href}
      className={styles.icon}
      aria-label={link.label}
      target={link.href.startsWith('mailto:') ? undefined : '_blank'}
      rel="noopener noreferrer"
    >
      <img src={link.icon} alt="" width={28} height={28} aria-hidden="true" />
    </a>
  );

  return (
    <aside className={styles.sidebar}>
      {items.length > 0 && (
        <nav className={styles.contents} aria-label="In this article">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${styles.item} ${item.id === activeId ? styles.itemActive : ''}`.trim()}
              aria-current={item.id === activeId ? 'location' : undefined}
              onClick={(event) => {
                event.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      <div className={styles.share}>
        <p className={styles.shareLabel}>Share this article</p>
        <div className={styles.icons}>
          {shareLinks.map(renderLink)}
          <button type="button" className={styles.icon} aria-label={copied ? 'Link copied' : 'Copy link'} onClick={copyLink}>
            <img src={`${ICON_DIR}/share-link.png`} alt="" width={28} height={28} aria-hidden="true" />
          </button>
          {renderLink(mailLink)}
        </div>
      </div>
    </aside>
  );
}
