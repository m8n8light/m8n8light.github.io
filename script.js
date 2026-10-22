const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const expanded = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(expanded));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Placeholder links (#) are intentionally inert until replaced with real URLs.
document.querySelectorAll('a.optional-link[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
