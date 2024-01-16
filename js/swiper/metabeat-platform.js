import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
  navigator.userAgent,
)
  ? true
  : false;

// section-group-1
document
  .getElementById("shoutOutCardBtn")
  .addEventListener("click", function () {
    if (!this.classList.contains("card-unfold")) {
      return;
    }

    this.classList.remove("card-unfold");
    document.querySelector(".shout-out-card").classList.add("tooltip-hide");

    var shoutOutCard = new Swiper(
      ".section-group-1 .section-5 .swiper-container",
      {
        scrollbarHide: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 32,
        grabCursor: true,
      },
    );

    if (!isMobile) {
      shoutOutCard.slideTo(1);
    }

    document
      .querySelectorAll(".section-group-1 .section-5 .shoutout-swiper .flip")
      .forEach((el) => {
        el.addEventListener("mouseenter", function () {
          this.classList.add("hover");
        });
      });

    document
      .querySelectorAll(".section-group-1 .section-5 .shoutout-swiper .flip")
      .forEach((el) => {
        el.addEventListener("mouseleave", function () {
          this.classList.remove("hover");
        });
      });
  });

// section-group-2
document.getElementById("dropCardBtn").addEventListener("click", function () {
  if (!this.classList.contains("card-unfold")) {
    return;
  }

  this.classList.remove("card-unfold");
  document.querySelector(".drop-card").classList.add("tooltip-hide");

  var dropCard = new Swiper(".section-group-2 .section-5 .swiper-container", {
    scrollbarHide: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 32,
    grabCursor: true,
  });

  if (!isMobile) {
    dropCard.slideTo(1);
  }

  document
    .querySelectorAll(".section-group-2 .section-5 .shoutout-swiper .flip")
    .forEach((el) => {
      el.addEventListener("mouseenter", function () {
        this.classList.add("hover");
      });
    });

  document
    .querySelectorAll(".section-group-2 .section-5 .shoutout-swiper .flip")
    .forEach((el) => {
      el.addEventListener("mouseleave", function () {
        this.classList.remove("hover");
      });
    });
});

// section-group-3
document.getElementById("mingleCardBtn").addEventListener("click", function () {
  if (!this.classList.contains("card-unfold")) {
    return;
  }

  this.classList.remove("card-unfold");
  document.querySelector(".mingle-card").classList.add("tooltip-hide");

  var mingleCard = new Swiper(".section-group-3 .section-5 .swiper-container", {
    scrollbarHide: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 32,
    grabCursor: true,
  });

  if (!isMobile) {
    mingleCard.slideTo(1);
  }

  document
    .querySelectorAll(".section-group-3 .section-5 .shoutout-swiper .flip")
    .forEach((el) => {
      el.addEventListener("mouseenter", function () {
        this.classList.add("hover");
      });
    });

  document
    .querySelectorAll(".section-group-3 .section-5 .shoutout-swiper .flip")
    .forEach((el) => {
      el.addEventListener("mouseleave", function () {
        this.classList.remove("hover");
      });
    });
});
