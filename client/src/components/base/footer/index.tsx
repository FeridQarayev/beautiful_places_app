import React from 'react';
import footerImg from '../../../images/footerImg/Footer__img.png';
import styles from './style.module.scss';

function Footer(): JSX.Element {
  return (
    <footer>
      <div className={styles.footer__left}>
        <div className={styles.first__footer__left__img}>
          <img src={footerImg} className={styles.footer__left__img} />
        </div>
      </div>
      <div className={styles.footer__middle}>
        <p>Copyright ©2023 All Rights Reserved </p>
      </div>
      <div className={styles.footer__right}>
        <div className={styles.footer__right__logo}>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-pinterest"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
