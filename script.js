document.getElementById('year').textContent = new Date().getFullYear();

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function cardHTML(p) {
  const badge = p.badge ? `<span class="badge badge-${p.badge}">${esc(BADGE_LABELS[p.badge])}</span>` : '';
  const coverClass = p.group === 'game' ? 'cover-game' : p.group === 'outdated' ? 'cover-old' : 'cover-software';
  return `
    <article class="card ${p.group === 'outdated' ? 'is-outdated' : ''}">
      <div class="card-cover ${coverClass}">
        <span class="cover-label">${esc(p.cover)}</span>
      </div>
      <div class="card-body">
        <p class="meta">${esc(p.category)}</p>
        <h4>${esc(p.name)}</h4>
        <p class="desc">${esc(p.description)}</p>
        ${badge}
        <div class="card-actions">
          <a class="btn btn-primary btn-sm" href="project.html?id=${encodeURIComponent(p.id)}">View details</a>
        </div>
      </div>
    </article>`;
}

const groups = { software: 'grid-software', game: 'grid-game', outdated: 'grid-outdated' };
for (const [group, elId] of Object.entries(groups)) {
  const el = document.getElementById(elId);
  el.innerHTML = PROJECTS.filter(p => p.group === group).map(cardHTML).join('');
}

// Certificados
const certEl = document.getElementById('cert-grid');
if (certEl && typeof CERTIFICATES !== 'undefined') {
  certEl.innerHTML = CERTIFICATES.map(c => `
    <figure class="cert">
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
