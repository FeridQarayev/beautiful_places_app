import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';

function RegionSlider(): JSX.Element {
  return (
    <section className="region_slider">
      <div className="container">
        <h2 className="title">
          hara getmək <span>istəyirsiniz</span>
        </h2>
        <div className="slider">
          <Swiper
            navigation={true}
            slidesPerView={4}
            spaceBetween={0}
            pagination={{
              clickable: true,
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
                    <div className="region_up"></div>
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
                        <div className="region_footer_right">
                          <img src={require('../../../svgs/78539c41-929d-48cb-97d0-2262158385f4.svg')} alt="" />
                        </div>
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
                    <div className="region_up"></div>
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
                        <div className="region_footer_right">
                          <img src={require('../../../svgs/78539c41-929d-48cb-97d0-2262158385f4.svg')} alt="" />
                        </div>
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
                    <div className="region_up"></div>
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
                        <div className="region_footer_right">
                          <img src={require('../../../svgs/78539c41-929d-48cb-97d0-2262158385f4.svg')} alt="" />
                        </div>
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
                    <div className="region_up"></div>
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
                        <div className="region_footer_right">
                          <img src={require('../../../svgs/78539c41-929d-48cb-97d0-2262158385f4.svg')} alt="" />
                        </div>
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
                    <div className="region_up"></div>
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
                        <div className="region_footer_right">
                          <img src={require('../../../svgs/78539c41-929d-48cb-97d0-2262158385f4.svg')} alt="" />
                        </div>
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
                    <div className="region_up"></div>
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
                        <div className="region_footer_right">
                          <img src={require('../../../svgs/78539c41-929d-48cb-97d0-2262158385f4.svg')} alt="" />
                        </div>
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
                    <div className="region_up"></div>
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
                        <div className="region_footer_right">
                          <img src={require('../../../svgs/78539c41-929d-48cb-97d0-2262158385f4.svg')} alt="" />
                        </div>
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
                    <div className="region_up"></div>
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
                        <div className="region_footer_right">
                          <img src={require('../../../svgs/78539c41-929d-48cb-97d0-2262158385f4.svg')} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default RegionSlider;
