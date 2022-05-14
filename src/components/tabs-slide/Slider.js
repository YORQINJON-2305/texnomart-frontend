import React from 'react'
import "./Slider.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination,  A11y ])

const Slider = () => {
  
    return (
        <Swiper className='Swiper_container'
      spaceBetween={50}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
          <div className="phone_wrapper">
              <img src="	https://texnomart.uz/frontend/web/files/global/new-photo/img/special-slider/smartfon.svg" alt="" />
              <p>Smartfonlar</p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="phone_wrapper">
              <img src="https://texnomart.uz/frontend/web/files/global/new-photo/img/special-slider/pilesos.svg" alt="" />
              <p>Chang yutgichlar</p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="phone_wrapper">
              <img src="https://texnomart.uz/frontend/web/files/global/new-photo/img/special-slider/planshet.svg" alt="" />
              <p>Planshetlar</p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="phone_wrapper">
              <img src="	https://texnomart.uz/frontend/web/files/global/new-photo/img/special-slider/xolodilnik.svg" alt="" />
              <p>Muzlatgichlar</p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="phone_wrapper">
              <img src="https://texnomart.uz/frontend/web/files/global/new-photo/img/special-slider/lg.svg" alt="" />
              <p>Televizorlar</p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="phone_wrapper">
              <img src="https://texnomart.uz/frontend/web/files/global/new-photo/img/special-slider/feni.svg" alt="" />
              <p>Fenlar</p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="phone_wrapper">
              <img src="https://texnomart.uz/frontend/web/files/global/new-photo/img/special-slider/stiralnaya_mashina.svg" alt="" />
              <p>Kir yuvish <br/> mashinalari</p>
          </div>
      </SwiperSlide>
      
    </Swiper>
      );
}

export default Slider