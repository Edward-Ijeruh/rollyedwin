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

document.getElementById("year").textContent = new Date().getFullYear();

const images = [
  "galleryImg (1).JPG",
  "galleryImg (2).JPG",
  "galleryImg (3).JPG",
  "galleryImg (4).JPG",
  "galleryImg (5).JPG",
  "galleryImg (6).JPG",
  "galleryImg (7).JPG",
  "galleryImg (8).JPG",
  "galleryImg (9).JPG",
  "galleryImg (10).JPG",
  "galleryImg (11).JPG",
  "galleryImg (12).JPG",
  "galleryImg (13).JPG",
  "galleryImg (14).JPG",
  "galleryImg (15).JPG",
  "galleryImg (16).JPG",
  "galleryImg (17).JPG",
  "galleryImg (18).JPG",
  "galleryImg (19).JPG",
  "galleryImg (20).JPG",
  "galleryImg (21).JPG",
  "galleryImg (22).JPG",
  "galleryImg (23).JPG",
  "galleryImg (24).JPG",
  "galleryImg (25).JPG",
  "galleryImg (26).JPG",
  "galleryImg (27).JPG",
  "galleryImg (28).JPG",
  "galleryImg (29).JPG",
  "galleryImg (30).JPG",
  "galleryImg (31).JPG",
  "galleryImg (32).JPG",
  "galleryImg (33).JPG",
  "galleryImg (34).JPG",
  "galleryImg (35).JPG",
  "galleryImg (36).JPG",
  "galleryImg (37).JPG",
  "galleryImg (38).JPG",
  "galleryImg (39).JPG",
  "galleryImg (40).JPG",
  "galleryImg (41).JPG",
  "galleryImg (42).JPG",
  "galleryImg (43).JPG",
  "galleryImg (44).JPG",
  "galleryImg (45).JPG",
  "galleryImg (46).JPG",
  "galleryImg (47).JPG",
  "galleryImg (48).JPG",
  "galleryImg (49).JPG",
  "galleryImg (50).JPG",
  "galleryImg (51).JPG",
  "galleryImg (52).JPG",
  "galleryImg (53).JPG",
  "galleryImg (54).JPG",
  "galleryImg (55).JPG",
  "galleryImg (56).JPG",
  "galleryImg (57).JPG",
  "galleryImg (58).JPG",
  "galleryImg (59).JPG",
  "galleryImg (60).JPG",
  "galleryImg (61).JPG",
  "galleryImg (62).JPG",
  "galleryImg (63).JPG",
  "galleryImg (64).JPG",
  "galleryImg (65).JPG",
  "galleryImg (66).JPG",
  "galleryImg (67).JPG",
  "galleryImg (68).JPG",
  "galleryImg (69).JPG",
  "galleryImg (70).JPG",
  "galleryImg (71).JPG",
  "galleryImg (72).JPG",
  "galleryImg (73).JPG",
  "galleryImg (74).JPG",
  "galleryImg (75).JPG",
  "galleryImg (76).JPG",
  "galleryImg (77).JPG",
  "galleryImg (78).JPG",
  "galleryImg (79).JPG",
  "galleryImg (80).JPG",
];

const grid = document.getElementById("gallery-grid");

images.forEach((img) => {
  const el = document.createElement("div");
  el.className =
    "aspect-square rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition";
  el.innerHTML = `<img src="../assets/gallery/${img}" class="w-full h-full object-cover" />`;
  el.onclick = () => openLightbox(img);
  grid.appendChild(el);
});

function openLightbox(img) {
  document.getElementById("lightbox-img").src = "../assets/gallery/" + img;
  document.getElementById("lightbox").classList.remove("hidden");
}

document.getElementById("lightbox").onclick = () =>
  document.getElementById("lightbox").classList.add("hidden");
