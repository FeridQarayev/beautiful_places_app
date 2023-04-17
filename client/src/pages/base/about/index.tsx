import React from 'react';
import style from './style.module.scss';

function Register(): JSX.Element {
  return (
    <section className={style.section}>
      <div className={style.section__bg}></div>
      <div className={style.container}>
        <div className={style.container__content}>
            <h1>Azərbaycanda turizmin <span>dayanaqlı inkişafı strategiyası</span> </h1>
            <p></p>
            <p>Bu gün ölkədə dayanıqlılıq prinsiplərini tətbiq etdiyimiz layihələr və sahələrin sayı artmaqda davam edir. Dayanıqlı səyahət yanaşması nəinki təbiəti, xüsusilə endemik növləri mühafizə edir, həm də qlobal iqlim dəyişikliyi ilə mübarizə apararaq yerli icmalara dəstək verir, eləcə də turizm sənayesinin zərərli tullantılarını minimuma endirərək çirklənmənin azaldılmasında mühüm rol oynayır.</p>
        </div>
      </div>
    </section>
  );
}

export default Register;
