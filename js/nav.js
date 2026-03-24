const header = document.querySelector(".site-header");
const button = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const desktopBreakpoint = window.matchMedia("(min-width: 768px)");

if (header && button && nav) {
  const closeMenu = () => header.classList.remove("nav-open");
  header.classList.add("nav-ready");
  button.addEventListener("click", () => header.classList.toggle("nav-open"));
  nav.addEventListener("click", ({ target }) => !desktopBreakpoint.matches && target.closest("a") && closeMenu());
  desktopBreakpoint.addEventListener("change", ({ matches }) => matches && closeMenu());
}
