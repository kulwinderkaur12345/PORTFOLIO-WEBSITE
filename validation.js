const form = document.getElementById('contactForm');
const status = document.querySelector('.form-status');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.querySelector('input[name="name"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();
  const message = form.querySelector('textarea[name="message"]').value.trim();

  if (!name || !email || !message) {
    status.textContent = 'Please fill in all fields.';
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.textContent = 'Please enter a valid email address.';
    return;
  }

  status.textContent = `Thanks ${name}! Your message has been received.`;
  form.reset();
});
