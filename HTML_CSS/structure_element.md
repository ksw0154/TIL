# HTML [구조를 나타내는 요소]

## 1. 컨테이너 (div, span)

### div 태그

- 블록 레벨 요소
- 플로우 컨텐츠를 위한 통용 컨테이너 (순수 컨테이너)
- 시멘틱 태그들이 적절하지 않을 때만 사용해야 한다.
- 전역 속성만 사용이 가능하다.

#### 쓰는 이유

- 다른 요소들을 class나 id 속성으로 묶어서 레이아웃이나 스타일링을 진행하기 위해
- 특정 부분에 lang 속성을 사용하기 위해서

### span 태그

- 인라인 레벨 요소
- div 태그와 블럭, 인라인 차이를 제외하고는 동일하다.

> div, span 태그 예시

```html
<div>test</div>
<span>test2</span>
<span>test3</span>
```

<div>test</div><span>test2</span><span>test3</span>

> 위의 예시를 통해 블럭 레벨 요소와 인라인 레벨 요소의 차이를 볼 수 있다.

---

## 2. 시멘틱 웹이란

- 시멘틱 태그, 시멘틱 요소 (Semantic : 의미의, 의미론적인)
- 요소의 의미를 고려하여 구조하고, 코드를 작성한다.
- 의미를 가지고 있는 블럭 레벨 요소 컨테이너 (div와 동일한 기능)
  - div는 non-semantic 태그

### 코드를 작성할 때 중요한 점

- non-semantic 태그 밖에 사용할 수 없는가?라는 생각을 해야한다.
- 내부의 담겨 있는 컨텐츠의 의미를 파악하고 태그를 결정하는 고민을 해봐야 한다.

> Semantic 웹 예시

```html
<body>
  <header><!-- Header --></header>
  <nav><!--  Nav --></nav>
  <main>
    <article><!-- article --></article>
    <aside><!-- aside --></aside>
  </main>
  <footer><!-- Footer --></footer>
</body>
```

### semantic 태그의 이점

1. 검색엔진이 페이지의 검색 랭킹에 영향을 줄 수 있는 중요한 키워드로 간주
2. 스크린리더로 페이지를 탐색할 때 의미론적 마크업을 푯말로 사용할 수 있다 (웹 접근성)
3. div보다 semantic 태그를 찾는 것이 훨씬 쉽다 (가독성이 좋음)
4. 개발자에게 태그 안에 채워질 데이터 유형을 제안한다.
5. 의미있는 이름짓기 (semantic naming)는 적절한 사용자 정의 요소 / 구성 요소의 이름 짓기를 반영한다.

---

## 3. header, footer

### Header

- 블럭 요소 컨테이너
- 웹 페이지의 header는 하나만 사용해야 한다.
- 웹 페이지가 이동해도 header와 footer는 동일하게 보이는 경우가 대부분이다.
- 플로우 컨텐츠에 가능하고 header 내에 header를 넣을 수 없다.
- 소개 및 탐색에 도움을 주는 컨텐츠
  - 제목, 로고, 검색 폼, 작성자 이름, 메뉴 등

> header 요소 예제

```html
<header>
  <h1>Main Page Title</h1>
</header>
```

<header>
  <h1>Main Page Title</h1>
</header>

> 위처럼 페이지의 제목으로 넣을 수 있고 또한 글의 제목으로 header 요소를 넣을 수 있다.  
> article의 header로 들어갈 때는 제목에 h2 ~ h3 태그를 사용해야 한다. (ex. 기사의 제목)

### Footer

- 연락처, 저작권, 관련 문서 등에 사용
- 플로우 컨텐츠가 가능하고 footer 안에 footer나 header, address를 넣을 수 없다.

> footer 요소 예시

```html
<footer>
  Some copyright info or perhaps some author info for an &lt;article&gt;?
</footer>
```

<footer>
  Some copyright info or perhaps some author
  info for an &lt;article&gt;?
</footer>

---

## 4. nav

- Navigation bar
- 현재 페이지의 위치 또는 다른 페이지로의 링크를 보여주는 구획
- 현재 페이지 내에서 탐색을 용이하게 만들어주는 구획 (색인)
- 보통 목록(li 태그)의 형태를 띄고 있음
- 보통 현재 페이지를 기준으로 상위 혹은 현재 페이지 내에서 개요를 나타낼 때 사용한다.

> nav 요소 예시

```html
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

> 위의 예시는 페이지 전체를 탐색하는 nav 태그를 사용했다.  
> 하지만 하나의 문서 안에는 여러 개의 nav 태그를 가질 수 있다.

---

## 5. aside

- 보통 side bar를 만들 때 사용한다.
- main 요소와 간접적으로만 연관된 부분을 나타낸다. (ex. 광고)
  - main 요소의 컨텐츠를 읽는데 문제가 없는 부분 (부가적인 정보)
- aside 요소가 없다고 문제가 되지는 않는다.

본문 내에 들어갈 수 있지만, 대부분 레이아웃으로 aside 요소를 양쪽으로 빼서 사용한다.

> aside 요소 예시

```html
<article>
  <p>디즈니 만화영화 <em>인어 공주</em>는 1989년 처음 개봉했습니다.</p>
  <aside>인어 공주는 첫 개봉 당시 8700만불의 흥행을 기록했습니다.</aside>
  <p>영화에 대한 정보...</p>
</article>
```

<article>
  <p>
    디즈니 만화영화 <em>인어 공주</em>는
    1989년 처음 개봉했습니다.
  </p>
  <aside>
    인어 공주는 첫 개봉 당시 8700만불의 흥행을 기록했습니다.
  </aside>
  <p>
    영화에 대한 정보...
  </p>
</article>

> 위의 article에서는 컨텐츠 내에서의 없어도 상관 없는 부분을 aside 요소로 보여주고 있다.  
> 보편적인 aside(side bar)는 레이아웃으로 aside 요소를 사용한다.

---

## 6. main

- body 태그의 주요 컨텐츠가 들어갈 영역
- 유일하게 1개만 사용할 수 있다.
- Internet Explorer에서는 지원하지 않는다.
  - `<main role="main">` 형색으로 사용 가능하다.
- 모든 주요 컨텐츠를 포함하는 가장 부모 컨테이너

> main 요소 예시

```html
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <main id="main-content">
    <!-- main page content -->
  </main>
</body>
```

<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <main id="main-content">
    <!-- main page content -->
    This is Main Content.
  </main>
</body>

> a 요소의 href 속성을 통해 main 요소에 접근할 수 있다.  
> main의 id 속성을 이용해서 접근한다.

---

## 7. article

- 독립적으로 구분이 가능해서 배포나 재사용할 수 있는 구획
  - 중요한 특징이다.
  - ex. 뉴스, 블로그 포스팅, 하루 날씨, 기사

> 날씨로 예를 들자면 하루 날씨를 보는데 전 날의 날씨는 필요하지 않다.  
> 하나의 블로그 포스팅을 볼 때 독립적인 포스팅은 이전의 포스팅을 확인할 필요가 없다.

- article 요소 안에 여러 개의 article이 있을 수 있다.
- article 요소 안에 여러 개의 section이 있을 수 있다.

---

## 8. section

- 전체 글의 흐름에 있어서 문맥적으로 끊겨서 바귀는 부분에 사용 가능하다.
- section 요소 안에 여러 개의 article이 있을 수 있다.

### section과 article의 구분 방법

- article이 될 수 없다면 section 요소를 사용한다.

> ex. 소개 부분만 가져오면 앞, 뒤 맥락이 없기 때문에 단독적으로 사용하기 어렵다. 이 경우에는 section 요소를 사용한다.

> article, section 사용 예시

```html
<article class="film_review">
  <header>
    <h2>Jurassic Park</h2>
  </header>
  <section class="main_review">
    <p>Dinos were great!</p>
  </section>
  <section class="user_reviews">
    <article class="user_review">
      <p>Way too scary for me.</p>
      <footer>
        <p>
          Posted on <time datetime="2015-05-16 19:00">May 16</time> by Lisa.
        </p>
      </footer>
    </article>
    <article class="user_review">
      <p>I agree, dinos are my favorite.</p>
      <footer>
        <p>Posted on <time datetime="2015-05-17 19:00">May 17</time> by Tom.</p>
      </footer>
    </article>
  </section>
  <footer>
    <p>Posted on <time datetime="2015-05-15 19:00">May 15</time> by Staff.</p>
  </footer>
</article>
```

<article class="film_review">
  <header>
    <h2>Jurassic Park</h2>
  </header>
  <section class="main_review">
    <p>Dinos were great!</p>
  </section>
  <section class="user_reviews">
    <article class="user_review">
      <p>Way too scary for me.</p>
      <footer>
        <p>
          Posted on <time datetime="2015-05-16 19:00">May 16</time> by Lisa.
        </p>
      </footer>
    </article>
    <article class="user_review">
      <p>I agree, dinos are my favorite.</p>
      <footer>
        <p>
          Posted on <time datetime="2015-05-17 19:00">May 17</time> by Tom.
        </p>
      </footer>
    </article>
  </section>
  <footer>
    <p>
      Posted on <time datetime="2015-05-15 19:00">May 15</time> by Staff.
    </p>
  </footer>
</article>

> 위의 예시에서는 article 안에 section을, section 요소 안에 article 요소를 배치하기도 한다.  
> 아직은 article과 section의 구분점이 명확하지 않다. 강의를 들었을 때는 제대로 파악했다고 생각했지만, MDN 문서의 예시를 확인해보니 아직 article과 section의 개념을 조금 더 공부해야 할 것 같다.
