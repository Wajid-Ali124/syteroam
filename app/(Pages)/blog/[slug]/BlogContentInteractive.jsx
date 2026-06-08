"use client";

import { useRouter } from 'next/navigation';

/**
 * Tiny client leaf that intercepts clicks on internal links
 * inside server-rendered dangerouslySetInnerHTML blog content.
 * This prevents full page reloads for internal links.
 */
export default function BlogContentInteractive({ html }) {
  const router = useRouter();

  const handleContentClick = (e) => {
    const link = e.target.closest('a');
    if (link) {
      const href = link.getAttribute('href');
      if (href && href.startsWith('/')) {
        e.preventDefault();
        router.push(href);
      }
    }
  };

  return (
    <div
      className="sr-blog-details-content"
      dangerouslySetInnerHTML={{ __html: html }}
      onClick={handleContentClick}
    />
  );
}
