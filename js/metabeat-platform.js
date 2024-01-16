$(document).ready(function () {
  $(".visual-banner").addClass("scroll");
});

$(function () {
  // Contact Us 페이지에 대한 스크립트만 적어주세요

  // Bind App Menu
  $("#appMenu").on("click", "a", function (e) {
    e.preventDefault(); // Remove Anchor Tag Action
    var $selected = $(this);
    $("#appMenu a").removeClass("selected");
    $selected.addClass("selected");

    var selectedId = $selected.attr("id");
    // $("#appMenuViewSection > li").hide();
    // $("#" + selectedId + "View").show();

    $("#appMenuViewSection > li").removeClass();
    $("#" + selectedId + "View").addClass("slideup");
  });

  $(window).scroll(function () {
    const nowScrollTop = $(window).scrollTop();

    if (nowScrollTop === 0) {
      $(".main").addClass("scroll");
    } else {
      $(".main").removeClass("scroll");
    }
  });

  $("#section-download-btn")
    .on("click", "", function () {
      $("#section-download-btn ul").toggleClass("show");
    })
    .on("mouseleave", "", function () {
      $("#section-download-btn ul").removeClass("show");
    });

  // GNB
  $(".navbar-toggler").on("click", "", function () {
    $(this).toggleClass("show");
    $(".header").toggleClass("active"); // Set Header Background Color
    $(".navbar ul").toggleClass("show");
  });

  var shoutOut1 = bodymovin.loadAnimation({
    container: document.getElementById("shoutOut1"), // Required
    path: "./lottie/shout-out-1.json", // Required
    renderer: "svg", // Required
    loop: false, // Optional
    autoplay: true, // Optional
  });

  var shoutOut2 = bodymovin.loadAnimation({
    container: document.getElementById("shoutOut2"), // Required
    path: "./lottie/shout-out-2.json", // Required
    renderer: "svg", // Required
    loop: false, // Optional
    autoplay: true, // Optional
  });

  var shoutOut3_2_front = bodymovin.loadAnimation({
    container: document.getElementById("shoutOut3_2_front"), // Required
    path: "./lottie/shout-out-3-2.json", // Required
    renderer: "svg", // Required
    loop: true, // Optional
    autoplay: true, // Optional
  });
  var shoutOut3_2_back = bodymovin.loadAnimation({
    container: document.getElementById("shoutOut3_2_back"), // Required
    path: "./lottie/shout-out-3-2.json", // Required
    renderer: "svg", // Required
    loop: true, // Optional
    autoplay: true, // Optional
  });

  var shoutOut3_3_front = bodymovin.loadAnimation({
    container: document.getElementById("shoutOut3_3_front"), // Required
    path: "./lottie/shout-out-3-3.json", // Required
    renderer: "svg", // Required
    loop: true, // Optional
    autoplay: true, // Optional
  });

  var shoutOut3_3_back = bodymovin.loadAnimation({
    container: document.getElementById("shoutOut3_3_back"), // Required
    path: "./lottie/shout-out-3-3.json", // Required
    renderer: "svg", // Required
    loop: true, // Optional
    autoplay: true, // Optional
  });

  var drop3_1_front = bodymovin.loadAnimation({
    container: document.getElementById("drop3_1_front"), // Required
    path: "./lottie/drop-3-1.json", // Required
    renderer: "svg", // Required
    loop: true, // Optional
    autoplay: true, // Optional
  });

  var drop3_1_back = bodymovin.loadAnimation({
    container: document.getElementById("drop3_1_back"), // Required
    path: "./lottie/drop-3-1.json", // Required
    renderer: "svg", // Required
    loop: true, // Optional
    autoplay: true, // Optional
  });

  var mingle1 = bodymovin.loadAnimation({
    container: document.getElementById("mingle1"), // Required
    path: "./lottie/mingle-1.json", // Required
    renderer: "svg", // Required
    loop: false, // Optional
    autoplay: true, // Optional
  });

  var mingle2 = bodymovin.loadAnimation({
    container: document.getElementById("mingle2"), // Required
    path: "./lottie/mingle-2.json", // Required
    renderer: "svg", // Required
    loop: false, // Optional
    autoplay: true, // Optional
  });

  var mingle3_1_front = bodymovin.loadAnimation({
    container: document.getElementById("mingle3_1_front"), // Required
    path: "./lottie/mingle-3-1.json", // Required
    renderer: "svg", // Required
    loop: true, // Optional
    autoplay: true, // Optional
  });

  var mingle3_1_back = bodymovin.loadAnimation({
    container: document.getElementById("mingle3_1_back"), // Required
    path: "./lottie/mingle-3-1.json", // Required
    renderer: "svg", // Required
    loop: true, // Optional
    autoplay: true, // Optional
  });

  var mingle3_2_front = bodymovin.loadAnimation({
    container: document.getElementById("mingle3_2_front"), // Required
    path: "./lottie/mingle-3-2.json", // Required
    renderer: "svg", // Required
    loop: true, // Optional
    autoplay: true, // Optional
  });

  var mingle3_2_back = bodymovin.loadAnimation({
    container: document.getElementById("mingle3_2_back"), // Required
    path: "./lottie/mingle-3-2.json", // Required
    renderer: "svg", // Required
    loop: true, // Optional
    autoplay: true, // Optional
  });

  var mingle3_3_front = bodymovin.loadAnimation({
    container: document.getElementById("mingle3_3_front"), // Required
    path: "./lottie/mingle-3-3.json", // Required
    renderer: "svg", // Required
    loop: true, // Optional
    autoplay: true, // Optional
  });

  var mingle3_3_back = bodymovin.loadAnimation({
    container: document.getElementById("mingle3_3_back"), // Required
    path: "./lottie/mingle-3-3.json", // Required
    renderer: "svg", // Required
    loop: true, // Optional
    autoplay: true, // Optional
  });

  var marketplace1 = bodymovin.loadAnimation({
    container: document.getElementById("marketplace1"), // Required
    path: "./lottie/marketplace-1.json", // Required
    renderer: "svg", // Required
    loop: false, // Optional
    autoplay: true, // Optional
  });

  var marketplace2 = bodymovin.loadAnimation({
    container: document.getElementById("marketplace2"), // Required
    path: "./lottie/marketplace-2.json", // Required
    renderer: "svg", // Required
    loop: false, // Optional
    autoplay: true, // Optional
  });
});
