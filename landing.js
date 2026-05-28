// ── Navbar scroll effect ──

const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  }

  else {
    navbar.classList.remove('scrolled');
  }

});


// ── Active nav link based on scroll position ──

const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links li a');

function setActiveLink() {

  let current = '';
  const scrollY = window.scrollY + 120;

  sections.forEach(section => {

    if (scrollY >= section.offsetTop) {
      current = section.getAttribute('id');
    }

  });

  navAnchors.forEach(link => {

    link.classList.remove('active');

    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }

  });

}

window.addEventListener('scroll', setActiveLink);


// ── Service card reveal animation ──

const cards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry, index) => {

      if (entry.isIntersecting) {

        setTimeout(() => {

          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';

        }, index * 120);

        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.1
  }

);


// Initial hidden state

cards.forEach(card => {

  card.style.opacity = '0';
  card.style.transform = 'translateY(40px)';
  card.style.transition =
    'all 0.6s ease';

  observer.observe(card);

});