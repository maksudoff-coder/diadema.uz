/* =========================================================
   DIADEMA — content data
   Edit this file to update contacts, dresses and gallery.
   Images: put files into assets/img/ and set `image: 'assets/img/dresses/aurora.jpg'`.
   While `image` is empty, an elegant illustrated placeholder is shown.
   ========================================================= */
window.DIADEMA = {
  // ⚠️ Replace with real contacts
  contacts: {
    phone: '+998900000000',          // used for tel: and WhatsApp
    phoneLabel: '+998 90 000 00 00',
    telegram: 'diademauz',           // Telegram username without @
  },

  categories: [
    { id: 'all',     uz: 'Barchasi',     ru: 'Все' },
    { id: 'aline',   uz: 'A-siluet',     ru: 'А-силуэт' },
    { id: 'ball',    uz: 'Malika',       ru: 'Пышные' },
    { id: 'mermaid', uz: 'Rusalka',      ru: 'Русалка' },
    { id: 'column',  uz: 'Minimalizm',   ru: 'Минимализм' },
    { id: 'sleeve',  uz: 'Yengli',       ru: 'С рукавами' },
  ],

  // price — rent price in UZS (sample values, replace with real ones)
  dresses: [
    { id: 'lumiere',   name: 'Lumière',   cat: 'ball',    price: 3500000, sizes: ['XS','S','M'],      isNew: true,  tone: 0, image: '',
      color: { uz: 'Shampan', ru: 'Шампань' }, fabric: { uz: 'Glitter tyul', ru: 'Глиттер-фатин' },
      desc: { uz: 'Yulduzli tyuldan tikilgan hashamatli malika ko\'ylagi, korset va uzun shleyf bilan.', ru: 'Роскошное пышное платье из мерцающего фатина с корсетом и длинным шлейфом.' } },
    { id: 'aurora',    name: 'Aurora',    cat: 'aline',   price: 2200000, sizes: ['S','M','L'],       isNew: true,  tone: 1, image: '',
      color: { uz: 'Ivory', ru: 'Айвори' }, fabric: { uz: 'Fransuz guipyuri', ru: 'Французский гипюр' },
      desc: { uz: 'Yengil A-siluet, nafis guipyur va ochiq yelkalar — romantik kelin uchun.', ru: 'Лёгкий А-силуэт, нежный гипюр и открытые плечи — для романтичной невесты.' } },
    { id: 'seraphina', name: 'Seraphina', cat: 'mermaid', price: 2800000, sizes: ['XS','S','M'],      isNew: true,  tone: 2, image: '',
      color: { uz: 'Oq', ru: 'Белый' }, fabric: { uz: 'Krep va kruzheva', ru: 'Креп и кружево' },
      desc: { uz: 'Qomatni ta\'kidlovchi rusalka siluet, tizzadan pastga ochiluvchi kruzhevali etak.', ru: 'Силуэт «русалка», подчёркивающий фигуру, с кружевным шлейфом от колена.' } },
    { id: 'margaux',   name: 'Margaux',   cat: 'column',  price: 1800000, sizes: ['S','M','L','XL'],  isNew: false, tone: 3, image: '',
      color: { uz: 'Ivory', ru: 'Айвори' }, fabric: { uz: 'Shoyi (atlas)', ru: 'Шёлковый атлас' },
      desc: { uz: 'Minimalistik atlas ko\'ylak — toza chiziqlar va zamonaviy nafislik.', ru: 'Минималистичное атласное платье — чистые линии и современная элегантность.' } },
    { id: 'isabella',  name: 'Isabella',  cat: 'sleeve',  price: 2600000, sizes: ['M','L','XL'],      isNew: false, tone: 4, image: '',
      color: { uz: 'Oq', ru: 'Белый' }, fabric: { uz: 'Kruzheva va tyul', ru: 'Кружево и фатин' },
      desc: { uz: 'Uzun kruzheva yengli yopiq ko\'ylak — nikoh marosimi uchun ideal.', ru: 'Закрытое платье с длинными кружевными рукавами — идеально для никаха.' } },
    { id: 'celeste',   name: 'Céleste',   cat: 'ball',    price: 3200000, sizes: ['S','M','L'],       isNew: false, tone: 5, image: '',
      color: { uz: 'Pudra', ru: 'Пудровый' }, fabric: { uz: 'Ko\'p qavatli tyul', ru: 'Многослойный фатин' },
      desc: { uz: 'Pudra rangli bulutdek yengil malika ko\'ylagi, kristall bezaklar bilan.', ru: 'Пышное облачное платье пудрового оттенка с кристаллами.' } },
    { id: 'bianca',    name: 'Bianca',    cat: 'aline',   price: 1900000, sizes: ['XS','S','M','L'],  isNew: false, tone: 0, image: '',
      color: { uz: 'Oq', ru: 'Белый' }, fabric: { uz: 'Mikado', ru: 'Микадо' },
      desc: { uz: 'Mikado matosidan klassik A-siluet, cho\'ntaklar va bant bilan.', ru: 'Классический А-силуэт из микадо с карманами и бантом.' } },
    { id: 'odette',    name: 'Odette',    cat: 'mermaid', price: 2400000, sizes: ['S','M'],           isNew: false, tone: 1, image: '',
      color: { uz: 'Shampan', ru: 'Шампань' }, fabric: { uz: 'Payetkali to\'r', ru: 'Сетка с пайетками' },
      desc: { uz: 'Payetkalar bilan yarqirovchi rusalka — kechki ziyofat uchun.', ru: 'Сияющая «русалка» с пайетками — для вечернего торжества.' } },
    { id: 'amira',     name: 'Amira',     cat: 'sleeve',  price: 3000000, sizes: ['S','M','L','XL'],  isNew: true,  tone: 2, image: '',
      color: { uz: 'Ivory', ru: 'Айвори' }, fabric: { uz: 'Atlas va kruzheva', ru: 'Атлас и кружево' },
      desc: { uz: 'Sharqona nafislik: yopiq yoqa, uzun yeng va qirollik shleyfi.', ru: 'Восточная элегантность: закрытый ворот, длинный рукав и королевский шлейф.' } },
    { id: 'valentina', name: 'Valentina', cat: 'ball',    price: 4000000, sizes: ['M','L'],           isNew: false, tone: 3, image: '',
      color: { uz: 'Oq', ru: 'Белый' }, fabric: { uz: 'Brokat va tyul', ru: 'Парча и фатин' },
      desc: { uz: 'Diadema kolleksiyasining durdonasi — 3 metrli shleyf va qo\'lda tikilgan bezaklar.', ru: 'Жемчужина коллекции Diadema — шлейф 3 метра и ручная вышивка.' } },
    { id: 'elise',     name: 'Élise',     cat: 'column',  price: 1600000, sizes: ['XS','S','M'],      isNew: false, tone: 4, image: '',
      color: { uz: 'Ivory', ru: 'Айвори' }, fabric: { uz: 'Shifon', ru: 'Шифон' },
      desc: { uz: 'Yengil shifon ko\'ylak — ZAGS va fotosessiya uchun.', ru: 'Лёгкое шифоновое платье — для ЗАГСа и фотосессии.' } },
    { id: 'noor',      name: 'Noor',      cat: 'aline',   price: 2100000, sizes: ['L','XL'],          isNew: false, tone: 5, image: '',
      color: { uz: 'Oq', ru: 'Белый' }, fabric: { uz: 'Kruzheva', ru: 'Кружево' },
      desc: { uz: 'Katta o\'lchamlar uchun maxsus: qomatga mos korset va oqib tushuvchi etak.', ru: 'Специально для больших размеров: поддерживающий корсет и струящаяся юбка.' } },
  ],

  // Gallery: set `src` to real bride photos (e.g. 'assets/img/gallery/01.jpg')
  gallery: [
    { src: '', ratio: '3/4', art: 'ball',    tone: 0, caption: { uz: 'Lumière', ru: 'Lumière' } },
    { src: '', ratio: '1/1', art: 'beauty',  tone: 1, caption: { uz: 'Kelin makiyaji', ru: 'Свадебный макияж' } },
    { src: '', ratio: '4/5', art: 'mermaid', tone: 2, caption: { uz: 'Seraphina', ru: 'Seraphina' } },
    { src: '', ratio: '3/4', art: 'sleeve',  tone: 3, caption: { uz: 'Nikoh obrazi', ru: 'Образ на никах' } },
    { src: '', ratio: '4/5', art: 'aline',   tone: 4, caption: { uz: 'Aurora', ru: 'Aurora' } },
    { src: '', ratio: '1/1', art: 'beauty',  tone: 5, caption: { uz: 'Soch turmagi', ru: 'Причёска' } },
    { src: '', ratio: '3/4', art: 'column',  tone: 0, caption: { uz: 'Margaux', ru: 'Margaux' } },
    { src: '', ratio: '4/5', art: 'ball',    tone: 1, caption: { uz: 'Valentina', ru: 'Valentina' } },
  ],
};
