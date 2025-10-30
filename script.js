const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const links = document.querySelectorAll(".mobile-link");

menuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("opacity-100");
  if (isOpen) {
    mobileMenu.classList.remove("opacity-100", "visible");
    mobileMenu.classList.add("opacity-0", "invisible");
    menuIcon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />';
  } else {
    mobileMenu.classList.remove("opacity-0", "invisible");
    mobileMenu.classList.add("opacity-100", "visible");
    menuIcon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />';
  }
});

// Close menu when link clicked
links.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("opacity-100", "visible");
    mobileMenu.classList.add("opacity-0", "invisible");
    menuIcon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />';
  });
});
