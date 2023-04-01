import React from 'react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as LocationSVG } from '../../../svgs/location-dot-solid.svg';
import './style.css';

function HomeSlider(): JSX.Element {
  return (
    <section className={'home__slider'}>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 7000,
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
          <div>
            <h1>əbədi alovlar küləklər şəhəri</h1>
            <p>
              <LocationSVG />
              Bakı şəhəri
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${require('../../../images/home_slider/1228821-azerbaijan.jpg')})`,
          }}
        >
          <div>
            <h1>toxunulmamış təbiət / qədim ənənələr</h1>
            <p>
              <LocationSVG />
              Qafqaz dağları, Quba rayonu
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${require('../../../images/home_slider/0c81f671-2d54-4e3f-a3e6-ebbbb65ba3d7.jpg')})`,
          }}
        >
          <div>
            <h1>xalq sənətkarlığı dadlı təamlar və şərablar</h1>
            <p>
              <LocationSVG />
              Qaranohur gölü, İsmayıllı rayonu
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: `url(${require('../../../images/home_slider/Winter-in-Azerbaijan-Feature-.jpg')})`,
          }}
        >
          <div>
            <h1>qürurlu zirvələr unudulmaz macəralar</h1>
            <p>
              <LocationSVG />
              Tufandağ, Qusar rayonu
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default HomeSlider;
