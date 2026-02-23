/* ═══════════════════════════════════════════════════════════════
   Learning Adaptive LLM Decoding — Main JS
   ═══════════════════════════════════════════════════════════════ */

/** Copy BibTeX to clipboard */
function copyBibtex() {
  const text = document.getElementById('bibtex-content').textContent;
  const btn = document.querySelector('.copy-btn');

  navigator.clipboard.writeText(text).then(() => {
    btn.classList.add('copied');
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
    }, 2000);
  }).catch(() => {
    // Fallback for older browsers
    const el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    btn.classList.add('copied');
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
    }, 2000);
  });
}

/** Smooth scroll for anchor links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/** Replace broken images with a styled placeholder div */
document.querySelectorAll('img.placeholder-img').forEach(img => {
  img.addEventListener('error', function () {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      min-height: 220px;
      background: linear-gradient(135deg, #e0e7ff 0%, #ede9fe 100%);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #6366f1;
      font-size: 0.9rem;
      font-weight: 600;
      gap: 8px;
      padding: 24px;
      text-align: center;
    `;
    const icon = document.createElement('span');
    icon.style.fontSize = '2rem';
    icon.textContent = '📊';
    const label = document.createElement('span');
    label.textContent = this.alt || 'Figure';
    wrapper.appendChild(icon);
    wrapper.appendChild(label);
    this.parentNode.replaceChild(wrapper, this);
  });
  // Trigger error if already broken
  if (img.complete && !img.naturalWidth) {
    img.dispatchEvent(new Event('error'));
  }
});
