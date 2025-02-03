/* eslint-disable no-unused-vars */
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './CircleDesign.css'; // Custom styles for testimonial design

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Clidertescircile() {
  return (
    <div className='div-clider1' style={{width:'30%'}}>
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={100}


        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
          <div className="testimonial-card" style={{ height: '100%',width:'100%' }}>
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.
            </p>
            <div className="testimonial-author">
              <h3>John Deo</h3>
              <p>PATIENT</p>
            </div>
            <div className="quote-icon-bottom">❞</div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="testimonial-card" style={{ height: '100%',width:'100%' }}>
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.
            </p>
            <div className="testimonial-author">
              <h3>John Deo</h3>
              <p>PATIENT</p>
            </div>
            <div className="quote-icon-bottom">❞</div>
          </div>
        </SwiperSlide>
        {/* Add more slides here */}
      </Swiper>
    </div>
  );
}
