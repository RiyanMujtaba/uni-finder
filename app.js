function visaBadge(level) {
  if (level === "Easy")            return '<span class="visa easy">🟢 Easy Visa</span>';
  if (level === "Moderate")        return '<span class="visa moderate">🟡 Moderate Visa</span>';
  if (level === "Moderate–Hard")   return '<span class="visa hard">🔴 Moderate–Hard Visa</span>';
  return '<span class="visa moderate">🟡 ' + level + '</span>';
}

function acceptanceBadge(level) {
  if (level === "accessible")   return '<span class="acc accessible">High Acceptance</span>';
  if (level === "moderate")     return '<span class="acc moderate">Moderate</span>';
  if (level === "competitive")  return '<span class="acc competitive">Competitive</span>';
  return '';
}

function renderCards(filter) {
  const grid = document.getElementById("grid");
  const list = filter === "all" ? universities : universities.filter(u => u.filter === filter);

  grid.innerHTML = list.map(u => `
    <div class="card" style="--accent: ${u.color}">
      <div class="card-top">
        <div class="card-flag">${u.flag}</div>
        <div class="card-meta">
          <div class="card-country">${u.country}</div>
          ${acceptanceBadge(u.acceptanceLevel)}
        </div>
        ${u.highlight ? `<div class="card-highlight" style="background:${u.color}22; color:${u.color}">${u.highlight}</div>` : ''}
      </div>

      <h2 class="card-name">${u.name}</h2>
      <div class="card-program">${u.program} · ${u.duration}</div>

      <div class="tags">
        ${u.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>

      <div class="info-grid">
        <div class="info-row">
          <span class="info-label">💷 Tuition</span>
          <span class="info-val">${u.tuition}</span>
        </div>
        <div class="info-row">
          <span class="info-label">📊 Acceptance</span>
          <span class="info-val">${u.acceptance}</span>
        </div>
        <div class="info-row">
          <span class="info-label">🎤 Duolingo</span>
          <span class="info-val">${u.duolingo}</span>
        </div>
        <div class="info-row">
          <span class="info-label">📝 SAT</span>
          <span class="info-val">${u.sat}</span>
        </div>
        <div class="info-row">
          <span class="info-label">📅 Deadline</span>
          <span class="info-val">${u.deadline}</span>
        </div>
        <div class="info-row">
          <span class="info-label">🎓 Term Start</span>
          <span class="info-val">${u.termStart}</span>
        </div>
        <div class="info-row">
          <span class="info-label">🛂 Visa</span>
          <span class="info-val">${visaBadge(u.visa)}</span>
        </div>
        <div class="info-row full">
          <span class="info-label">🛂 Visa Details</span>
          <span class="info-val small">${u.visaNote}</span>
        </div>
        <div class="info-row full grade-note">
          <span class="info-label">📌 Your Profile</span>
          <span class="info-val small">${u.gradeNote}</span>
        </div>
      </div>

      <a class="card-btn" href="${u.website}" target="_blank" rel="noopener">Visit Website →</a>
    </div>
  `).join('');
}

// Filter buttons
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCards(btn.dataset.filter);
  });
});

renderCards("all");
