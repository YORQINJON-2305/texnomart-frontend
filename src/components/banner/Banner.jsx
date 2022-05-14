import React from 'react'
import "./Banner.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination,  A11y ])

const Banner = () => {
  
    return (
        <Swiper 
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
          <div>
              <img src="https://texnomart.uz/uploads/slides/1098661920x400%20%D1%80%D1%83%D1%81%D1%81_1.png" alt="" />
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div>
              <img src="https://texnomart.uz/uploads/slides/8307941920x400%20%D0%BB%D0%B0%D1%82.png" alt="" />
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div>
              <img src="https://texnomart.uz/uploads/slides/8027701920x400%20uz.png	" alt="" />
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div>
              <img src="https://texnomart.uz/uploads/slides/7811851920x400%20uz.png	" alt="" />
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div>
              <img src="https://texnomart.uz/uploads/slides/7123421920x400.webp" alt="" />
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div>
              <img src="https://texnomart.uz/uploads/slides/9723271920x400_Samsung%20Galaxy%20Z(%D1%83%D0%B7%D0%B1%20).png" alt="" />
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div>
              <img src="https://texnomart.uz/uploads/slides/6542911920x400_%D0%BB%D0%B0%D1%82.webp" alt="" />
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div>
              <img src="https://texnomart.uz/uploads/slides/895427maxsulot.webp" alt="" />
          </div>
      </SwiperSlide>
    
      
    </Swiper>
      );
}

export default Banner