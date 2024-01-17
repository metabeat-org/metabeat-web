# MetaBeat Webpage (HTML)

[메타비트 홈페이지](https://metabeat.io) 프로젝트입니다.

## React 추가 (WIP)

각 페이지별 공통 컴포넌트 유지보수 용이성을 위해 React가 일부 반영되어 있습니다.

해당되는 컴포넌트는 아래와 같습니다.

* **Header 영역**
* **Footer 영역**

반영된 페이지는 아래와 같습니다.

* **home.html**
* **metabeatPlatform.html**
* **contactus.html**
* **faq.html**

향후 `FAQ` > `Contact us` > `Newsletter (및 연관 페이지)` > `Home` > `MetaBeat Platform` 순으로 순수 React 전환을 예정하고 있으며,
<br />
전환 완료 이후에는 Next.js (Static Export) 프레임워크를 추가할 예정입니다.

## 빌드

현 프로젝트에는 배포 전 SCSS / React / TailwindCSS 빌드를 요합니다.
<br />
해당 문서에는 React / TailwindCSS 빌드 내용만 포함합니다.

```bash
# 해당 프로젝트를 빌드하기 위해서는 Node.js가 설치되어 있어야 합니다.
# node v18.19.0 / yarn 1.22.19

# Dependencies 설치
yarn install

# Development (Watch, 타 프레임워크의 'yarn dev' 와 유사하게 기능합니다)
yarn watch:tailwind
yarn watch:react

# Build
yarn build:tailwind
yarn build:react
```

각 상황에 생성되는 파일들은 아래와 같습니다. (전부 Git Ignore 대상입니다.)

```bash
# DEVEOPMENT
./build/~
./css/tailwind-output.css

# PRODUCTION
./dist/~
./css/tailwind-build.css
```
