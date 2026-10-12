'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FocusEvent,
  type KeyboardEvent,
} from 'react';
import { createPortal } from 'react-dom';
import { megaMenus, pricingNavLink, type MegaMenuConfig, type MegaMenuId } from '@/data/mega-menu';
import { headerCtas } from '@/data/navigation';
import { NavChevron } from '@/components/layout/NavChevron';
import { Button } from '@/components/ui/Button';
import styles from './MainNavMenu.module.scss';

type MainNavMenuProps = {
  mobileOpen: boolean;
  onNavigate?: () => void;
};

// How long the dropdown stays open after the cursor leaves, so it survives the trip from
// the trigger down to the panel even when the cursor drifts outside the hover zone.
const CLOSE_DELAY_MS = 600;

// Desktop top-level order, used to continue keyboard focus after a dropdown panel.
const TOP_LEVEL_ORDER = ['product', 'solutions', 'resources', 'pricing', 'company'] as const;

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

function getMenuById(id: MegaMenuId): MegaMenuConfig {
  const menu = megaMenus.find((entry) => entry.id === id);
  if (!menu) throw new Error(`Unknown menu: ${id}`);
  return menu;
}

export function MainNavMenu({ mobileOpen, onNavigate }: MainNavMenuProps) {
  const [openMenu, setOpenMenu] = useState<MegaMenuId | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<MegaMenuId | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const topLevelRefs = useRef<Record<string, HTMLElement | null>>({});
  const panelRef = useRef<HTMLDivElement | null>(null);
  const pointerInside = useRef(false);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  useEffect(() => cancelClose, [cancelClose]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const desktopPanelMenu = openMenu && !mobileOpen ? openMenu : null;

  const closeMenus = useCallback(() => {
    cancelClose();
    setOpenMenu(null);
    setMobileExpanded(null);
  }, [cancelClose]);

  const handleMouseEnter = (id: MegaMenuId) => {
    cancelClose();
    setOpenMenu(id);
  };

  const handleMouseLeave = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), CLOSE_DELAY_MS);
  };

  const toggleMobileSection = (id: MegaMenuId) => {
    setMobileExpanded((current) => (current === id ? null : id));
    setOpenMenu(id);
  };

  const desktopPanel = desktopPanelMenu ? getMenuById(desktopPanelMenu) : null;

  // Desktop keyboard: Tab from an open trigger enters its panel; Escape closes it.
  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>, id: MegaMenuId) => {
    if (mobileOpen) return;
    if (event.key === 'Escape') {
      closeMenus();
    } else if (event.key === 'Tab' && !event.shiftKey && openMenu === id) {
      const firstLink = panelRef.current?.querySelector<HTMLAnchorElement>('a[href]');
      if (firstLink) {
        event.preventDefault();
        firstLink.focus();
      }
    }
  };

  // Desktop keyboard inside a panel: Shift+Tab on the first link returns to the trigger,
  // Tab past the last link moves on to the next top-level item, Escape closes.
  const handlePanelKeyDown = (event: KeyboardEvent<HTMLDivElement>, id: MegaMenuId) => {
    const links = [...(panelRef.current?.querySelectorAll<HTMLAnchorElement>('a[href]') ?? [])];
    const trigger = topLevelRefs.current[id];
    if (event.key === 'Escape') {
      // Focus first: the trigger's onFocus reopens the panel, so close afterwards.
      trigger?.focus();
      closeMenus();
    } else if (event.key === 'Tab' && event.shiftKey && event.target === links[0]) {
      event.preventDefault();
      trigger?.focus();
    } else if (event.key === 'Tab' && !event.shiftKey && event.target === links[links.length - 1]) {
      const next = topLevelRefs.current[TOP_LEVEL_ORDER[TOP_LEVEL_ORDER.indexOf(id) + 1]];
      if (next) {
        event.preventDefault();
        next.focus();
      }
    }
  };

  // Close the desktop panel when keyboard focus leaves the menu (not while the pointer is over it).
  const handleShellBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (mobileOpen || pointerInside.current) return;
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      cancelClose();
      setOpenMenu(null);
    }
  };

  const renderMegaTrigger = (menu: MegaMenuConfig) => {
    const isOpen =
      mobileOpen ? mobileExpanded === menu.id : openMenu === menu.id;
    const isCurrent = menu.columns.some((column) =>
      column.links.some((link) => isActivePath(pathname, link.href)),
    );
    return (
      <li key={menu.id} className={styles.topItem}>
        <button
          ref={(el) => {
            topLevelRefs.current[menu.id] = el;
          }}
          type="button"
          className={`${styles.trigger} ${isOpen || isCurrent ? styles.triggerActive : ''}`.trim()}
          aria-expanded={isOpen}
          aria-haspopup="true"
          onMouseEnter={() => handleMouseEnter(menu.id)}
          onFocus={() => handleMouseEnter(menu.id)}
          onClick={() => toggleMobileSection(menu.id)}
          onKeyDown={(event) => handleTriggerKeyDown(event, menu.id)}
        >
          {menu.label}
          <NavChevron active={isOpen} className={isOpen ? undefined : styles.chevronDown} />
        </button>

        {mobileOpen && isOpen && (
          <MegaMenuPanel
            menu={menu}
            className={`${styles.panelMobile} ${menu.id === 'product' ? styles.panelStacked : ''}`.trim()}
            onNavigate={() => {
              closeMenus();
              onNavigate?.();
            }}
          />
        )}
      </li>
    );
  };

  const shell = (
    <div
      className={`${styles.shell} ${mobileOpen ? styles.shellMobileOpen : ''}`.trim()}
      onMouseEnter={() => {
        pointerInside.current = true;
        cancelClose();
      }}
      onMouseLeave={() => {
        pointerInside.current = false;
        handleMouseLeave();
      }}
      onBlur={handleShellBlur}
      id="main-navigation"
    >
      <div className={`${styles.pill} ${mobileOpen ? styles.pillMobile : ''}`.trim()}>
        <ul className={styles.topList}>
          {renderMegaTrigger(getMenuById('product'))}
          {renderMegaTrigger(getMenuById('solutions'))}
          {renderMegaTrigger(getMenuById('resources'))}
          <li className={styles.topItem}>
            <Link
              ref={(el) => {
                topLevelRefs.current.pricing = el;
              }}
              href={pricingNavLink.href}
              className={`${styles.topLink} ${styles.topLinkPlain} ${isActivePath(pathname, pricingNavLink.href) ? styles.topLinkActive : ''}`.trim()}
              onClick={() => {
                closeMenus();
                onNavigate?.();
              }}
              onFocus={() => {
                if (!mobileOpen) setOpenMenu(null);
              }}
            >
              {pricingNavLink.label}
            </Link>
          </li>
          {renderMegaTrigger(getMenuById('company'))}
        </ul>

        {mobileOpen && (
          <div className={styles.mobileCtas}>
            <Button
              label="See it live"
              href="/resources/see-it-live"
              variant="secondary"
              size="sm"
              onClick={() => {
                closeMenus();
                onNavigate?.();
              }}
            />
            {headerCtas.map((cta) => (
              <Button
                key={cta.label}
                label={cta.label}
                href={cta.href}
                variant="primary"
                size="sm"
                onClick={() => {
                  closeMenus();
                  onNavigate?.();
                }}
              />
            ))}
          </div>
        )}
      </div>

      {desktopPanel && (
        <div
          ref={panelRef}
          className={styles.panelBridge}
          onMouseEnter={() => handleMouseEnter(desktopPanel.id)}
          onKeyDown={(event) => handlePanelKeyDown(event, desktopPanel.id)}
        >
          <MegaMenuPanel
            menu={desktopPanel}
            className={`${styles.panel} ${styles.panelOpen}`.trim()}
            onNavigate={() => {
              closeMenus();
              onNavigate?.();
            }}
          />
        </div>
      )}
    </div>
  );

  // The fullscreen mobile overlay is portalled straight to <body> so it isn't
  // trapped inside the header's stacking context — the header has
  // `will-change: transform` for its slide-hide animation, which makes it a
  // containing block for fixed-position descendants and would otherwise paint
  // this overlay *behind* the header's own logo/close icon instead of below them.
  if (mobileOpen && mounted) {
    return createPortal(shell, document.body);
  }

  return shell;
}

type MegaMenuPanelProps = {
  menu: MegaMenuConfig;
  className?: string;
  onNavigate?: () => void;
};

function MegaMenuPanel({ menu, className, onNavigate }: MegaMenuPanelProps) {
  const pathname = usePathname();

  return (
    <div className={className} role="region" aria-label={`${menu.label} menu`}>
      <div className={styles.panelColumns}>
        {menu.columns.map((column) => (
          <div
            key={column.title}
            className={styles.column}
            style={column.width ? ({ '--column-width': `${column.width}px` } as CSSProperties) : undefined}
          >
            <p className={styles.columnTitle}>{column.title}</p>
            <ul className={styles.linkList}>
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`${styles.subLink} ${isActivePath(pathname, link.href) ? styles.subLinkActive : ''}`.trim()}
                    onClick={onNavigate}
                    aria-current={isActivePath(pathname, link.href) ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
