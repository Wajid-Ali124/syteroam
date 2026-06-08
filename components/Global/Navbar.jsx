"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MAIN_LINKS = [
  { label: 'Home', to: '/#home' },
  { label: 'About', to: '/about-us' },
  { label: 'Feature', to: '/#feature' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
  // { label: 'Screenshots', to: '/#screenshots' },
  // { label: 'Testimonials', to: '/#testimonials' },
];

const MORE_LINKS = [
  { label: 'FAQ', to: '/faq' },
  { label: 'Blog', to: '/blog' },
  { label: 'Support', to: '/support' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef(null);

  /* ── scroll: transparent → solid dark-purple ─────────── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── click-outside → close mobile menu + dropdown ─────── */
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const closeAll = () => { setMenuOpen(false); setDropdownOpen(false); };
  const toggleMenu = () => setMenuOpen((o) => !o);
  const toggleDropdown = () => setDropdownOpen((o) => !o);

  const navClass = [
    'sr-navbar',
    isScrolled ? 'sr-navbar--fixed' : '',
    menuOpen ? 'sr-navbar--open' : '',
  ].filter(Boolean).join(' ');

  return (
    <header id="home">
      <nav ref={navRef} className={navClass}>
        <div className="sr-navbar__container">

          {/* ── Logo ───────────────────────────────────────── */}
          <Link href="/" className="sr-navbar__brand" onClick={closeAll}>
            <Image src="/logo.png" alt="SyteRoam" width={150} height={46} priority style={{ maxWidth: '150px', width: 'auto', height: 'auto' }} />
          </Link>

          {/* ── Hamburger → ✕ ──────────────────────────────── */}
          <button
            id="navbar-toggler"
            className="sr-navbar__toggler"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
            type="button"
          >
            <span className="sr-navbar__bar sr-navbar__bar--top" />
            <span className="sr-navbar__bar sr-navbar__bar--mid" />
            <span className="sr-navbar__bar sr-navbar__bar--bot" />
          </button>

          {/* ── Nav links ───────────────────────────────────── */}
          <div
            id="navbarCodeply"
            className={`sr-navbar__collapse${menuOpen ? ' sr-navbar__collapse--open' : ''}`}
          >
            <ul className="sr-navbar__nav">

              {/* Main links */}
              {MAIN_LINKS.map(({ label, to }) => (
                <li key={to} className="sr-navbar__item">
                  <Link href={to} className="sr-navbar__link" onClick={closeAll}>
                    {label}
                  </Link>
                </li>
              ))}

              {/* More dropdown */}
              <li className={`sr-navbar__item sr-navbar__item--dropdown${dropdownOpen ? ' sr-navbar__item--open' : ''}`}>
                <button
                  className="sr-navbar__link sr-navbar__dropdown-toggle"
                  onClick={toggleDropdown}
                  aria-expanded={dropdownOpen}
                  type="button"
                >
                  Resources <span className="sr-navbar__chevron">▾</span>
                </button>
                <ul className="sr-navbar__dropdown">
                  {MORE_LINKS.map(({ label, to }) => (
                    <li key={to}>
                      <Link href={to} className="sr-navbar__dropdown-link" onClick={closeAll}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* ── Book a Demo CTA ─────────────────────────── */}
              <div className="sr-navbar__cta-wrap">
                <Link href="/demo" className="sr-navbar__cta" onClick={closeAll}>
                  Book a Demo
                </Link>
              </div>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}
