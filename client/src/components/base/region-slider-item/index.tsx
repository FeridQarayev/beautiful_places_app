import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import IRegion from '../../../interfaces/region';
import { addWishlist } from '../../../redux/wishlistSlice/wishlistSlice';
import { ReactComponent as HeartSVG } from '../../../svgs/heart-regular.svg';
import style from './style.module.css';
import 'swiper/css';

function RegionSliderItem(data: { region: IRegion; isLiked: boolean }): JSX.Element {
  const dispatch = useDispatch();
  const addWishlists = (e: React.MouseEvent<HTMLDivElement> | undefined): void => {
    e?.currentTarget.classList.toggle(style.added);
    dispatch(addWishlist(data.region));
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
              onClick={addWishlists}
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
