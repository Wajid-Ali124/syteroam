"use client";

import Link from 'next/link';
import Image from 'next/image';
import { m, LazyMotion, domAnimation } from 'framer-motion';


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

// Data for Role Cards
const roles = [
  {
    title: "Sales and CRM",
    desc: "View customer history and qualify leads during site visits.",
    icon: "💼",
    color: "#e8efff",
    iconColor: "#3b82f6"
  },
  {
    title: "Procurement",
    desc: "Raise purchase orders and approve requisitions from the warehouse floor.",
    icon: "🛒",
    color: "#fff1f2",
    iconColor: "#e11d48"
  },
  {
    title: "Production",
    desc: "Log operational data and track job progress in real time.",
    icon: "⚙️",
    color: "#f0fdf4",
    iconColor: "#16a34a"
  },
  {
    title: "Quality and Maintenance",
    desc: "Execute inspections and manage service logs without returning to a desk.",
    icon: "🛡️",
    color: "#fffbeb",
    iconColor: "#d97706"
  }
];

// Data for Approach Cards
const pillars = [
  {
    title: "Native Performance",
    desc: "We build native apps for iOS and Android. This ensures faster load times and better hardware integration than generic web-based solutions.",
    icon: "⚡"
  },
  {
    title: "User Centric Design",
    desc: "Every button and gesture is sized for the industrial environment. We ensure the app is easy to navigate even in high pressure settings.",
    icon: "🎨"
  },
  {
    title: "Direct Integration",
    desc: "We eliminate middleware. By connecting straight to CloudSuite Industrial, we ensure your business logic and customizations are respected across the entire mobile ecosystem.",
    icon: "🔗"
  }
];

// Data for Audiences
const audiences = [
  { title: "Contract Manufacturers", desc: "Organizations needing live visibility into shop floor production and inventory levels." },
  { title: "Field Service Providers", desc: "Teams requiring instant access to service contracts and maintenance history on site." },
  { title: "Industrial Distributors", desc: "Businesses that manage complex procurement and sales cycles across multiple warehouse locations." },
  { title: "Enterprise Leaders", desc: "Executives who require real time analytics and approval power while traveling between facilities." }
];

export default function About() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="sr-about-page">

      {/* ── Theme-Matched Hero Banner ───────────────── */}
      <div className="sr-about-hero">
        {/* Animated Background Elements */}
        <m.div className="sr-about-hero__circle c1" animate={{ y: [0, 20, 0], x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} />
        <m.div className="sr-about-hero__circle c2" animate={{ y: [0, -30, 0], x: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} />
        <m.div className="sr-about-hero__circle c3" animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} />
        <m.div className="sr-about-hero__circle c4" animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }} />

        <div className="sr-about-hero-content">
          <m.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="sr-about-badge">About Us</span>
            <h1>Supercharge Your SyteLine Operations</h1>
            <p>
              SyteRoam is the native mobile companion for CloudSuite Industrial. We deliver a touch-optimized ERP experience that connects your teams across operations, sales, and procurement to real-time data.
            </p>
          </m.div>
        </div>
      </div>

      <div className="sr-about-body">

        {/* ── Our Story ───────────────────────────────── */}
        <m.section
          className="sr-about-story"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="sr-about-container layout-split">
            <m.div className="story-image-wrapper" variants={scaleIn}>
              <div className="story-graphic-pro">
                <div className="sg-blob"></div>
                <m.div
                  className="sg-device-wrap"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  style={{ display: 'block', position: 'relative', zIndex: 2 }}
                >
                  <Image
                    src="/assets/img/iphone-2.png"
                    alt="SyteRoam Mobile App"
                    width={450}
                    height={511}
                    className="sg-device"
                    style={{ width: '350px', height: 'auto', maxWidth: '100%', aspectRatio: '450 / 511', objectFit: 'contain' }}
                  />
                </m.div>
                <div className="sg-glass-card sg-pos-1">
                  <span className="sg-glass-icon">🚀</span>
                  <div className="sg-glass-text">
                    <strong style={{ color: '#1e293b' }}>Native Speed</strong>
                    <span>Zero Latency</span>
                  </div>
                </div>
                <div className="sg-glass-card sg-pos-2">
                  <span className="sg-glass-icon">🔒</span>
                  <div className="sg-glass-text">
                    <strong style={{ color: '#1e293b' }}>Enterprise</strong>
                    <span>Secure Data</span>
                  </div>
                </div>
              </div>
            </m.div>
            <m.div className="story-text" variants={fadeUp}>
              <h2>Our Story</h2>
              <p>
                QuadKor recognized a persistent gap in the industrial sector. Manufacturing and service teams were tethered to desktops while their actual work happened on the move. We saw professionals struggling with clunky web portals and manual data entry that delayed production cycles.
              </p>
              <p>
                We engineered SyteRoam to bridge this divide. Our team combined decades of SyteLine consulting expertise with modern mobile architecture. The result is a native application that transforms a complex ERP into a fluid, responsive tool. We didn't just build an app; we liberated your enterprise data for the palm of your hand.
              </p>
            </m.div>
          </div>
        </m.section>

        {/* ── Roles Grid ──────────────────────────────── */}
        <m.section
          className="sr-about-roles bg-light-alt"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="sr-about-container text-center">
            <m.h2 variants={fadeUp}>One App, Built for Every Role in Your Business</m.h2>
            <m.p className="section-subtitle" variants={fadeUp}>
              SyteRoam eliminates the need for multiple disconnected tools. We provide a unified mobile front end that adapts to the specific technical requirements of every department within your manufacturing or service organization.
            </m.p>

            <m.div className="role-cards-grid">
              {roles.map((role, idx) => (
                <m.div
                  key={idx}
                  className="role-card"
                  variants={scaleIn}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}
                >
                  <div className="role-card-icon" style={{ backgroundColor: role.color, color: role.iconColor }}>
                    {role.icon}
                  </div>
                  <h3>{role.title}</h3>
                  <p>{role.desc}</p>
                </m.div>
              ))}
            </m.div>
          </div>
        </m.section>

        {/* ── ERP Redefined ───────────────────────────── */}
        <m.section
          className="sr-about-redefine"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="sr-about-container text-center max-w-800">
            <m.h2 variants={fadeUp}>How We Redefine ERP Mobility</m.h2>
            <m.p variants={fadeUp}>
              We reject the idea that mobile ERP should be a watered down version of the desktop. SyteRoam redefines mobility through technical precision and a deep understanding of industrial workflows.Our platform utilizes an adaptive workspace. The interface intelligently reconfigures its layout based on your device orientation.
            </m.p>
            <m.p variants={fadeUp} style={{ marginTop: '1rem' }}>
              Whether you use a phone in portrait or a tablet in landscape, the UI optimizes every pixel for clarity. We focus on high performance and zero latency. Because SyteRoam connects directly to your SyteLine instance, your data remains accurate and your security protocols stay intact.
            </m.p>
          </div>
        </m.section>

        {/* ── Approach Pillars ────────────────────────── */}
        <m.section
          className="sr-about-pillars"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="sr-about-container">
            <m.h2 className="text-center" variants={fadeUp}>Our Approach</m.h2>
            <m.p className="section-subtitle text-center" variants={fadeUp}>
              We focus on building features that teams can use easily in real work situations. We prioritize three core pillars to ensure your digital transformation sticks.
            </m.p>

            <m.div className="pillars-grid">
              {pillars.map((pillar, idx) => (
                <m.div
                  key={idx}
                  className="pillar-card"
                  variants={fadeUp}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="pillar-icon">{pillar.icon}</div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                  <div className="pillar-glow"></div>
                </m.div>
              ))}
            </m.div>
          </div>
        </m.section>

        {/* ── Who We Serve ────────────────────────────── */}
        <m.section
          className="sr-about-serve bg-light-alt"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="sr-about-container">
            <m.h2 className="text-center" variants={fadeUp}>Who We Serve</m.h2>
            <m.p className="section-subtitle text-center" variants={fadeUp}>
              SyteRoam is designed for growth-oriented companies that rely on CloudSuite Industrial SyteLine to power their daily operations.
            </m.p>

            <m.div className="serve-grid">
              {audiences.map((aud, idx) => (
                <m.div
                  key={idx}
                  className="serve-item"
                  variants={scaleIn}
                >
                  <div className="serve-check">✓</div>
                  <div>
                    <h4>{aud.title}</h4>
                    <p>{aud.desc}</p>
                  </div>
                </m.div>
              ))}
            </m.div>
          </div>
        </m.section>

        {/* ── CTA Block ───────────────────────────────── */}
        <m.div
          className="sr-about-cta-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={scaleIn}
        >
          <div className="sr-about-cta">
            <div className="cta-content">
              <h2>See SyteRoam in Action</h2>
              <p>
                Book a demo and see how teams using CloudSuite Industrial SyteLine manage sales, procurement, and daily operations from mobile with real-time data and a touch-first ERP experience.
              </p>
              <Link href="/demo" className="sr-btn cta-btn">
                Book a Free Demo
              </Link>
            </div>
            {/* Animated decorative shapes inside CTA */}
            <m.div className="cta-shape cta-s1" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }}></m.div>
            <m.div className="cta-shape cta-s2" animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }}></m.div>
          </div>
        </m.div>

      </div>
    </div>
    </LazyMotion>
  );
}
