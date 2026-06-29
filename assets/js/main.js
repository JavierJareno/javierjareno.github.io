const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeMenu() {
  navMenu.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
}

navToggle.addEventListener("click", () => {
  const open = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("nav-open", open);
});

navMenu.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeMenu();
  }
});

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 920) {
    closeMenu();
  }
});

updateHeader();
