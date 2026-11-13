
  const toggler = document.querySelector(".nav-toggler");
  const sidebar = document.querySelector(".vikas");
  const overlay = document.querySelector(".overlay");
  const navLinks = [...document.querySelectorAll(".vikas .nav a[href^='#']")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const updateActiveLink = () => {
    const marker = window.innerHeight * 0.35;
    let activeSection = sections[0];

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= marker) {
        activeSection = section;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${activeSection.id}`);
    });
  };

  toggler.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((navLink) => navLink.classList.toggle("active", navLink === link));
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });
  });

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  window.addEventListener("resize", updateActiveLink);
  window.addEventListener("load", updateActiveLink, { once: true });
  updateActiveLink();

