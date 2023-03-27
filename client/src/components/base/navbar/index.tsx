import React from 'react';
import style from './style.module.scss';

function Navbar(): JSX.Element {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar__content}>
        <div className={style.navbar__content__container}>
          <div className={style.navbar__content__container__logo}>
            <button className={style.navbar__content__container__logo__burger}>
              <span></span>
            </button>
            <div className={style.navbar__content__container__logo__main}>
              
            </div>
          </div>
          <div className={style.navbar__content__container__elements}></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
