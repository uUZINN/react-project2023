# react를 이용한 포트폴리오 사이트 만들기
React는 JavaScript 라이브러리로, 사용자 인터페이스(UI)를 개발하는 데 사용되는 매우 인기있는 도구입니다. React는 Facebook에서 개발되었으며, 웹 애플리케이션의 사용자 인터페이스를 구축하고 관리하기 위한 컴포넌트 기반 아키텍처를 제공합니다.

## 작업 순서
1. 리액트 설치
2. git에 업로드
3. [lenis 사이트](https://lenis.studiofreight.com/)

## 설치
1. react 설치 `npx create-react-app 프로젝트 이름`
2. gsap 설치 `npm i gsap`
3. sass 설치 `npm i sass`
4. lenis 설치 `npm i @studio-freight/lenis`

### GSAP
GSAP(그린 소켓 애니메이션 플랫폼, GreenSock Animation Platform)은 웹 애니메이션을 만들고 제어하기 위한 강력한 JavaScript 라이브러리입니다. GSAP은 HTML, CSS 및 SVG와 같은 웹 기술을 사용하여 다양한 유형의 애니메이션을 만들 수 있도록 도와주며, 웹 페이지나 웹 애플리케이션의 인터랙션을 개선하는 데 사용됩니다.

### lenis
lenis.js는 JavaScript에서 사용되는 오픈 소스 라이브러리입니다. 이 라이브러리는 문자열 처리와 관련된 다양한 유틸리티 기능을 제공합니다. lenis.js를 사용하면 문자열의 길이, 대소문자 변환, 문자열 분리, 검색 등 다양한 작업을 간편하게 수행할 수 있습니다.

lenis.js는 간단하고 직관적인 API를 제공하여 개발자가 빠르게 문자열 작업을 수행할 수 있도록 도와줍니다. 또한 다양한 유틸리티 함수를 제공하기 때문에, 개발자는 반복적이고 번거로운 작업을 간소화할 수 있습니다.

## 트러블 슈팅
<details>
<summary>Whitespace 에러</summary>
유닉스 시스템에서는 한 줄의 끝이 LF(Line Feed)로 이루어지는 반면,   
윈도우에서는 줄 하나가 CR(Carriage Return)와 LF(Line Feed), 즉 CRLF로   이루어지는데 Git이 이 둘 중 어느 쪽을 선택할지 혼란이 온 것이다 !   
      
해결방법   
`git config --global core.autocrlf true // 시스템 전체에 적용`   
`git config core.autocrlf true // 해당 프로젝트에만 적용`
</details>