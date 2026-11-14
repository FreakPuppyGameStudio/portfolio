document.getElementById('year').textContent = new Date().getFullYear();

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function render() {
  const id = new URLSearchParams(window.location.search).get('id');
  const p = PROJECTS.find(x => x.id === id);
  const main = document.getElementById('detail');

  if (!p) {
    main.innerHTML = `
      <section class="detail-head">
        <h1>Project not found</h1>
        <p class="lead">The project you're looking for doesn't exist.</p>
        <a class="btn btn-ghost" href="index.html#projects">Back to projects</a>
      </section>`;
    return;
  }

  document.title = `${p.name} — Santiago Morales Itzcoatl`;

  const badge = p.badge ? `<span class="badge badge-${p.badge}">${esc(BADGE_LABELS[p.badge])}</span>` : '';
  const version = p.version ? `<div class="fact"><span>Version</span><strong>${esc(p.version)}</strong></div>` : '';
  const features = p.features.length
    ? `<section class="block"><h2>Features</h2><ul class="list">${p.features.map(f => `<li>${esc(f)}</li>`).join('')}</ul></section>`
    : '';
  const tech = p.tech.length
    ? `<section class="block"><h2>Technologies</h2><ul class="chips">${p.tech.map(t => `<li>${esc(t)}</li>`).join('')}</ul></section>`
    : '';
  const install = p.install
    ? `<section class="block"><h2>Installation</h2><ol class="list ordered">${p.install.map(s => `<li>${esc(s)}</li>`).join('')}</ol></section>`
    : '';
  const links = p.links.map(l => {
    const attrs = [
      l.download ? 'download' : '',
      /^https?:/.test(l.href) ? 'target="_blank" rel="noopener"' : ''
    ].filter(Boolean).join(' ');
    return `<a class="btn ${l.primary ? 'btn-primary' : 'btn-ghost'}" href="${esc(l.href)}" ${attrs}>${esc(l.label)}</a>`;
  }).join('');
  const note = p.note ? `<p class="note">${esc(p.note)}</p>` : '';

  main.innerHTML = `
    <section class="detail-head">
      <a class="back" href="index.html#projects">&larr; All projects</a>
      <p class="meta">${esc(p.category)}</p>
      <h1>${esc(p.name)}</h1>
      <div class="facts">
        <div class="fact"><span>Status</span><strong>${esc(p.status)}</strong></div>
        ${version}
        ${badge ? `<div class="fact"><span>Availability</span>${badge}</div>` : ''}
      </div>
    </section>

    <section class="block">
      <h2>Overview</h2>
      <p class="body">${esc(p.description)}</p>
    </section>

    ${features}
    ${tech}
    ${install}

    <section class="block">
      <h2>Links</h2>
      <div class="link-row">${links}</div>
      ${note}
    </section>
  `;
}

render();
