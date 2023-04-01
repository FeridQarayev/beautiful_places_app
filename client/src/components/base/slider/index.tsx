import React from 'react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';

function HomeSlider(): JSX.Element {
  return (
    <section className={'home__slider'}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p>Slide 1</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Slide 2</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Slide 3</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Slide 4</p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default HomeSlider;
