import React from 'react';
import BlogPosts1 from '../../../images/blog__posts/blog-post-1.jpg';
import BlogPosts2 from '../../../images/blog__posts/blog-post-2.jpg';
import BlogPosts3 from '../../../images/blog__posts/blog-post-3.jpg';
import styles from './style.module.css';

function Footer(): JSX.Element {
  return (
    <section className={styles.blog__posts}>
      <div className={styles.container}>
        <h2 className={styles.container__title}>OUR BLOG POSTS</h2>
        <div className={styles.container__cards}>
          <div className={styles.container__first__card}>
            <div className={styles.container__card__img}>
              <img src={BlogPosts1} />
            </div>
            <div className={styles.container__card__content}>
              <span>January 1,2021</span>
              <h5>
                <a href="#" className={styles.container__link}>
                  5 PLACES TO VISIT WINTER
                </a>
              </h5>
              <p>
                New Year and Christmas holidays is a great occasion to travel somewhere. You can either go somewhere
                with you family or friends, or even alone....
              </p>
            </div>
          </div>
          <div className={styles.container__second__card}>
            <div className={styles.container__card__img}>
              <img src={BlogPosts2} />
            </div>
            <div className={styles.container__card__content}>
              <span>January 1,2021</span>
              <h5>
                <a href="#" className={styles.container__link}>
                  BUDGET TRIPS FOR WINTER BREAK
                </a>
              </h5>
              <p>
                Budget trip doesn’t mean boring! There are numerous places worth visiting even if you don’t have much
                money. The golden sands of Florida and California...
              </p>
            </div>
          </div>
          <div className={styles.container__third__card}>
            <div className={styles.container__card__img}>
              <img src={BlogPosts3} />
            </div>
            <div className={styles.container__card__content}>
              <span>January 1,2021</span>
              <h5>
                <a href="#" className={styles.container__link}>
                  WALKING TO MACHU PICCHU, PERU
                </a>
              </h5>
              <p>
                Machu Picchu is mysterious and attractive place for all tourists visiting Peru. If you agree to take
                this path you need to know more information...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
