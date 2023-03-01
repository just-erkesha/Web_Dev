export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  url:string;
  category:string;
  like: number;
}

export const products = [
  {
    id: 1,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/ha5/33399277027358/thermomix-tm6-belyj-101073636-1-Container.jpg',
    name: 'Thermomix TM6',
    price: 885000,
    description: 'Термомикс ТМ6 — инновационный компактный супермощный прибор, объединяющий в себе функции более чем 20 устройств. С ним вы можете измельчать, взбивать, взвешивать, молоть, вымешивать тесто одним нажатием кнопки.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/thermomix-tm6-belyi-101073636/?c=750000000#!/item',
    category: 'foodpro',
    like: 0
  },
  {
    id: 2,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h43/hc1/49954989473822/tri-tower-tt-g18-104424324-1.jpg',
    name: 'Tri Tower TT-G18',
    price: 23456,
    description: 'Мясорубка домашняя TTG18 в стильном дизайне станет прекрасной помощницей на кухне у любой хозяйки.  Удобная и простая в эксплуатации.',
    rating: 4.5,
    url:'https://kaspi.kz/shop/p/tri-tower-tt-g18-chernyi-serebristyi-104424324/?c=750000000#!/item',
    category: 'foodpro',
    like: 0
  },
  {
    id: 3,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9c/h92/31944796536862/bosch-mfw-3520-belyj-3200513-1-Container.jpg',
    name: 'Bosch MFW3520W',
    price: 44438 ,
    description: 'Мясорубка Bosch MFW3520W в белом стильном корпусе станет полезным приобретением для каждой хозяйки. Мощность данного прибора повысилась до 1500 Вт, что положительно сказалось на его производительности.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/bosch-mfw3520w-belyi-3200513/?c=750000000#!/item',
    category: 'foodpro',
    like: 0
  },
  {
    id: 4,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/h16/48249172754462/arg-mg-431-103433087-1.jpg',
    name: 'ARG MG-431 белый',
    price: 14990,
    description: 'Мясорубка ARG MG-431 в стильном корпусе приятна в использовании и удобна в хранении.',
    rating: 4.5,
    url:'https://kaspi.kz/shop/p/arg-mg-431-belyi-103433087/?c=750000000#!/item',
    category: 'foodpro',
    like: 0
  },
  {
    id: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h9e/50546061082654/dauscher-dmg-2200lx-serebristyj-3200574-1-Container.jpg',
    name: 'DAUSCHER DMG 2200LX',
    price: 49300 ,
    description: 'Электромясорубка DAUSCHER DMG-2200LX-TURBO поможет быстро приготовить любое блюдо из фарша.',
    rating: 4.5,
    url:'https://kaspi.kz/shop/p/dauscher-dmg-2200lx-serebristyi-3200574/?c=750000000#!/item',
    category: 'foodpro',
    like: 0
  },
  {
    id: 6,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/ha0/31536867213342/aksion-m-33-01-belyj-3200360-1-Container.jpg',
    name: 'Аксион М 33.01 белый',
    price: 36980,
    description: 'Мясорубка электрическая Аксион М33.01 благодаря высокой мощности (1500 Вт - максимальный показатель) обеспечит получение до 1.7 кг фарша за минуту непрерывной работы.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/aksion-m-33-01-belyi-3200360/?c=750000000#!/item',
    category: 'foodpro',
    like: 0
  },
  {
    id: 7,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/h7a/51242613342238/jedani-mycook-touch-cernyj-100668647-1-Container.jpg',
    name: 'Jedani Mycook Touch',
    price: 850000 ,
    description: 'Кухонный робот автомат Mycook Touch Jedani для комфорта и удовольствия на кухне.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/jedani-mycook-touch-seryi-100668647/?c=750000000#!/item',
    category: 'foodpro',
    like: 0
  },
  {
    id: 8,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/he0/44869938544670/arg-mg-437-cernyj-102136451-1-Container.jpg',
    name: 'ARG MG-437',
    price: 24990 ,
    description: ' Электромясорубка ARG MG-437 станет вашим верным помощником: благодаря мощному мотору она производит 2 кг фарша в минуту',
    rating: 4.5,
    url:'https://kaspi.kz/shop/p/arg-mg-437-chernyi-102136451/?c=750000000#!/item',
    category: 'foodpro',
    like: 0
  },
  {
    id: 9,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/h43/50474350739486/arnica-prokit-444-plus-belyi-100833277-1.jpg',
    name: 'ARNICA Prokit 444 Plus',
    price: 57890,
    description: 'Arnica Prokit 444 Plus - это великолепно выглядящий, компактный прибор, который облегчит вашу работу на кухне, станет прекрасным помощником в повседневном приготовлении пищи и праздничной готовке.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/arnica-prokit-444-plus-belyi-100833277/?c=750000000#!/item',
    category: 'foodpro',
    like: 0
  },
  {
    id: 10,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/hc8/33543472480286/kenwood-kcl95-004si-cooking-chef-xl-serebristyj-100883789-1-Container.jpg',
    name: 'KENWOOD KCL95.004SI Cooking Chef XL',
    price: 649990,
    description: 'Оснащенная широкой чашей, эта кухонная машина может не только смешивать, но и разогревать ингредиенты.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/kenwood-kcl95-004si-cooking-chef-xl-serebristyi-100883789/?c=750000000#!/item',
    category: 'foodpro',
    like: 0
  },
  {
    id: 11,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbe/h1f/69222679248926/fresh-juice-portable-blender-stakan-blend12-belyi-prozrachnyi-105722831-1.jpg',
    name: 'Fresh Juice Blend12',
    price: 11949,
    description: 'Портативный мини блендер Fresh Juice достаточно мощный, чтобы измельчать лед, и достаточно компактный, чтобы его можно было взять с собой в дорогу.',
    rating: 4.5,
    url:'https://kaspi.kz/shop/p/fresh-juice-blend12-belyi-105722831/?c=750000000#!/item',
    category: 'blend',
    like: 0
  },
  {
    id: 12,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h81/49221585633310/bosch-msm-2650b-black-3100958-1-Container.jpg',
    name: 'Bosch MSM2650B',
    price: 22990,
    description: 'Блендер Bosch MSM2650B мощностью 600 Вт станет солидным подспорьем на кухне людей, которые любят готовить и знают в этом толк.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/bosch-msm2650b-3100958/?c=750000000#!/item',
    category: 'blend',
    like: 0
  },
  {
    id: 13,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6c/hff/51497185247262/fresh-juice-portable-105279735-1.jpg',
    name: 'Fresh Juice Portable',
    price: 17552,
    description: 'Блендер Fresh Juice достаточно мощный, чтобы измельчать лед, и достаточно компактный, чтобы его можно было взять с собой в дорогу.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/fresh-juice-portable-105279735/?c=750000000#!/item',
    category: 'blend',
    like: 0
  },
  {
    id: 14,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/hda/33185532018718/arnica-diva-trend-chernyi-rozovyi-100701067-1.jpg',
    name: 'ARNICA Diva Trend ',
    price: 28740,
    description: 'Блендер Diva Trend Rose станет лучшим помощником на вашей кухне благодаря эргономичному дизайну и безопасному использованию.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/arnica-diva-trend-chernyi-rozovyi-100701067/?c=750000000#!/item',
    category: 'blend',
    like: 0
  },
  {
    id: 15,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h54/48005065965598/midea-mc-bl351-103316746-1.jpg',
    name: 'Midea MC-BL351',
    price: 15780,
    description: ' Благодаря нашим деталям, которые можно мыть в посудомоечной машине, и полностью водостойкому корпусу уборка становится проще простого.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/midea-mc-bl351-chernyi-103316746/?c=750000000#!/item',
    category: 'blend',
    like: 0
  },
  {
    id: 16,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/hf3/32725893414942/centek-st-1432-cernyj-100295343-1-Container.jpg',
    name: 'CENTEK СТ-1432',
    price: 10993,
    description: 'Тостер Centek СТ-1432 является стильным и надежным решением для любителей аппетитных тостов с хрустящей корочкой.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/centek-st-1432-chernyi-100295343/?c=750000000#!/item',
    category: 'toast',
    like: 0
  },
  {
    id: 17,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h32/h7e/49848821448734/vitek-vt-7169-cernyj-101964651-1-Container.jpg',
    name: 'Vitek VT-716',
    price: 9850,
    description: 'Если в вашем доме появится тостер VITEK VT-7169 с мощностью 750 Вт, то каждое утро вы будете наслаждаться чудесным ароматом идеально подрумяненных ломтиков хлеба.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/vitek-vt-7169-chernyi-101964651/?c=750000000#!/item',
    category: 'toast',
    like: 0
  },
  {
    id: 18,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc5/h0e/45915700658206/sokany-hjt-022-102372874-1-Container.jpg',
    name: 'SOKANY HJT-022',
    price: 8000,
    description: 'Тостер кухонный Sokany HJT-022. Мощность 700W. Отличное решение для дома и офиса. Приготовьте себе отличный, вкусный, поджаристый сэндвич.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/sokany-hjt-022-belyi-102372874/?c=750000000#!/item',
    category: 'toast',
    like: 0
  },
  {
    id: 19,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he6/h78/50851860545566/proliss-pro-009-104908138-1.jpg',
    name: 'Proliss PRO-009',
    price: 9131,
    description: 'тип управления: механическое, количество тостов: 2, поддон для крошек: Да, материал корпуса: пластик, цвет: черный',
    rating: 5,
    url:'https://kaspi.kz/shop/p/proliss-pro-009-chernyi-104908138/?c=750000000#!/item',
    category: 'toast',
    like: 0
  },
  {
    id: 20,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/h9b/32731809415198/centek-st-1432-serebristyi-100295326-1.jpg',
    name: 'CENTEK СТ-1432',
    price: 13378,
    description: 'Тостер Centek СТ-1432 является стильным и надежным решением для любителей аппетитных тостов с хрустящей корочкой. С его помощью вы сможете быстро готовить 2 тоста.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/centek-st-1432-belyi-100295326/?c=750000000#!/item',
    category: 'toast',
    like: 0
  },
  {
    id: 21,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h79/32621809172510/centek-ct-1209-serebristyi-100303380-1.jpg',
    name: 'CENTEK CT-1209',
    price: 19486,
    description: 'Центробежная соковыжималка Centek CT-1209 станет отличным дополнением к набору вашей мелкой бытовой техники для кухни и даст возможность каждый день радовать домочадцев свежевыжатыми соками.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/centek-ct-1209-serebristyi-100303380/?c=750000000#!/item',
    category: 'juice',
    like: 0
  },
  {
    id: 22,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3c/h12/31662675034142/artel-art-jm-613-silver-black-4900327-1-Container.jpg',
    name: 'Artel ART-JM-613',
    price: 20490,
    description: 'тип: центробежная; резервуар для сока: встроенный; объем резервуара: 0.5 л; система прямой подачи сока: Нет',
    rating: 5,
    url:'https://kaspi.kz/shop/p/artel-art-jm-613-serebristyi-chernyi-4900327/?c=750000000#!/item',
    category: 'juice',
    like: 0
  },
  {
    id: 23,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he2/hc4/50015185469470/dexp-jc-1501-wje-f2-104457786-1.jpg',
    name: 'DEXP JC-1501 WJE-F2',
    price: 20990,
    description: 'тип: шнековая; резервуар для сока: стакан; объем резервуара: 0.55 л; система прямой подачи сока: Да; количество скоростей: 1',
    rating: 5,
    url:'https://kaspi.kz/shop/p/dexp-jc-1501-wje-f2-chernyi-104457786/?c=750000000#!/item',
    category: 'juice',
    like: 0
  },
  {
    id: 24,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h82/h3a/33925432573982/kitfort-kt-1110-1-zelenyj-101387309-1-Container.jpg',
    name: 'Kitfort КТ-1110-1',
    price: 55990,
    description: 'тип: горизонтальная шнековая соковыжималка; резервуар для сока: стакан; объем резервуара: 1.1 л; система прямой подачи сока: Нет',
    rating: 5,
    url:'https://kaspi.kz/shop/p/kitfort-kt-1110-1-zelenyi-101387309/?c=750000000#!/item',
    category: 'juice',
    like: 0
  },
  {
    id: 25,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/hb7/49421566312478/arg-w-je387-104159157-1.jpg',
    name: 'ARG W-JE387',
    price: 22980,
    description: 'тип: центробежная; резервуар для сока: стакан; объем резервуара: 0.75 л',
    rating: 5,
    url:'https://kaspi.kz/shop/p/arg-w-je387-chernyi-serebristyi-104159157/?c=750000000#!/item',
    category: 'juice',
    like: 0
  }
];

