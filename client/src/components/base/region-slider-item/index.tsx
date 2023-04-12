import React from 'react';
import { Link } from 'react-router-dom';
import IRegion from '../../../interfaces/region';
import { ReactComponent as HeartSVG } from '../../../svgs/heart-regular.svg';
import style from './style.module.css';
import 'swiper/css';

function RegionSliderItem(data: { region: IRegion; isLiked: boolean }): JSX.Element {
  const addWishlist = (e: React.MouseEvent<HTMLDivElement> | undefined): void => {
    const regions: IRegion[] | null = JSON.parse(String(localStorage.getItem('wishlist')));
    e?.currentTarget.classList.toggle(style.added);
    const prevRegion = regions?.find((x) => x.id === data.region.id);
    if (prevRegion !== undefined) {
      const prevNumber = regions?.indexOf(prevRegion);
      prevNumber !== undefined && regions?.splice(prevNumber, 1);
      localStorage.setItem('wishlist', JSON.stringify(regions));
    } else {
      regions !== null
        ? localStorage.setItem('wishlist', JSON.stringify([...regions, data.region]))
        : localStorage.setItem('wishlist', JSON.stringify([data.region]));
    }
  };
  return (
    <Link to={'#'}>
      <div className={style.region}>
        <div className={style.region_media}>
          <img src={require(`../../../images/regions/${data.region.image}`)} alt="" />
          <div className={style.region_media_text}></div>
          <p>{data.region.name}</p>
        </div>
        <div className={style.region_hover}>
          <div className={style.region_up}>
            <div
              className={data.isLiked ? [style.region_heart_logo, style.added].join(' ') : style.region_heart_logo}
              onClick={addWishlist}
            >
              <HeartSVG />
            </div>
          </div>
          <div className={style.region_down}>
            <h3>{data.region.name}</h3>
            <p>
              {data.region.description}
              <span>Daha ətraflı</span>
            </p>
            <div className={style.region_footer}>
              <p className={style.region_footer_left}>
                {data.region.name}, <br /> {data.region.ticket}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RegionSliderItem;
