# HTML [실습환경 세팅]

## 1. 웹 에디터와 통합개발환경

웹 에디터(편집기)

- HTML 문법에 맞추어 편리하게 작성할 수 있도록 도와주는 편집기
- 문법에 따라 색깔, 들여쓰기 등을 구분할 수 있다.

온라인 웹 에디터 : jsbin.com, replit.com, codepen.io

### 통합개발환경(IDE)

- 통합 개발 환경 (Integrated Development Environment)
- 개발할 때 필요한 여러가지 툴을 한 프로그램을 통해 사용할 수 있도록 한다.
  - 코드를 작성하기 위한 소스코드 편집기
  - 작성한 코드를 실행하기 위한 빌더
  - 작성한 코드에 문제가 없는지 체크해주는 디버거
  - 추가적인 기능을 제공하는 플러그인
- Visual Studio Code, IntelliJ, Xcode, Eclipse 등

웹 개발 외에 다양한 프로그래밍 언어를 사용할 수 있음

---

## 2. VScode 실습환경 세팅

> MS사에서 만든 소프트웨어

Extension에서 Korean을 설치하면 한국어로 사용 가능하다.

---

## 3. 첫 HTML 문서 만들기

- html, head, body의 구조는 HTML5를 지키는 문서라면 전부 가지고 있어야 되는 항목
- html:5 : html5의 규격에 맞춘 코드를 자동으로 작성해줌
- body 내부에 콘텐츠를 작성
  - 파일을 실행하면 작성한 코드를 웹페이지로 볼 수 있음

> HTML:5 규격으로 코드를 자동 완성 한 후 body에 콘텐츠(h1)를 작성했을 때

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>저의 첫번째 HTML 파일입니다.</h1>
  </body>
</html>
```

---

## 4. VSCode 확장프로그램 (Extension)

#### auto Rename Tag

- 앞에 태그를 수정하면 뒤의 태그를 자동으로 수정해 줌

#### Live Server

- 기존의 수정하고 저장하고 브라우저를 새로고침해서 확인하는 반복 작업을 줄여줌
- 가상의 서버에서 작동해서 수정하고 저장하면 새로고침을 사용하지 않고도 확인이 가능

#### Prettier

- Code formatter
- 코드의 서식을 잘못 작성된 부분을 찾아서 고쳐주는 Extension
- cmd + shift + P -> format document -> prettier 선택
- prettier의 Tab Size도 변경 가능

## 5. VScode 단축키

#### 에디터 창 제어

      현재 창 닫기 : Cmd + W
      닫은 창 다시 열기 : Cmd + Shift + t
      사이드바 토글 : Cmd + b
      사이드바 탐색기 : Cmd + Shift + e
      사이드바 전체 검색 : Cmd + Shift + f
      에디터 확대 : Cmd + +(=)
      에디터 축소 : Cmd + -

#### 소스코드 편집

      들여쓰기 : Tab or Cmd + ]
      내어쓰기 : Shift + Tab or Cmd + [
      아래에 행 삽입 : Cmd + Enter
      위에 행 삽입 : Cmd + Shift + Enter
      현재 행 이동 : Opt + 방향키 위/아래
      현재 행 복사 : Opt + Shift + 방향키 위/아래
      현재 행 삭제 : Cmd + Shift + k
      주석 토글 : Cmd + /
