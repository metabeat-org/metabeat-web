// 에러 페이지 생성
function createErrPage() {
  // 초기화
  const bodyTag = document.body;
  const headerTag = document.getElementsByTagName("header")[0];
  const sectionTag = document.getElementsByTagName("section")[0];

  bodyTag.className = "error";
  headerTag.innerHTML = "";
  sectionTag.innerHTML = "";

  // 엘리먼트 생성
  const errorImgTag = document.createElement("img");
  const titleTag = document.createElement("h2");

  errorImgTag.src = "assets/images/error.gif";
  errorImgTag.alt = "Error Image";
  titleTag.innerText = "There is no Contract\nFeature yet.";

  // 엘리먼트 주입
  headerTag.appendChild(errorImgTag);
  sectionTag.appendChild(titleTag);
}

// 에러 핸들링
function handleError(err) {
  createErrPage();
  console.error(err);
}

// 쿼리스트링 내 id 가져오기
function getId() {
  const urlParams = new URLSearchParams(document.location.search);
  const valid = urlParams.has("id");

  if (!valid) {
    return null;
  }

  const id = urlParams.get("id");
  return id;
}

// id 기반 data (JSON) 가져오기
async function getData(id) {
  try {
    const res = await fetch(`assets/json/${id}.json`);
    const data = await res.json();
    return data;
  } catch (err) {
    return handleError(err);
  }
}

// 데이터 주입하기
function injectData(data) {
  const albumCoverTag = document.getElementById("album-cover");
  const titleTag = document.getElementById("title");
  const descTag = document.getElementById("desc");

  albumCoverTag.src = data.cover;
  albumCoverTag.alt = `${data.artist} - ${data.title} Album Cover`;
  titleTag.innerText = `${data.artist} ${data.title}`;
  descTag.innerText = data.desc;
}

// 메인 컨트롤러
async function main() {
  const id = getId();
  if (id === null) {
    return handleError("id must be provided");
  }

  try {
    const data = await getData(id);
    return injectData(data);
  } catch (err) {
    return handleError(err);
  }
}

main();
