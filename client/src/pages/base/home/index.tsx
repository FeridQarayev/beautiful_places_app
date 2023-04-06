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
                <span data-aos="fade-left">əfsanəvi göllər </span>
                <span data-aos="fade-left" data-aos-delay="200">
                  unikal tarix
                </span>
              </h2>
              <p data-aos="fade-left" data-aos-delay="300" className={style.way_travel__container__row__left__text1}>
                Göygöl şəhəri və rayon ərazisindəki əsrarəngiz təbiət turistlərin diqqətini çəkməyə bilməz. Bu gün də
                həm tarixi məkan, həm də təbiətə səyahət etmək istəyənlər Göygölə yollanır.
              </p>
              <p data-aos="fade-left" data-aos-delay="400" className={style.way_travel__container__row__left__text2}>
                Ölkənin ən sevilən dağ gölü olaraq şeirlər, rəsm əsərləri və musiqilərdə tərənnüm olunan Göygöl gölü
                payızda qızılı rəngə boyanan qalın yaşıl meşələrlə əhatə olunmuş Kəpəz dağının ətəyində yerləşir.
                Yaxınlıqda yerləşən Maralgöl də olduqca göz oxşayır. Yeddi gölü əhatə edən Göygöl Milli Parkından
                savayı, burada iki əsr öncə məskən salmış almanların da irsi ilə tanış ola və alman kəndlərinin
                ab-havasını da duya bilərsiniz. Orijinal alman metodları əsasında hazırlanmış yerli şərabları dadmağı
                unutmayın.
              </p>
              <div data-aos="fade-up" data-aos-delay="500" className={style.way_travel__container__row__left__img}>
                <img src={require('../../../images/home/signature-1-113x66.png')} alt="logo" />
              </div>
            </div>
            <div className={style.way_travel__container__row__right}>
              <div data-aos="fade-up" className={style.way_travel__container__row__right__box}>
                <div className={style.way_travel__container__row__right__box__left}>
                  <img src={require('../../../images/home/c5c1186d-731c-4fab-a44c-6cebaae00d62.jpg')} alt="place" />
                </div>
                <div className={style.way_travel__container__row__right__box__right}>
                  <img
                    src={require('../../../images/home/follow-traces-german-heritage-goygol-azerbaijan-03.jpg')}
                    alt="place"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.advantages}>
        <div className={style.advantages__container}>
          <div className={style.advantages__container__row}>
            <div data-aos="fade-up" data-aos-delay="200" className={style.advantages__container__row__card}>
              <h2>01. best Hotels</h2>
              <p>
                We guarantee the best hotels and very comfortable rooms, which will be appreciated by every traveller.
                You will be absolutely happy with the hotel and will have a wonderful vacation there.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className={style.advantages__container__row__card}>
              <h2>02. Tourist Guide</h2>
              <p>
                We provide our clients with such a service as Tourist Guide. Its main goal is to ensure people with all
                necessary information any time it is needed. This service is similar to Customer Support with emphasis
                on travelling.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className={style.advantages__container__row__card}>
              <h2>03. Flights Tickets</h2>
              <p>
                You can book tickets on any plane online via our booking system. Here you have an opportunity to select
                your transport operator. Our representatives will help you with the details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
