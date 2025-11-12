// =====================
// NazCorn JS
// =====================

// ---------- SMOOTH SCROLL ----------
document.querySelectorAll('[data-scroll]').forEach(btn => {
  btn.addEventListener('click', e => {
    const target = document.querySelector(btn.getAttribute('data-scroll'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// ---------- FADE-IN ON SCROLL ----------
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ---------- ADD TO CART BUTTON ----------
document.querySelectorAll('.add-cart').forEach(button => {
  button.addEventListener('click', e => {
    const name = e.target.dataset.name;
    const price = e.target.dataset.price;
    alert(`✅ ${name} added to your basket (£${price})`);
  });
});

// ---------- CONTACT FORM ----------
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('📩 Thank you for your message! We’ll get back to you soon.');
    form.reset();
  });
}
