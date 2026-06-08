"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { trackFormSubmission } from '@/utils/gtm';

const EXPECT_ITEMS = [
  {
    icon: 'icofont-chat',
    text: 'A discussion about your business goals to determine the best path forward for your team.',
  },
  {
    icon: 'icofont-check-circled',
    text: 'A brief conversation to evaluate what SyteRoam can do to help your operations thrive.',
  },
  {
    icon: 'icofont-star',
    text: 'A personalised demo with real workflows tailored to manufacturing, rental, or field services.',
  },
];

export default function Demo() {

  // Track demo form submission via LeadConnector iframe postMessage
  useEffect(() => {
    const FORM_ID   = 'YWvXJNu3KYVNkLzYnMQW';
    const FORM_NAME = 'Book a Demo';

    const handleMessage = (e) => {
      if (!e.origin.includes('leadconnectorhq.com') && !e.origin.includes('msgsndr.com')) return;

      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;

        // LeadConnector sends form submit as an array:
        // ['set-sticky-contacts', '_ud', formDataJson, locationId, submissionId]
        // The submissionId (index 4) is a GUID only present after a real submit
        if (
          Array.isArray(data) &&
          data[0] === 'set-sticky-contacts' &&
          data[1] === '_ud' &&
          data[4]  // submissionId only present after a real submit
        ) {
          trackFormSubmission(FORM_NAME, FORM_ID);
        }
      } catch (_) {
        // Non-JSON or iFrameSizer string messages — ignore
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="sr-demo-page">
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />

      {/* ── Gradient Hero Banner ─────────────────────────────────── */}
      <div className="sr-demo-hero">
        <div className="sr-demo-hero__circle dc1" />
        <div className="sr-demo-hero__circle dc2" />
        <div className="sr-demo-hero__circle dc3" />
        <div className="sr-demo-container">
          <h1 className="sr-demo-hero__title">Book a Demo</h1>
          <p className="sr-demo-hero__sub">
            See SyteRoam in action — a live walkthrough built around your workflows.
          </p>
        </div>
      </div>

      {/* ── Split Body ───────────────────────────────────────────── */}
      <div className="sr-demo-body">
        <div className="sr-demo-container">
          <div className="sr-demo-split">

            {/* ── LEFT — Info Panel ──────────────────────────────── */}
            <div className="sr-demo-left">

              <h2 className="sr-demo-left__heading">
                Ready to take a closer look?
              </h2>
              <p className="sr-demo-left__sub">What can you expect?</p>

              {/* App Screenshot */}
              <div className="sr-demo-left__mockup-wrap">
                <Image
                  src="/assets/img/hero-mock.png"
                  alt="SyteRoam ERP mobile app demo preview"
                  width={478}
                  height={588}
                  className="sr-demo-left__mockup"
                  style={{ width: '100%', height: 'auto', maxWidth: '478px' }}
                />
              </div>

              {/* Expect Bullets */}
              <ul className="sr-demo-expect">
                {EXPECT_ITEMS.map((item, i) => (
                  <li key={i} className="sr-demo-expect__item">
                    <span className="sr-demo-expect__dot" />
                    <p className="sr-demo-expect__text">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── RIGHT — Dark Form Panel ─────────────────────────── */}
            <div className="sr-demo-right">
              <div className="">


                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/YWvXJNu3KYVNkLzYnMQW"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '5px' }}
                  id="inline-YWvXJNu3KYVNkLzYnMQW"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="3. SyteRoam Book a Demo"
                  data-height="1157"
                  data-layout-iframe-id="inline-YWvXJNu3KYVNkLzYnMQW"
                  data-form-id="YWvXJNu3KYVNkLzYnMQW"
                  title="3. SyteRoam Book a Demo"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
