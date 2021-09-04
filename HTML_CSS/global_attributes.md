# HTML [전역 속성]

- 어떤 태그에도 전부 사용이 가능한 속성

## 1. `class`와 `id`

### `id`

- 문서 전체에서 유일한 고유식별자(`ID`)
- 공백이 들어가서는 안된다.
- 시작 문자는 영어 소문자를 이용한다.

```html
<div id="hello">안녕하세요.</div>
```

### `class`

- 여러 개의 요소를 선택할 수 있다.
- 공백을 사용할 수 있다.
- `class` 명을 여러개 가질 수 있기 때문에 공백이 가능
- 하나의 `class` 명을 공백으로 사용할 수 없다.

```html
<div class="hi hello">안녕하세요.</div>
<div class="hello">안녕하세요.</div>
<div class="hi">안녕하세요.</div>
```

> `Javascript`로 class명이 hello인 요소를 선택한다면 1, 2번 div가 선택되고 class명이 hi인 요소를 선택한다면 1, 3번 div가 선택된다.

---

## 2. `style`

- 요소에 적용할 CSS 스타일 선언을 담는다.
- `Javascript`를 활용해서 일시적으로 style을 변경할 때 주로 사용한다.
- 주로 테스트 등 빠른 스타일링을 위한 목적으로 사용된다.

```html
<p style="color: blue">
  The <code>style</code> attribute can override it, though.
</p>
```

---

## 3. `title`

- 요소와 관련된 추가 정보를 제공하는 텍스트
- 해당 요소에 마우스를 올리면 툴팁으로 추가적인 설명을 제공한다.
- `title` 속성 내부에 작성된 값은 개행과 공백을 인식한다.
- 부모 요소와 자식 요소가 다 `title` 특성을 가지고 있다면
  - 자식 요소에 마우스를 올렸을 때 자식 요소가 가진 `title` 속성의 값을 툴팁으로 보여준다.
- 부모 요소만 `title` 속성을 가지고 있고 자식 요소가 `title` 속성을 가지고 있지 않다면 `title` 속성이 상속된다.

```html
<div title="부모 요소">
  <div title="자식 요소">반갑습니다.</div>
  <div>반갑습니다.</div>
</div>
```

---

## 4. lang

- 언어 태그 구문
- 컨텐츠를 읽는 사용자를 위해 명시하는 속성
- 웹 접근성을 높이기 위한 수단
  - 일부 문단이 다른 언어로 작성이 되어 있다면 해당 문단에 lang 속성을 추가해줘야 한다.

```html
<html lang="ko">
  <div>감사합니다.</div>

  <p lang="en">Good Morning, Everyone!</p>
</html>
```

---

## 5. `data`

- 페이지에 보이지 않게 추가 정보를 요소에 담을 수 있다.
- `data-` 뒤의 임의의 name을 입력해서 해당 값을 `Javascript`로 가져올 수 있다.

```html
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars"
></article>
```

---

## 6. `draggable`

- 드래그가 가능한지 여부를 나타내는 열거형 특성
- `true`, `false`를 무조건 명시해줘야 한다.
- `Javascript`에서 요소에 대한 클릭, 이동, 클릭을 해제한 것을 event로 인식할 수 있다.
  - event에 따른 행동을 정의할 수 있다.

```html
<img src="images/small.png" draggable="false" />
```

---

## 7. `hidden`

- `boolean` 속성
- 시각적 요소, 스크린리더 등 모든 방식에서 숨겨진다.
- 개발자 도구를 통해서 코드를 확인하면 `hidden` 속성이 들어간 요소를 확인할 수 있다.
  - 보안상의 정보를 가릴 때는 `hidden` 속성을 사용해서는 안된다.
- `CSS`의 `display` 속성을 통해서 화면에 보이게 할 수 있다.

```html
<img src="images/small.png" hidden />
```
