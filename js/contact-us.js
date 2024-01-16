$(document).ready(function () {
  $(".visual-banner").addClass("scroll");
});

$(function () {
  $(window).scroll(function () {
    const nowScrollTop = $(window).scrollTop();

    if (nowScrollTop === 0) {
      $(".main").addClass("scroll");
    } else {
      $(".main").removeClass("scroll");
    }
  });

  $("#mailAddrCopyBtn").on("click", "", function () {
    if (navigator.clipboard) {
      // (IE는 사용 못하고, 크롬은 66버전 이상일때 사용 가능합니다.)
      navigator.clipboard.writeText("metabeat@metabeat.io");
    } else {
      // 흐름 2.
      if (!document.queryCommandSupported("copy")) {
        return;
      }

      // 흐름 3.
      const textarea = document.createElement("textarea");
      textarea.value = "metabeat@metabeat.io";
      textarea.style.top = "0";
      textarea.style.left = "0";
      textarea.style.position = "fixed";

      // 흐름 4.
      document.body.appendChild(textarea);
      // focus() -> 사파리 브라우저 서포팅
      textarea.focus();
      // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
      textarea.select();
      // 흐름 5.
      document.execCommand("copy");
      // 흐름 6.
      document.body.removeChild(textarea);
    }

    var $copyBtn = $(this);
    $copyBtn
      .addClass("copy-success")
      .empty()
      .append('<i class="icon copy">Icon</i> Copy Complete!');

    setTimeout(function () {
      $copyBtn
        .removeClass("copy-success")
        .empty()
        .append('<i class="icon copy">Icon</i> Copy address');
    }, 3000);
  });
});
