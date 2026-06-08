"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import homedata from '@/data/homedata.json';
import { trackFormSubmission } from '@/utils/gtm';

const { contactinfo, formtitle, formdescription } = homedata.contact;

export default function ContactPage() {

  // Track form submission via LeadConnector iframe postMessage
  useEffect(() => {
    const FORM_ID   = 'VAIiQklRvUu3HxZTDQbA';
    const FORM_NAME = 'Contact Form';

    const handleMessage = (e) => {
      if (!e.origin.includes('leadconnectorhq.com') && !e.origin.includes('msgsndr.com')) return;

      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;

        // LeadConnector sends form submit as an array:
        // ['set-sticky-contacts', '_ud', formDataJson, locationId, submissionId]
        // The submissionId (index 4) is a GUID that only appears on actual submit
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
    <div className="sr-cp-page">
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />

      {/* ── Hero Banner ─────────────────────────────────────────────── */}
      <div className="sr-cp-hero">
        <div className="sr-cp-hero__circle cc1" />
        <div className="sr-cp-hero__circle cc2" />
        <div className="sr-cp-hero__circle cc3" />
        <div className="sr-cp-container">
          <h1 className="sr-cp-hero__title">Get in Touch</h1>
          <p className="sr-cp-hero__sub">
            Have a question, need a quote, or want to discuss an enterprise rollout? We're here.
          </p>
        </div>
      </div>

      {/* ── Info Cards Row ───────────────────────────────────────────── */}
      <div className="sr-cp-cards-band">
        <div className="sr-cp-container">
          <div className="sr-cp-cards">

            {/* Address */}
            <div className="sr-cp-card">
              <div className="sr-cp-card__icon-wrap">
                <i className={`${contactinfo.address.icon} sr-cp-card__icon`} />
              </div>
              <h3 className="sr-cp-card__title">{contactinfo.address.title}</h3>
              <p
                className="sr-cp-card__text"
                dangerouslySetInnerHTML={{ __html: contactinfo.address.info }}
              />
            </div>

            {/* Phone */}
            <div className="sr-cp-card">
              <div className="sr-cp-card__icon-wrap">
                <i className={`${contactinfo.phone.icon} sr-cp-card__icon`} />
              </div>
              <h3 className="sr-cp-card__title">{contactinfo.phone.title}</h3>
              <p
                className="sr-cp-card__text"
                dangerouslySetInnerHTML={{ __html: contactinfo.phone.info }}
              />
            </div>

            {/* Email */}
            <div className="sr-cp-card">
              <div className="sr-cp-card__icon-wrap">
                <i className={`${contactinfo.email.icon} sr-cp-card__icon`} />
              </div>
              <h3 className="sr-cp-card__title">{contactinfo.email.title}</h3>
              <p
                className="sr-cp-card__text"
                dangerouslySetInnerHTML={{ __html: contactinfo.email.info }}
              />
            </div>

          </div>
        </div>
      </div>

      {/* ── Main Form Section ────────────────────────────────────────── */}
      <div className="sr-cp-body">
        <div className="sr-cp-container">
          <div className="sr-cp-split">

            {/* LEFT — Heading + context */}
            <div className="sr-cp-left">
              <span className="sr-cp-left__eyebrow">
                <span className="sr-cp-left__accent-bar" />
                SEND US A MESSAGE
              </span>
              <h2 className="sr-cp-left__heading">{formtitle}</h2>
              <p className="sr-cp-left__desc">{formdescription}</p>

              {/* Quick links */}
              <div className="sr-cp-left__links">
                <Link href="/demo" className="sr-btn sr-btn--filled sr-cp-left__btn">
                  Book a Demo
                </Link>
                <Link href="/faq" className="sr-cp-left__faq-link">
                  Browse the FAQ →
                </Link>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="sr-cp-right">
                <iframe
                    src="https://api.leadconnectorhq.com/widget/form/VAIiQklRvUu3HxZTDQbA"
                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                    id="inline-VAIiQklRvUu3HxZTDQbA"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="1. Contact Form Talk to the SyteRoam team"
                    data-height="548"
                    data-layout-iframe-id="inline-VAIiQklRvUu3HxZTDQbA"
                    data-form-id="VAIiQklRvUu3HxZTDQbA"
                    title="1. Contact Form Talk to the SyteRoam team"
                ></iframe>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
