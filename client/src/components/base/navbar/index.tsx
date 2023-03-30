import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/navbar/logo-default-225x39.png';
import { ReactComponent as DownSvg } from '../../../svgs/angle-down-solid.svg';
import { ReactComponent as RightSvg } from '../../../svgs/angle-right-solid.svg';
import style from './style.module.scss';

function Navbar(): JSX.Element {
  const menu = useRef<HTMLDivElement>(null);
  const drop = useRef<HTMLUListElement>(null);
  const burgerMenu = (element: HTMLButtonElement): void => {
    element.classList.toggle(style.burger__active);
    menu.current?.classList.toggle(style.menu__active);
  };
  const dropdown = (element: HTMLDivElement): void => {
    element.classList.toggle(style.dropdown__arrow);
    drop.current?.classList.toggle(style.dropdown__active);
  };
  return (
    <nav className={style.navbar}>
      <div className={style.navbar__content}>
        <div className={style.navbar__content__container}>
          <div className={style.navbar__content__container__logo}>
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
                <div className={style.navbar__content__container__elements__list__item__icon}>
                  <DownSvg />
                </div>
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
      <div className={style.navbar__mobile}>
        <div className={style.navbar__mobile__panel}>
          <button onClick={(e): void => burgerMenu(e.currentTarget)} className={style.navbar__mobile__panel__burger}>
            <span></span>
          </button>
          <div className={style.navbar__mobile__panel__logo}>
            <Link to={'home'}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
        </div>
        <div className={style.navbar__mobile__elements}>
          <div ref={menu} className={style.navbar__mobile__elements__content}>
            <nav className={style.navbar__mobile__elements__content__list}>
              <li className={style.navbar__mobile__elements__content__list__item}>
                <Link className={style.dropdown__active__link} to={'#'}>
                  Home
                </Link>
              </li>
              <li className={style.navbar__mobile__elements__content__list__item}>
                <Link to={'#'}>About</Link>
              </li>
              <li className={style.navbar__mobile__elements__content__list__item}>
                <span>
                  <Link to={'#'}>Tours</Link>
                  <div onClick={(e): void => dropdown(e.currentTarget)}>
                    <DownSvg />
                  </div>
                </span>
                <ul ref={drop} className={style.navbar__mobile__elements__content__list__item__dropdown}>
                  <li>
                    <Link to={'#'}>Single Tour</Link>
                  </li>
                </ul>
              </li>
              <li className={style.navbar__mobile__elements__content__list__item}>
                <Link to={'#'}>Services</Link>
              </li>
              <li className={style.navbar__mobile__elements__content__list__item}>
                <Link to={'#'}>Pages</Link>
              </li>
              <li className={style.navbar__mobile__elements__content__list__item}>
                <Link to={'#'}>Contacts</Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
