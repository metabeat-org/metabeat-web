// Bind Scroll Event
function handleScroll() {
  const nowScrollTop = window.scrollY;

  // Header
  const header = document.querySelector("#header");
  if (nowScrollTop <= 240) {
    header.classList.remove("active");
  } else {
    if (!header.classList.contains("active")) {
      // 헤더에 active 클래스가 없을때만 active 클래스를 추가한다
      header.classList.add("active");
    }
  }

  // Section
  const sections = document.querySelectorAll(".section");

  if (nowScrollTop === 0) {
    sections.forEach((section) =>
      section.classList.remove("prev", "now", "next")
    );
  } else if (sections[0].offsetTop <= nowScrollTop) {
    const BUFFER = 400; // 원래 섹션의 위치보다 BUFFER 만큼 앞당겨 실행된다
    let nowSectionIdx = 0;

    for (let i = 0; i < sections.length; i++) {
      let sectionTop = sections[i].offsetTop;
      let sectionEnd = 0;

      if (i === sections.length - 1) {
        // 마지막 섹션
        sectionEnd = sections[i].offsetTop + sections[i].offsetHeight;
      } else {
        sectionEnd = sections[i + 1].offsetTop;
      }

      if (
        sectionTop - BUFFER <= nowScrollTop &&
        nowScrollTop < sectionEnd - BUFFER
      ) {
        break;
      } else {
        nowSectionIdx++;
      }
    }

    // 섹션마다 한번씩만 실행하기위함
    try {
      if (!sections[nowSectionIdx].classList.contains("now")) {
        sections.forEach((section) =>
          section.classList.remove("prev", "now", "next")
        );

        sections[nowSectionIdx].classList.add("now");
        if (sections[nowSectionIdx - 1]) {
          sections[nowSectionIdx - 1].classList.add("prev");
        }
        if (sections[nowSectionIdx + 1]) {
          sections[nowSectionIdx + 1].classList.add("next");
        }
      }
    } catch {}
  }
}

window.addEventListener("scroll", handleScroll);
