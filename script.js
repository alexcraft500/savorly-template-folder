/* ==========================================================
   BUYER CUSTOMIZATION GUIDE
   Edit CONFIG and the content arrays in section 1 to brand the
   store. Keep the images folder beside these files. The remaining
   sections provide the interactive features; edit them only when
   changing how the template works.
   ========================================================== */
(() => {
'use strict';

/* ---------------------------------------------------------
   1. Store settings and editable page content
   Update these values with the buyer's real details before launch.
   --------------------------------------------------------- */
const CONFIG = {
  brand: 'Savorly',        // Replace with the restaurant name; all [data-brand] labels update automatically.
  currency: '$',           // Currency symbol displayed in menu, cart, and order messages.
  deliveryFee: 2.99,       // Delivery charge applied until the order reaches freeDeliveryOver.
  freeDeliveryOver: 20,    // Minimum subtotal for free delivery, in the same currency as the menu prices.
  promoCode: 'WELCOME25',  // Code displayed on the offer card and copied by its button.
  offerEnds: null,         // Set an ISO date/time to override the default next-Sunday expiry.
  autoplayMs: 6500,        // Time each hero slide remains visible, in milliseconds.
  whatsapp: '15551234567', // Replace with the store number, including country code and digits only.
  whatsappMessage: 'Hi! I have a question about an order.', // Intro text for the floating WhatsApp contact button.
};

// Image paths are relative to savorly.html; replace the JPGs in images/ or change the filename here.
const photo = name => `images/${name}.jpg`;

// Replace these bundled sample photos with images you have permission to use.
// Each slide needs a title, description, featured item, price, and main photo; imgA/imgB are optional small photos.
const SLIDES = [
  { eyebrow: 'Fresh picks, happy bites', title: ['Crave It.', 'Get It Fast.'],
    text: 'Order from top local kitchens and follow your meal from the pan to your door.',
    item: { name: 'Smoky Chicken Burger', sub: 'Crispy, juicy, stacked high', price: 8.99 },
    img: photo('burger'), imgA: photo('fries'), imgB: photo('drink') },
  { eyebrow: 'Hot, fresh, on time', title: ['Pizza Night,', 'Sorted.'],
    text: 'Stone-baked favorites with real cheese and tomatoes picked at their peak.',
    item: { name: 'Wood-Fired Margherita', sub: 'Basil and buffalo mozzarella', price: 10.99 },
    img: photo('pizza'), imgA: photo('sushi'), imgB: photo('cake') },
  { eyebrow: 'Every course, one cart', title: ['Start Savory,', 'Finish Sweet.'],
    text: 'Mix starters, mains and desserts from different kitchens in a single order.',
    item: { name: 'Molten Chocolate Cake', sub: 'With vanilla cream', price: 6.99 },
    img: photo('cake'), imgA: photo('dumplings'), imgB: photo('salad-bowl') },
];

// Edit these objects to change the benefit icons and text; icon names must match symbols in savorly.html.
const FEATURES = [
  { icon: 'truck',   title: 'Free delivery',    sub: 'On orders over $20' },
  { icon: 'refresh', title: 'Easy refunds',     sub: 'Within 7 days' },
  { icon: 'shield',  title: 'Safe checkout',    sub: 'Encrypted payments' },
  { icon: 'headset', title: 'Help anytime',     sub: 'Chat with us 24/7' },
];

// Edit cuisine names, counts, colors, and image paths. Keep each id unique and match it to dish cuisine values below.
const CUISINES = [
  { id: 'italian',  name: 'Pizza & Pasta',  count: '120+', tint: 'mint',  img: photo('pizza') },
  { id: 'asian',    name: 'Noodles & Wok',  count: '150+', tint: 'mint',  img: photo('noodles') },
  { id: 'indian',   name: 'Curries & Naan', count: '180+', tint: 'sand',  img: photo('curry') },
  { id: 'mexican',  name: 'Tacos & Wraps',  count: '90+',  tint: 'pink',  img: photo('tacos') },
  { id: 'japanese', name: 'Sushi & Rolls',  count: '110+', tint: 'lav',   img: photo('sushi') },
];

// Edit dish details, price, cuisine, tag, and photo. Featured dishes appear initially; others appear after "See all".
// Keep each id unique; cuisine must match a CUISINES id; use tag: null to hide an offer badge.
const DISHES = [
  { id: 'd1',  name: 'Lemon Herb Chicken',    sub: 'Roasted veggies',          price: 12.99, rating: 4.8, cuisine: 'italian',  tag: { type: 'best', text: 'Bestseller' }, featured: true,  img: photo('roast-chicken') },
  { id: 'd2',  name: 'Wood-Fired Margherita', sub: 'Basil and mozzarella',     price: 10.99, rating: 4.7, cuisine: 'italian',  tag: { type: 'off',  text: '10% OFF' },    featured: true,  img: photo('pizza') },
  { id: 'd3',  name: 'Creamy Paneer Curry',   sub: 'With garlic naan',         price: 11.49, rating: 4.9, cuisine: 'indian',   tag: { type: 'best', text: 'Bestseller' }, featured: true,  img: photo('curry') },
  { id: 'd4',  name: 'Rainbow Sushi Set',     sub: '12 pieces',                price: 13.99, rating: 4.6, cuisine: 'japanese', tag: { type: 'off',  text: '10% OFF' },    featured: true,  img: photo('sushi') },
  { id: 'd5',  name: 'Molten Chocolate Cake', sub: 'With vanilla cream',       price: 6.99,  rating: 4.8, cuisine: 'italian',  tag: { type: 'off',  text: '30% OFF' },    featured: true,  img: photo('cake') },
  { id: 'd6',  name: 'Garlic Noodle Stir-Fry',sub: 'Crunchy veg, sesame',      price: 9.49,  rating: 4.5, cuisine: 'asian',    tag: null,                                   featured: false, img: photo('noodles') },
  { id: 'd7',  name: 'Street Taco Trio',      sub: 'Lime, onion, cilantro',    price: 8.99,  rating: 4.7, cuisine: 'mexican',  tag: { type: 'best', text: 'Bestseller' }, featured: false, img: photo('tacos') },
  { id: 'd8',  name: 'Butter Chicken Bowl',   sub: 'Basmati rice',             price: 12.49, rating: 4.8, cuisine: 'indian',   tag: null,                                   featured: false, img: photo('curry-bowl') },
  { id: 'd9',  name: 'Spicy Salmon Roll',     sub: '8 pieces',                 price: 11.99, rating: 4.6, cuisine: 'japanese', tag: null,                                   featured: false, img: photo('salmon-sushi') },
  { id: 'd10', name: 'Crispy Dumpling Box',   sub: 'Soy-chili dip',            price: 7.99,  rating: 4.7, cuisine: 'asian',    tag: { type: 'off',  text: '10% OFF' },    featured: false, img: photo('dumplings') },
  { id: 'd11', name: 'Loaded Burrito',        sub: 'Beans, rice, salsa',       price: 9.99,  rating: 4.5, cuisine: 'mexican',  tag: null,                                   featured: false, img: photo('burrito') },
];

// Replace these sample restaurant names; the strip shows each name once on desktop and as a loop on smaller screens.
const PARTNERS = ['Partner One', 'Partner Two', 'Partner Three', 'Partner Four', 'Partner Five', 'Partner Six'];

/* ---------------------------------------------------------
   2. Shared helpers
   No routine content edits are needed here; these helpers support the store data above.
   --------------------------------------------------------- */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const mq = q => (window.matchMedia ? window.matchMedia(q).matches : false);
const reduce = mq('(prefers-reduced-motion: reduce)');
const fine = mq('(hover: hover) and (pointer: fine)');
const canAnimate = typeof Element !== 'undefined' && !!Element.prototype.animate && !reduce;
const money = n => CONFIG.currency + n.toFixed(2);
const waLink = text => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const easeOut = t => 1 - Math.pow(1 - t, 4);
const icon = n => `<svg class="ic" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const byId = Object.fromEntries(DISHES.map(d => [d.id, d]));
const cuisineName = id => (CUISINES.find(c => c.id === id) || {}).name || '';
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* The page remains usable when browser storage is unavailable. */ } },
};

/* Replace [data-ph] placeholders with images when data-src contains
   a path; otherwise, display the placeholder label and image icon. */
// Converts image placeholders into real images when a data-src path is provided.
function hydrateSlots(root = document) {
  $$('[data-ph]', root).forEach(el => {
    if (el.dataset.ready) return;
    el.dataset.ready = '1';
    el.classList.add('ph');
    const src = el.dataset.src;
    if (src) {
      el.classList.add('has-img');
      el.innerHTML = `<img src="${src}" alt="${el.dataset.alt || ''}" loading="lazy" decoding="async">`;
    } else {
      el.innerHTML = `${icon('image')}<span>${el.dataset.ph}</span>`;
    }
  });
}

/* ---------------------------------------------------------
   3. Feedback messages and click effects
   Change behavior or appearance in this block only when customizing interactions.
   --------------------------------------------------------- */
// Displays a short temporary status message, then removes it automatically.
function toast(msg) {
  const box = $('#toasts');
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  box.appendChild(t);
  setTimeout(() => t.remove(), 3300);
}

const fx = $('#fx');
const fctx = fx && fx.getContext ? fx.getContext('2d') : null;
let parts = [], fxRaf = 0;
// Resizes the confetti canvas to match the viewport and device pixel ratio.
function sizeFx() {
  if (!fctx) return;
  const dpr = window.devicePixelRatio || 1;
  fx.width = innerWidth * dpr; fx.height = innerHeight * dpr;
  fctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
// Creates a burst of colored confetti at the supplied screen position.
function confetti(x, y, n = 90) {
  if (reduce || !fctx) return;
  sizeFx();
  const cols = ['#f26a1b', '#ffb347', '#2f6b3f', '#e8452c', '#8b6cf0', '#ffd9b8'];
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, s = 4 + Math.random() * 9;
    parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 6, g: .28,
      w: 6 + Math.random() * 6, h: 4 + Math.random() * 5, r: Math.random() * 6,
      vr: (Math.random() - .5) * .4, c: cols[i % cols.length], life: 1 });
  }
  if (!fxRaf) fxRaf = requestAnimationFrame(fxLoop);
}
// Animates confetti pieces until they fall off-screen or their life expires.
function fxLoop() {
  fctx.clearRect(0, 0, innerWidth, innerHeight);
  parts = parts.filter(p => p.life > 0 && p.y < innerHeight + 40);
  parts.forEach(p => {
    p.vy += p.g; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.life -= .008;
    fctx.save(); fctx.globalAlpha = Math.max(p.life, 0);
    fctx.translate(p.x, p.y); fctx.rotate(p.r); fctx.fillStyle = p.c;
    fctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); fctx.restore();
  });
  fxRaf = parts.length ? requestAnimationFrame(fxLoop) : 0;
  if (!parts.length) fctx.clearRect(0, 0, innerWidth, innerHeight);
}

// Adds a small decorative sparkle burst around an element when animation is supported.
function burst(el) {
  if (!canAnimate) return;
  const r = el.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  for (let i = 0; i < 9; i++) {
    const p = document.createElement('i');
    p.className = 'spark';
    p.style.left = cx + 'px'; p.style.top = cy + 'px';
    p.style.background = i % 2 ? '#e8452c' : '#f26a1b';
    document.body.appendChild(p);
    const a = i / 9 * Math.PI * 2, d = 26 + Math.random() * 18;
    const an = p.animate([
      { transform: 'translate(-50%,-50%) scale(1)', opacity: 1 },
      { transform: `translate(calc(-50% + ${Math.cos(a) * d}px), calc(-50% + ${Math.sin(a) * d}px)) scale(0)`, opacity: 0 },
    ], { duration: 650, easing: 'cubic-bezier(.2,.8,.2,1)' });
    an.onfinish = () => p.remove();
  }
}

document.addEventListener('click', e => {
  const b = e.target.closest('.btn, .add');
  if (!b || reduce) return;
  const r = b.getBoundingClientRect(), size = Math.max(r.width, r.height) * 2;
  const s = document.createElement('span');
  s.className = 'ripple';
  s.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`;
  b.appendChild(s);
  setTimeout(() => s.remove(), 700);
});

/* Add pointer-follow motion to navigation items and buttons, including
   elements generated after page load. Disable it for touch and reduced motion. */
if (fine && !reduce) {
  document.addEventListener('pointermove', e => {
    const navItem = e.target.closest && e.target.closest('.side-nav a[href], .bottom-nav a[href], .bottom-nav button');
    if (navItem) {
      const r = navItem.getBoundingClientRect();
      navItem.style.translate = `${(e.clientX - r.left - r.width / 2) * .12}px ${(e.clientY - r.top - r.height / 2) * .12}px`;
    }
    const m = e.target.closest && e.target.closest('[data-magnetic]');
    if (!m) return;
    const r = m.getBoundingClientRect();
    m.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .22}px, ${(e.clientY - r.top - r.height / 2) * .32}px)`;
  });
  document.addEventListener('pointerout', e => {
    const navItem = e.target.closest && e.target.closest('.side-nav a[href], .bottom-nav a[href], .bottom-nav button');
    if (navItem && !navItem.contains(e.relatedTarget)) navItem.style.translate = '';
    const m = e.target.closest && e.target.closest('[data-magnetic]');
    if (m && !m.contains(e.relatedTarget)) m.style.transform = '';
  });
}

/* ---------------------------------------------------------
   4. Scroll reveals, counters, parallax, progress, and pointer ring
   Presentation logic for the page effects; normally leave this block unchanged.
   --------------------------------------------------------- */
let io;
// Reveals marked elements when they enter the viewport; respects reduced-motion settings.
function reveal(root = document) {
  const els = $$('[data-reveal]:not(.in)', root);
  if (reduce || !('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  io = io || new IntersectionObserver(list => list.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
  els.forEach(e => io.observe(e));
}

// Animates a number from zero to the value stored in the element’s data-to attribute.
function countUp(el) {
  const to = parseFloat(el.dataset.to || '0'), suffix = el.dataset.suffix || '';
  const dec = to % 1 ? 1 : 0;
  if (reduce) { el.textContent = to.toFixed(dec) + suffix; return; }
  const t0 = performance.now(), dur = 1700;
  (function step(now) {
    const p = clamp((now - t0) / dur, 0, 1);
    el.textContent = (to * easeOut(p)).toFixed(dec) + suffix;
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}

// Wires scroll progress, sticky-header styling, parallax motion, and active navigation updates.
function initScrollFx() {
  const bar = $('#progress'), head = $('#topbar'), par = $$('[data-parallax]');
  let ticking = false;
  const run = () => {
    ticking = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? clamp(scrollY / max, 0, 1) : 0})`;
    head.classList.toggle('is-scrolled', scrollY > 8);
    if (!reduce) par.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > innerHeight + 100) return;
      const off = r.top + r.height / 2 - innerHeight / 2;
      el.style.setProperty('--py', (-off * parseFloat(el.dataset.parallax)).toFixed(1) + 'px');
    });
    spyUpdate();
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(run); } }, { passive: true });
  addEventListener('resize', run);
  run();
}

// Enables the custom cursor ring on mouse/trackpad devices; skips touch and reduced-motion users.
function initCursor() {
  if (!fine || reduce) return;
  const ring = $('#ring');
  let tx = -100, ty = -100, x = tx, y = ty;
  addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; ring.classList.add('on'); }, { passive: true });
  document.addEventListener('pointerover', e => ring.classList.toggle('hover', !!(e.target.closest && e.target.closest('a[href], button, input, .dish, .cuisine'))));
  document.documentElement.addEventListener('pointerleave', () => ring.classList.remove('on'));
  (function frame() {
    x = lerp(x, tx, .18); y = lerp(y, ty, .18);
    ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    requestAnimationFrame(frame);
  })();
}

/* ---------------------------------------------------------
   5. Navigation section tracking
   If section IDs change in savorly.html, update spyIds to keep active navigation working.
   --------------------------------------------------------- */
const spyIds = ['home', 'categories', 'menu', 'offers', 'support'];
let spyCurrent = '';
// Determines which page section is currently in view and updates navigation highlighting.
function spyUpdate() {
  const y = innerHeight * .35;
  let cur = spyIds[0];
  const atEnd = innerHeight + scrollY >= document.documentElement.scrollHeight - 4;
  spyIds.forEach(id => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= y) cur = id; });
  if (atEnd) cur = 'support';
  if (cur === spyCurrent) return;
  spyCurrent = cur;
  const ind = $('#sideInd');
  $$('[data-spy]').forEach(a => {
    const on = a.dataset.spy === cur;
    a.classList.toggle('is-active', on);
    on ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current');
    if (on && ind && a.closest('#sideNav')) {
      ind.classList.add('on');
      ind.style.transform = `translateY(${a.offsetTop}px)`;
    }
  });
}

/* ---------------------------------------------------------
   6. Featured-meal carousel
   Edit SLIDES above for carousel content; this block renders and controls those entries.
   --------------------------------------------------------- */
// Converts the configured hero title lines into safe, consistently styled heading markup.
function splitTitle(lines) {
  let i = 0;
  return lines.map(line => `<span class="line" aria-hidden="true">${
    line.split(' ').map(w => `<span class="word">${[...w].map(ch => `<span class="char" style="--i:${i++}">${ch}</span>`).join('')}</span>`).join(' ')
  }</span>`).join('');
}

// Builds the HTML for one hero carousel slide from a SLIDES data object.
function slideHTML(s) {
  return `
  <article class="slide" aria-roledescription="slide">
    <div class="slide__text">
      <p class="eyebrow" data-a style="--d:0">${s.eyebrow}</p>
      <h1 aria-label="${s.title.join(' ')}">${splitTitle(s.title)}</h1>
      <p class="lead" data-a style="--d:300">${s.text}</p>
      <div class="cta" data-a style="--d:420">
        <a class="btn btn--primary" href="#menu" data-magnetic>Order now <i class="btn__dot">${icon('arrow')}</i></a>
        <a class="btn btn--ghost" href="#categories" data-magnetic>Explore menu <i class="btn__dot">${icon('play')}</i></a>
      </div>
      <div class="proof" data-a style="--d:540">
        <div class="avatars" aria-hidden="true"><span>A</span><span>B</span><span>C</span><span>D</span></div>
        <p><b><span data-count data-to="50" data-suffix="K+">0</span></b>happy customers</p>
      </div>
    </div>
    <div class="slide__media">
      <span class="ring-dash"></span>
      <div class="plate"><div data-ph="Hero image" data-src="${s.img}" data-alt="${s.item.name}"></div></div>
      <div class="sat sat--a"><div class="ph--mini" data-ph="Extra image" data-src="${s.imgA}"></div></div>
      <div class="sat sat--b"><div class="ph--mini" data-ph="Extra image" data-src="${s.imgB}"></div></div>
      <div class="hero-card"><b>${s.item.name}</b><span>${s.item.sub}</span><strong>${money(s.item.price)}</strong></div>
    </div>
  </article>`;
}

// Creates carousel slides and controls, then manages autoplay, manual changes, and swipe gestures.
function initHero() {
  const hero = $('#home'), wrap = $('#slides'), dotsEl = $('#dots');
  wrap.innerHTML = SLIDES.map(slideHTML).join('');
  hydrateSlots(wrap);
  dotsEl.innerHTML = SLIDES.map((_, i) => `<button type="button" class="dot" aria-label="Go to slide ${i + 1}"></button>`).join('');
  const slides = $$('.slide', wrap), dots = $$('.dot', dotsEl);
  let idx = -1, p = 0, paused = reduce, started = false, last = performance.now();

  function go(n) {
    n = (n + slides.length) % slides.length;
    if (n === idx) return;
    if (idx >= 0) {
      const old = slides[idx];
      old.classList.remove('is-active'); old.classList.add('is-leaving');
      setTimeout(() => old.classList.remove('is-leaving'), 600);
    }
    idx = n;
    const cur = slides[n];
    cur.classList.remove('is-leaving');
    void cur.offsetWidth;
    cur.classList.add('is-active');
    dots.forEach((d, i) => { d.classList.toggle('is-active', i === n); d.style.setProperty('--p', 0); d.setAttribute('aria-current', i === n ? 'true' : 'false'); });
    p = 0;
    $$('[data-count]', cur).forEach(countUp);
  }
  dots.forEach((d, i) => d.addEventListener('click', () => go(i)));
  $('#prev').addEventListener('click', () => go(idx - 1));
  $('#next').addEventListener('click', () => go(idx + 1));

  (function tick(now) {
    const dt = now - last; last = now;
    if (started && !paused && !document.hidden) {
      p += dt / CONFIG.autoplayMs;
      if (dots[idx]) dots[idx].style.setProperty('--p', Math.min(p, 1).toFixed(3));
      if (p >= 1) go(idx + 1);
    }
    requestAnimationFrame(tick);
  })(last);

  hero.addEventListener('pointerenter', () => { if (fine) paused = true; });
  hero.addEventListener('pointerleave', () => { paused = reduce; });
  hero.addEventListener('focusin', () => { paused = true; });
  hero.addEventListener('focusout', () => { paused = reduce; });

  // Allow visitors to move between slides with horizontal touch swipes.
  let sx = 0, sy = 0;
  hero.addEventListener('touchstart', e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  hero.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) go(idx + (dx < 0 ? 1 : -1));
  }, { passive: true });

  // Move decorative hero layers slightly in response to pointer position.
  if (fine && !reduce) {
    let tx = 0, ty = 0, cx = 0, cy = 0;
    hero.addEventListener('pointermove', e => {
      const r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width * 2 - 1; ty = (e.clientY - r.top) / r.height * 2 - 1;
    });
    hero.addEventListener('pointerleave', () => { tx = 0; ty = 0; });
    (function loop() {
      cx = lerp(cx, tx, .07); cy = lerp(cy, ty, .07);
      hero.style.setProperty('--px', cx.toFixed(3)); hero.style.setProperty('--py', cy.toFixed(3));
      requestAnimationFrame(loop);
    })();
  }
  return { start() { started = true; go(0); } };
}

/* ---------------------------------------------------------
   7. Benefits, cuisines, menu, and favorites
   Edit FEATURES, CUISINES, and DISHES above; these functions render and filter that data.
   --------------------------------------------------------- */
// Renders the service-benefit cards using the FEATURES array.
function initFeatures() {
  $('#features').innerHTML = FEATURES.map((f, i) =>
    `<div class="feat" data-reveal="up" style="--rd:${i * 90}"><span class="feat__ic">${icon(f.icon)}</span><div><b>${f.title}</b><small>${f.sub}</small></div></div>`).join('');
}

// Current menu view state: selected cuisine, search query, favorites-only mode, and show-all mode.
const filter = { cuisine: null, q: '', favs: false, all: false };
// Favorites persist in this browser only; this is not a server-backed customer profile.
const favs = new Set(store.get('sv-favs', []));

// Builds cuisine cards and connects category selection to the menu filter.
function initCuisines() {
  const row = $('#cuisineRow');
  row.innerHTML = CUISINES.map((c, i) =>
    `<button type="button" class="cuisine" data-id="${c.id}" data-reveal="zoom" style="--tint:var(--${c.tint});--rd:${i * 80}" aria-pressed="false">
       <span class="cuisine__img ph--mini" data-ph="Cuisine image" data-src="${c.img}"></span>
       <b>${c.name}</b><small>${c.count} dishes</small>
     </button>`).join('');
  hydrateSlots(row);

  // Support mouse dragging without selecting a cuisine when the drag ends.
  let down = false, sx = 0, sl = 0, moved = false;
  row.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = row.scrollLeft; });
  addEventListener('pointermove', e => {
    if (!down) return;
    const dx = e.clientX - sx;
    if (Math.abs(dx) > 5) { moved = true; row.classList.add('is-drag'); }
    row.scrollLeft = sl - dx;
  });
  addEventListener('pointerup', () => { down = false; row.classList.remove('is-drag'); });
  row.addEventListener('click', e => {
    if (moved) { moved = false; return; }
    const c = e.target.closest('.cuisine');
    if (!c) return;
    setFilter({ cuisine: filter.cuisine === c.dataset.id ? null : c.dataset.id, q: '', favs: false });
    scrollToMenu();
  });
  $('#clearCuisine').addEventListener('click', () => { setFilter({ cuisine: null, q: '', favs: false, all: true }); scrollToMenu(); });
}

// Returns only dishes matching the active category, search text, favorites, and view-all state.
function visibleDishes() {
  const q = filter.q.trim().toLowerCase();
  let list = DISHES.filter(d =>
    (!filter.cuisine || d.cuisine === filter.cuisine) &&
    (!filter.favs || favs.has(d.id)) &&
    (!q || (d.name + ' ' + d.sub + ' ' + cuisineName(d.cuisine)).toLowerCase().includes(q)));
  const narrowed = filter.cuisine || filter.favs || q;
  if (!narrowed && !filter.all) list = list.filter(d => d.featured);
  return list;
}

// Builds one menu card, including its image, price, rating, favorite, and add-to-cart controls.
function dishHTML(d, i) {
  const tint = ['peach', 'peach', 'peach', 'lav', 'pink'][i % 5];
  const on = favs.has(d.id);
  return `
  <article class="dish" data-id="${d.id}" style="--tint:var(--${tint});--i:${i}">
    ${d.tag ? `<span class="tag tag--${d.tag.type}">${d.tag.text}</span>` : ''}
    <button type="button" class="fav ${on ? 'is-on' : ''}" data-fav="${d.id}" aria-pressed="${on}" aria-label="Favorite ${d.name}">${icon('heart')}</button>
    <div class="dish__img ph--mini" data-ph="Dish image" data-src="${d.img}" data-alt="${d.name}"></div>
    <h3>${d.name}</h3>
    <p>${d.sub}</p>
    <div class="dish__foot">
      <b>${money(d.price)}</b>
      <span class="rate">${icon('star')}${d.rating}</span>
      <button type="button" class="add" data-add="${d.id}" aria-label="Add ${d.name} to cart">${icon('plus')}</button>
    </div>
  </article>`;
}

// Rebuilds the visible menu cards and filter chips after a search or filter change.
function renderDishes() {
  const grid = $('#dishGrid'), list = visibleDishes();
  grid.innerHTML = list.length
    ? list.map(dishHTML).join('')
    : `<div class="empty">${icon('search')}<b>${filter.favs ? 'No favorites yet' : 'No dishes found'}</b><span>${filter.favs ? 'Tap the heart on a dish to save it here.' : 'Try another word or pick a cuisine.'}</span><button type="button" class="btn btn--primary btn--sm" data-clear>Clear filters</button></div>`;
  hydrateSlots(grid);

  // Show removable chips for the active cuisine, search, and favorites filters.
  const bar = $('#filterBar'), chips = [];
  if (filter.cuisine) chips.push(['cuisine', cuisineName(filter.cuisine)]);
  if (filter.q.trim()) chips.push(['q', `"${filter.q.trim()}"`]);
  if (filter.favs) chips.push(['favs', 'Favorites']);
  bar.hidden = !chips.length;
  bar.innerHTML = chips.length ? `Showing ${chips.map(c => `<span class="chip">${c[1]}<button type="button" data-chip="${c[0]}" aria-label="Remove filter">${icon('x')}</button></span>`).join('')}` : '';

  $$('.cuisine').forEach(c => { const on = c.dataset.id === filter.cuisine; c.classList.toggle('is-on', on); c.setAttribute('aria-pressed', on); });
  $('#favBtn').classList.toggle('is-on', filter.favs);
  const va = $('#viewAll'), narrowed = filter.cuisine || filter.q.trim() || filter.favs;
  va.hidden = !!narrowed;
  va.firstChild.textContent = filter.all ? 'Show less ' : 'See all ';
}

// Applies filter changes and refreshes the menu display.
function setFilter(patch) { Object.assign(filter, patch); renderDishes(); }
// Scrolls the visitor to the menu, using smooth movement only when permitted by their settings.
function scrollToMenu() { const m = $('#menu'); m.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }

// Connects menu-card buttons and optional visual effects after the cards are rendered.
function initDishes() {
  const grid = $('#dishGrid');
  renderDishes();

  grid.addEventListener('click', e => {
    const fav = e.target.closest('[data-fav]'), add = e.target.closest('[data-add]');
    if (e.target.closest('[data-clear]')) { setFilter({ cuisine: null, q: '', favs: false }); return; }
    if (fav) toggleFav(fav);
    if (add) addToCart(add.dataset.add, add);
  });
  $('#filterBar').addEventListener('click', e => {
    const c = e.target.closest('[data-chip]');
    if (!c) return;
    const k = c.dataset.chip;
    setFilter({ [k]: k === 'favs' ? false : (k === 'q' ? '' : null) });
    if (k === 'q') $('#q').value = '';
  });
  $('#viewAll').addEventListener('click', () => setFilter({ all: !filter.all }));

  // Add a subtle 3D tilt and pointer-follow highlight on fine-pointer devices.
  if (fine && !reduce) {
    let cur = null;
    const reset = el => { el.classList.remove('is-tilt'); el.style.transform = ''; };
    grid.addEventListener('pointermove', e => {
      const c = e.target.closest('.dish');
      if (c !== cur) { if (cur) reset(cur); cur = c; }
      if (!c) return;
      const r = c.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      c.style.setProperty('--mx', (px * 100).toFixed(1) + '%'); c.style.setProperty('--my', (py * 100).toFixed(1) + '%');
      c.classList.add('is-tilt');
      c.style.transform = `perspective(800px) rotateX(${((.5 - py) * 10).toFixed(2)}deg) rotateY(${((px - .5) * 12).toFixed(2)}deg) translateY(-6px)`;
    });
    grid.addEventListener('pointerleave', () => { if (cur) { reset(cur); cur = null; } });
  }
}

// Adds or removes a dish from favorites and saves the updated list in this browser.
function toggleFav(btn) {
  const id = btn.dataset.fav;
  favs.has(id) ? favs.delete(id) : favs.add(id);
  store.set('sv-favs', [...favs]);
  btn.classList.toggle('is-on', favs.has(id));
  btn.setAttribute('aria-pressed', favs.has(id));
  btn.classList.remove('is-pulse'); void btn.offsetWidth; btn.classList.add('is-pulse');
  if (favs.has(id)) burst(btn);
  updateFavCount();
  if (filter.favs) renderDishes();
}
// Updates the favorites badge in the header.
function updateFavCount() { const b = $('#favCount'); b.textContent = favs.size; b.dataset.n = favs.size; }

/* ---------------------------------------------------------
   8. Dish search
   Uses the DISHES list above; no content changes are needed in this interaction logic.
   --------------------------------------------------------- */
// Provides live search suggestions and applies the selected query to the dish catalogue.
function initSearch() {
  const form = $('#searchForm'), input = $('#q'), list = $('#suggest');
  let items = [], active = -1;

  const close = () => { list.hidden = true; input.setAttribute('aria-expanded', 'false'); active = -1; };
  const paint = () => {
    list.innerHTML = items.length
      ? items.map((d, i) => `<li role="option" data-i="${i}" class="${i === active ? 'is-active' : ''}"><span>${d.name}<br><small>${cuisineName(d.cuisine)}</small></span><b>${money(d.price)}</b></li>`).join('')
      : '<li class="none">No matches yet</li>';
    list.hidden = false; input.setAttribute('aria-expanded', 'true');
  };
  const apply = q => {
    input.value = q;
    setFilter({ q, cuisine: null, favs: false });
    close(); input.blur(); scrollToMenu();
    setTimeout(() => { const first = $('#dishGrid .dish'); if (first && q) first.classList.add('is-found'); }, 500);
  };

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { close(); if (filter.q) setFilter({ q: '' }); return; }
    items = DISHES.filter(d => (d.name + ' ' + d.sub + ' ' + cuisineName(d.cuisine)).toLowerCase().includes(q)).slice(0, 5);
    active = -1; paint();
  });
  input.addEventListener('keydown', e => {
    if (list.hidden) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); active = (active + 1) % Math.max(items.length, 1); paint(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); active = (active - 1 + items.length) % Math.max(items.length, 1); paint(); }
    else if (e.key === 'Escape') close();
  });
  list.addEventListener('mousedown', e => {
    const li = e.target.closest('li[data-i]');
    if (li) { e.preventDefault(); apply(items[+li.dataset.i].name); }
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    apply(active >= 0 && items[active] ? items[active].name : input.value.trim());
  });
  document.addEventListener('click', e => { if (!form.contains(e.target)) close(); });
}

/* ---------------------------------------------------------
   9. Cart and demo checkout
   Cart prices use CONFIG and DISHES above. The checkout is a front-end demo, not payment processing.
   --------------------------------------------------------- */
// Cart quantities are stored by dish ID and restored from this browser's local storage.
const cart = new Map(Object.entries(store.get('sv-cart', {})).filter(([id]) => byId[id]));
let lastAdded = null;
const saveCart = () => store.set('sv-cart', Object.fromEntries(cart));

// Calculates subtotal, delivery fee, and total using the template’s configured rules.
function totals() {
  let sub = 0, n = 0;
  cart.forEach((q, id) => { sub += byId[id].price * q; n += q; });
  const delivery = !sub ? 0 : (sub >= CONFIG.freeDeliveryOver ? 0 : CONFIG.deliveryFee);
  return { sub, n, delivery, total: sub + delivery };
}

// Refreshes cart rows, item counts, totals, and free-delivery messaging.
function renderCart() {
  const t = totals(), list = $('#cartList'), foot = $('#cartFoot');
  $$('[data-cart-count]').forEach(b => { b.textContent = t.n; b.dataset.n = t.n; });

  if (!t.n) {
    list.innerHTML = `<li class="cart-empty">${icon('cart')}<b>Your cart is empty</b><span>Add a dish and it will show up here.</span><button type="button" class="btn btn--primary btn--sm" data-close-cart>Browse the menu</button></li>`;
    foot.innerHTML = '';
    return;
  }
  list.innerHTML = [...cart].map(([id, q]) => {
    const d = byId[id];
    return `<li class="ci ${id === lastAdded ? 'is-new' : ''}" data-id="${id}">
      <div class="ci__img ph--mini" data-ph="Dish" data-src="${d.img}" data-alt="${d.name}"></div>
      <div><b>${d.name}</b><small>${money(d.price)} each</small>
        <div class="qty"><button type="button" data-dec aria-label="Less">${icon('minus')}</button><span>${q}</span><button type="button" data-inc aria-label="More">${icon('plus')}</button></div>
      </div>
      <button type="button" class="ci__rm" data-rm aria-label="Remove ${d.name}">${icon('trash')}</button>
    </li>`;
  }).join('');
  hydrateSlots(list);
  lastAdded = null;

  const left = Math.max(0, CONFIG.freeDeliveryOver - t.sub);
  foot.innerHTML = `
    <div class="meter" style="--f:${clamp(t.sub / CONFIG.freeDeliveryOver, 0, 1)}">
      <span>${left ? `Add ${money(left)} more for free delivery` : 'You unlocked free delivery'}</span><i></i>
    </div>
    <div class="row"><span>Subtotal</span><span>${money(t.sub)}</span></div>
    <div class="row"><span>Delivery</span><span>${t.delivery ? money(t.delivery) : 'Free'}</span></div>
    <div class="row total"><span>Total</span><span>${money(t.total)}</span></div>
    <button type="button" class="btn btn--primary" data-checkout>Checkout</button>
    <a class="btn btn--wa" href="${waLink(orderText(t))}" target="_blank" rel="noopener">${icon('whatsapp')}Order on WhatsApp</a>`;
}

// Formats the current cart into readable text for an order/contact summary.
function orderText(t) {
  const lines = [...cart].map(([id, q]) => `${q} x ${byId[id].name} (${money(byId[id].price * q)})`);
  return `Hi! I would like to order:\n${lines.join('\n')}\nTotal: ${money(t.total)}`;
}

// Briefly animates the cart badge to draw attention to an updated cart.
function bumpCart() {
  $$('[data-cart-count]').forEach(b => { b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); });
}

// Animates a small visual token from an add button toward the cart icon.
function fly(from) {
  if (!canAnimate) { bumpCart(); return; }
  const a = from.getBoundingClientRect(), b = $('#cartBtn').getBoundingClientRect();
  const x0 = a.left + a.width / 2, y0 = a.top + a.height / 2, x1 = b.left + b.width / 2, y1 = b.top + b.height / 2;
  const dot = document.createElement('i');
  dot.className = 'fly';
  document.body.appendChild(dot);
  const an = dot.animate([
    { transform: `translate(${x0}px, ${y0}px) translate(-50%, -50%) scale(1)` },
    { transform: `translate(${(x0 + x1) / 2}px, ${Math.min(y0, y1) - 90}px) translate(-50%, -50%) scale(1.25)`, offset: .5 },
    { transform: `translate(${x1}px, ${y1}px) translate(-50%, -50%) scale(.3)` },
  ], { duration: 780, easing: 'cubic-bezier(.45, 0, .2, 1)' });
  an.onfinish = () => { dot.remove(); bumpCart(); };
}

// Increases the selected dish quantity, saves the cart, redraws totals, and shows feedback.
function addToCart(id, from) {
  cart.set(id, (cart.get(id) || 0) + 1);
  lastAdded = id; saveCart(); renderCart();
  if (from) fly(from); else bumpCart();
  toast(`${byId[id].name} added`);
}

// Opens or closes the cart drawer and overlay, and manages focus and page scrolling.
function openCart(open = true) {
  const d = $('#drawer'), s = $('#scrim');
  d.classList.toggle('is-open', open); s.classList.toggle('is-open', open);
  d.setAttribute('aria-hidden', String(!open));
  document.body.style.overflow = open ? 'hidden' : '';
  if (open) setTimeout(() => $('#closeCart').focus(), 300); else $('#cartBtn').focus({ preventScroll: true });
}

// Connects cart open/close, quantity, remove, and demo-checkout controls.
function initCart() {
  renderCart(); updateFavCount();
  $('#cartBtn').addEventListener('click', () => openCart(true));
  $('#bottomCart').addEventListener('click', () => openCart(true));
  $('#closeCart').addEventListener('click', () => openCart(false));
  $('#scrim').addEventListener('click', () => openCart(false));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && $('#drawer').classList.contains('is-open')) openCart(false); });

  $('#drawer').addEventListener('click', e => {
    if (e.target.closest('[data-close-cart]')) { openCart(false); scrollToMenu(); return; }
    if (e.target.closest('[data-checkout]')) {
      const r = e.target.getBoundingClientRect();
      confetti(r.left + r.width / 2, r.top, 140);
      cart.clear(); saveCart(); renderCart();
      toast('Order placed! (demo checkout)');
      setTimeout(() => openCart(false), 900);
      return;
    }
    const li = e.target.closest('.ci');
    if (!li) return;
    const id = li.dataset.id, q = cart.get(id) || 0;
    if (e.target.closest('[data-inc]')) cart.set(id, q + 1);
    else if (e.target.closest('[data-dec]')) q <= 1 ? cart.delete(id) : cart.set(id, q - 1);
    else if (e.target.closest('[data-rm]')) cart.delete(id);
    else return;
    saveCart(); renderCart(); bumpCart();
  });
}

/* ---------------------------------------------------------
   10. Offers, partner strip, and newsletter
   Promo settings are in CONFIG; partner names are in PARTNERS. Connect a mailing service for real signups.
   --------------------------------------------------------- */
// Copies the promo code and updates the offer countdown display.
function initOffers() {
  $('#promoCode').textContent = CONFIG.promoCode;
  $('#copyCode').addEventListener('click', e => {
    const done = () => { toast(`Code ${CONFIG.promoCode} copied`); const r = e.currentTarget.getBoundingClientRect(); confetti(r.left + r.width / 2, r.top + r.height / 2, 70); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(CONFIG.promoCode).then(done, done);
    else done();
  });

  // Use the configured expiry date, or default to the next Sunday at 23:59.
  const el = $('#countdown');
  let end;
  if (CONFIG.offerEnds) end = new Date(CONFIG.offerEnds);
  else { end = new Date(); end.setDate(end.getDate() + ((7 - end.getDay()) % 7)); end.setHours(23, 59, 59, 0); if (end < new Date()) end.setDate(end.getDate() + 7); }
  const units = ['d', 'h', 'm', 's'];
  el.innerHTML = units.map(u => `<span data-u="${u}"><b>00</b><small>${{ d: 'days', h: 'hrs', m: 'min', s: 'sec' }[u]}</small></span>`).join('');
  const cells = Object.fromEntries(units.map(u => [u, $(`[data-u="${u}"]`, el)]));
  const prev = {};
  const update = () => {
    let s = Math.max(0, Math.floor((end - new Date()) / 1000));
    const v = { d: Math.floor(s / 86400), h: Math.floor(s % 86400 / 3600), m: Math.floor(s % 3600 / 60), s: s % 60 };
    units.forEach(u => {
      const txt = String(v[u]).padStart(2, '0');
      if (prev[u] === txt) return;
      prev[u] = txt;
      const c = cells[u]; c.firstChild.textContent = txt;
      c.classList.remove('tick'); void c.offsetWidth; c.classList.add('tick');
    });
  };
  update(); setInterval(update, 1000);

  // Duplicate names only on small screens, where the marquee animation loops.
  const logos = PARTNERS.map(n => `<span class="logo-ph"><i>${icon('utensils')}</i>${n}</span>`).join('');
  const marquee = $('.marquee'), track = $('#marq');
  let desktopLayout = mq('(min-width: 900px)');
  const renderLogos = () => { track.innerHTML = desktopLayout ? logos : logos + logos; };
  renderLogos();
  addEventListener('resize', () => {
    const nextLayout = mq('(min-width: 900px)');
    if (nextLayout === desktopLayout) return;
    desktopLayout = nextLayout;
    renderLogos();
  }, { passive: true });

  let startX = 0, startScroll = 0, dragging = false;
  marquee.addEventListener('pointerdown', e => {
    if (!desktopLayout || e.pointerType !== 'mouse' || e.button !== 0) return;
    startX = e.clientX;
    startScroll = marquee.scrollLeft;
    dragging = true;
    marquee.setPointerCapture(e.pointerId);
  });
  marquee.addEventListener('pointermove', e => {
    if (!dragging) return;
    const distance = e.clientX - startX;
    if (Math.abs(distance) > 4) marquee.classList.add('is-dragging');
    if (marquee.classList.contains('is-dragging')) {
      marquee.scrollLeft = startScroll - distance;
      e.preventDefault();
    }
  });
  const stopDragging = () => {
    dragging = false;
    marquee.classList.remove('is-dragging');
  };
  marquee.addEventListener('pointerup', stopDragging);
  marquee.addEventListener('pointercancel', stopDragging);
  marquee.addEventListener('wheel', e => {
    if (!desktopLayout || Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    marquee.scrollLeft += e.deltaY;
    e.preventDefault();
  }, { passive: false });
}

// Checks the newsletter email field and displays demo feedback; no remote subscription is sent.
function initNewsletter() {
  const form = $('#newsletter'), input = $('#nlEmail');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim());
    form.classList.remove('is-bad'); void form.offsetWidth;
    if (!ok) { form.classList.add('is-bad'); toast('Enter a valid email address'); input.focus(); return; }
    const r = form.getBoundingClientRect();
    confetti(r.left + r.width / 2, r.top + 20, 110);
    toast('You are on the list. Thank you!');
    form.reset();
  });
}

/* ---------------------------------------------------------
   11. Theme preference
   Theme colors are in style.css; this block stores and applies the visitor's selection.
   --------------------------------------------------------- */
// Applies light/dark theme colors and remembers the preference in browser storage when available.
function initTheme() {
  const root = document.documentElement, btn = $('#themeBtn');
  const apply = t => {
    root.setAttribute('data-theme', t);
    $('use', btn).setAttribute('href', t === 'dark' ? '#i-sun' : '#i-moon');
    try { localStorage.setItem('sv-theme', t); } catch (e) { /* Theme changes remain active for the current page. */ }
  };
  let saved = null;
  try { saved = localStorage.getItem('sv-theme'); } catch (e) { /* Use the operating-system theme when browser storage is unavailable. */ }
  apply(saved || (mq('(prefers-color-scheme: dark)') ? 'dark' : 'light'));

  btn.addEventListener('click', e => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    if (document.startViewTransition && canAnimate) {
      const x = e.clientX || innerWidth - 80, y = e.clientY || 40;
      const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      const vt = document.startViewTransition(() => apply(next));
      vt.ready.then(() => root.animate(
        { clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 700, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' }
      )).catch(() => {});
    } else apply(next);
  });
}

/* ---------------------------------------------------------
   12. Start the template
   Runs after the page markup loads. Keep initialization calls aligned with features in this file.
   --------------------------------------------------------- */
// Starts all page features once the HTML is ready and completes the opening loading animation.
function boot() {
  document.querySelectorAll('[data-brand]').forEach(n => { n.textContent = CONFIG.brand; });
  document.title = `${CONFIG.brand} | Food Delivery`;
  $('#year').textContent = new Date().getFullYear();

  hydrateSlots();
  $$('[data-wa]').forEach(a => { a.href = waLink(CONFIG.whatsappMessage); });
  initTheme();
  initFeatures();
  initCuisines();
  initDishes();
  initSearch();
  initCart();
  initOffers();
  initNewsletter();
  initCursor();
  const hero = initHero();
  reveal();
  initScrollFx();
  addEventListener('resize', () => { sizeFx(); spyCurrent = ''; spyUpdate(); });

  $('#favBtn').addEventListener('click', () => {
    setFilter({ favs: !filter.favs, cuisine: null, q: '' });
    if (filter.favs) scrollToMenu();
  });
  $('#accBtn').addEventListener('click', () => toast('Connect this button to your login page'));

  const pre = $('#preloader');
  const finish = () => {
    document.body.classList.remove('loading');
    hero.start();
    spyCurrent = ''; spyUpdate();
  };
  if (reduce) { pre.remove(); finish(); return; }

  const num = $('#plNum'), t0 = performance.now(), dur = 1500;
  (function step(now) {
    const p = clamp((now - t0) / dur, 0, 1);
    num.textContent = Math.round(easeOut(p) * 100);
    if (p < 1) return requestAnimationFrame(step);
    pre.classList.add('is-done');
    setTimeout(finish, 450);
    setTimeout(() => pre.remove(), 1500);
  })(t0);
}

boot();
})();
