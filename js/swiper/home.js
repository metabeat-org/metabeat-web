import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export const swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  scrollbar: {
    hide: true,
  },
  centeredSlides: true,
  grabCursor: true,
});
