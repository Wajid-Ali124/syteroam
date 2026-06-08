"use client";

import Image from 'next/image';
import homedata from '../../data/homedata.json';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
// No Navigation module — we call slidePrev/slideNext directly, zero CSS conflicts

export default function Screenshots() {
  const swiperRef = useRef(null);

  return (
    <section id="screenshots" className="sr-screenshots">
      
      {/* Floating background circles */}
      <div className="sr-screenshots__circle sr-screenshots__circle--x1" />
      <div className="sr-screenshots__circle sr-screenshots__circle--x2" />
      <div className="sr-screenshots__circle sr-screenshots__circle--x3" />
      <div className="sr-screenshots__circle sr-screenshots__circle--x4" />
      <div className="sr-screenshots__circle sr-screenshots__circle--x7" />
      <div className="sr-screenshots__circle sr-screenshots__circle--x8" />
      <div className="sr-screenshots__circle sr-screenshots__circle--x9" />
      <div className="sr-screenshots__circle sr-screenshots__circle--x10" />

      <div className="sr-screenshots__container">
        
        {/* Title */}
        <div className="sr-screenshots__title-row">
          <div className="sr-screenshots__title-col">
            <div className="sr-screenshots__section-title">
              <h2>{homedata.screenshots.sectiontitle}</h2>
            </div>
          </div>
        </div>

        <div className="sr-screenshots__slider-wrap">

          {/* Prev button — calls slidePrev() directly on stored instance */}
          <div
            className="sr-screenshots__nav sr-screenshots__nav--prev"
            onClick={() => swiperRef.current?.slidePrev()}
          >
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
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              // ≤ 576px → 1 big slide, no coverflow depth effect
              0: {
                slidesPerView: 1,
                coverflowEffect: { rotate: 0, stretch: 0, depth: 0, modifier: 1, slideShadows: false },
              },
              // 577px and up → original 3-slide coverflow
              577: {
                slidesPerView: 3,
                coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true },
              },
            }}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            className="screenshot-swiper"
          >
            {homedata.screenshots.images.map((img, i) => (
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

          {/* Next button — calls slideNext() directly on stored instance */}
          <div
            className="sr-screenshots__nav sr-screenshots__nav--next"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <i className="icofont-stylish-right"></i>
          </div>

        </div>

      </div>
    </section>
  );
}
