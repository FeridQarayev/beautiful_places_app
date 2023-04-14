import React from 'react';
import BlogPosts1 from '../../../images/blog_posts/16b90c23-c370-4b04-aa67-e383e55955f3.jpg';
import BlogPosts2 from '../../../images/blog_posts/4ab582d3-79ee-46f1-93bf-1f82eeecdc0f.jpg';
import BlogPosts3 from '../../../images/blog_posts/9520645d-b57f-4226-832b-da5368e297ce.jpg';
import styles from './style.module.scss';

function Blogs(): JSX.Element {
  return (
    <section className={styles.blog__posts}>
      <div className={styles.container}>
        <h2 className={styles.container__title}>OUR BLOG POSTS</h2>
        <div className={styles.container__cards}>
          <div className={styles.container__card}>
            <div className={styles.container__card__img}>
              <img src={BlogPosts1} />
            </div>
            <div className={styles.container__card__content}>
              <span>Aprel 27,2023</span>
              <h5>
                <a href="#" className={styles.container__link}>
                  Formula 1 Azərbaycan Qran Prisi 2023
                </a>
              </h5>
              <p>
                Şərq ilə Qərbin koloritinin cəmləşdiyi Bakı Formula 1 Azərbaycan Qran Prisinin 2023-cü il mövsümündə
                mötəbər beynəlxalq idman yarışına ev sahibliyi edəcək.
              </p>
            </div>
          </div>
          <div className={styles.container__card}>
            <div className={styles.container__card__img}>
              <img src={BlogPosts2} />
            </div>
            <div className={styles.container__card__content}>
              <span>Aprel 30,2023</span>
              <h5>
                <a href="#" className={styles.container__link}>
                  “DZİVA” adlı sirk şousu
                </a>
              </h5>
              <p>
                Mart ayının 1-dən etibarən dünya sirk elitası Bakı Dövlət Sirkinə toplaşacaq. Azərbaycanlı sirk ustası
                Allahverdi İsrafilovun təqdimatında “DZİVA” adlı sirk şousu hər bir tamaşaçını öz fərqliliyi ilə heyran
                edəcək.
              </p>
            </div>
          </div>
          <div className={styles.container__card}>
            <div className={styles.container__card__img}>
              <img src={BlogPosts3} />
            </div>
            <div className={styles.container__card__content}>
              <span>Aprel 22,2023</span>
              <h5>
                <a href="#" className={styles.container__link}>
                  Edvin Marton konserti
                </a>
              </h5>
              <p>
                Konsertdə Edvin Marton Rok Simfonik albomunun ən böyük hitlərini ifa edəcək. Vivaldidən Metallica-ya
                qədər bütün hit mahnılar səslənəcək.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
