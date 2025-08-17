// --- Mobile navigation toggle ---
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open');

    // Prevent body scrolling when nav is open
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu after selecting a link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// --- Auto year in footer ---
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// --- Contact form demo handling ---
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.getElementById('form-status');
    if (status) {
      status.textContent = "Thanks — we’ll reply soon!";
      status.style.color = "var(--accent, #2B5AA7)";
    }
    form.reset();
  });
}
