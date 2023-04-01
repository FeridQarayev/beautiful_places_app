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
        spaceBetween={0}
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
        <SwiperSlide
          style={{
            backgroundImage: `url(${require('../../../images/home_slider/185e72fcc687e291f6947cd48ca5f3a5.jpeg')})`,
          }}
        >
          <div></div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${require('../../../images/home_slider/1228821-azerbaijan.jpg')})`,
          }}
        >
          <div></div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${require('../../../images/home_slider/0c81f671-2d54-4e3f-a3e6-ebbbb65ba3d7.jpg')})`,
          }}
        >
          <div></div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${require('../../../images/home_slider/Winter-in-Azerbaijan-Feature-.jpg')})`,
          }}
        >
          <div></div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default HomeSlider;
