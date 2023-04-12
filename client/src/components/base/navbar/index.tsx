import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/navbar/logo-default-225x39.png';
import { ReactComponent as DownSvg } from '../../../svgs/angle-down-solid.svg';
import { ReactComponent as RightSvg } from '../../../svgs/angle-right-solid.svg';
import style from './style.module.scss';

function Navbar(): JSX.Element {
  const menu = useRef<HTMLDivElement>(null);
  const drop = useRef<HTMLUListElement>(null);
  const content = useRef<HTMLDivElement>(null);

  const burgerMenu = (element: HTMLButtonElement): void => {
    element.classList.toggle(style.burger__active);
    menu.current?.classList.toggle(style.menu__active);
  };
  const dropdown = (element: HTMLDivElement): void => {
    element.classList.toggle(style.dropdown__arrow);
    drop.current?.classList.toggle(style.dropdown__active);
  };

  window.onscroll = (): void => {
    window.scrollY > 90 && window.screen.width > 992
      ? content.current?.classList.add(style.navbar__fixed)
      : content.current?.classList.remove(style.navbar__fixed);
  };

  return (
    <nav className={style.navbar}>
      <div ref={content} className={style.navbar__content}>
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
                <Link to={'#'}>Ana Səhifə</Link>
              </li>
              <li className={style.navbar__content__container__elements__list__item}>
                <Link to={'#'}>Məkanlar</Link>
                <div className={style.navbar__content__container__elements__list__item__icon}>
                  <DownSvg />
                </div>
                <ul className={style.navbar__content__container__elements__list__item__dropdown}>
                  <li>
                    <Link to={'#'}>
                      <RightSvg />
                      Bölgələr
                    </Link>
                  </li>
                  <li>
                    <Link to={'#'}>
                      <RightSvg />
                      Yerlər
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={style.navbar__content__container__elements__list__item}>
                <Link to={'#'}>Services</Link>
              </li>
              <li className={style.navbar__content__container__elements__list__item}>
                <Link to={'#'}>Haqqımızda</Link>
              </li>
              <li className={style.navbar__content__container__elements__list__item}>
                <Link to={'#'}>Login</Link>
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
                  Ana Səhifə
                </Link>
              </li>
              <li className={style.navbar__mobile__elements__content__list__item}>
                <span>
                  <Link to={'#'}>Məkanlar</Link>
                  <div onClick={(e): void => dropdown(e.currentTarget)}>
                    <DownSvg />
                  </div>
                </span>
                <ul ref={drop} className={style.navbar__mobile__elements__content__list__item__dropdown}>
                  <li>
                    <Link to={'#'}>Bölgələr</Link>
                  </li>
                  <li>
                    <Link to={'#'}>Yerlər</Link>
                  </li>
                </ul>
              </li>
              <li className={style.navbar__mobile__elements__content__list__item}>
                <Link to={'#'}>Services</Link>
              </li>
              <li className={style.navbar__mobile__elements__content__list__item}>
                <Link to={'#'}>Haqqımızda</Link>
              </li>
              <li className={style.navbar__mobile__elements__content__list__item}>
                <Link to={'#'}>Login</Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
