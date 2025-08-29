// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in");
    }
  });
}, observerOptions);

// Observe all sections for animations
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Add active state to navigation links
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-primary-400");
    link.classList.add("text-gray-300");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.remove("text-gray-300");
      link.classList.add("text-primary-400");
    }
  });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typing animation when page loads
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const originalText = heroTitle.innerHTML;
    setTimeout(() => {
      typeWriter(heroTitle, originalText, 50);
    }, 500);
  }
});

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector("#home");
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Add hover effects to project cards
document
  .querySelectorAll('.project-card, [class*="hover:border-primary-400"]')
  .forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Smooth reveal animations for elements
const revealElements = document.querySelectorAll(".animate-slide-up");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(30px)";
  element.style.transition = "all 0.6s ease-out";
  revealObserver.observe(element);
});

// Bottom navigation logic
const bottomNav = document.getElementById('bottom-nav');
if (bottomNav) {
    const bottomNavLinks = Array.from(bottomNav.querySelectorAll('.bottom-nav-link'));
    const bottomNavContainer = bottomNav.querySelector('.overflow-x-auto');

    const updateBottomNav = (currentSectionId) => {
        const currentLink = bottomNavLinks.find(link => link.dataset.section === currentSectionId);

        if (currentLink) {
            const containerRect = bottomNavContainer.getBoundingClientRect();
            const linkRect = currentLink.getBoundingClientRect();

            const scrollLeft = bottomNavContainer.scrollLeft + linkRect.left - containerRect.left - (containerRect.width / 2) + (linkRect.width / 2);

            bottomNavContainer.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });

            bottomNavLinks.forEach(link => {
                link.classList.remove('text-primary-400');
                link.classList.add('text-gray-400');
            });
            currentLink.classList.remove('text-gray-400');
            currentLink.classList.add('text-primary-400');
        }
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateBottomNav(entry.target.id);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section[id]').forEach(section => {
        sectionObserver.observe(section);
    });

    // Set initial state on page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            updateBottomNav('home');
        }, 100); // Small delay to ensure layout is calculated
    });
}
