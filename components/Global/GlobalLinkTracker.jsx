"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackLinkClick, trackPageView } from '@/utils/gtm';

export default function GlobalLinkTracker() {
  const pathname = usePathname();

  // ── Track page views on every route change ──
  useEffect(() => {
    trackPageView(pathname, document.title);
  }, [pathname]);

  // ── Track outbound / CTA link clicks ──
  useEffect(() => {
    const handleClick = (e) => {
      // Find the nearest anchor element with an href attribute
      const anchor = e.target.closest('a[href]');
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      const text = (anchor.innerText || anchor.getAttribute('aria-label') || href).trim();

      // Check link traits: external, target _blank, or tagged data-track="cta"
      const isExternal = href.startsWith('http') && !href.includes(window.location.hostname);
      const isNewTab   = anchor.target === '_blank';
      const isCta      = anchor.dataset.track === 'cta';

      if (isExternal || isNewTab) {
        trackLinkClick(text, href, 'outbound');
      } else if (isCta) {
        trackLinkClick(text, href, 'cta');
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
