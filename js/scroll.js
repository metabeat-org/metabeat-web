$(function() {

    // Bind Scroll Event
    $(window).scroll(function(){
        const nowScrollTop = $(window).scrollTop();


        // Header
        var $header = $('.header');
        if (nowScrollTop <= 240) {
            $header.removeClass('active');
        } else {
            if(!$header.hasClass("active")) {
                // 헤더에 active 클래스가 없을때만 active 클래스를 추가한다
                $header.addClass('active');
            }
        }


        // Section
        var $sections = $(".section");

        if (nowScrollTop === 0) {
            $(".section").removeClass(['prev', 'now', 'next']);
        } else if($($sections[0]).offset().top <= nowScrollTop) {

            var BUFFER = 400; // 원래 섹션의 위치보다 BUFFER 만큼 앞당겨 실행된다
            var nowSectionIdx = 0;

            for(let s of $sections) {
                let sectionTop = $(s).offset().top;
                let sectionEnd = 0;

                if ($($sections[nowSectionIdx+1]).length === 0) {
                    // 마지막 섹션
                    sectionEnd = $($sections[nowSectionIdx]).offset().top + $($sections[nowSectionIdx]).height();
                } else {
                    sectionEnd = $($sections[nowSectionIdx+1]).offset().top;
                }

                if (sectionTop - BUFFER <= nowScrollTop && nowScrollTop < sectionEnd - BUFFER) {
                    break;
                } else {
                    nowSectionIdx++;
                }
            }

            // 섹션마다 한번씩만 실행하기위함
            if (!$($sections[nowSectionIdx]).hasClass("now")) {
                $(".section").removeClass(['prev', 'now', 'next']);


                $($sections[nowSectionIdx]).addClass("now");
                if( $($sections[nowSectionIdx-1]).length ){
                    $($sections[nowSectionIdx-1]).addClass("prev");
                }
                if( $($sections[nowSectionIdx+1]).length ){
                    $($sections[nowSectionIdx+1]).addClass("next");
                }

            }

            console.log("Now Section Index", nowSectionIdx);
        }
    });
})