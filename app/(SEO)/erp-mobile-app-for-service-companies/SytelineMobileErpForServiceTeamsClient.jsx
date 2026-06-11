"use client";

import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import pageData from '@/data/page-syteline-mobile-erp-for-service-teams.json';

export default function SytelineMobileErpForServiceTeams() {
  const swiperRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  const { heroarea, features, howitworks, screenshots, erpWorkflow, section5, faq, preface } = pageData;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Character-flip animation
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
      <section id="feature1" className="sr-featureone bg-[#f8fafc] py-[100px]">
        <div className="sr-featureone__circle" />
        <div className="sr-featureone__container lg:max-w-[960px] xl:max-w-[1140px] mx-auto px-[15px]">
          <div className="sr-featureone__row flex flex-wrap items-center mx-[-15px]">
            <div className="sr-featureone__col w-full lg:w-1/2 px-[15px] mb-[40px] lg:mb-0">
              <div className="sr-featureone__img-wrap relative">
                <Image className="sr-featureone__img max-w-full" src={section5.imgurl} alt="Expert Implementation" width={425} height={470} style={{ width: '100%', height: 'auto', maxWidth: '425px' }} />
              </div>
            </div>
            <div className="sr-featureone__col w-full lg:w-1/2 px-[15px]">
              <h2 className="sr-featureone__title uppercase mb-[20px]">
                {(() => {
                  let globalCharIndex = 0;
                  return section5.sectiontitle.split(' ').map((word, wordIndex, wordsArr) => {
                    const isLastWord = wordIndex === wordsArr.length - 1;
                    return (
                      <span key={wordIndex} className="inline-block" style={{ marginRight: isLastWord ? '0px' : '0.25em' }}>
                        {Array.from(word).map((char, charIndex) => {
                          const currentIndex = globalCharIndex++;
                          return (
                            <motion.span
                              key={charIndex}
                              custom={currentIndex}
                              variants={loopVars}
                              initial="hidden"
                              animate="visible"
                              className="inline-block"
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
              <p className="sr-featureone__text mb-[25px]">{section5.content}</p>

              <ul className="list-none p-0 m-0 mb-[35px]">
                {section5.bullets.map((bullet, idx) => (
                  <li key={idx} className="relative pl-[30px] mb-[15px] text-[16px] text-[#4b5563] font-['Quicksand'] font-medium">
                    <i className="icofont-check absolute left-0 top-[2px] text-[#6509e2] text-[18px]" />
                    {bullet}
                  </li>
                ))}
              </ul>


            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FAQs ────────────────────────────────────────────────────────── */}
      <section className="sr-faq-body bg-white">
        <div className="sr-faq-container">
          <div className="sr-section-title text-center mb-[50px]">
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
      <section id="preface" className="sr-preface flex items-center mb-0 pb-[80px]">
        <div className="sr-preface__container mx-auto px-[15px] w-full max-w-[1140px]">
          <div className="sr-preface__content-row flex flex-wrap items-center mx-[-15px] pt-[80px]">
            <div className="sr-preface__img-col w-full md:w-1/2 px-[15px] md:py-[30px]">
              <div className="sr-preface__img-wrap relative mb-[50px] md:mb-0">
                <div className="sr-preface__circle absolute w-[600px] h-[600px] top-[-50px] left-[-300px] rounded-full bg-linear-to-br from-[#6509e2] to-[#5a02b4] z-0 opacity-100"></div>
                <Image className="sr-preface__img relative z-10 max-w-full" src={preface.imgurl} alt="preface" width={485} height={972} style={{ width: '60%', height: 'auto' }} />
              </div>
            </div>
            <div className="sr-preface__text-col w-full md:w-1/2 px-[15px] md:py-[30px]">
              <div className="mb-[30px]">
                <h2 className="font-['Poppins'] font-bold text-[30px] md:text-[42px] uppercase text-[#151515] leading-tight mb-[15px]">{preface.sectiontitle}</h2>
              </div>
              <p className="sr-preface__desc mb-[25px] text-[#858585] text-[16px] leading-[1.7] font-['Quicksand']">{preface.content}</p>
              <div className="sr-preface__apps flex flex-wrap gap-4 mt-0">
                <Link href={preface.btn1url} target="_blank" className="sr-btn sr-btn--filled inline-block pl-[20px] pr-[20px] py-[15px]">
                  <span dangerouslySetInnerHTML={{ __html: preface.btn1label }}></span>
                </Link>
                <a href="/assets/brochure.pdf" download className="sr-btn sr-btn--outline inline-block pl-[20px] pr-[20px] py-[15px]">
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
