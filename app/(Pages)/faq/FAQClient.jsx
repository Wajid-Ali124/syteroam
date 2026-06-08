"use client";

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: "What is SyteLine ERP?",
    a: "SyteLine ERP is an enterprise resource planning system used by manufacturers and large businesses to manage operations, finance, and supply chains.",
  },
  {
    q: "Does SyteLine ERP have a mobile app?",
    a: "Yes, the SyteLine mobile app exists, but it is primarily an extension of the desktop system and may not be fully optimized for fast-moving field operations.",
  },
  {
    q: "What are the limitations of the SyteLine ERP mobile app?",
    a: "Many users find the SyteLine ERP mobile app complex for daily field use. It often requires training and may not provide the speed or simplicity needed for on-site teams.",
  },
  {
    q: "Is there a better alternative to SyteLine ERP for mobile use?",
    a: "If your team works in the field, a dedicated mobile ERP app like SyteRoam offers a simpler and faster experience compared to traditional systems like SyteLine ERP.",
  },
  {
    q: "Can SyteRoam replace SyteLine ERP?",
    a: "SyteRoam is not a full replacement for SyteLine ERP in large enterprise environments. It works best as a mobile-first solution for field operations, rentals, and manufacturing workflows.",
  },
  {
    q: "Why do companies look beyond SyteLine ERP mobile solutions?",
    a: "Businesses often look for alternatives because the SyteLine ERP mobile app is not always designed for real-time field updates, quick data entry, or ease of use on mobile devices.",
  },
  {
    q: "What makes SyteRoam different from SyteLine ERP?",
    a: "While SyteLine ERP focuses on complex enterprise processes, SyteRoam is built as a lightweight erp mobile app focused on speed, usability, and field efficiency.",
  },
  {
    q: "Who should use SyteRoam instead of SyteLine ERP?",
    a: "Teams that need fast updates, simple workflows, and a reliable erp android app for on-site work will benefit more from SyteRoam than traditional systems like SyteLine ERP.",
  },
  {
    q: "What is the pricing for the Syteroam app?",
    a: "Syteroam is available at $25 per month per license, giving you full access to all features. You can also choose an annual plan at $250 per license, which includes 2 months free.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Open the first one by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="sr-faq-page">
      {/* ── Theme-Matched Hero Banner ───────────────── */}
      <div className="sr-faq-hero">
        {/* Floating circles to match home hero */}
        <div className="sr-faq-hero__circle c1"></div>
        <div className="sr-faq-hero__circle c2"></div>
        <div className="sr-faq-hero__circle c3"></div>

        <div className="sr-faq-container">
          <h1>Frequently Asked Questions</h1>
          <p>Answers to the most common questions about SyteRoam and the SyteLine ERP mobile app.</p>
        </div>
      </div>

      {/* ── FAQ Accordion Body ──────────────────────── */}
      <div className="sr-faq-body">
        <div className="sr-faq-container">

          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`sr-faq-item ${isOpen ? 'is-open' : ''}`}
              >
                <div
                  className="sr-faq-item__header"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{index + 1}. {item.q}</span>
                  <div className="sr-faq-item__icon"></div>
                </div>
                {/* CSS Grid hack for smooth expanding heights */}
                <div className="sr-faq-item__content">
                  <div className="sr-faq-item__content-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* ── CTA Block ───────────────────────────── */}
          <div className="sr-faq-cta">
            <h2>Still have questions?</h2>
            <p>
              Our team is happy to walk you through how SyteRoam compares to the standard SyteLine ERP
              mobile app and whether it is the right fit for your field team.
            </p>
            {/* Global identical button style */}
            <Link href="/demo" className="sr-btn sr-btn--filled">
              Book a Demo
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
