const reveals = document.querySelectorAll('.reveal');
const counters = document.querySelectorAll('[data-count]');
const progressBars = document.querySelectorAll('.progress-bar');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

reveals.forEach((item) => revealObserver.observe(item));

const animateCounter = (element) => {
  const target = Number(element.getAttribute('data-count'));
  const duration = 1000;
  const start = performance.now();
  const step = (timestamp) => {
    const progress = Math.min((timestamp - start) / duration, 1);
    element.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

counters.forEach(counter => counterObserver.observe(counter));

const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = `${entry.target.getAttribute('data-width')}%`;
      progressObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.7 });

progressBars.forEach(bar => progressObserver.observe(bar));
