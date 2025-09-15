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
  const topNavLinks = document.querySelectorAll("#top-nav a");
  const bottomNavLinks = document.querySelectorAll("#bottom-nav a");

  function setActive(navLinks, id) {
    navLinks.forEach((link) => {
      link.removeAttribute("data-active");
      if (link.getAttribute("href") === `#${id}`) {
        link.setAttribute("data-active", "true");
      }
    });
  }

  function activateLink() {
    let scrollY = window.scrollY + 100; // offset for fixed nav
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        setActive(topNavLinks, id);
        setActive(bottomNavLinks, id);
      }
    });
  }

  window.addEventListener("scroll", activateLink);
  activateLink();
});

// ==============================
// CAROUSEL
// ==============================
const carousel = document.getElementById("carousel");

carousel.addEventListener(
  "wheel",
  (e) => {
    const atStart = carousel.scrollLeft === 0;
    const atEnd =
      carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1;

    if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)) {
      // redirect vertical → horizontal scroll
      e.preventDefault();
      carousel.scrollBy({
        left: e.deltaY,
        behavior: "smooth",
      });
    }
  },
  { passive: false }
);

// ==============================
// Education Accordion
// ==============================
// Education Semester Toggle
const semesterBtns = document.querySelectorAll('.semester-btn:not([disabled])');
const semesterSkills = document.querySelectorAll('.semester-skills');

semesterBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    const semester = this.dataset.semester;

    // Reset all buttons
    semesterBtns.forEach(b => {
      b.classList.remove(
        'active',
        'bg-white/10',
        'border-primary-400',
        'text-primary-400',
        'shadow-lg'
      );
      b.classList.add("bg-black/30", "border-white/20", "text-white");
    });

    // Reset skills
    semesterSkills.forEach(s => s.classList.remove('active'));

    // Activate selected button
    this.classList.add('active', 'bg-white/10', 'border-primary-400', 'shadow-lg');
    this.classList.remove("bg-black/30", "text-white");
    this.classList.add('text-primary-400');

    // Show only the matching semester's skills
    const targetSkills = document.querySelector(`.semester-skills[data-semester="${semester}"]`);
    if (targetSkills) {
      targetSkills.classList.add('active');
    }
  });
});



