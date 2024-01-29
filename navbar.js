// Declaring Variables
const mobileBars = document.querySelector(".mobile_bars");
const mobileNav = document.querySelector(".mobile_nav");
const closeBars = document.querySelector(".mobile_closeNav");

mobileBars.addEventListener("click", () => {
  mobileBars.style.display = "none";
  closeBars.classList.remove("hideItem");
  mobileNav.classList.remove("hideItem");
});

closeBars.addEventListener("click", () => {
  closeBars.classList.add("hideItem");
  mobileBars.style.display = "block";
  mobileNav.classList.add("hideItem");
});
