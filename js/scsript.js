
  const toggler = document.querySelector(".nav-toggler");
  const sidebar = document.querySelector(".vikas");
  const overlay = document.querySelector(".overlay");

  toggler.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

