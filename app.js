// Infralight site enhancements

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open');
  });

  // Close menu on link click (better UX)
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}


// Progressive enhancement: mobile nav CSS (injected so it doesn't flash on desktop)
const navCss = document.createElement('style');
navCss.textContent = `
  @media (max-width: 899px) {
    #nav { display: none; position: absolute; right: 1rem; top: 64px; background: var(--surface); border:1px solid rgba(255,255,255,.08); padding:.6rem; border-radius:10px; box-shadow: var(--shadow); }
    #nav.open { display: grid; gap: .2rem; }
    #nav a { padding: .6rem .8rem; border-radius: 8px; }
  }
`;
document.head.appendChild(navCss);

// Theme (optional): respect system + allow override later
(function theme() {
  const key = 'infralight-theme';
  const root = document.documentElement;
  const stored = localStorage.getItem(key);
  if (stored) root.setAttribute('data-theme', stored);
})();

// Contact form (no backend yet): demo success + instructions
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.website && form.website.value) return; // honeypot

    // Example using Formspree (replace YOUR_ID):
    // await fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: new FormData(form), headers: { 'Accept':'application/json' } });

    status.textContent = 'Thanks! We’ll be in touch shortly.';
    form.reset();
  });
}

// Year auto-fill
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Optional: register service worker (uncomment to enable offline caching)
// if ('serviceWorker' in navigator) navigator.serviceWorker.register('/service-worker.js');
