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
