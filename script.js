document.addEventListener("DOMContentLoaded", () => {
  // ==============================
  // NAVBAR BACKGROUND ON SCROLL
  // ==============================
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("bg-gray-900/80", window.scrollY > 50);
  });

  // ==============================
  // SECTION FADE / SLIDE ANIMATIONS
  // ==============================
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll("[data-animate]").forEach((el) => {
    el.classList.add(
      "opacity-0",
      "translate-y-6",
      "transition-all",
      "duration-700"
    );
    observer.observe(el);
  });

  // ==============================
  // NAV HIGHLIGHT ON SCROLL (with data-active)
  // ==============================
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a");

  function activateLink() {
    let scrollY = window.scrollY + 100; // offset for fixed nav
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.removeAttribute("data-active");
          if (link.getAttribute("href") === `#${id}`) {
            link.setAttribute("data-active", "true");
          }
        });
      }
    });
  }
  window.addEventListener("scroll", activateLink);
  activateLink();
  
  // ==============================
  // BOTTOM NAVBAR SHOW/HIDE
  // ==============================
  const bottomNav = document.getElementById("bottom-nav");
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    const current = window.scrollY;
    if (current > lastScrollY) {
      bottomNav.classList.add("translate-y-full");
    } else {
      bottomNav.classList.remove("translate-y-full");
    }
    lastScrollY = current;
  });
});


