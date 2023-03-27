import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/navbar/logo-default-225x39.png';
import DownSvg from '../../../svgs/angle-down-solid.svg';
import RightSvg from '../../../svgs/angle-right-solid.svg';
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
              <Link to={'home'}>
                <img src={logo} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className={style.navbar__content__container__elements}>
            <ul className={style.navbar__content__container__elements__list}>
              <li className={style.navbar__content__container__elements__list__item}>
                <Link to={'#'}>Home</Link>
              </li>
              <li className={style.navbar__content__container__elements__list__item}>
                <Link to={'#'}>About</Link>
              </li>
              <li className={style.navbar__content__container__elements__list__item}>
                <Link to={'#'}>Tours</Link>
                <DownSvg />
                <ul className={style.navbar__content__container__elements__list__item__dropdown}>
                  <li>
                    <Link to={'#'}>
                      <RightSvg />
                      Single Tour
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={style.navbar__content__container__elements__list__item}>
                <Link to={'#'}>Services</Link>
              </li>
              <li className={style.navbar__content__container__elements__list__item}>
                <Link to={'#'}>Pages</Link>
              </li>
              <li className={style.navbar__content__container__elements__list__item}>
                <Link to={'#'}>Contacts</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
