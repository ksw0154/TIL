# CSS [박스 모델]

## 1. 박스 모델이란

- CSS를 구성하는 기반 영역

### Box Model

- `content` : 콘텐츠가 표시되는 영역
  - `width`, `height`를 가지고 영역을 정의할 수 있다.
- `padding` : 콘텐츠와 테두리(`border`) 사이의 여백
- `border` : `padding`과 `margin` 사이의 테두리
  - 눈에 보이지 않지만, 존재하는 테두리 (`border` : 0)
- `margin` : 가장 바깥 쪽 레이어로 콘텐츠와 패딩, 테두리를 둘러싸면서 박스와 다른 요소 사이 공백 역할을 한다.

```html
<div class="box">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis iste omnis
  explicabo illo in fuga quo est unde numquam quia! Deleniti atque laboriosam
  accusantium adipisci mollitia quas veniam eius sunt.
</div>
```

```css
.box {
  width: 200px;
  height: 200px;

  padding: 20px;
  border: 20px solid black;
  margin: 20px;
}
```

---

## 2. 크기 - `width`, `height`

- 사용할 수 있는 값 : `length`, `percentage`

### `width`, `height` 공통점

- 초기값 : auto
- 상속이 되지 않는 속성

#### `block` 요소

- `block` 요소의 `width`의 auto 값은 100%이다.
- 원하는 `width`, `height` 값을 입력할 수 있다.

#### `inline` 요소

- `inline` 요소는 콘텐츠의 길이와 높이에 자동으로 적용된다.
- 원하는 `width`, `height` 값을 입력할 수 없다.

---

## 3. 크기 - `max-width`, `min-width`, `max-height`, `min-height`

- `width`, `height`의 연속적인 내용
- `width`, `height`와 동일하게 사용 가능하다.
- 상속이 되지 않고, 초기값은 auto

```css
.parent {
  width: 50%;
  height: 300px;
  background-color: antiquewhite;
}

.child {
  width: 50%;
  min-width: 100px;
  max-width: 300px;
  height: 100px;

  background-color: cadetblue;
}
```

---

## 4. 여백 - margin

- shorthand (총 4가지)
- 박스모델에 가장 바깥쪽에 여백을 만들 수 있는 속성
- 단일값을 사용할 때 `top`, `bottom`, `left`, `right` 동시에 적용된다.
- 초기값 : 0
- 상속이 되지 않는다.
- margin의 값을 %로 사용하게 될 경우 부모의 width의 %로 계산되어 적용된다.

```css
.parent {
  width: 200px;
  height: 200px;

  border: 5px solid black;
  /* 단일값 */
  margin: 20px;

  /* 세로, 가로 */
  margin: 20px 20px;

  /* 위, 가로, 아래 */
  margin: 20px 1em 2rem;

  /* 위, 오른쪽, 아래, 왼쪽 */
  margin: 10px 20px 30px 4rem;

  background-color: antiquewhite;
}
```

---

## 5. 여백 - margin collapsing 1

- 마진 상쇄, 마진 겹침, 마진 중복 등등으로 불린다.

### 마진 상쇄가 일어나는 경우

1. `block` 요소
2. `margin-top`, `margin-bottom`이 겹칠 때 발생

   - 큰 크기를 가진 `margin`으로 합쳐진다.

### 사례

### 1. 인접 형제

- 두 형제 요소의 위 / 아래 여백이 만나 상쇄된다.

```html
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
```

```css
.box {
  width: 50px;
  height: 50px;
  background-color: blanchedalmond;

  margin-top: 10px;
  margin-bottom: 20px;
}
```

---

## 6. 여백 - margin collapsing 2

### 사례

### 2. 부모-자식요소 간

- 부모 블록에 `border`, `padding`, `content`가 없어서 부모와 자식의 `margin-top`이 만나는 경우
- 부모 블록에 `border`, `padding`, `content`가 없고, 부모-자식을 분리할 height값이 지정되지 않아 부모와 자식의 `margin-bottom`이 만나는 경우

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  width: 100px;
  height: 100px;

  margin-top: 30px;

  background-color: antiquewhite;
}

.child {
  width: 30px;
  height: 30px;

  margin-top: 40px;
  background-color: darkgray;
}
```

- `padding`, `border` 요소가 1px이라도 있으면 collapsing이 일어나지 않는다.

### 3. 빈 블록

- `border`, `padding`, `content`가 없다.
- 자식요소에 `height`가 존재하지 않으면 부모요소의 `margin-top`, `margin-bottom`이 만나게된다.

---

## 7. 여백 - `padding`

- shorthand
- border 기준으로 안쪽 여백
- `margin`과 사용 방식이 거의 동일하다.
- `padding`은 상쇄(collapsing)가 존재하지 않는다.
- 음수값을 사용할 수 없다.
- `%`를 사용하면 부모 요소의 `width`의 `%`를 적용한다.

```css
.box {
  /* 네 면 모두 적용 */
  padding: 1em;

  /* 세로, 가로 */
  padding: 1em 10px;

  /* 위, 가로, 아래 */
  padding: 10px 0 1rem;

  /* 위, 오른쪽, 아래, 왼쪽 */
  padding: 1em 10px 20px 2rem;
}
```

---

## 8. 테두리 - `border-style`, `border-width`, `border-color`

### `border`

- `margin` 영역과 `padding` 영역 사이의 테두리

### `border-style`

- 기본값 : none
- `border`의 모양
- style을 keyword로 넣을 수 있다.
- 각 면의 style을 따로 적용할 수 있다.
- none으로 지정하면 `border-width`, `border-color`는 적용은 되지만 보이지 않는다.

```css
.box {
  border-style: dashed groove none dotted;
}
```

### `border-width`

- `border`의 두께
- `length`를 사용하거나 Keyword(`thin`, `medium`, `thick`)를 사용할 수 있다.
- 두께를 각 면마다 다르게 지정할 수 있다.

```css
.box {
  border-width: 10px 6px 4px 10px;
}
```

### `border-color`

- `border`의 색상
- 색상을 다르게 지정할 수 있다.

```css
.box {
  border-color: red yellow green olive;
}
```

---

## 9. 테두리 - `border` (shorthand)

- 단축 속성을 이용해서 한꺼번에 작성하는 경우가 많다.
- `border-style`은 꼭 넣어주어야 한다.

### `border` vs `outline`

#### `outline`

- `button`을 tab으로 focusing 할 때 테두리가 생기는 것
  - 요소를 강조하기 위해 보여지는 것
  - 레이아웃에 보여지는 것이 아니다.

```css
.box {
  width: 100px;
  height: 100px;
  background-color: antiquewhite;

  border: solid 3px tomato;
}
```

---

## 10. 테두리 - `border-radius`

- 요소 테두리 경계의 꼭짓점을 둥글게 만든다.
- 한번에 4개의 꼭짓점
- `border-width`, `border-style` 속성이 없어도 사용 가능

```css
.box {
  /* 1개의 값으로 입력 */
  border-radius: 30px;

  /* 2개의 값으로 입력 (대각선으로 적용) */
  border-radius: 30px 50px;

  /* 4개의 값으로 입력 (왼쪽 상단부터 적용) */
  border-radius: 10px 20px 40px 10px;
}
```

---

## 11. box-sizing

- 요소의 너비와 높이를 계산하는 방법을 지정한다.

### `content-box`

- `width`, `height`의 영역이 `content` 영역만 의미
- `margin`, `border`, `padding`은 추가적으로 더해진다.

```css
.box {
  box-sizing: content-box;
  width: 300px;
  height: 200px;

  border: 20px solid black;
  padding: 20px;
  margin: 30px;
}
```

- 실제 .box 요소의 `width`는 540px이 된다.
- `content`의 `width`는 300px

### `border-box`

- `width`, `height`의 영역이 요소 전체의 크기를 의미
- `margin`, `border`, `padding`을 다 포함한 크기

```css
.box {
  box-sizing: border-box;
  width: 300px;
  height: 200px;

  border: 20px solid black;
  padding: 20px;
  margin: 30px;
}
```

- 실제 .box 요소의 `width`는 300px이다.
- `content`의 `width`는 220px이다
