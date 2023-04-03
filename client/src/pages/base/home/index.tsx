import AOS from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import HomeSlider from '../../../components/base/slider';
import style from './style.module.scss';

function Home(): JSX.Element {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <React.Fragment>
      <HomeSlider />

      <section
        style={{ background: `url(${require('../../../images/home/bg-home-1.png')}) no-repeat top right` }}
        className={style.way_travel}
      >
        <div className={style.way_travel__container}>
          <div className={style.way_travel__container__row}>
            <div className={style.way_travel__container__row__left}>
              <h2>
                <span data-aos="fade-left">Explore a different</span>
                <span data-aos="fade-left" data-aos-delay="200">
                  way to travel
                </span>
              </h2>
              <p data-aos="fade-left" data-aos-delay="300" className={style.way_travel__container__row__left__text1}>
                Discover new cultures and have a wonderful rest with Backpack Story! Select the country you’d like to
                visit and provide our agents with estimated time – they’ll find and offer the most suitable tours and
                hotels.
              </p>
              <p data-aos="fade-left" data-aos-delay="400" className={style.way_travel__container__row__left__text2}>
                During our work, we organized countless journeys for our clients. We started as a small tour bureau, and
                soon we expanded our offers list. Today we have valuable experience travelling and we can advise the
                most stunning resorts, cities and countries to visit!
              </p>
              <div data-aos="fade-up" data-aos-delay="500" className={style.way_travel__container__row__left__img}>
                <img src={require('../../../images/home/signature-1-113x66.png')} alt="logo" />
              </div>
            </div>
            <div className={style.way_travel__container__row__right}>
              <div data-aos="fade-up" className={style.way_travel__container__row__right__box}>
                <div className={style.way_travel__container__row__right__box__left}>
                  <img src={require('../../../images/home/img-2-home-364x459.jpg')} alt="place" />
                </div>
                <div className={style.way_travel__container__row__right__box__right}>
                  <img src={require('../../../images/home/img-1-home-364x459.jpg')} alt="place" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
