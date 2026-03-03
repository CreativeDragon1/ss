/* ============================================
   Sustainability Sphere Club – GIIS
   Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Mobile Menu ----------
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // ---------- Navbar Scroll Effect ----------
  const navbar = document.querySelector('.navbar');
  const scrollTop = document.querySelector('.scroll-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    if (scrollTop) {
      if (window.scrollY > 400) {
        scrollTop.classList.add('visible');
      } else {
        scrollTop.classList.remove('visible');
      }
    }
  });

  // ---------- Scroll to Top ----------
  if (scrollTop) {
    scrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---------- Fade-in on Scroll ----------
  const fadeElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => observer.observe(el));

  // ---------- Floating Leaves ----------
  const leafBg = document.querySelector('.leaf-bg');
  if (leafBg) {
    const leaves = ['🍃', '🌿', '☘️', '🍂', '🌱'];
    for (let i = 0; i < 12; i++) {
      const leaf = document.createElement('span');
      leaf.classList.add('leaf');
      leaf.textContent = leaves[Math.floor(Math.random() * leaves.length)];
      leaf.style.left = Math.random() * 100 + '%';
      leaf.style.animationDuration = (15 + Math.random() * 20) + 's';
      leaf.style.animationDelay = (Math.random() * 15) + 's';
      leaf.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
      leafBg.appendChild(leaf);
    }
  }

  // ---------- Contact Form ----------
  const contactForm = document.getElementById('joinForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const successMsg = document.querySelector('.success-message');
      if (successMsg) {
        successMsg.classList.add('show');
        contactForm.reset();
        setTimeout(() => {
          successMsg.classList.remove('show');
        }, 5000);
      }
    });
  }

  // ---------- Active Nav Link ----------
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a:not(.join-btn)').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

});
