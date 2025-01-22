const openMobileMenu = document.getElementById("openMobileMenu");
openMobileMenu.addEventListener("click", () => {
  const mobileMenu = document.getElementById("mobileMenu");
  openMobileMenu.classList.add("hidden");
  closeMobileMenu.classList.remove("hidden");
  mobileMenu.classList.remove("-top-full");
  mobileMenu.classList.add("top-[60px]");
});

const closeMobileMenu = document.getElementById("closeMobileMenu");
closeMobileMenu.addEventListener("click", () => {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.add("-top-full");
  mobileMenu.classList.remove("top-[60px]");
  openMobileMenu.classList.remove("hidden");
  closeMobileMenu.classList.add("hidden");
});

const subMenu = document.querySelectorAll(".subMenu");
subMenu.forEach((subMenuBtn) => {
  subMenuBtn.addEventListener("click", (e) => {
    e.target.nextElementSibling.classList.toggle("hidden");
  });
});
