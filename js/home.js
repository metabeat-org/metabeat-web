// Lottie
document.addEventListener("DOMContentLoaded", function () {
  bodymovin.loadAnimation({
    container: document.getElementById("lottie"),
    path: "../lottie/home-loop.json",
    renderer: "svg",
    loop: true,
    autoplay: true,
  });

  bodymovin.loadAnimation({
    container: document.getElementById("lottie2"),
    path: "../lottie/home-once.json",
    renderer: "svg",
    loop: false,
    autoplay: true,
  });
});

// Scroll Event
window.addEventListener("scroll", function () {
  const nowScrollTop = window.scrollY;

  if (nowScrollTop === 0) {
    document.querySelector(".main").classList.add("scroll");
  } else {
    document.querySelector(".main").classList.remove("scroll");
  }
});
