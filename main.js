// Interactive functionality, dynamic rendering, and animations for Aravind S A's portfolio

document.addEventListener('DOMContentLoaded', () => {
  // Update Current Year in Footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Sticky Navigation Bar Effect
  const navbar = document.querySelector('.navbar');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      const icon = mobileToggle.querySelector('svg');
      if (isOpen) {
        mobileToggle.innerHTML = `
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        `;
      } else {
        mobileToggle.innerHTML = `
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        `;
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.innerHTML = `
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        `;
      });
    });
  }

  // Active Section Spy on Scroll
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  const updateActiveNav = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        desktopNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  // Scroll Reveal Animations with IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal-item');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // Copy Email to Clipboard Feature
  const copyBtn = document.getElementById('copy-email-btn');
  const copyEmailVal = document.getElementById('contact-email-text');
  if (copyBtn && copyEmailVal) {
    copyBtn.addEventListener('click', async () => {
      const email = copyEmailVal.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span style="color: #34d399">Copied!</span>
        `;
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 2200);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    });
  }

  // Contact Form Handling (Strict Validation, No False Positives)
  const contactForm = document.getElementById('portfolio-contact-form');
  const feedbackEl = document.getElementById('form-feedback');

  if (contactForm && feedbackEl) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('sender-name');
      const emailInput = document.getElementById('sender-email');
      const messageInput = document.getElementById('sender-message');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      feedbackEl.className = 'form-feedback';
      feedbackEl.style.display = 'none';

      // Validation
      if (!name || !email || !message) {
        feedbackEl.className = 'form-feedback error';
        feedbackEl.textContent = 'Please fill out all fields before sending.';
        feedbackEl.style.display = 'block';
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        feedbackEl.className = 'form-feedback error';
        feedbackEl.textContent = 'Please provide a valid email address.';
        feedbackEl.style.display = 'block';
        return;
      }

      // Check if backend endpoint is configured or fallback to standard mailto
      // We NEVER fake a server submission when no backend exists.
      const actionUrl = contactForm.getAttribute('action') || '';
      const isFormspreeConfigured = actionUrl.includes('formspree.io') && !actionUrl.includes('your-form-id');

      if (isFormspreeConfigured) {
        // Submit via fetch to real configured service
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const origText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        fetch(actionUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ name, email, message })
        })
        .then(response => {
          if (response.ok) {
            feedbackEl.className = 'form-feedback success';
            feedbackEl.textContent = 'Thank you! Your message was sent successfully.';
            feedbackEl.style.display = 'block';
            contactForm.reset();
          } else {
            throw new Error('Server returned an error');
          }
        })
        .catch(() => {
          feedbackEl.className = 'form-feedback error';
          feedbackEl.textContent = 'Could not deliver through service. Opening your default mail client instead...';
          feedbackEl.style.display = 'block';
          window.location.href = `mailto:aravind@example.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(name)}%20(${encodeURIComponent(email)})`;
        })
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = origText;
        });
      } else {
        // Transparent client-side action: Prepares direct mailto
        feedbackEl.className = 'form-feedback success';
        feedbackEl.innerHTML = `Opening your email client to send to Aravind... <br><small style="color:var(--text-muted);">(Configure a Formspree ID in the form action to send directly through API)</small>`;
        feedbackEl.style.display = 'block';

        const mailtoLink = `mailto:aravind@example.com?subject=Portfolio%20Connection%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(name)}%20(${encodeURIComponent(email)})`;
        setTimeout(() => {
          window.location.href = mailtoLink;
        }, 500);
      }
    });
  }

  // Mouse tilt micro-interaction on Skill & Visual Cards
  const cards = document.querySelectorAll('.tilt-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
});
