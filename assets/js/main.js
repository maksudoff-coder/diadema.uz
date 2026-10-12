/* DIADEMA — site interactions (no dependencies) */
(() => {
  'use strict';

  const D = window.DIADEMA;
  const RU = window.DIADEMA_RU;
  const UI = window.DIADEMA_UI;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } },
  };

  let lang = store.get('diadema-lang') === 'ru' ? 'ru' : 'uz';
  const t = (key) => UI[lang][key];
  const loc = (obj) => (obj ? obj[lang] ?? obj.uz : '');
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const money = (n) => n.toLocaleString('ru-RU');

  /* ---------- Illustrated placeholders ---------- */
  const TONES = [
    'linear-gradient(160deg,#F7E6E1,#FBF7F2 55%,#F3E9D8)',
    'linear-gradient(160deg,#F3E9D8,#FCF5F3 60%)',
    'linear-gradient(160deg,#EFD2CA,#F6EFE7 65%)',
    'linear-gradient(160deg,#E9D7B8,#FBF7F2 60%)',
    'linear-gradient(160deg,#F6EFE7,#F7E6E1 70%)',
    'linear-gradient(160deg,#FCF5F3,#E9D7B8)',
  ];
  const tone = (i) => TONES[i % TONES.length];

  const SKIRTS = {
    aline: 'M88 120 L112 120 L152 280 Q100 293 48 280 Z',
    sleeve: 'M88 120 L112 120 L152 280 Q100 293 48 280 Z',
    ball: 'M88 120 L112 120 Q170 168 174 280 Q100 298 26 280 Q30 168 88 120 Z',
    mermaid: 'M88 120 L112 120 Q120 186 111 222 Q140 260 156 285 Q100 296 44 285 Q60 260 89 222 Q80 186 88 120 Z',
    column: 'M88 120 L112 120 Q121 200 126 283 Q100 290 74 283 Q79 200 88 120 Z',
  };
  let artId = 0;

  function dressSVG(kind, big = false) {
    const id = `g${++artId}`;
    if (kind === 'beauty') {
      return `<svg viewBox="0 0 200 200" class="${big ? 'h-2/3' : 'h-1/2'} w-auto" aria-hidden="true">
        <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E3B7AC"/><stop offset="1" stop-color="#C6A26A"/></linearGradient></defs>
        <circle cx="100" cy="100" r="70" fill="none" stroke="#D9BE8C" stroke-width=".8"/>
        <circle cx="100" cy="100" r="54" fill="none" stroke="#D9BE8C" stroke-width=".5" stroke-dasharray="2 4"/>
        <path d="M60 104 Q80 84 100 96 Q120 84 140 104 Q120 128 100 126 Q80 128 60 104 Z" fill="url(#${id})" opacity=".9"/>
        <path d="M60 104 Q100 112 140 104" stroke="#fff" stroke-width="1.2" fill="none" opacity=".7"/>
        <g fill="#C6A26A"><path d="M150 52 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3z"/><path d="M48 142 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z"/></g>
      </svg>`;
    }
    const sleeves = kind === 'sleeve'
      ? `<path d="M82 64 Q64 74 58 120 L67 122 Q72 90 84 80 Z M118 64 Q136 74 142 120 L133 122 Q128 90 116 80 Z" fill="url(#${id})" stroke="#C6A26A" stroke-width=".6" opacity=".95"/>`
      : '';
    const sparkles = Array.from({ length: 14 }, (_, i) => {
      const x = 60 + ((i * 37) % 80), y = 140 + ((i * 53) % 130);
      return `<circle cx="${x}" cy="${y}" r="${i % 3 ? 0.9 : 1.5}" fill="#C6A26A" opacity=".55"/>`;
    }).join('');
    return `<svg viewBox="0 0 200 300" class="${big ? 'h-[82%]' : 'h-[78%]'} w-auto drop-shadow-[0_18px_30px_rgba(74,59,53,.18)]" aria-hidden="true">
      <defs>
        <linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".65" stop-color="#FBF7F2"/><stop offset="1" stop-color="#EBDDC6"/></linearGradient>
      </defs>
      <path d="M70 46 L100 33 L130 46" fill="none" stroke="#B08A4E" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M100 33 q0 -9 7 -9 q6 0 6 6" fill="none" stroke="#B08A4E" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M86 46 L84 62 M114 46 L116 62" stroke="#C6A26A" stroke-width="1"/>
      ${sleeves}
      <path d="${SKIRTS[kind] || SKIRTS.aline}" fill="url(#${id})" stroke="#C6A26A" stroke-width=".7"/>
      <path d="M80 62 Q100 76 120 62 L118 88 Q114 104 112 120 L88 120 Q86 104 82 88 Z" fill="#fff" stroke="#C6A26A" stroke-width=".7"/>
      <path d="M86 120 Q100 126 114 120" stroke="#C6A26A" stroke-width="1.6" fill="none"/>
      ${sparkles}
    </svg>`;
  }

  function mediaHTML({ image, art, toneIdx, alt, big }) {
    return `<div class="absolute inset-0 grid place-items-center" style="background:${tone(toneIdx)}">${dressSVG(art, big)}</div>
      ${image ? `<img src="${esc(image)}" alt="${esc(alt)}" loading="lazy" decoding="async" onerror="this.remove()">` : ''}`;
  }

  $$('[data-art]').forEach((el) => { el.innerHTML = dressSVG(el.dataset.art, el.dataset.artSize === 'hero'); });

  /* ---------- Contacts ---------- */
  const C = D.contacts;
  const phoneDigits = C.phone.replace(/\D/g, '');
  $$('[data-link="phone"]').forEach((a) => { a.href = `tel:+${phoneDigits}`; });
  $$('[data-link="telegram"]').forEach((a) => { a.href = `https://t.me/${C.telegram}`; });
  $$('[data-text="phone"]').forEach((el) => { el.textContent = C.phoneLabel; });
  $$('[data-text="telegram"]').forEach((el) => { el.textContent = `@${C.telegram}`; });

  /* ---------- Header & mobile menu ---------- */
  const header = $('#header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const menu = $('#mobileMenu');
  const menuBtn = $('#menuBtn');
  const setMenu = (open) => {
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    menuBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) $('#menuClose').focus();
  };
  menuBtn.addEventListener('click', () => setMenu(true));
  $('#menuClose').addEventListener('click', () => setMenu(false));
  $$('.mobile-link', menu).forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('is-open')) setMenu(false); });

  /* ---------- Reveal on scroll ---------- */
  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
    : null;
  $$('.reveal').forEach((el) => (io ? io.observe(el) : el.classList.add('is-visible')));

  /* ---------- Catalog ---------- */
  const PAGE = 8;
  const state = { cat: 'all', size: 'all', sort: 'new', shown: PAGE };
  const grid = $('#dressGrid');
  const chipsWrap = $('#categoryChips');
  const loadMore = $('#loadMore');
  const catName = (id) => loc(D.categories.find((c) => c.id === id));

  function renderChips() {
    chipsWrap.innerHTML = D.categories.map((c) =>
      `<button type="button" class="chip" data-cat="${c.id}" aria-pressed="${c.id === state.cat}">${esc(loc(c))}</button>`).join('');
  }
  chipsWrap.addEventListener('click', (e) => {
    const b = e.target.closest('[data-cat]');
    if (!b) return;
    state.cat = b.dataset.cat; state.shown = PAGE;
    $$('[data-cat]', chipsWrap).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    renderGrid();
  });
  $('#sizeFilter').addEventListener('change', (e) => { state.size = e.target.value; state.shown = PAGE; renderGrid(); });
  $('#sortSelect').addEventListener('change', (e) => { state.sort = e.target.value; renderGrid(); });
  loadMore.addEventListener('click', () => { state.shown += PAGE; renderGrid(); });

  function filtered() {
    const list = D.dresses
      .map((d, i) => ({ ...d, _i: i }))
      .filter((d) => (state.cat === 'all' || d.cat === state.cat) && (state.size === 'all' || d.sizes.includes(state.size)));
    const sorters = {
      new: (a, b) => (b.isNew - a.isNew) || (a._i - b._i),
      priceAsc: (a, b) => a.price - b.price,
      priceDesc: (a, b) => b.price - a.price,
    };
    return list.sort(sorters[state.sort]);
  }

  function renderGrid() {
    const list = filtered();
    const visible = list.slice(0, state.shown);
    grid.innerHTML = visible.map((d, i) => `
      <article class="group animate-[pop_.6s_ease_both]" style="animation-delay:${(i % PAGE) * 50}ms">
        <button type="button" class="block w-full text-left" data-dress="${d.id}" aria-label="${esc(d.name)} — ${esc(t('details'))}">
          <div class="ph aspect-[3/4] rounded-[1.5rem] shadow-soft transition duration-500 group-hover:-translate-y-1.5">
            ${mediaHTML({ image: d.image, art: d.cat, toneIdx: d.tone, alt: d.name })}
            ${d.isNew ? `<span class="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-champagne-500">${esc(t('newBadge'))}</span>` : ''}
            <span class="absolute inset-x-3 bottom-3 translate-y-2 rounded-full bg-cocoa-900/85 py-2.5 text-center text-[11px] uppercase tracking-[0.18em] text-ivory opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">${esc(t('details'))}</span>
          </div>
          <div class="mt-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 class="font-serif text-2xl leading-tight">${esc(d.name)}</h3>
            <p class="text-xs uppercase tracking-[0.14em] text-cocoa-400">${esc(catName(d.cat))}</p>
          </div>
          <p class="mt-1 text-sm text-cocoa-500"><span class="font-medium text-cocoa-900">${money(d.price)}</span> ${esc(t('currency'))} · ${esc(t('perDay'))}</p>
        </button>
      </article>`).join('');
    $('#emptyState').classList.toggle('hidden', list.length > 0);
    loadMore.classList.toggle('hidden', list.length <= state.shown);
  }

  /* ---------- Dress modal ---------- */
  const modal = $('#dressModal');
  let currentDress = null;
  grid.addEventListener('click', (e) => {
    const b = e.target.closest('[data-dress]');
    if (b) openDress(D.dresses.find((d) => d.id === b.dataset.dress));
  });

  function openDress(d) {
    currentDress = d;
    $('#modalMedia').innerHTML = mediaHTML({ image: d.image, art: d.cat, toneIdx: d.tone, alt: d.name, big: true });
    $('#modalCat').textContent = catName(d.cat);
    $('#modalName').textContent = d.name;
    $('#modalPrice').textContent = `${money(d.price)} ${t('currency')} · ${t('perDay')}`;
    $('#modalDesc').textContent = loc(d.desc);
    $('#modalColor').textContent = loc(d.color);
    $('#modalFabric').textContent = loc(d.fabric);
    $('#modalSizes').innerHTML = d.sizes.map((s) => `<span class="rounded-full border border-cocoa-900/15 px-3 py-1 text-xs">${s}</span>`).join('');
    openDialog(modal);
  }

  $('#modalBook').addEventListener('click', () => {
    modal.close();
    prefill('dress', t('dressNote')(currentDress.name), { dress: currentDress.name });
  });

  function openDialog(dlg) {
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
  }
  $$('dialog').forEach((dlg) => {
    dlg.addEventListener('click', (e) => { if (e.target === dlg || e.target.closest('.modal-close')) dlg.close(); });
  });

  /* ---------- Gallery & lightbox ---------- */
  const lightbox = $('#lightbox');
  function renderGallery() {
    $('#galleryGrid').innerHTML = D.gallery.map((g, i) => `
      <button type="button" class="reveal is-visible group ph block w-full break-inside-avoid rounded-[1.5rem] shadow-soft" style="aspect-ratio:${g.ratio}" data-gallery="${i}" aria-label="${esc(loc(g.caption))}">
        ${mediaHTML({ image: g.src, art: g.art, toneIdx: g.tone, alt: loc(g.caption) })}
        <span class="absolute inset-0 bg-gradient-to-t from-cocoa-900/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></span>
        <span class="absolute bottom-4 left-5 translate-y-2 font-serif text-xl italic text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">${esc(loc(g.caption))}</span>
      </button>`).join('');
  }
  $('#galleryGrid').addEventListener('click', (e) => {
    const b = e.target.closest('[data-gallery]');
    if (!b) return;
    const g = D.gallery[+b.dataset.gallery];
    $('#lightboxMedia').innerHTML = mediaHTML({ image: g.src, art: g.art, toneIdx: g.tone, alt: loc(g.caption), big: true });
    openDialog(lightbox);
  });

  /* ---------- Reviews slider ---------- */
  const reviews = $('#reviews');
  $$('.rev-nav').forEach((b) => b.addEventListener('click', () => {
    const card = reviews.firstElementChild;
    reviews.scrollBy({ left: (card.offsetWidth + 20) * Number(b.dataset.dir), behavior: 'smooth' });
  }));

  /* ---------- Booking form ---------- */
  const form = $('#bookingForm');
  let picked = {};

  function prefill(service, note, extra = {}) {
    picked = extra;
    form.service.value = service;
    form.message.value = note;
    $('#contact').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => form.name.focus({ preventScroll: true }), 600);
  }
  $$('[data-pkg]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    prefill('package', t('pkgNote')(a.dataset.pkg), { pkg: a.dataset.pkg });
  }));

  // Wedding date can't be in the past
  form.date.min = new Date().toISOString().slice(0, 10);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const ok = name.length > 1 && phone.replace(/\D/g, '').length >= 9;
    $('#formError').classList.toggle('hidden', ok);
    if (!ok) { (name.length > 1 ? form.phone : form.name).focus(); return; }

    const lines = [
      `✨ ${t('msgTitle')}`,
      `${t('msgName')}: ${name}`,
      `${t('msgPhone')}: ${phone}`,
      form.date.value && `${t('msgDate')}: ${form.date.value.split('-').reverse().join('.')}`,
      `${t('msgService')}: ${form.service.selectedOptions[0].textContent.trim()}`,
      picked.dress && `${t('msgDress')}: ${picked.dress}`,
      picked.pkg && `${t('msgPkg')}: ${picked.pkg}`,
      form.message.value.trim() && `${t('msgNote')}: ${form.message.value.trim()}`,
    ].filter(Boolean);
    const text = lines.join('\n');
    const channel = e.submitter?.value || 'telegram';

    let url;
    if (channel === 'whatsapp') {
      url = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`;
    } else {
      url = `https://t.me/${C.telegram}?text=${encodeURIComponent(text)}`;
      // Some Telegram clients ignore ?text= for personal chats — keep a copy on the clipboard.
      navigator.clipboard?.writeText(text).then(() => toast(t('copied')), () => {});
    }
    window.open(url, '_blank', 'noopener');
  });

  function toast(msg) {
    const el = document.createElement('div');
    el.setAttribute('role', 'status');
    el.className = 'fixed bottom-24 left-1/2 z-[60] w-[min(26rem,calc(100%-2rem))] -translate-x-1/2 rounded-2xl bg-cocoa-900 px-5 py-4 text-center text-sm text-ivory shadow-soft animate-[pop_.35s_ease_both] sm:bottom-8';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3800);
  }

  /* ---------- Language ---------- */
  function applyLang(next) {
    lang = next;
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach((el) => {
      if (el.dataset.uz === undefined) el.dataset.uz = el.innerHTML;
      const ru = RU[el.dataset.i18n];
      el.innerHTML = lang === 'ru' && ru ? ru : el.dataset.uz;
    });
    $$('[data-i18n-ph]').forEach((el) => {
      if (el.dataset.uzPh === undefined) el.dataset.uzPh = el.placeholder;
      el.placeholder = lang === 'ru' ? RU[el.dataset.i18nPh] || el.dataset.uzPh : el.dataset.uzPh;
    });
    $$('.lang-btn').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    document.title = lang === 'ru'
      ? 'Diadema — Прокат свадебных платьев и Beauty-студия | Фергана'
      : "Diadema — Kelinlik ko'ylaklari va Beauty studiya | Farg'ona";
    renderChips(); renderGrid(); renderGallery();
  }
  $$('.lang-btn').forEach((b) => b.addEventListener('click', () => {
    store.set('diadema-lang', b.dataset.lang);
    applyLang(b.dataset.lang);
  }));

  /* ---------- Init ---------- */
  $('#year').textContent = new Date().getFullYear();
  applyLang(lang);
})();
