const header = document.querySelector(".site-header");
const button = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const desktopBreakpoint = window.matchMedia("(min-width: 768px)");

// Only attach the menu behavior when the expected navigation elements exist.
if (header && button && nav) {
  // Reuse one close action for link clicks and breakpoint changes.
  const closeMenu = () => header.classList.remove("nav-open");

  // Marks the nav as ready so CSS can avoid showing the mobile menu too early.
  header.classList.add("nav-ready");

  // Toggle the mobile menu open and closed from the menu button.
  button.addEventListener("click", () => header.classList.toggle("nav-open"));

  // Close the mobile menu after a nav link is selected.
  nav.addEventListener("click", ({ target }) => !desktopBreakpoint.matches && target.closest("a") && closeMenu());

  // Reset the mobile menu state when switching up to the desktop layout.
  desktopBreakpoint.addEventListener("change", ({ matches }) => matches && closeMenu());
}
