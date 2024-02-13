const openWishlist = document.querySelector(".wish");
const openWishlistOverlay = document.querySelector(".wishlist_overlay");
const wishlistDOM = document.querySelector(".wishlist");
const closeWishlist = document.querySelector(".close_wishlist");

openWishlist.addEventListener("click", () => {
  openWishlistOverlay.classList.add("transparentBcg");
  wishlistDOM.classList.add("showWishlist");
});

closeWishlist.addEventListener("click", () => {
  openWishlistOverlay.classList.remove("transparentBcg");
  wishlistDOM.classList.remove("showWishlist");
});




const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});