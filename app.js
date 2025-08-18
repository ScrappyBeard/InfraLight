// --- Mobile navigation toggle ---
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });

  // Close after navigating
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
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// --- Formspree AJAX submit (endpoint set to your ID) ---
const form = document.getElementById('contact-form');
if (form) {
  const status = document.getElementById('form-status') || Object.assign(document.createElement('p'), { id: 'form-status' });
  if (!status.parentNode) form.appendChild(status);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Honeypot trap
    const hp = form.querySelector('input[name="website"]');
    if (hp && hp.value) return;

    const endpoint = 'https://formspree.io/f/myzpaeln'; // <-- your Formspree endpoint
    const data = new FormData(form);

    // Ensure a clear subject line
    if (!data.get('_subject')) data.append('_subject', 'New enquiry — Infralight');

    status.textContent = 'Sending…';
    status.style.color = 'var(--muted)';

    try {
      const resp = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      });

      if (resp.ok) {
        status.textContent = 'Thanks — we’ll reply soon!';
        status.style.color = 'var(--accent, #2B5AA7)';
        form.reset();
      } else {
        const err = await resp.json().catch(() => ({}));
        status.textContent =
          (err.errors && err.errors[0] && err.errors[0].message) ||
          'Oops — something went wrong. Please email contact@infralight.co.uk.';
        status.style.color = '#fbbf24';
      }
    } catch (e2) {
      status.textContent = 'Network error. Please try again, or email contact@infralight.co.uk.';
      status.style.color = '#f87171';
    }
  });
}
