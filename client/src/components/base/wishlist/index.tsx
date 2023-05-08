import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IRegion from '../../../interfaces/region';
import { clearAll } from '../../../redux/wishlistSlice/wishlistSlice';
import RegionSliderItem from '../region-slider-item';
import style from './style.module.scss';

function Wishlist(): JSX.Element {
  const regions = useSelector((state: { wishlists: { items: IRegion[] } }) => state.wishlists.items);
  const [filteredList, setFilteredList] = React.useState<IRegion[]>(regions);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setFilteredList(regions);
  }, [regions]);

  const searchWishlist = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const filtered = regions.filter((item) => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilteredList(filtered);
  };

  return (
    <div className={style.wishlist}>
      <section className={style.wishlist__header}></section>
      <section className={style.wishlist__body}>
        <div className={style.wishlist__body__container}>
          <div className={style.wishlist__body__container__title}>
            <h2>Mənim Bəyəndiklərim </h2>
            {regions.length == 0 ? (
              <p className={style.wishlist__body__container__title__text}>Bəyənilən Məkan Yoxdur :(</p>
            ) : (
              <div className={style.wishlist__body__container__title__actions}>
                <input type="text" onChange={searchWishlist} />
                <button
                  onClick={(): {
                    payload: undefined;
                    type: 'wishlists/clearAll';
                  } => dispatch(clearAll())}
                >
                  Təmizlə
                </button>
              </div>
            )}
          </div>
          <div className={style.wishlist__body__container__main}>
            <ul className={style.wishlist__body__container__main__list}>
              {filteredList.map((reg) => (
                <RegionSliderItem key={reg.id} region={reg} isLiked={true} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Wishlist;
