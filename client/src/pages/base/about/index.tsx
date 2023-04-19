import React from 'react';
import AboutSlider from   '../../../components/base/about-slider'
import style from './style.module.scss';

function Register(): JSX.Element {
  return (
    <>
      <section className={style.section}>
        <div className={style.section__bg}></div>
        <div className={style.container}>
          <div className={style.container__content}>
            <h1>
              Azərbaycanda turizmin <span>dayanaqlı inkişafı strategiyası</span>{' '}
            </h1>
            <p></p>
            <p>
              Bu gün ölkədə dayanıqlılıq prinsiplərini tətbiq etdiyimiz layihələr və sahələrin sayı artmaqda davam edir.
              Dayanıqlı səyahət yanaşması nəinki təbiəti, xüsusilə endemik növləri mühafizə edir, həm də qlobal iqlim
              dəyişikliyi ilə mübarizə apararaq yerli icmalara dəstək verir, eləcə də turizm sənayesinin zərərli
              tullantılarını minimuma endirərək çirklənmənin azaldılmasında mühüm rol oynayır.
            </p>
            <p></p>
          </div>
        </div>
      </section>

      <section className={style.section__content}>
        <div className={style.section__content__container}>
          <div className={style.section__content__container__context}>
            <div className={style.section__content__container__context__holder}>
              <div className={style.section__heading}>
                <h2>
                  turizmin <span>dayanaqlı inkişafı</span>
                </h2>
              </div>
              <p>
                Bu gün ölkədə dayanıqlılıq prinsiplərini tətbiq etdiyimiz layihələr və sahələrin sayı artmaqda davam
                edir. Dayanıqlı səyahət yanaşması nəinki təbiəti, xüsusilə endemik növləri mühafizə edir, həm də qlobal
                iqlim dəyişikliyi ilə mübarizə apararaq yerli icmalara dəstək verir, eləcə də turizm sənayesinin zərərli
                tullantılarını minimuma endirərək çirklənmənin azaldılmasında mühüm rol oynayır.
              </p>
              <p>
                Ümumiyyətlə, dayanıqlılıq yanaşması və düşüncə tərzi turistlər üçün qeyri-adi təcrübələr və yerli
                sakinlərə öz mədəniyyətlərini və rifahını qoruyub saxlamaq imkanı yaratmaqla yanaşı, hər kəsin gələcək
                nəsillər üçün planetimizi qorumağa istiqamətləndirir. Buna misal olaraq “Slou Səyahət” (Slow Travel)
                konsepsiyasını göstərmək olar ki, bu ideya adi səyahətdən daha çox turistlərin müəyyən bir ərazinin
                ənənələri və insanları ilə daha yaxından tanış olduqları dayanıqlı səyahət yanaşmasını özündə ehtiva
                edir. Yerli və xarici bütün qonaqlar bu təcrübəni mütləq sınaqdan keçirməlidir - əminik ki, əsrarəngiz
                bölgələrimizin müxtəlifliyi və zənginliyi sizi heyran edəcək!
              </p>
              <p>Aşağıdakı linklər vasitəsilə Azərbaycanın dayanıqlı səyahəti təşviq etmə prinsipləri və necə iştirak edə biləcəyiniz haqqında tanış ola bilərsiniz.</p>
            </div>
          </div>
          
        </div>
        <AboutSlider />
      </section>
     
    </>
  );
}

export default Register;
