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
  const gallery = p.images && p.images.length
    ? `<section class="block"><h2>Screenshots</h2><div class="gallery">${p.images.map((src, i) => `
        <a href="${esc(src)}" target="_blank" rel="noopener" class="gallery-item"><img src="${esc(src)}" alt="${esc(p.name)} screenshot ${i + 1}" loading="lazy"></a>`).join('')}</div></section>`
    : '';
  const videos = p.videos && p.videos.length
    ? `<section class="block"><h2>Video</h2><div class="videos">${p.videos.map(u => {
        const id = (u.match(/(?:youtu\.be\/|v=|shorts\/)([\w-]{11})/) || [])[1];
        return id
          ? `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${esc(p.name)} video" loading="lazy" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`
          : '';
      }).join('')}</div></section>`
    : '';

  main.dataset.theme = themeOf(p);
  main.innerHTML = `
    <section class="detail-head">
      <a class="back" href="index.html#projects">&larr; All projects</a>
      <p class="meta">${esc(p.category)}</p>
      ${p.coverImg ? `<img class="detail-cover" src="${esc(p.coverImg)}" alt="${esc(p.name)} logo">` : ''}
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

    ${gallery}
    ${videos}
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
