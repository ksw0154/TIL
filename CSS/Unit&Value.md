# CSS [단위와 값]

## 1. 숫자, 길이 및 백분율

- 값을 지정할 때 사용할 단위
- `length`, `percentage`, `auto`, `max-content`, `min-content` 등이 있다.

---

## 2. 절대길이 - `px`

- 절대길이 : 기준점이 따로 없기 때문에 보여지는 자체로 계산을 한다. (고정값)
- 절대길이의 단위는 `px`을 사용한다.
  - 웹에서는 `cm`, `mm` 등의 단위를 사용하기 어렵다.
  - 확대, 축소, 여러 디바이스의 화면 크기 등의 조건들을 부합하기 어렵다.
- `pt` 단위는 가끔씩 볼 수 있다.

  - word, 한글 등 문서편집을 할 때 사용하는 단위
  - 문서를 출력할 것이라는 가정이 있을 때 사용 한다.

- `font-size`를 따로 지정하지 않으면 브라우저에서 `font-size`를 변경할 수 있다.
- 절대길이로 `font-size`를 지정하면 브라우저의 설정이 적용되지 않기 때문에 접근성 문제를 유발할 수 있다.
  - `em`, `rem` 등 상대길이로 설정하는 것을 권고한다.

```css
p {
  font-size: 24px;
}
```

---

## 3. 상대길이 - em, rem

- 상대길이 : 기준점이 있는 상태에서 기준점에 따라 길이가 달라진다.

### em

- `1em === 부모의 font-size`
- 화면에 표시될 때는 `px`로 변환되어 표시된다.

```css
.parent {
  font-size: 24px;
}

.child {
  font-size: 0.5em;
}
```

- `.child`의 `font-size`는 `12px`로 변환되어 표시된다.

### rem

- `1rem === root의 font-size` (브라우저의 `font-size`)
- 화면에 표시될 때는 `px`로 변환되어 표시된다.

```css
div {
  font-size: 1rem;
}
```

- 브라우저 기본 `font-size`는 `16px`이기 때문에 `div`의 `font-size`는 `16px`이 된다.

---

## 4. 상대길이 - `vw`, `vh`

- 뷰포트 백분율 길이
- 기본적으로 `body` 에는 `margin`이 적용되어 있다.
- 원하는 `100vw`, `100vh`를 적용하려면 `body`의 `margin`을 0으로 설정해야 한다.
- 반응형을 디자인할 때 유용하게 사용할 수 있다.

### `vw`

- 뷰포트의 `width`

### `vh`

- 뷰포트의 `height`

```css
body {
  margin: 0;
}

.container {
  width: 100vh;
  height: 100vh;
}
```

---

## 5. 상대길이 - `vmin`, `vmax`

- `vw`, `vh`와 연계해서 이해해야 한다.
- 디바이스의 세로모드와 가로모드일 때 다르게 적용할 수 있다.
- 가로모드와 세로모드를 지원해야할 때 유용하게 사용할 수 있다.

### vmax

- 브라우저의 화면에서 `width`, `height` 중 길이가 긴 요소의 값
- 스마트폰의 경우는 `width`가 `vmin`, `height`가 `vmax`
- 컴퓨터에서 보게 될 경우 `width`가 `vmax`, `vmin`

#### 모바일 디바이스 (device height가 긴 경우 화면을 꽉차게 하려면)

```css
body {
  margin: 0;
}

.container {
  background-color: thistle;
  width: 100vmin;
  height: 100vmax;
}
```

#### PC (device width가 긴 경우 화면을 꽉차게 하려면)

```css
body {
  margin: 0;
}

.container {
  background-color: thistle;
  width: 100vmax;
  height: 100vmin;
}
```

---

## 6. 퍼센트

- 100%의 기준 : 부모 요소의 값의 100%
- 부모의 값에 상대적으로 계산이 된다.

```css
body {
  margin: 0;
}

.parent {
  width: 300px;
  height: 200px;
}

.child {
  width: 50%;
  height: 30%;
}
```

---

## 7. 함수 표기법 - `calc()`, `min()`, `max()`

- 단위들에 대한 계산식
- 여러 개의 단위를 섞어서 사용이 가능하다.
- 사칙연산을 지원한다.
  - `*`, `/` 뒤에 나오는 값은 `number`이여야 한다.
  - 연산자 좌우에는 공백이 있어야한다. (`*`, `/` 는 권고사항)

### `calc()`

- calc(계산식)

```css
.container {
  width: calc(100% - 80px);
  width: calc(100% / 3);
}
```

### `min()`

- ,를 사용해서 나열할 수 있다.
- 작은 값을 브라우저가 선택할 수 있다.

```css
.container {
  width: min(100%, 500px);
}
```

### `max()`

- ,를 사용해서 나열할 수 있다.
- 큰 값을 브라우저가 선택할 수 있다.
- 브라우저의 크기가 작아지다보면 스크롤이 생길 수 있다.

```css
.container {
  width: max(100%, 500px);
}
```

#### `min()`, `max()`는 웹 호환성을 확인해야 한다.

- IE는 지원을 하지 않는다.
