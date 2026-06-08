"use client";

import { useEffect } from 'react';
import { trackFormSubmission } from '@/utils/gtm';

/**
 * Drop this component into any page with a LeadConnector iframe form.
 * It listens for the iframe's postMessage and fires a GTM form_submission event.
 *
 * @param {string} formName - Human-readable label, e.g. "Support Form"
 * @param {string} formId   - LeadConnector form ID
 */
export default function FormTracker({ formName, formId }) {
  useEffect(() => {
    const handleMessage = (e) => {
      if (!e.origin.includes('leadconnectorhq.com') && !e.origin.includes('msgsndr.com')) return;

      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;

        if (
          Array.isArray(data) &&
          data[0] === 'set-sticky-contacts' &&
          data[1] === '_ud' &&
          data[4]
        ) {
          trackFormSubmission(formName, formId);
        }
      } catch (_) {
        // Non-JSON or iFrameSizer string messages — ignore
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [formName, formId]);

  return null;
}
