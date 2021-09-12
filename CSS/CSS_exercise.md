# CSS 연습문제 210910

## 1번

```css
.content {
  width: 100px;
  height: 100px;
  margin: 10px 15px 20px;
  padding: 10px;
  border: 1px solid black;
}
```

---

## 2번

```html
<div class="navigation-bar">
  <p class="title">네카라쿠배</p>
  <div class="items">
    <p>로그인</p>
    <p>회원가입</p>
    <p>마이페이지</p>
  </div>
</div>
```

```css
.navigation-bar {
  height: 64px;
  border-color: rgb(231, 231, 231);
  border-bottom: 1px solid;
  padding: 0px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigation-bar p {
  margin: 0px 10px;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.items {
  display: flex;
}
```

---

## 3번

```css
.container {
  width: 400px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
}

.container img {
  width: 100px;
  height: 100px;
  margin: 5px;
  border: 1px solid;
  border-radius: 10%;
}
```

---

## 4번

```html
<div class="container">
  <div class="info">
    <div class="head">
      <h1>삼성전자</h1>
      <p class="code">종목코드: 005930</p>
    </div>
    <div class="body">
      <p class="subtitle">회사소개</p>
      <p class="description">
        한국 및 CE, IM부문 해외 9개 지역총괄과 DS부문 해외 5개 지역총괄, Harman
        등 241개의 종속기업으로 구성된 글로벌 전자기업임. 세트사업에는 TV,
        냉장고 등을 생산하는 CE부문과 스마트폰, 네트워크시스템, 컴퓨터 등을
        생산하는 IM부문이 있음. 부품사업(DS부문)에서는 D램, 낸드 플래쉬,
        모바일AP 등의 제품을 생산하는 반도체 사업과 TFT-LCD 및 OLED 디스플레이
        패널을 생산하는 DP사업으로 구성됨.
      </p>
    </div>
  </div>
  <div class="lanking">
    <p class="subtitle">시가총액 순위</p>
    <ol>
      <li>삼성전자</li>
      <li>SK하이닉스</li>
      <li>NAVER</li>
      <li>카카오</li>
      <li>삼성바이오로직스</li>
      <li>삼성전자우</li>
      <li>삼성SDI</li>
      <li>LG화학</li>
      <li>현대차</li>
      <li>셀트리온</li>
    </ol>
  </div>
</div>
```

```css
body {
  margin: 0px;
}
div:not(.container):not(.info) {
  padding: 10px 20px;
}

.container {
  display: flex;
}

.head {
  background-color: blue;
  color: white;
}

.info {
  width: 70%;
}

.subtitle {
  font-weight: bold;
  font-size: 20px;
}

.lanking {
  width: 30%;
}

li {
  border-bottom: 1px solid;
  padding: 5px;
}

@media all and (max-width: 720px) {
  .container {
    flex-direction: column;
  }

  .info {
    width: 100%;
  }

  .lanking {
    width: 100%;
  }
  ol {
    margin-right: 35px;
  }
}
```

---

## 5번

```html
<div class="head">
  <h1>댓글 <span>923</span></h1>
</div>
<div class="container">
  <div class="comment">
    <p class="name">정*석</p>
    <p class="date">2021.03.16</p>
    <p class="content">
      1차 합격하고 실제 네이버간 본인입니다 ㅎㅎ 저는 전공자긴 하지만 학점은 3.0
      아래고 나이도 30세가 넘었습니다. 제가 가진건 끈기 단 하나였어요. 목표를
      잡고 일부는 성취하고, 일부는 실패하더라도 전략을 수정하여 계속 도전해
      결국엔 목표를 이루려고 하였습니다. '이쯤 했으면 됐다' 생각할 때 포기하지
      마시고 한발자국씩 더 나아가보세요. 분명히 좋은 결과가 있을거에요!
      화이팅입니다.
    </p>
  </div>
</div>
<div class="container">
  <div class="comment">
    <p class="name">한*현</p>
    <p class="date">2021.03.21</p>
    <p class="content">
      포기하기마시고 즐거운 개발하셔서 꽃길 걸을 수 있길 바랍니다!
    </p>
  </div>
</div>
<div class="container">
  <div class="comment">
    <p class="name">이*자</p>
    <p class="date">2021.03.21</p>

    <p class="content">
      능력있고 열심히 하는 분들에게 좋은 결과 있기를 바랍니다. 항상 좋은 일만
      가득하셨으면 좋겠습니다. 멋진 앞날을 기원하겠습니다.
    </p>
  </div>
</div>
<div class="container">
  <div class="comment">
    <p class="name">이*윤</p>
    <p class="date">2021.03.21</p>
    <p class="content">
      네카라쿠배 1기 모집 글을 본게 엊그제 같은데 벌써 최종 15명이네요. 꼭
      네카라쿠배 가셔서 즐겁게 개발일 하시면 좋겠습니다! 앞으로의 길을 응원해요.
      저도 2기 지원할게요~!!
    </p>
  </div>
</div>
<div class="container">
  <div class="comment">
    <p class="name">박*호</p>
    <p class="date">2021.03.21</p>
    <p class="content">
      최종 15분이 멋진 길을 이뤄주시면 다음에 시도하시는 분들도 앞선 지원자들을
      보고 더욱 열심히 공부를 하며 동기부여가 될거라고 생각합니다. 최선을
      다하신것에 보답이라고 생각하시면서 꽃길만 걸으시기 바랍ㄴ디ㅏ.
    </p>
  </div>
</div>
<div class="container">
  <div class="comment">
    <p class="name">김*성</p>
    <p class="date">2021.03.21</p>
    <p class="content">존버필승입니다 화이팅하십쇼</p>
  </div>
</div>
```

```css
body {
  margin: 0;
}
.head {
  display: flex;
  border-bottom: 2px solid black;
}

.head span {
  color: #06a27d;
}

.comment {
  width: 100%;
  padding: 18px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid black;
  line-height: 1.5;
  word-break: keep-all;
}

.date {
  color: #939393;
}
```
