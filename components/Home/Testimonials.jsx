"use client";

import Image from 'next/image';
import homedata from '../../data/homedata.json';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const [paginationEl, setPaginationEl] = useState(null);

  return (
    <section id="testimonials" className="sr-testimonials">
      <div className="sr-testimonials__rotate-heading">
        <h2>Client<br />Reviews</h2>
      </div>

      <div className="sr-testimonials__container">
        <div className="sr-testimonials__row">
          <div className="sr-testimonials__slider-col">
            <Swiper
              modules={[Autoplay, Pagination]}
              speed={2000}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: paginationEl,   /* render dots into our external div */
              }}
              className="testimonial-swiper"
            >
              {homedata.testimonial.map((data, i) => (
                <SwiperSlide key={i} className="sr-testimonial__single">
                  <div className="sr-testimonial__row">

                    {/* Client Image */}
                    <div className="sr-testimonial__img-col">
                      <Image
                        className="sr-testimonial__img"
                        src={data.imgurl}
                        alt="Client avatar"
                        width={100}
                        height={100}
                        style={{ width: '100%', height: 'auto', maxWidth: '100px' }}
                      />
                    </div>

                    {/* Client Review Content */}
                    <div className="sr-testimonial__content-col">
                      <p className="sr-testimonial__text">{data.content}</p>
                      <h3 className="sr-testimonial__name">{data.client}</h3>
                      <p className="sr-testimonial__designation">{data.designation}</p>
                      <p className="sr-testimonial__ratings">
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                      </p>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* External pagination — sits physically BELOW the swiper slides in the DOM */}
            <div ref={(node) => setPaginationEl(node)} className="testimonial-pagination-external" />

          </div>

        </div>
      </div>
    </section>
  );
}
