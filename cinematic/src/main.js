/* Diadema cinematic showroom — scroll orchestration (Lenis + GSAP ScrollTrigger),
   3D customizer and VIP booking. */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { createShowroom } from './scene.js';

gsap.registerPlugin(ScrollTrigger);

// ⚠️ Replace with real contacts
const CONTACTS = { phone: '998900000000', telegram: 'diademauz' };

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isSmall = matchMedia('(max-width: 768px)').matches;
const lowPower = isSmall || (navigator.hardwareConcurrency || 8) <= 4;

/* ---------------- Loader ---------------- */
const loader = $('#loader');
const bar = $('#loaderBar');
bar.style.width = '35%';
function hideLoader() {
  bar.style.width = '100%';
  setTimeout(() => { loader.style.opacity = '0'; loader.style.pointerEvents = 'none'; }, 350);
  setTimeout(() => loader.remove(), 1400);
  introAnimation();
}

/* ---------------- 3D showroom ---------------- */
let show = null;
try {
  const probe = document.createElement('canvas');
  if (!(probe.getContext('webgl2') || probe.getContext('webgl'))) throw new Error('no webgl');
  show = createShowroom($('#webgl'), { quality: lowPower ? 'low' : 'high' });
  bar.style.width = '70%';
} catch (err) {
  console.warn('[diadema] WebGL unavailable, using static background', err);
  document.documentElement.classList.add('no-webgl');
}

/* ---------------- Smooth scroll (Lenis) synced to ScrollTrigger ---------------- */
const lenis = reduceMotion ? null : new Lenis({ lerp: 0.08, smoothWheel: true, wheelMultiplier: 0.9 });
if (lenis) {
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  $$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
    const target = $(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    lenis.scrollTo(target, { duration: 2.4, easing: (t) => 1 - Math.pow(1 - t, 4) });
  }));
}
const scrollToEl = (el) => (lenis ? lenis.scrollTo(el, { duration: 2.4 }) : el.scrollIntoView({ behavior: 'smooth' }));

/* ---------------- Camera ⇄ scroll (GSAP ScrollTrigger) ----------------
   Every element with data-k is a camera waypoint index. We build one scrubbed
   timeline whose duration equals the page's scroll length (px), so each tween
   between two markers covers exactly the scroll distance between them.        */
const cam = { k: 0 };
const intro = { dolly: 0 };
let camTL = null;
function buildCameraTimeline() {
  camTL?.scrollTrigger?.kill();
  camTL?.kill();
  const max = ScrollTrigger.maxScroll(window);
  const markers = $$('[data-k]').map((el) => {
    const r = el.getBoundingClientRect();
    const center = r.top + window.scrollY + r.height / 2 - window.innerHeight / 2;
    return { k: Number(el.dataset.k), s: gsap.utils.clamp(0, max, center) };
  }).sort((a, b) => a.s - b.s);

  camTL = gsap.timeline({
    defaults: { ease: 'sine.inOut' },
    scrollTrigger: { start: 0, end: max, scrub: reduceMotion ? true : 1.4 },
  });
  let last = 0;
  cam.k = markers[0].k;
  camTL.set(cam, { k: markers[0].k }, 0);
  for (const m of markers) {
    camTL.to(cam, { k: m.k, duration: Math.max(m.s - last, 0.001) }, last);
    last = m.s;
  }
  camTL.to({}, { duration: Math.max(max - last, 0.001) }, last); // tail hold
}

/* ---------------- Section-driven film direction ---------------- */
function buildDirection() {
  if (!show) return;
  // Hero: tiara rises and drifts away as we enter the corridor
  gsap.to(show.tiaraHolder.position, { y: 3.6, z: 0.5, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 } });
  gsap.to(show.tiaraHolder.scale, { x: 0.6, y: 0.6, z: 0.6, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 } });
  // Hero copy parallax
  gsap.to('#hero .container-c', { yPercent: -25, opacity: 0, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
  // Atelier: brighter, cleaner image for the customizer (less DOF, more bloom on crystals)
  ScrollTrigger.create({
    trigger: '#atelier', start: 'top 60%', end: 'bottom 40%',
    onToggle: (self) => {
      gsap.to(show.bloom, { strength: self.isActive ? 0.75 : 0.6, duration: 1.2 });
      gsap.to(show.bokeh.uniforms.aperture, { value: self.isActive ? 0.0004 : 0.0012, duration: 1.2 });
      atelierActive = self.isActive;
    },
  });
  // VIP: particles intensify, vignette tightens
  gsap.to(show.particleUniforms.uBoost, { value: 1.8, ease: 'none', scrollTrigger: { trigger: '#vip', start: 'top bottom', end: 'center center', scrub: true } });
  gsap.to(show.film.uniforms.uVignette, { value: 1.25, ease: 'none', scrollTrigger: { trigger: '#vip', start: 'top bottom', end: 'center center', scrub: true } });
}

/* ---------------- Chapter indicator ---------------- */
const chapterEl = $('#chapter');
const progressEl = $('#progress');
$$('[data-chapter]').forEach((el) => ScrollTrigger.create({
  trigger: el, start: 'top center', end: 'bottom center',
  onToggle: (self) => { if (self.isActive) chapterEl.textContent = el.dataset.chapter; },
}));
ScrollTrigger.create({ start: 0, end: 'max', onUpdate: (self) => gsap.set(progressEl, { scaleX: self.progress }) });

/* ---------------- Reveals & counters ---------------- */
const io = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (!en.isIntersecting) return;
  en.target.classList.add('in');
  $$('.count', en.target).forEach((c) => gsap.to({ v: 0 }, {
    v: Number(c.dataset.to), duration: 2.2, ease: 'power3.out',
    onUpdate() { c.textContent = Math.round(this.targets()[0].v).toLocaleString('ru-RU'); },
  }));
  io.unobserve(en.target);
}), { threshold: 0.2 });
$$('.reveal').forEach((el) => io.observe(el));

function introAnimation() {
  gsap.from('.hero-line', { y: 60, opacity: 0, filter: 'blur(10px)', duration: 1.6, ease: 'power3.out', stagger: 0.12, delay: 0.2 });
  if (show) gsap.fromTo(intro, { dolly: 5 }, { dolly: 0, duration: 3.4, ease: 'power3.out' }); // dolly-in on load
}

/* ---------------- Customizer ---------------- */
let atelierActive = false;
const design = { style: 'ball', fabric: 'satin', color: 'ivory', crystals: true };
const LABELS = {
  style: { ball: 'Malika', aline: 'A-siluet', mermaid: 'Rusalka', column: 'Minimal' },
  fabric: { satin: 'Atlas', mikado: 'Mikado', tulle: 'Tyul', lace: 'Kruzheva' },
};
let colorLabel = 'Ivory';
const describe = () => `${LABELS.style[design.style]} · ${LABELS.fabric[design.fabric]} · ${colorLabel}${design.crystals ? ' · kristallar' : ''}`;

$$('#customizer [data-group]').forEach((group) => group.addEventListener('click', (e) => {
  const b = e.target.closest('[data-value]');
  if (!b) return;
  $$('[data-value]', group).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  design[group.dataset.group] = b.dataset.value;
  if (group.dataset.group === 'color') { colorLabel = b.dataset.name; $('#colorName').textContent = colorLabel; }
  show?.hero.set({ [group.dataset.group]: b.dataset.value });
  if (show) gsap.fromTo(show.hero.group.scale, { x: 0.97, y: 0.97, z: 0.97 }, { x: 1, y: 1, z: 1, duration: 0.8, ease: 'elastic.out(1, 0.5)' });
}));
$('#crystals').addEventListener('change', (e) => { design.crystals = e.target.checked; show?.hero.set({ crystals: design.crystals }); });
$('#bookDesign').addEventListener('click', () => {
  $('#vDesign').value = describe();
  scrollToEl($('#vip'));
  setTimeout(() => $('#vName').focus({ preventScroll: true }), 2200);
});

// Drag-to-rotate with inertia; slow auto-turn when idle
const spin = { angle: 0, vel: 0, dragging: false, lastX: 0, idle: 0 };
const stage = $('#stage');
stage.addEventListener('pointerdown', (e) => {
  spin.dragging = true; spin.lastX = e.clientX; spin.idle = 0;
  stage.setPointerCapture(e.pointerId);
});
stage.addEventListener('pointermove', (e) => {
  if (!spin.dragging) return;
  const dx = e.clientX - spin.lastX;
  spin.lastX = e.clientX;
  spin.vel = dx * 0.008;
  spin.angle += spin.vel;
});
const endDrag = () => { spin.dragging = false; };
stage.addEventListener('pointerup', endDrag);
stage.addEventListener('pointercancel', endDrag);
stage.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') spin.vel = -0.08;
  if (e.key === 'ArrowRight') spin.vel = 0.08;
});
stage.tabIndex = 0;

/* ---------------- VIP booking → Telegram / WhatsApp ---------------- */
$$('[data-link="telegram"]').forEach((a) => { a.href = `https://t.me/${CONTACTS.telegram}`; });
$$('[data-link="phone"]').forEach((a) => { a.href = `tel:+${CONTACTS.phone}`; });
const form = $('#vipForm');
form.date.min = new Date().toISOString().slice(0, 10);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim(), phone = form.phone.value.trim();
  const ok = name.length > 1 && phone.replace(/\D/g, '').length >= 9;
  $('#vErr').classList.toggle('hidden', ok);
  if (!ok) return;
  const text = [
    '✨ Diadema — VIP so\'rov',
    `Ism: ${name}`,
    `Telefon: ${phone}`,
    form.date.value && `To'y sanasi: ${form.date.value.split('-').reverse().join('.')}`,
    `Xizmat: ${form.pkg.value}`,
    form.design.value && `Obraz: ${form.design.value}`,
    form.note.value.trim() && `Izoh: ${form.note.value.trim()}`,
  ].filter(Boolean).join('\n');
  const url = e.submitter?.value === 'whatsapp'
    ? `https://wa.me/${CONTACTS.phone}?text=${encodeURIComponent(text)}`
    : `https://t.me/${CONTACTS.telegram}?text=${encodeURIComponent(text)}`;
  navigator.clipboard?.writeText(text).catch(() => {});
  window.open(url, '_blank', 'noopener');
});

/* ---------------- Render loop ---------------- */
if (show) {
  let visible = true;
  document.addEventListener('visibilitychange', () => { visible = !document.hidden; });
  gsap.ticker.add(() => {
    if (!visible) return;
    // customizer turntable
    if (!spin.dragging) {
      spin.vel *= 0.94;
      spin.idle += 1;
      spin.angle += spin.vel + (spin.idle > 90 && atelierActive ? 0.0035 : 0);
    }
    show.hero.group.rotation.y = spin.angle;
    show.placeCamera(cam.k, intro.dolly);
    show.render();
  });
}

/* ---------------- Boot ---------------- */
function boot() {
  buildCameraTimeline();
  buildDirection();
  ScrollTrigger.refresh();
  let t;
  window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(() => { buildCameraTimeline(); ScrollTrigger.refresh(); }, 200); });
  if (show) { show.placeCamera(cam.k); show.render(); }
  requestAnimationFrame(hideLoader);
}
Promise.race([document.fonts?.ready ?? Promise.resolve(), new Promise((r) => setTimeout(r, 2500))]).then(boot);
