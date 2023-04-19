import React from 'react';
import Haykinq from '../../../images/about_us_slider/haykinq.jpg';
import Plastik from '../../../images/about_us_slider/plastik.jpg';
import Qartal from '../../../images/about_us_slider/qartal.jpg';
import Ev from '../../../images/about_us_slider/qedim ev.jpg';
import Yemek from '../../../images/about_us_slider/yemek.jpg';

import './style.scss';

function AboutSlider(): JSX.Element {
  return (
    <div className="container">
      <input type="radio" name="slider" className="d-none" id="s1" checked />
      <input type="radio" name="slider" className="d-none" id="s2" />
      <input type="radio" name="slider" className="d-none" id="s3" />
      <input type="radio" name="slider" className="d-none" id="s4" />
      <input type="radio" name="slider" className="d-none" id="s5" />

      <div className="cards">
        <label htmlFor="s1" id="slide1">
          <div className="card">
            <div className="image">
              <img src={Haykinq} alt="" />
              <div className="dots">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="infos">
              <span className="name">Azərbaycanda haykinq</span>
              <span className="lorem">
                Müasirliklə uyğunlaşan şəhər mühiti rahatlıq və böyük imkanların çoxluğu ilə hər kəsi cəlb etsə də,
                təbiətin verdiyi sakitliyi və sağlamlığı bir qədər uzaqlaşdırır. Elə buna görə də insanlar artıq
                gündəlik şəhər həyatına ara verib dağ gəzintilərinin verdiyi zövqün dadına çıxarmağa tələsirlər.
              </span>
            </div>
          </div>
        </label>

        <label htmlFor="s2" id="slide2">
          <div className="card">
            <div className="image">
              <img src={Plastik} alt="" />
              <div className="dots">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
              </div>
            </div>
            <div className="infos">
              <span className="name">Qlobal Turizm Plastik Təşəbbüsü</span>
              <span className="lorem">
                Azərbaycan Turizm Bürosu hazırda üzləşdiyimiz ən böyük qlobal problemlərdən biri olan ətraf mühitin
                plastik tullantılardan təmizlənməsi üzrə mübarizədə aparıcı rol oynayır.
              </span>
            </div>
          </div>
        </label>

        <label htmlFor="s3" id="slide3">
          <div className="card">
            <div className="image">
              <img src={Qartal} alt="" />
              <div className="dots">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
              </div>
            </div>
            <div className="infos">
              <span className="name">Azərbaycanda quş müşahidəsi</span>
              <span className="lorem">
                Azərbaycanın əlverişli coğrafi mövqeyi və rəngarəng quş növlərinin burada geniş yayılması ölkəmizi bütün
                quş müşahidəsi həvəskarlarının sevimli yerlərindən birinə çevirir.
              </span>
            </div>
          </div>
        </label>

        <label htmlFor="s4" id="slide4">
          <div className="card">
            <div className="image">
              <img src={Ev} alt="" />
              <div className="dots">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
              </div>
            </div>
            <div className="infos">
              <span className="name">Qədim Basqalın yeni siması</span>
              <span className="lorem">
                Qədim İpək Yolu ab-havasının duyulduğu gözoxşayan Basqal kəndində tamamlanan yenidənqurma işləri Şərqin
                bu füsunkar incisini qoruyub saxlayar gələn qonaqların zövq alacağı milli və mədəni elementləri yüksək
                səviyyəyə çatdırmışdır.
              </span>
            </div>
          </div>
        </label>

        <label htmlFor="s5" id="slide5">
          <div className="card">
            <div className="image">
              <img src={Yemek} alt="" />
              <div className="dots">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
              </div>
            </div>
            <div className="infos">
              <span className="name">Azərbaycanda Slou Fud Səyahət</span>
              <span className="lorem">
                Slou Fud fəlsəfəsi dadlı, təmiz və sosial ədalətlilik prinsiplərinə əsaslanan daha sağlam qidalanmanı
                təmin edən, milli və regional mətbəx ənənələrini qoruyub saxlayan bir yanaşmadır.
              </span>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default AboutSlider;
