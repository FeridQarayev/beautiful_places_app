import React from 'react';
import style from './style.module.scss';

function WishList(): JSX.Element {
  return (
    <div className={style.wishlist}>
      <section className={style.wishlist__up}></section>
      <section className={style.wishlist__body}>
        <div className={style.wishlist__body__container}>
          <div className={style.wishlist__body__container__title}>
            <div className={style.wishlist__body__container__title__search}>
              <input type="text" />
            </div>
          </div>
          <div className={style.wishlist__body__container__content}></div>
        </div>
      </section>
    </div>
  );
}

export default WishList;
