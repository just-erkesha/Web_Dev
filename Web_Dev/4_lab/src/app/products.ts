export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  url:string;

}

export const products = [
  {
    id: 1,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/ha5/33399277027358/thermomix-tm6-belyj-101073636-1-Container.jpg',
    name: 'Thermomix TM6',
    price: 885000,
    description: 'Термомикс ТМ6 — инновационный компактный супермощный прибор, объединяющий в себе функции более чем 20 устройств. С ним вы можете измельчать, взбивать, взвешивать, молоть, вымешивать тесто одним нажатием кнопки.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/thermomix-tm6-belyi-101073636/?c=750000000#!/item'
  },
  {
    id: 2,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h43/hc1/49954989473822/tri-tower-tt-g18-104424324-1.jpg',
    name: 'Tri Tower TT-G18',
    price: 23456,
    description: 'Мясорубка домашняя TTG18 в стильном дизайне станет прекрасной помощницей на кухне у любой хозяйки.  Удобная и простая в эксплуатации.',
    rating: 4.5,
    url:'https://kaspi.kz/shop/p/tri-tower-tt-g18-chernyi-serebristyi-104424324/?c=750000000#!/item'
  },
  {
    id: 3,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9c/h92/31944796536862/bosch-mfw-3520-belyj-3200513-1-Container.jpg',
    name: 'Bosch MFW3520W',
    price: 44438 ,
    description: 'Мясорубка Bosch MFW3520W в белом стильном корпусе станет полезным приобретением для каждой хозяйки. Мощность данного прибора повысилась до 1500 Вт, что положительно сказалось на его производительности.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/bosch-mfw3520w-belyi-3200513/?c=750000000#!/item'
  },
  {
    id: 4,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/h16/48249172754462/arg-mg-431-103433087-1.jpg',
    name: 'ARG MG-431 белый',
    price: 14990,
    description: 'Мясорубка ARG MG-431 в стильном корпусе приятна в использовании и удобна в хранении.',
    rating: 4.5,
    url:'https://kaspi.kz/shop/p/arg-mg-431-belyi-103433087/?c=750000000#!/item'
  },
  {
    id: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h9e/50546061082654/dauscher-dmg-2200lx-serebristyj-3200574-1-Container.jpg',
    name: 'DAUSCHER DMG 2200LX',
    price: 49300 ,
    description: 'Электромясорубка DAUSCHER DMG-2200LX-TURBO поможет быстро приготовить любое блюдо из фарша.',
    rating: 4.5,
    url:'https://kaspi.kz/shop/p/dauscher-dmg-2200lx-serebristyi-3200574/?c=750000000#!/item'
  },
  {
    id: 6,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/ha0/31536867213342/aksion-m-33-01-belyj-3200360-1-Container.jpg',
    name: 'Аксион М 33.01 белый',
    price: 36980,
    description: 'Мясорубка электрическая Аксион М33.01 благодаря высокой мощности (1500 Вт - максимальный показатель) обеспечит получение до 1.7 кг фарша за минуту непрерывной работы.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/aksion-m-33-01-belyi-3200360/?c=750000000#!/item'
  },
  {
    id: 7,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/h7a/51242613342238/jedani-mycook-touch-cernyj-100668647-1-Container.jpg',
    name: 'Jedani Mycook Touch',
    price: 850000 ,
    description: 'Кухонный робот автомат Mycook Touch Jedani для комфорта и удовольствия на кухне.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/jedani-mycook-touch-seryi-100668647/?c=750000000#!/item'
  },
  {
    id: 8,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/he0/44869938544670/arg-mg-437-cernyj-102136451-1-Container.jpg',
    name: 'ARG MG-437',
    price: 24990 ,
    description: ' Электромясорубка ARG MG-437 станет вашим верным помощником: благодаря мощному мотору она производит 2 кг фарша в минуту',
    rating: 4.5,
    url:'https://kaspi.kz/shop/p/arg-mg-437-chernyi-102136451/?c=750000000#!/item'
  },
  {
    id: 9,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/h43/50474350739486/arnica-prokit-444-plus-belyi-100833277-1.jpg',
    name: 'ARNICA Prokit 444 Plus',
    price: 57890,
    description: 'Arnica Prokit 444 Plus - это великолепно выглядящий, компактный прибор, который облегчит вашу работу на кухне, станет прекрасным помощником в повседневном приготовлении пищи и праздничной готовке.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/arnica-prokit-444-plus-belyi-100833277/?c=750000000#!/item'
  },
  {
    id: 10,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/hc8/33543472480286/kenwood-kcl95-004si-cooking-chef-xl-serebristyj-100883789-1-Container.jpg',
    name: 'KENWOOD KCL95.004SI Cooking Chef XL',
    price: 649990,
    description: 'Оснащенная широкой чашей, эта кухонная машина может не только смешивать, но и разогревать ингредиенты.',
    rating: 5,
    url:'https://kaspi.kz/shop/p/kenwood-kcl95-004si-cooking-chef-xl-serebristyi-100883789/?c=750000000#!/item'
  }
];

