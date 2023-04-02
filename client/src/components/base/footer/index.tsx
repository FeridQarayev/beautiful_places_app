import React from 'react';
import footer from '../../../images/footer/BackpackStory.png';
import { ReactComponent as FacebookSvg } from '../../../svgs/facebook.svg';
import { ReactComponent as InstagramSvg } from '../../../svgs/instagram.svg';
import { ReactComponent as PinterestSvg } from '../../../svgs/pinterest.svg';
import { ReactComponent as TwitterSvg } from '../../../svgs/twitter.svg';
import styles from './style.module.css';

function Footer(): JSX.Element {
  return (
    <footer>
      <div className={styles.footer__left}>
        <div className={styles.first__footer__left__img}>
          <img src={footer} className={styles.footer__left__img} />
          <p>Copyright ©2023 All Rights Reserved </p>
        </div>
      </div>

      <div className={styles.footer__right}>
        <FacebookSvg />
        <InstagramSvg />
        <PinterestSvg />
        <TwitterSvg />
      </div>
    </footer>
  );
}

export default Footer;
