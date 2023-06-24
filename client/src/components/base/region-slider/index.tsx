import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperModel from 'swiper/swiper';
import IRegion from '../../../interfaces/region';
import { ReactComponent as LeftSVG } from '../../../svgs/angle-left-solid.svg';
import { ReactComponent as RightSVG } from '../../../svgs/angle-right-solid.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';
import RegionSliderItem from '../region-slider-item';

const REGIONS: IRegion[] = [
  {
    id: 1,
    name: 'Bakı',
    ticket: '',
    description: `Qədimlik ilə müasirliyin vəhdəti olan Bakıya xoş gəlmisiniz. 
      Küləklər şəhəri Bakıda hər kəsi səmalara ucalan Alov Qüllələri, 
      YUNESKO-nun dünya mədəni irsi siyahısına salınmış İçərişəhər, 
      onlarla tarixi və mədəni abidələr və daha bir çox maraqlı məqamlar gözləyir. `,
    image: 'ed3e6d0f-0535-42a4-ac00-27b12ad64ad7.jpg',
  },
  {
    id: 2,
    name: 'Quba',
    ticket: 'Şimal marşrutu',
    description: `Quba – əzəmətli Qafqaz dağlarına açılan qapıdır. 
    Ekoturizm və açıq hava fəaliyyətlərinə üstünlük verənlər üçün Quba mükəmməl seçimdir. `,
    image: '370d8b91-5fc6-4439-aae7-680d193f1266.jpg',
  },
  {
    id: 3,
    name: 'Şəki',
    ticket: 'Şimal-qərb marşrutu',
    description: `Şəki – qədim İpək Yolu üzərində yerləşən və heyrətamiz memarlığı, 
    ləzzətli yeməkləri və mehriban insanları ilə tanınan əsl şərq şəhəridir. 
    Şəki bu gün də sanki orta əsrlərə xas cazibəsini qoruyur.`,
    image: '0ce5ef85-75b1-441e-a6eb-6b24bfacc3f9.jpg',
  },
  {
    id: 4,
    name: 'Naxçıvan',
    ticket: '',
    description: `Naxçıvan təbiəti,  gözoxşayan mənzərələri və özünəməxsus mətbəxi 
    ilə ölkəmizin digər bölgələrindən tamamilə fərqlənir. Burada qədim insan məskənlərini, 
    müxtəlif əsrlərə aid tarixi abidələri ziyarət etmək olar. Naxçıvanda sonsuz sayda sirlər və əfsanələr mövcuddur. 
    Buranın daim inkişaf edən turizm infrastrukturu sizi təəccübləndirəcək. `,
    image: 'd726511c-7657-4c8b-a20a-06ffb9e158ed.jpg',
  },
  {
    id: 5,
    name: 'Xızı',
    ticket: 'Şimal marşrutu',
    description: `Mikayıl Müşfiq və Cəfər Cabbarlı kimi dahi ədiblərin doğma yurdu olan 
    Xızının rəngarəng dağları, fərqli təbiət mənzərələri heyranedicidir. `,
    image: '1e96c2b3-ca3d-4f2b-a05a-ef9a92876a3f.jpg',
  },
  {
    id: 6,
    name: 'Qusar',
    ticket: 'Şimal marşrutu',
    description: `Azərbaycanın “şimal qapısı” ölkənin ən hündür zirvələri, yüksək səviyyəli 
    dağ-xizək kurortu, gözəl dağ kəndləri və ləzzətli ləzgi mətbəxi və bütün bunları özündə 
    birləşdirən Qafqaz dağlarının heyranedici təbiəti ilə seçilir. `,
    image: 'ce6d4c0d-0818-4965-95f7-13d9442a53d5.jpg',
  },
  {
    id: 7,
    name: 'Şamaxı',
    ticket: 'Şimal-qərb marşrutu',
    description: `Şirvanşahlar dövlətinin uzun müddət paytaxtı olmuş Şamaxı bu gün də keçmiş 
    əzəməti və təbii gözəllikləri ilə heyran edir. `,
    image: '755dc942-a8b2-4ef9-b5af-40b1f5585a2b.jpg',
  },
  {
    id: 8,
    name: 'İsmayıllı',
    ticket: 'Şimal-qərb marşrutu',
    description: `İsmayıllı tarixi abidələr və gözəl təbiətlə bərabər, dadlı təamları ilə də 
    məşhurdur. Bura gəlib bal, süd məhsulları və füsunkar şərabın dadına baxıb, Lahıc sənətkarlarının işləri ilə tanış olmaq mümkündür. `,
    image: '9d462cd3-41c8-4ae0-b922-2450d86322c3.jpg',
  },
  {
    id: 19,
    name: 'Salyan',
    ticket: 'Cənub-şərq marşrutu',
    description: `Salyandan Ərdəbilə, Təbrizə, Dərbəndə və başqa şəhərlərə balıq, kürü, Babazənən dağı yaxınlığından 
    çıxarılan neft və duz ixrac olunurdu. Rayonda 16 yaşayış məntəqəsi var.`,
    image: '375px-Salyan_rayonu_2011_(16).jpg',
  },
  {
    id: 9,
    name: 'Qəbələ',
    ticket: 'Şimal-qərb marşrutu',
    description: `Şəhər həyatından bezmisinizsə, dərhal Qəbələyə yollanmalısınız. Burada şam meşələrinin 
    əhatəsində ruhunuz tamamilə dincələcək. `,
    image: 'b6c4153e-fe35-459b-afb0-2c8e9b9e0fa2.jpg',
  },
  {
    id: 10,
    name: 'Qax',
    ticket: 'Şimal-qərb marşrutu',
    description: `Qafqaz dağlarının ən gözəl guşələrindən biri də Qaxdır. Bura istər qış, 
    istərsə də yayda gözəldir. `,
    image: '7dbcad55-e647-4399-b794-846b0aa91021.jpg',
  },
  {
    id: 11,
    name: 'Zaqatala',
    ticket: 'Şimal-qərb marşrutu',
    description: `Azərbaycanın multikultural dəyərlərə sahib bölgələrindən biri olan Zaqatala 
    tarixi abidələrin zənginliyi və bir çox maraqlı kulinariya sirləri ilə seçilir. `,
    image: 'fb5f5a04-84a6-427f-abf0-28513deff3b1.jpg',
  },
  {
    id: 12,
    name: 'Gəncə',
    ticket: 'Qərb marşrutu',
    description: `Dahi Azərbaycan şairi Nizaminin vətəni olan Gəncə tarixi şəhər olmaqla bərabər, müasir və 
    gənc ruhu ilə seçilir. Bu şəhərdə qədim dövrlərdən qalma abidələrlə yanaşı, xanlıqlar və Azərbaycan Xalq Cümhuriyyətinə aid irs də qorunur. `,
    image: 'dda23841-c4b5-4745-b373-b450122beeac.jpg',
  },
  {
    id: 13,
    name: 'Göygöl',
    ticket: 'Qərb marşrutu',
    description: `Göygöl şəhəri və rayon ərazisindəki əsrarəngiz təbiət turistlərin diqqətini çəkməyə bilməz. 
    Bu gün də həm tarixi məkan, həm də təbiətə səyahət etmək istəyənlər Göygölə yollanır. `,
    image: 'c5c1186d-731c-4fab-a44c-6cebaae00d62.jpg',
  },
  {
    id: 14,
    name: 'Naftalan',
    ticket: 'Qərb marşrutu',
    description: `Naftalan şəhəri Gəncədən bir saatlıq məsafədə yerləşir. Şəhər əsrlər boyu buradan çıxarılan 
    və müxtəlif xəstəliklərin müalicəsində istifadə olunan nadir neft növü ilə tanınır. `,
    image: 'bfc074cb-5233-4fa9-bf06-52926e5f58a8.jpg',
  },
  {
    id: 15,
    name: 'Şəmkir',
    ticket: 'Qərb marşrutu',
    description: `Təzə, tər tərəvəzlər dedikdə, ilk növbədə Şəmkir rayonu yada düşür. Şəmkir həmçinin qədim 
    abidələri, o cümlədən orijinal parkları ilə seçilir. `,
    image: '101a4793-ca57-45f1-a941-ba64f8598017.png',
  },
  {
    id: 16,
    name: 'Lənkəran',
    ticket: 'Cənub marşrutu',
    description: `Əgər təbiətdə dincəlməyi sevirsinizsə, Xəzər dənizi və yamyaşıl Talış dağları arasında 
    yerləşən və nadir təbiəti ilə seçilən Lənkərana səfər edin. `,
    image: '004fed69-2b12-40d7-ae3a-546689eacfa5.jpg',
  },
  {
    id: 17,
    name: 'Lerik',
    ticket: 'Cənub marşrutu',
    description: `Lerikin “uzunömürlülər diyarı” kimi tanınmasına səbəb bu yerlərin saf 
    və sakit təbiətidir. `,
    image: '10b03803-9922-40a6-a518-1d8e89373597.jpg',
  },
  {
    id: 18,
    name: 'Qarabağ',
    ticket: '',
    description: `Qarabağ hər bir azərbaycanlının qəlbindədir. Bu qədim diyarımız həm də 
    mədəniyyətin beşiyi sayılır. Qarabağ - qədim alban məbədlərindən dünyanın yeganə Çörək 
    muzeyinə kimi tarixi abidələr, dahi şəxsiyyətlər və Kiçik Qafqaz dağlarının füsunkar təbiətidir. `,
    image: 'd445c6d6-a000-428e-801c-397b0138d52a.jpg',
  },
];

function RegionSlider(): JSX.Element {
  const swiperRef = React.useRef<SwiperModel>();
  const [regions, setRegions] = React.useState<IRegion[]>([]);
  const wishlists: IRegion[] | null = JSON.parse(String(localStorage.getItem('wishlist')));

  React.useEffect(() => {
    setRegions(REGIONS);
  });
  return (
    <section className="region_slider">
      <div className="container">
        <h2 className="title">
          hara getmək <span>istəyirsiniz</span>
        </h2>
        <div className="region_slider__content">
          <Swiper
            slidesPerView={4}
            direction="horizontal"
            loop={true}
            spaceBetween={0}
            onBeforeInit={(swiper: SwiperModel): void => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
              1700: {
                slidesPerView: 5,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {regions.map((reg) => (
              <SwiperSlide key={reg.id}>
                <RegionSliderItem
                  region={reg}
                  isLiked={wishlists?.find((x) => x.id == reg.id) === undefined ? false : true}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slider_left" onClick={(): void => swiperRef.current?.slidePrev()}>
            <LeftSVG />
          </div>
          <div className="slider_right" onClick={(): void => swiperRef.current?.slideNext()}>
            <RightSVG />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegionSlider;
