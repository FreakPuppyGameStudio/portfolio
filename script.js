document.getElementById('year').textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function slug(p) {
  return p.id;
}

// ---------- Tarjetas de proyecto (estilo ventana) ----------
function cardHTML(p) {
  const badge = p.badge ? `<span class="badge badge-${p.badge}">${esc(BADGE_LABELS[p.badge])}</span>` : '';
  const coverClass = p.group === 'game' ? 'cover-game' : p.group === 'outdated' ? 'cover-old' : 'cover-software';
  const cover = p.coverImg
    ? `<img src="${esc(p.coverImg)}" alt="${esc(p.name)}" loading="lazy">`
    : `<span class="cover-label">${esc(p.cover)}</span>`;
  return `
    <article data-theme="${themeOf(p)}" class="card ${p.group === 'outdated' ? 'is-outdated' : ''}">
      <header class="win">
        <span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <span class="win-title">${esc(slug(p))}/</span>
      </header>
      <div class="card-cover ${coverClass} ${p.coverImg ? 'has-img' : ''}">${cover}</div>
      <div class="card-body">
        <p class="meta">${esc(p.category)}</p>
        <h4>${esc(p.name)}</h4>
        <p class="desc">${esc(p.description)}</p>
        ${badge}
        <div class="card-actions">
          <a class="btn btn-primary btn-sm" href="project.html?id=${encodeURIComponent(p.id)}">$ open</a>
        </div>
      </div>
    </article>`;
}

const groups = { software: 'grid-software', tool: 'grid-tool', game: 'grid-game', outdated: 'grid-outdated' };
for (const [group, elId] of Object.entries(groups)) {
  const el = document.getElementById(elId);
  if (el) el.innerHTML = PROJECTS.filter(p => p.group === group).map(cardHTML).join('');
}

// ---------- Certificados ----------
const certEl = document.getElementById('cert-grid');
if (certEl && typeof CERTIFICATES !== 'undefined') {
  certEl.innerHTML = CERTIFICATES.map((c, i) => `
    <figure class="cert">
      <header class="win">
        <span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <span class="win-title">cert_${String(i + 1).padStart(2, '0')}.pdf</span>
      </header>
      <a href="${c.image}" target="_blank" rel="noopener" class="cert-img">
        <img src="${c.image}" alt="Certificate: ${esc(c.title)}" loading="lazy">
      </a>
      <figcaption>
        <h4>${esc(c.title)}</h4>
        <p class="meta">${esc(c.issuer)}</p>
        <p class="desc">${esc(c.date)} · ${esc(c.detail)}</p>
      </figcaption>
    </figure>`).join('');
}

// ---------- Momentos ----------
const momentEl = document.getElementById('moment-grid');
if (momentEl && typeof MOMENTS !== 'undefined') {
  momentEl.innerHTML = MOMENTS.map((m, i) => `
    <figure class="moment">
      <header class="win">
        <span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <span class="win-title">moment_${String(i + 1).padStart(2, '0')}.jpg</span>
      </header>
      <div class="moment-img"><img src="${m.image}" alt="${esc(m.title)}" loading="lazy"></div>
      <figcaption>
        <p class="meta">${esc(m.meta)}</p>
        <h4>${esc(m.title)}</h4>
        <p class="desc">${esc(m.caption)}</p>
      </figcaption>
    </figure>`).join('');
}

// ---------- Prompt: escritura de "whoami" ----------
const typedEl = document.querySelector('[data-type]');
if (typedEl) {
  const text = typedEl.dataset.type;
  if (reduceMotion) {
    typedEl.textContent = text;
  } else {
    let i = 0;
    const tick = () => {
      typedEl.textContent = text.slice(0, ++i);
      if (i < text.length) setTimeout(tick, 90);
    };
    setTimeout(tick, 400);
  }
}

// ---------- Brillo que sigue al cursor ----------
if (!reduceMotion) {
  document.addEventListener('pointermove', e => {
    document.querySelectorAll('.card, .eco-card, .skill-group, .cert, .moment').forEach(el => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  }, { passive: true });
}

// ---------- Aparición al desplazarse ----------
const revealTargets = document.querySelectorAll('.cmd, .card, .eco-card, .skill-group, .cert, .moment, .about-text, .interests, .contact-links, .setup, .fetch, .lang, .log-entry');
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealTargets.forEach(el => el.classList.add('in'));
} else {
  revealTargets.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach(el => io.observe(el));
}

// ---------- Logros ----------
const logEl = document.getElementById('achievement-log');
if (logEl && typeof ACHIEVEMENTS !== 'undefined') {
  logEl.innerHTML = ACHIEVEMENTS.map((a, i) => `
    <article class="log-entry">
      <div class="log-meta">
        <span class="log-hash">${(i + 1).toString(16).padStart(7, '0')}</span>
        <span class="log-date">${esc(a.date)}</span>
      </div>
      <div class="log-body">
        <h4>${esc(a.title)}</h4>
        <p class="meta">${esc(a.org)}</p>
        <p class="desc">${esc(a.detail)}</p>
        ${a.stats.length ? `<ul class="stats">${a.stats.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
      </div>
    </article>`).join('');
}
