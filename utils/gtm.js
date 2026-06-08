/**
 * GTM DataLayer utility
 * ─────────────────────
 * All GTM event pushes go through this file so the event schema
 * stays consistent and easy to maintain.
 *
 * GTM container: GTM-P8BSZTCQ
 */

/** Safely push any object onto window.dataLayer */
export function pushToDataLayer(payload) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/**
 * Page view event.
 * Fired on every route change via the ScrollToTop component.
 *
 * GTM trigger: Custom Event  →  event name equals "page_view"
 *
 * @param {string} path   - e.g. "/contact"
 * @param {string} title  - document.title at the time of navigation
 */
export function trackPageView(path, title) {
  pushToDataLayer({
    event: 'page_view',
    page_path: path,
    page_title: title || document.title,
    page_url: window.location.href,
  });
}

/**
 * Form submission event.
 * Fired when a LeadConnector iframe posts a "form_submitted" message,
 * or when a native <form> fires its submit handler.
 *
 * GTM trigger: Custom Event  →  event name equals "form_submission"
 *
 * @param {string} formName  - human-readable label, e.g. "Contact Form" | "Book a Demo"
 * @param {string} formId    - LeadConnector form ID or a short slug
 */
export function trackFormSubmission(formName, formId) {
  pushToDataLayer({
    event: 'form_submission',
    form_name: formName,
    form_id: formId,
    page_path: window.location.pathname,
  });
}

/**
 * Outbound / CTA link click event.
 * Fired by the global click listener in App.jsx for any <a> that
 * either (a) opens in a new tab or (b) has data-track="true".
 *
 * GTM trigger: Custom Event  →  event name equals "link_click"
 *
 * @param {string} linkText  - visible anchor text
 * @param {string} linkUrl   - href value
 * @param {string} linkType  - "outbound" | "cta" | "internal"
 */
export function trackLinkClick(linkText, linkUrl, linkType = 'outbound') {
  pushToDataLayer({
    event: 'link_click',
    link_text: linkText,
    link_url: linkUrl,
    link_type: linkType,
    page_path: window.location.pathname,
  });
}
