"use client";

import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import pageData from '@/data/page-cloudsuite-industrial-mobile-app.json';

export default function CloudSuiteIndustrialMobileApp() {
  const swiperRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  const { heroarea, features, howitworks, screenshots, erpWorkflow, section5, faq, preface } = pageData;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Character-flip animation — identical to FeatureOne.jsx
  const loopVars = {
    hidden: { opacity: 0, y: -30, rotateY: 0, scale: 1 },
    visible: (i) => ({
      opacity: [0, 1, 1, 1, 1, 1, 0, 0],
      y: [-30, 0, 0, 0, 0, 0, 0, 0],
      rotateY: [0, 0, 0, 180, 360, 360, 360, 360],
      scale: [1, 1, 1, 1.2, 1, 1, 1, 1],
      transition: {
        duration: 15,
        ease: 'easeInOut',
        times: [0, 0.1, 0.45, 0.55, 0.65, 0.95, 0.98, 1],
        repeat: Infinity,
        delay: i * 0.05,
      },
    }),
  };

  return (
    <div className="sr-landing-page">

      {/* ── 1. Hero ───────────────────────────────────────────────────────── */}
      <section className="sr-hero" id="home">
        <div className="sr-hero__circle sr-hero__circle--x1" />
        <div className="sr-hero__circle sr-hero__circle--x2" />
        <div className="sr-hero__circle sr-hero__circle--x3" />
        <div className="sr-hero__circle sr-hero__circle--x4" />
        <div className="sr-hero__circle sr-hero__circle--x5" />
        <div className="sr-hero__circle sr-hero__circle--x6" />
        <div className="sr-hero__circle sr-hero__circle--x7" />
        <div className="sr-hero__circle sr-hero__circle--x8" />
        <div className="sr-hero__circle sr-hero__circle--x9" />
        <div className="sr-hero__circle sr-hero__circle--x10" />

        <div className="sr-hero__container">
          <div className="sr-hero__row">
            <div className="sr-hero__col">
              <div className="sr-hero__content">
                <h1 className="sr-hero__title">{heroarea.title}</h1>
                <p className="sr-hero__text">{heroarea.content}</p>
                <div className="sr-hero__btn-wrapper">
                  <Link href={'/' + heroarea.btn1url} className="sr-hero__btn sr-hero__btn--default">
                    {heroarea.btn1label}
                  </Link>
                </div>
              </div>
            </div>
            <div className="sr-hero__col">
              <div className="sr-hero__mockup-wrap">
                <Image className="sr-hero__mockup" src={heroarea.imgurl1} alt="Mobile App Preview" width={478} height={588} priority style={{ width: '100%', height: 'auto', maxWidth: '478px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Key Features ────────────────────────────────────────────────── */}
      <section id="feature" className="sr-keyfeatures">
        <div className="sr-keyfeatures__circle" />
        <div className="sr-keyfeatures__container">
          <div className="sr-keyfeatures__row sr-keyfeatures__row--center">
            <div className="sr-col sr-col-title">
              <div className="sr-section-title">
                <h2 className="sr-section-title__heading">{features.sectiontitle}</h2>
                <p style={{ marginTop: '15px' }}>{features.sectionsubtitle}</p>
              </div>
            </div>
          </div>
          <div className="sr-keyfeatures__row sr-keyfeatures__row--align-center">
            <div className="sr-col sr-col-half-lg">
              <div className="sr-keyfeatures__list-wrap">
                <div className="sr-keyfeatures__row">
                  {features.featurescontent.map((feature, i) => (
                    <div key={i} className="sr-col sr-col-half-sm">
                      <div className="sr-feature-card">
                        <i className={`${feature.icon} sr-feature-card__icon`} />
                        <h3 className="sr-feature-card__title">{feature.title}</h3>
                        <p className="sr-feature-card__text">{feature.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="sr-col sr-col-half-lg">
              <div className="sr-keyfeatures__mockup-wrap">
                <div className="sr-keyfeatures__bordered-box" />
                <Image className="sr-keyfeatures__phone-1" src={features.imgurl1} alt="Mockup 1" width={438} height={500} style={{ width: '100%', height: 'auto', maxWidth: '438px' }} />
                <Image className="sr-keyfeatures__phone-2" src={features.imgurl2} alt="Mockup 2" width={450} height={511} style={{ width: '100%', height: 'auto', maxWidth: '450px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. How It Works ────────────────────────────────────────────────── */}
      <section id="how-it-works" className="sr-howitworks">
        <div className="sr-howitworks__container">
          <div className="sr-howitworks__row">
            <div className="sr-howitworks__col-title">
              <div className="sr-howitworks__section-title">
                <h2>{howitworks.sectiontitle}</h2>
              </div>
            </div>
          </div>
          <div className="sr-howitworks__row">
            {howitworks.features.map((feature, i) => (
              <div key={i} className="sr-howitworks__col">
                <div className="sr-howitworks-card">
                  <i className={`${feature.icon} sr-howitworks-card__icon`}></i>
                  <h3 className="sr-howitworks-card__title">{feature.title}</h3>
                  <p className="sr-howitworks-card__text">{feature.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Screenshots ─────────────────────────────────────────────────── */}
      <section id="screenshots" className="sr-screenshots">
        <div className="sr-screenshots__circle sr-screenshots__circle--x1" />
        <div className="sr-screenshots__circle sr-screenshots__circle--x2" />
        <div className="sr-screenshots__circle sr-screenshots__circle--x3" />
        <div className="sr-screenshots__circle sr-screenshots__circle--x4" />
        <div className="sr-screenshots__circle sr-screenshots__circle--x7" />
        <div className="sr-screenshots__circle sr-screenshots__circle--x8" />
        <div className="sr-screenshots__circle sr-screenshots__circle--x9" />
        <div className="sr-screenshots__circle sr-screenshots__circle--x10" />

        <div className="sr-screenshots__container">
          <div className="sr-screenshots__title-row">
            <div className="sr-screenshots__title-col">
              <div className="sr-screenshots__section-title">
                <h2>{screenshots.sectiontitle}</h2>
                <p style={{ marginTop: '15px' }}>{screenshots.sectionsubtitle}</p>
              </div>
            </div>
          </div>

          <div className="sr-screenshots__slider-wrap">
            <div className="sr-screenshots__nav sr-screenshots__nav--prev" onClick={() => swiperRef.current?.slidePrev()}>
              <i className="icofont-stylish-left"></i>
            </div>
            <Swiper
              modules={[EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              loop={true}
              coverflowEffect={{
                rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true,
              }}
              breakpoints={{
                0: { slidesPerView: 1, coverflowEffect: { rotate: 0, stretch: 0, depth: 0, modifier: 1, slideShadows: false } },
                577: { slidesPerView: 3, coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true } },
              }}
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              className="screenshot-swiper"
            >
              {screenshots.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <Image 
                    src={img} 
                    alt={`App Screenshot ${i + 1}`} 
                    width={868} 
                    height={1740} 
                    style={{ width: '100%', height: 'auto', maxWidth: '868px' }} 
                    priority={i === 0}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="sr-screenshots__nav sr-screenshots__nav--next" onClick={() => swiperRef.current?.slideNext()}>
              <i className="icofont-stylish-right"></i>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href={`/${screenshots.ctaUrl}`} className="sr-btn sr-btn--filled">{screenshots.ctaLabel}</Link>
          </div>
        </div>
      </section>

      {/* ── 5. ERP Workflow (Leads in Tech) ────────────────────────────────── */}
      <section id="erp-workflow" className="sr-erpworkflow">
        <div className="sr-erpworkflow__circle" />
        <div className="sr-erpworkflow__container">
          <div className="sr-erpworkflow__inner">
            <div className="sr-erpworkflow__label">
              <span className="sr-erpworkflow__accent-bar" />
              <span className="sr-erpworkflow__label-text">ENTERPRISE STANDARD</span>
            </div>
            <h2 className="sr-erpworkflow__title">{erpWorkflow.sectiontitle}</h2>
            <div className="sr-erpworkflow__divider" />
            <p className="sr-erpworkflow__text">{erpWorkflow.content}</p>

          </div>
        </div>
      </section>

      {/* ── 6. Section 5 (Custom Bulleted Section copying FeatureOne base) ─── */}
      <section id="feature1" className="sr-featureone bg-light-alt" style={{ padding: '100px 0', backgroundColor: '#f8fafc' }}>
        <div className="sr-featureone__circle" />
        <div className="sr-featureone__container">
          <div className="sr-featureone__row" style={{ alignItems: 'center' }}>
            <div className="sr-featureone__col" style={{ width: '100%', padding: '0 15px', marginBottom: '40px' }}>
              <div className="sr-featureone__img-wrap">
                <Image className="sr-featureone__img" src={section5.imgurl} alt="Expert Implementation" width={425} height={470} style={{ width: '100%', height: 'auto', maxWidth: '425px' }} />
              </div>
            </div>
            <div className="sr-featureone__col" style={{ width: '100%', padding: '0 15px' }}>
              <h2 className="sr-featureone__title" style={{ textTransform: 'uppercase', marginBottom: '20px' }}>
                {(() => {
                  let globalCharIndex = 0;
                  return section5.sectiontitle.split(' ').map((word, wordIndex, wordsArr) => {
                    const isLastWord = wordIndex === wordsArr.length - 1;
                    return (
                      <span key={wordIndex} style={{ display: 'inline-block', marginRight: isLastWord ? '0px' : '0.25em' }}>
                        {Array.from(word).map((char, charIndex) => {
                          const currentIndex = globalCharIndex++;
                          return (
                            <motion.span
                              key={charIndex}
                              custom={currentIndex}
                              variants={loopVars}
                              initial="hidden"
                              animate="visible"
                              style={{ display: 'inline-block' }}
                            >
                              {char}
                            </motion.span>
                          );
                        })}
                      </span>
                    );
                  });
                })()}
              </h2>
              <p className="sr-featureone__text" style={{ marginBottom: '25px' }}>{section5.content}</p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 35px 0' }}>
                {section5.bullets.map((bullet, idx) => (
                  <li key={idx} style={{ position: 'relative', paddingLeft: '30px', marginBottom: '15px', fontSize: '16px', color: '#4b5563', fontFamily: '"Quicksand", sans-serif', fontWeight: '500' }}>
                    <i className="icofont-check" style={{ position: 'absolute', left: 0, top: '2px', color: '#6509e2', fontSize: '18px' }} />
                    {bullet}
                  </li>
                ))}
              </ul>

              <Link href={`/${section5.btnUrl}`} className="sr-btn sr-btn--filled">
                {section5.btnLabel}
              </Link>
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{
          __html: `
          @media (min-width: 992px) {
            .sr-featureone__col { width: 50% !important; margin-bottom: 0 !important; }
          }
          .pl-0 {
            padding: 15px !important;
          }
        `}} />
      </section>

      {/* ── 7. FAQs ────────────────────────────────────────────────────────── */}
      <section className="sr-faq-body" style={{ backgroundColor: '#ffffff' }}>
        <div className="sr-faq-container">
          <div className="sr-section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="sr-section-title__heading">{faq.sectiontitle}</h2>
          </div>

          <div className="sr-faq-accordion">
            {faq.faqs.map((faqItem, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`sr-faq-item ${isOpen ? 'is-open' : ''}`}>
                  <div className="sr-faq-item__header" onClick={() => toggleFaq(index)}>
                    {faqItem.question}
                    <span className="sr-faq-item__icon"></span>
                  </div>
                  <div className="sr-faq-item__content">
                    <div className="sr-faq-item__content-inner">
                      <p>{faqItem.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 8. Preface (Connect your workforce) ────────────────────────────── */}
      <section id="preface" className="sr-preface">
        <div className="sr-preface__container">
          <div className="sr-preface__title-row">
            <div className="sr-preface__title-col">
              <div className="sr-preface__section-title">
                <h2>{preface.sectiontitle}</h2>
              </div>
            </div>
          </div>
          <div className="sr-preface__content-row">
            <div className="sr-preface__img-col">
              <div className="sr-preface__img-wrap">
                <div className="sr-preface__circle"></div>
                <Image className="sr-preface__img" src={preface.imgurl} alt="preface" width={485} height={972} style={{ width: '60%', height: 'auto' }} />
              </div>
            </div>
            <div className="sr-preface__text-col">
              <h3 className="sr-preface__title">{preface.title}</h3>
              <p className="sr-preface__desc">{preface.content}</p>
              <div className="sr-preface__apps">
                <Link href={`/${preface.btn1url}`} className="sr-btn sr-btn--filled sr-preface__app-btn pl-0">
                  <span dangerouslySetInnerHTML={{ __html: preface.btn1label }}></span>
                </Link>
                <a href="/assets/brochure.pdf" download className="sr-btn sr-btn--outline sr-preface__app-btn !pl-[20px] !pr-[20px] !py-[15px]">
                  <span>Download Brochure</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
