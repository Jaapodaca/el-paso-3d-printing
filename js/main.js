// El Paso 3D Printing: language toggle, scroll reveals, section tracking, lightbox, quote form.
const root = document.documentElement;
const lang = () => (root.lang === 'es' ? 'es' : 'en');

/* ---------- Language ---------- */
const META = {
  en: {
    title: '3D Printing in El Paso, TX | El Paso 3D Printing',
    description: 'Local, owner-run 3D printing in El Paso, TX: custom prints, replacement parts, prototypes, figurines, signs, and bulk orders in PLA, PETG, TPU, and resin. Pickup available. Get a quote.',
  },
  es: {
    title: 'Impresión 3D en El Paso, TX | El Paso 3D Printing',
    description: 'Impresión 3D local e independiente en El Paso, TX: impresiones a la medida, piezas de repuesto, prototipos, figuras, letreros y pedidos al mayoreo en PLA, PETG, TPU y resina. Recoge en persona. Pide tu cotización.',
  },
};
// Attributes that can't hold two <span lang> children carry their Spanish in data-es-*.
const ATTRS = ['alt', 'aria-label', 'placeholder'];

function setLang(l) {
  root.lang = l;
  try { localStorage.setItem('lang', l); } catch (e) {}
  document.title = META[l].title;
  document.querySelector('meta[name="description"]').content = META[l].description;
  for (const a of ATTRS) {
    for (const el of document.querySelectorAll(`[data-es-${a}]`)) {
      if (!el.hasAttribute(`data-en-${a}`)) el.setAttribute(`data-en-${a}`, el.getAttribute(a) || '');
      el.setAttribute(a, el.getAttribute(`data-${l}-${a}`));
    }
  }
  for (const b of document.querySelectorAll('[data-lang]')) b.setAttribute('aria-pressed', b.dataset.lang === l);
  document.querySelector('.quote [name="language"]').value = l;
}
document.querySelector('.lang').addEventListener('click', (e) => {
  const b = e.target.closest('[data-lang]');
  if (b) setLang(b.dataset.lang);
});
setLang(lang());

/* ---------- Hero moments: play only once they're on screen (on phones they start below the fold) ---------- */
const play = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); play.unobserve(e.target); }
}, { threshold: 0.5 });
document.querySelectorAll('.spool-label, .band').forEach((el) => play.observe(el));

/* ---------- Scroll reveals ---------- */
const reveal = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); reveal.unobserve(e.target); }
}, { rootMargin: '0px 0px -10% 0px' });
document.querySelectorAll('[data-reveal]').forEach((el) => reveal.observe(el));

/* ---------- Active nav link ---------- */
const navLinks = [...document.querySelectorAll('.tb nav a[href^="#"]')];
const spy = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    for (const a of navLinks) {
      if (a.hash === '#' + e.target.id) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    }
  }
}, { rootMargin: '-35% 0px -60% 0px' });
document.querySelectorAll('main > section[id]').forEach((s) => spy.observe(s));

// Close the phone menu after picking a section.
const menu = document.querySelector('.tb-menu');
menu.addEventListener('click', (e) => { if (e.target.closest('a')) menu.open = false; });

/* ---------- Lightbox ---------- */
const box = document.querySelector('.lightbox');
const boxImg = box.querySelector('img');
const boxCap = box.querySelector('figcaption');
const tiles = [...document.querySelectorAll('.gallery .tile')];
let current = 0;

function show(i) {
  current = (i + tiles.length) % tiles.length;
  const img = tiles[current].querySelector('img');
  boxImg.src = img.currentSrc || img.src;
  boxImg.alt = img.alt;
  boxCap.textContent = tiles[current].querySelector(`.tile-cap [lang="${lang()}"]`).textContent;
}
tiles.forEach((t, i) => t.addEventListener('click', () => { show(i); box.showModal(); }));
box.querySelector('.lb-close').addEventListener('click', () => box.close());
box.querySelector('.lb-prev').addEventListener('click', () => show(current - 1));
box.querySelector('.lb-next').addEventListener('click', () => show(current + 1));
box.addEventListener('click', (e) => { if (e.target === box || e.target.tagName === 'FIGURE') box.close(); });
box.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') show(current - 1);
  if (e.key === 'ArrowRight') show(current + 1);
});
box.addEventListener('close', () => tiles[current].focus());
let touchX = null;
box.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
box.addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
});

/* ---------- Quote form ---------- */
const form = document.querySelector('form.quote');
const status = form.querySelector('.status');
const MAX_BYTES = 8 * 1024 * 1024; // Netlify Forms limit per submission
const MSG = {
  en: {
    name: 'Please add your name.',
    contact: 'Add an email or a phone number with area code.',
    description: 'Tell us a little about what you need.',
    quantity: 'Quantity must be 1 or more.',
    deadline: 'Pick a date from today on.',
    file: 'That file is over 8 MB. Email it to us instead, or send a smaller photo.',
    sending: 'Sending your request…',
    ok: 'Got it! We\'ll get back to you with a quote soon.',
    fail: 'That didn\'t go through. Please call <a href="tel:+19153012296">(915) 301-2296</a> or email <a href="mailto:elpaso3dprintingcompany@gmail.com">elpaso3dprintingcompany@gmail.com</a>.',
  },
  es: {
    name: 'Escribe tu nombre.',
    contact: 'Agrega un correo o un teléfono con lada.',
    description: 'Cuéntanos un poco de lo que necesitas.',
    quantity: 'La cantidad debe ser 1 o más.',
    deadline: 'Escoge una fecha de hoy en adelante.',
    file: 'Ese archivo pesa más de 8 MB. Mándalo por correo o manda una foto más ligera.',
    sending: 'Enviando tu solicitud…',
    ok: '¡Listo! Te mandamos tu cotización pronto.',
    fail: 'No se pudo enviar. Llama al <a href="tel:+19153012296">(915) 301-2296</a> o escribe a <a href="mailto:elpaso3dprintingcompany@gmail.com">elpaso3dprintingcompany@gmail.com</a>.',
  },
};

const fileInput = form.elements.file;
const fileName = document.getElementById('f-file-name');
const fileNameEmpty = fileName.innerHTML;
const showFileName = () => {
  if (fileInput.files[0]) fileName.textContent = fileInput.files[0].name;
  else fileName.innerHTML = fileNameEmpty;
};
fileInput.addEventListener('change', showFileName);
const dateInput = form.elements.deadline;
const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
dateInput.min = today;

function fieldError(el) {
  if (el === fileInput) return el.files[0] && el.files[0].size > MAX_BYTES ? 'file' : '';
  return el.validity.valid ? '' : el.name;
}
function mark(el, key) {
  const cell = el.closest('.cell');
  let err = cell.querySelector('.err');
  cell.classList.toggle('bad', !!key);
  el.setAttribute('aria-invalid', !!key);
  if (!key) { if (err) err.remove(); return; }
  if (!err) {
    err = document.createElement('p');
    err.className = 'err';
    err.id = el.id + '-err';
    cell.append(err);
    el.setAttribute('aria-describedby', [el.getAttribute('aria-describedby'), err.id].filter(Boolean).join(' '));
  }
  err.textContent = MSG[lang()][key];
}

const fields = [...form.querySelectorAll('.cell input, .cell textarea')];
fields.forEach((el) => el.addEventListener(el.type === 'file' ? 'change' : 'input', () => {
  if (el.closest('.bad') || el === fileInput) mark(el, fieldError(el));
}));

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  let first = null;
  for (const el of fields) {
    const key = fieldError(el);
    mark(el, key);
    if (key && !first) first = el;
  }
  if (first) { first.focus(); return; }

  const button = form.querySelector('[type="submit"]');
  button.disabled = true;
  status.dataset.state = 'sending';
  status.textContent = MSG[lang()].sending;
  try {
    // Netlify Forms reads the multipart POST; don't set Content-Type yourself.
    const res = await fetch(form.getAttribute('action') || '/', { method: 'POST', body: new FormData(form) });
    if (!res.ok) throw new Error(res.status);
    form.reset();
    showFileName();
    form.elements.language.value = lang();
    status.dataset.state = 'ok';
    status.textContent = MSG[lang()].ok;
  } catch (err) {
    status.dataset.state = 'error';
    status.innerHTML = MSG[lang()].fail;
  } finally {
    button.disabled = false;
  }
});
