const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = 'Thanks! We’ll be in touch shortly.';
    form.reset();
  });
}
