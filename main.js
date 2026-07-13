/* ============================================================
   SAPIEMA OS — Main JavaScript
   Neural Network Canvas, Mobile Menu, Email Obfuscation
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initNeuralNetwork();
  initEmailReveal();
});

/* ---------- Mobile Menu ---------- */
function initMobileMenu() {
  const btn = document.querySelector('.hamburger');
  const menu = document.getElementById('navMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  // Close menu when clicking a nav link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
    });
  });
}

/* ---------- Neural Network Canvas Animation ---------- */
function initNeuralNetwork() {
  const canvas = document.getElementById('neuralCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let w = 0, h = 0;
  let raf = null;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    w = rect.width;
    h = rect.height;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resize();
  window.addEventListener('resize', resize);

  const N = 55;
  const nodes = [];
  for (let i = 0; i < N; i++) {
    nodes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: 1.2 + Math.random() * 1.8
    });
  }

  const LINK_DIST = 150;

  function tick() {
    ctx.clearRect(0, 0, w, h);

    // Update positions
    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    }

    // Draw links
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK_DIST) {
          const alpha = (1 - d / LINK_DIST) * 0.35;
          ctx.strokeStyle = 'rgba(246,106,46,' + alpha.toFixed(3) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    for (const n of nodes) {
      ctx.fillStyle = 'rgba(250,251,247,.55)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }

    raf = requestAnimationFrame(tick);
  }

  tick();
}

/* ---------- Email Obfuscation ---------- */
function initEmailReveal() {
  const els = document.querySelectorAll('[data-email]');
  els.forEach(el => {
    const parts = el.getAttribute('data-email').split('|');
    const email = parts[0] + '@' + parts[1];
    el.href = 'mailto:' + email;
    el.textContent = email;
  });
}
