import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperModel from 'swiper/swiper';
import { ReactComponent as LeftSVG } from '../../../svgs/angle-left-solid.svg';
import { ReactComponent as RightSVG } from '../../../svgs/angle-right-solid.svg';
import { ReactComponent as HeartSVG } from '../../../svgs/heart-regular.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';

function RegionSlider(): JSX.Element {
  const swiperRef = React.useRef<SwiperModel>();
  return (
    <section className="region_slider">
      <div className="container">
        <h2 className="title">
          hara getmək <span>istəyirsiniz</span>
        </h2>
        <div className="region_slider__content">
          <Swiper
            slidesPerView={4}
            loop={true}
            spaceBetween={0}
            onBeforeInit={(swiper: SwiperModel): void => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
              1700: {
                slidesPerView: 5,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link to={'#'}>
                <div className="region">
                  <div className="region_media">
                    <img src={require('../../../images/regions/0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg')} alt="" />
                    <div className="region_media_text"></div>
                    <p>Şəki</p>
                  </div>
                  <div className="region_hover">
                    <div className="region_up">
                      <div className="region_heart_logo">
                        <HeartSVG />
                      </div>
                    </div>
                    <div className="region_down">
                      <h3>Şəki</h3>
                      <p>
                        Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, ləzzətli yeməkləri və mehriban
                        insanları ilə tanınan əsl şərq şəhəridir. Şəki bu gün də sanki orta əsrlərə xas cazibəsini
                        qoruyur. <span>Daha ətraflı</span>
                      </p>
                      <div className="region_footer">
                        <p className="region_footer_left">
                          Şəki, <br /> Şimal-qərb marşrutu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'#'}>
                <div className="region">
                  <div className="region_media">
                    <img src={require('../../../images/regions/0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg')} alt="" />
                    <div className="region_media_text"></div>
                    <p>Şəki</p>
                  </div>
                  <div className="region_hover">
                    <div className="region_up">
                      <div className="region_heart_logo">
                        <HeartSVG />
                      </div>
                    </div>
                    <div className="region_down">
                      <h3>Şəki</h3>
                      <p>
                        Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, ləzzətli yeməkləri və mehriban
                        insanları ilə tanınan əsl şərq şəhəridir. Şəki bu gün də sanki orta əsrlərə xas cazibəsini
                        qoruyur. <span>Daha ətraflı</span>
                      </p>
                      <div className="region_footer">
                        <p className="region_footer_left">
                          Şəki, <br /> Şimal-qərb marşrutu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'#'}>
                <div className="region">
                  <div className="region_media">
                    <img src={require('../../../images/regions/0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg')} alt="" />
                    <div className="region_media_text"></div>
                    <p>Şəki</p>
                  </div>
                  <div className="region_hover">
                    <div className="region_up">
                      <div className="region_heart_logo">
                        <HeartSVG />
                      </div>
                    </div>
                    <div className="region_down">
                      <h3>Şəki</h3>
                      <p>
                        Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, ləzzətli yeməkləri və mehriban
                        insanları ilə tanınan əsl şərq şəhəridir. Şəki bu gün də sanki orta əsrlərə xas cazibəsini
                        qoruyur. <span>Daha ətraflı</span>
                      </p>
                      <div className="region_footer">
                        <p className="region_footer_left">
                          Şəki, <br /> Şimal-qərb marşrutu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'#'}>
                <div className="region">
                  <div className="region_media">
                    <img src={require('../../../images/regions/0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg')} alt="" />
                    <div className="region_media_text"></div>
                    <p>Şəki</p>
                  </div>
                  <div className="region_hover">
                    <div className="region_up">
                      <div className="region_heart_logo">
                        <HeartSVG />
                      </div>
                    </div>
                    <div className="region_down">
                      <h3>Şəki</h3>
                      <p>
                        Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, ləzzətli yeməkləri və mehriban
                        insanları ilə tanınan əsl şərq şəhəridir. Şəki bu gün də sanki orta əsrlərə xas cazibəsini
                        qoruyur. <span>Daha ətraflı</span>
                      </p>
                      <div className="region_footer">
                        <p className="region_footer_left">
                          Şəki, <br /> Şimal-qərb marşrutu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'#'}>
                <div className="region">
                  <div className="region_media">
                    <img src={require('../../../images/regions/0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg')} alt="" />
                    <div className="region_media_text"></div>
                    <p>Şəki</p>
                  </div>
                  <div className="region_hover">
                    <div className="region_up">
                      <div className="region_heart_logo">
                        <HeartSVG />
                      </div>
                    </div>
                    <div className="region_down">
                      <h3>Şəki</h3>
                      <p>
                        Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, ləzzətli yeməkləri və mehriban
                        insanları ilə tanınan əsl şərq şəhəridir. Şəki bu gün də sanki orta əsrlərə xas cazibəsini
                        qoruyur. <span>Daha ətraflı</span>
                      </p>
                      <div className="region_footer">
                        <p className="region_footer_left">
                          Şəki, <br /> Şimal-qərb marşrutu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'#'}>
                <div className="region">
                  <div className="region_media">
                    <img src={require('../../../images/regions/0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg')} alt="" />
                    <div className="region_media_text"></div>
                    <p>Şəki</p>
                  </div>
                  <div className="region_hover">
                    <div className="region_up">
                      <div className="region_heart_logo">
                        <HeartSVG />
                      </div>
                    </div>
                    <div className="region_down">
                      <h3>Şəki</h3>
                      <p>
                        Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, ləzzətli yeməkləri və mehriban
                        insanları ilə tanınan əsl şərq şəhəridir. Şəki bu gün də sanki orta əsrlərə xas cazibəsini
                        qoruyur. <span>Daha ətraflı</span>
                      </p>
                      <div className="region_footer">
                        <p className="region_footer_left">
                          Şəki, <br /> Şimal-qərb marşrutu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'#'}>
                <div className="region">
                  <div className="region_media">
                    <img src={require('../../../images/regions/0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg')} alt="" />
                    <div className="region_media_text"></div>
                    <p>Şəki</p>
                  </div>
                  <div className="region_hover">
                    <div className="region_up">
                      <div className="region_heart_logo">
                        <HeartSVG />
                      </div>
                    </div>
                    <div className="region_down">
                      <h3>Şəki</h3>
                      <p>
                        Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, ləzzətli yeməkləri və mehriban
                        insanları ilə tanınan əsl şərq şəhəridir. Şəki bu gün də sanki orta əsrlərə xas cazibəsini
                        qoruyur. <span>Daha ətraflı</span>
                      </p>
                      <div className="region_footer">
                        <p className="region_footer_left">
                          Şəki, <br /> Şimal-qərb marşrutu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'#'}>
                <div className="region">
                  <div className="region_media">
                    <img src={require('../../../images/regions/0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg')} alt="" />
                    <div className="region_media_text"></div>
                    <p>Şəki</p>
                  </div>
                  <div className="region_hover">
                    <div className="region_up">
                      <div className="region_heart_logo">
                        <HeartSVG />
                      </div>
                    </div>
                    <div className="region_down">
                      <h3>Şəki</h3>
                      <p>
                        Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, ləzzətli yeməkləri və mehriban
                        insanları ilə tanınan əsl şərq şəhəridir. Şəki bu gün də sanki orta əsrlərə xas cazibəsini
                        qoruyur. <span>Daha ətraflı</span>
                      </p>
                      <div className="region_footer">
                        <p className="region_footer_left">
                          Şəki, <br /> Şimal-qərb marşrutu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'#'}>
                <div className="region">
                  <div className="region_media">
                    <img src={require('../../../images/regions/0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg')} alt="" />
                    <div className="region_media_text"></div>
                    <p>Şəki</p>
                  </div>
                  <div className="region_hover">
                    <div className="region_up">
                      <div className="region_heart_logo">
                        <HeartSVG />
                      </div>
                    </div>
                    <div className="region_down">
                      <h3>Şəki</h3>
                      <p>
                        Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, ləzzətli yeməkləri və mehriban
                        insanları ilə tanınan əsl şərq şəhəridir. Şəki bu gün də sanki orta əsrlərə xas cazibəsini
                        qoruyur. <span>Daha ətraflı</span>
                      </p>
                      <div className="region_footer">
                        <p className="region_footer_left">
                          Şəki, <br /> Şimal-qərb marşrutu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'#'}>
                <div className="region">
                  <div className="region_media">
                    <img src={require('../../../images/regions/0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg')} alt="" />
                    <div className="region_media_text"></div>
                    <p>Şəki</p>
                  </div>
                  <div className="region_hover">
                    <div className="region_up">
                      <div className="region_heart_logo">
                        <HeartSVG />
                      </div>
                    </div>
                    <div className="region_down">
                      <h3>Şəki</h3>
                      <p>
                        Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, ləzzətli yeməkləri və mehriban
                        insanları ilə tanınan əsl şərq şəhəridir. Şəki bu gün də sanki orta əsrlərə xas cazibəsini
                        qoruyur. <span>Daha ətraflı</span>
                      </p>
                      <div className="region_footer">
                        <p className="region_footer_left">
                          Şəki, <br /> Şimal-qərb marşrutu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'#'}>
                <div className="region">
                  <div className="region_media">
                    <img src={require('../../../images/regions/0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg')} alt="" />
                    <div className="region_media_text"></div>
                    <p>Şəki</p>
                  </div>
                  <div className="region_hover">
                    <div className="region_up">
                      <div className="region_heart_logo">
                        <HeartSVG />
                      </div>
                    </div>
                    <div className="region_down">
                      <h3>Şəki</h3>
                      <p>
                        Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, ləzzətli yeməkləri və mehriban
                        insanları ilə tanınan əsl şərq şəhəridir. Şəki bu gün də sanki orta əsrlərə xas cazibəsini
                        qoruyur. <span>Daha ətraflı</span>
                      </p>
                      <div className="region_footer">
                        <p className="region_footer_left">
                          Şəki, <br /> Şimal-qərb marşrutu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'#'}>
                <div className="region">
                  <div className="region_media">
                    <img src={require('../../../images/regions/0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg')} alt="" />
                    <div className="region_media_text"></div>
                    <p>Şəki</p>
                  </div>
                  <div className="region_hover">
                    <div className="region_up">
                      <div className="region_heart_logo">
                        <HeartSVG />
                      </div>
                    </div>
                    <div className="region_down">
                      <h3>Şəki</h3>
                      <p>
                        Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, ləzzətli yeməkləri və mehriban
                        insanları ilə tanınan əsl şərq şəhəridir. Şəki bu gün də sanki orta əsrlərə xas cazibəsini
                        qoruyur. <span>Daha ətraflı</span>
                      </p>
                      <div className="region_footer">
                        <p className="region_footer_left">
                          Şəki, <br /> Şimal-qərb marşrutu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'#'}>
                <div className="region">
                  <div className="region_media">
                    <img src={require('../../../images/regions/0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg')} alt="" />
                    <div className="region_media_text"></div>
                    <p>Şəki</p>
                  </div>
                  <div className="region_hover">
                    <div className="region_up">
                      <div className="region_heart_logo">
                        <HeartSVG />
                      </div>
                    </div>
                    <div className="region_down">
                      <h3>Şəki</h3>
                      <p>
                        Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, ləzzətli yeməkləri və mehriban
                        insanları ilə tanınan əsl şərq şəhəridir. Şəki bu gün də sanki orta əsrlərə xas cazibəsini
                        qoruyur. <span>Daha ətraflı</span>
                      </p>
                      <div className="region_footer">
                        <p className="region_footer_left">
                          Şəki, <br /> Şimal-qərb marşrutu
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
          <div className="slider_left" onClick={(): void => swiperRef.current?.slidePrev()}>
            <LeftSVG />
          </div>
          <div className="slider_right" onClick={(): void => swiperRef.current?.slideNext()}>
            <RightSVG />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegionSlider;
