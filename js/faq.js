$(document).ready(function () {
  $(".visual-banner").addClass("scroll");
});

$(function () {
  // Contact Us 페이지에 대한 스크립트만 적어주세요
  $(".faq-wrap dd").hide();
  $(".faq-wrap dt").click(function () {
    $(this).addClass("show");
    $(this).siblings().removeClass("show");
    $(".faq-wrap dd")
      .not($(this).next(".faq-wrap dd").slideToggle(500))
      .slideUp();
  });

  $(window).scroll(function () {
    const nowScrollTop = $(window).scrollTop();

    if (nowScrollTop === 0) {
      $(".main").addClass("scroll");
    } else {
      $(".main").removeClass("scroll");
    }
  });
});
