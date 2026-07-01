const loader = document.querySelector('.loader');
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const progressBar = document.querySelector('.scroll-progress');
const backToTop = document.querySelector('.back-to-top');
const navLinks = document.querySelectorAll('.site-nav a');

window.addEventListener('load', () => {
  loader?.classList.add('hidden');
  setTimeout(() => loader?.remove(), 400);
});

navToggle?.addEventListener('click', () => {
  siteNav?.classList.toggle('open');
});

navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? (scrollTop / height) * 100 : 0;
  progressBar.style.width = `${progress}%`;
  backToTop.classList.toggle('show', scrollTop > 500);
});

backToTop?.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-wrap')) siteNav?.classList.remove('open');
});
