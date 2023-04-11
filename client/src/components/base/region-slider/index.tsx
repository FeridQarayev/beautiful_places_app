import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperModel from 'swiper/swiper';
import IRegion from '../../../interfaces/region';
import { ReactComponent as LeftSVG } from '../../../svgs/angle-left-solid.svg';
import { ReactComponent as RightSVG } from '../../../svgs/angle-right-solid.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';
import RegionSliderItem from '../region-slider-item';

const REGIONS: IRegion[] = [
  {
    id: 1,
    name: 'Şəki',
    ticket: 'Şimal-qərb marşrutu',
    description: `Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, 
    ləzzətli yeməkləri və mehriban insanları ilə tanınan əsl şərq şəhəridir. 
    Şəki bu gün də sanki orta əsrlərə xas cazibəsini qoruyur.`,
    image: '0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg',
  },
  {
    id: 2,
    name: 'Şəki',
    ticket: 'Şimal-qərb marşrutu',
    description: `Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, 
    ləzzətli yeməkləri və mehriban insanları ilə tanınan əsl şərq şəhəridir. 
    Şəki bu gün də sanki orta əsrlərə xas cazibəsini qoruyur.`,
    image: '0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg',
  },
  {
    id: 3,
    name: 'Şəki',
    ticket: 'Şimal-qərb marşrutu',
    description: `Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, 
    ləzzətli yeməkləri və mehriban insanları ilə tanınan əsl şərq şəhəridir. 
    Şəki bu gün də sanki orta əsrlərə xas cazibəsini qoruyur.`,
    image: '0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg',
  },
  {
    id: 4,
    name: 'Şəki',
    ticket: 'Şimal-qərb marşrutu',
    description: `Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, 
    ləzzətli yeməkləri və mehriban insanları ilə tanınan əsl şərq şəhəridir. 
    Şəki bu gün də sanki orta əsrlərə xas cazibəsini qoruyur.`,
    image: '0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg',
  },
  {
    id: 5,
    name: 'Şəki',
    ticket: 'Şimal-qərb marşrutu',
    description: `Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, 
    ləzzətli yeməkləri və mehriban insanları ilə tanınan əsl şərq şəhəridir. 
    Şəki bu gün də sanki orta əsrlərə xas cazibəsini qoruyur.`,
    image: '0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg',
  },
  {
    id: 6,
    name: 'Şəki',
    ticket: 'Şimal-qərb marşrutu',
    description: `Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, 
    ləzzətli yeməkləri və mehriban insanları ilə tanınan əsl şərq şəhəridir. 
    Şəki bu gün də sanki orta əsrlərə xas cazibəsini qoruyur.`,
    image: '0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg',
  },
  {
    id: 7,
    name: 'Şəki',
    ticket: 'Şimal-qərb marşrutu',
    description: `Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, 
    ləzzətli yeməkləri və mehriban insanları ilə tanınan əsl şərq şəhəridir. 
    Şəki bu gün də sanki orta əsrlərə xas cazibəsini qoruyur.`,
    image: '0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg',
  },
  {
    id: 8,
    name: 'Şəki',
    ticket: 'Şimal-qərb marşrutu',
    description: `Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, 
    ləzzətli yeməkləri və mehriban insanları ilə tanınan əsl şərq şəhəridir. 
    Şəki bu gün də sanki orta əsrlərə xas cazibəsini qoruyur.`,
    image: '0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg',
  },
  {
    id: 9,
    name: 'Şəki',
    ticket: 'Şimal-qərb marşrutu',
    description: `Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, 
    ləzzətli yeməkləri və mehriban insanları ilə tanınan əsl şərq şəhəridir. 
    Şəki bu gün də sanki orta əsrlərə xas cazibəsini qoruyur.`,
    image: '0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg',
  },
  {
    id: 10,
    name: 'Şəki',
    ticket: 'Şimal-qərb marşrutu',
    description: `Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, 
    ləzzətli yeməkləri və mehriban insanları ilə tanınan əsl şərq şəhəridir. 
    Şəki bu gün də sanki orta əsrlərə xas cazibəsini qoruyur.`,
    image: '0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg',
  },
];

function RegionSlider(): JSX.Element {
  const swiperRef = React.useRef<SwiperModel>();
  const [regions, setRegions] = React.useState<IRegion[]>([]);

  React.useEffect(() => {
    setRegions(REGIONS);
  });
  return (
    <section className="region_slider">
      <div className="container">
        <h2 className="title">
          hara getmək <span>istəyirsiniz</span>
        </h2>
        <div className="region_slider__content">
          <Swiper
            slidesPerView={4}
            direction="horizontal"
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
            {regions.map((reg) => (
              <SwiperSlide key={reg.id}>
                <RegionSliderItem region={reg} />
              </SwiperSlide>
            ))}
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
