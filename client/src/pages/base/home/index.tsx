import AOS from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Blogs from '../../../components/base/blog';
import RegionSlider from '../../../components/base/region-slider';
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

      <RegionSlider />

      <section className={style.advantages}>
        <div className={style.advantages__container}>
          <div className={style.advantages__container__row}>
            <div data-aos="fade-up" data-aos-delay="200" className={style.advantages__container__row__card}>
              <h2>01. Ən yaxşı otellər</h2>
              <p>
                Biz hər bir səyahətçi tərəfindən qiymətləndiriləcək ən yaxşı otellərə və çox rahat otaqlara zəmanət
                veririk. Siz oteldən tam razı qalacaqsınız və orada gözəl istirahət edəcəksiniz.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className={style.advantages__container__row__card}>
              <h2>02. Turist Bələdçisi</h2>
              <p>
                Biz müştərilərimizə Turist Bələdçisi kimi bir xidmət təqdim edirik. Onun əsas məqsədi insanlara lazım
                olan istənilən vaxt lazımi məlumatı çatdırmaqdır. Bu xidmət səyahətə xüsusi diqqət yetirməklə Müştəri
                Dəstəyi xidmətinə bənzəyir.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className={style.advantages__container__row__card}>
              <h2>03. Uçuş biletləri</h2>
              <p>
                İstənilən təyyarəyə biletləri bron sistemimiz vasitəsilə onlayn sifariş edə bilərsiniz. Burada sizin
                nəqliyyat operatorunuzu seçmək imkanınız var. Nümayəndələrimiz sizə təfərrüatlarda kömək edəcəklər.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ background: `url(${require('../../../images/home/bg-home-3.png')}) no-repeat center right` }}
        className={style.tours}
      >
        <div className={style.tours__bg}>
          <div className={style.tours__bg__container}>
            <div className={style.tours__bg__container__row}>
              <div data-aos="fade-left" className={style.tours__bg__container__row__col}>
                <Link to={'#'}>
                  <img src={require('../../../images/home/1e96c2b3-ca3d-4f2b-a05a-ef9a92876a3f.jpg')} alt="" />
                  <div className={style.tours__bg__container__row__col__description}>
                    <div>Xızı</div>
                    <span>dən</span>
                    <span className={style.tours__bg__container__row__col__description__price}>$540</span>
                  </div>
                </Link>
              </div>
              <div className={style.tours__bg__container__row__col}>
                <div className={style.tours__bg__container__row__col__row}>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className={style.tours__bg__container__row__col__row__card}
                  >
                    <Link to={'#'}>
                      <img
                        src={require('../../../images/home/backpacking-khinaliq-laza-caucasus-azerbaijan-main-image-op-thumb.jpg')}
                        alt=""
                      />
                      <div className={style.tours__bg__container__row__col__description}>
                        <div>Xınalıq</div>
                        <span>dən</span>
                        <span className={style.tours__bg__container__row__col__description__price}>$330</span>
                      </div>
                    </Link>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className={style.tours__bg__container__row__col__row__card}
                  >
                    <Link to={'#'}>
                      <img src={require('../../../images/home/the-nature-of-azerbaijan.jpg')} alt="" />
                      <div className={style.tours__bg__container__row__col__description}>
                        <div>İsmayıllı</div>
                        <span>dən</span>
                        <span className={style.tours__bg__container__row__col__description__price}>$500</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div data-aos="fade-right" data-aos-delay="400" className={style.tours__bg__container__row__col}>
                <Link to={'#'}>
                  <img src={require('../../../images/home/ce6d4c0d-0818-4965-95f7-13d9442a53d5.jpg')} alt="" />
                  <div className={style.tours__bg__container__row__col__description}>
                    <div>Qusar</div>
                    <span>dən</span>
                    <span className={style.tours__bg__container__row__col__description__price}>$720</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Blogs />
    </React.Fragment>
  );
}

export default Home;
