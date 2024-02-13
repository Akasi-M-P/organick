// Declaring Variables
const openCart = document.querySelector(".cart_link");
const openCartOverlay = document.querySelector(".cart_overlay");
const cartDOM = document.querySelector(".cart");
const closeCart = document.querySelector(".close_cart");

openCart.addEventListener("click", () => {
  openCartOverlay.classList.add("transparentBcg");
  cartDOM.classList.add("showCart");
});

closeCart.addEventListener("click", () => {
  openCartOverlay.classList.remove("transparentBcg");
  cartDOM.classList.remove("showCart");
});



    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
