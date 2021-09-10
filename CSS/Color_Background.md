# CSS [색상과 배경]

## 1. 색상 - `HEX`(16진수), `rgb`, `rgba`

### `keyword`

- ex. `blue`, `transparent` 등
- `transparent` : 투명하게 만든다.
  - rgba(0, 0, 0, 0)의 짧은 이름

### `HEX`

- 16진수를 이용해서 표기한다.
- `#R(2)G(2)B(2)` 식으로 표기한다.
  - ex. `#00FF4F`

```css
.box {
  background-color: #000000;
}
```

### `rgb`

- `R: 0~255`, `G: 0~255`, `B: 0~255`의 숫자 값으로 표현한다.
  - ex. rgb(0, 0, 0)

```css
.box {
  background-color: rgb(255, 255, 255);
}
```

### `rgba`

- `rgb`를 입력하는 형식에서 투명도를 추가로 적용할 수 있다.

```css
.box {
  background-color: rgba(255, 0, 0, 0.8);
}
```

---

## 2. `opacity`

- `요소의 불투명도를 설정`
- default value : 1
- 0.0 ~ 1.0 사이의 숫자를 사용할 수 있다.
- `color` 뿐만 아니라 내부의 모든 요소들의 불투명도를 한번에 조절할 수 있다.
- `background-color`의 투명도만 변경하고 싶다면 `rgba()` 속성을 사용해야 한다.

```css
.box {
  background-color: red;
  /* color와 내부의 요소들의 불투명도를 함께 조절한다. */
  opacity: 0.8;

  /* background-color의 투명도만 조절한다. */
  background-color: rgba(255, 0, 0, 0.5);
}
```

---

## 3. `background-color`, `background-image`

### `background-color`

- 배경색을 지정하는 속성
- `background-color`는 `background-image`보다 뒤에 위치하게 된다.

```css
.box {
  background-color: green;
}
```

### `background-image`

- default value : none
- image가 요소의 크기보다 작다면 바둑판 형식으로 반복되는 모습을 보인다.

```css
.box {
  background-image: url("../images/test.png");
}
```

---

## 4. `background-repeat`

- 배경 이미지의 반복 방법을 지정한다.
- 기본값 : `repeat`

### `repeat-x`

- 가로축으로만 반복이 된다.
- `height`와 상관없이 1번만 표시된다.

### `repeat-y`

- 세로축으로만 반복이 된다.
- `width`와 상관없이 1번만 표시된다.

### `no-repeat`

- `width`, `height`와 상관없이 1번만 반복된다.
- 여백은 그대로 두고 image 크기만큼만 표시된다.

```css
.box {
  background-image: url("../images/test.png");
  /* x축 반복 */
  background-repeat: repeat-x;

  /* y축 반복 */
  background-repeat: repeat-y;

  /* 반복없이 1번만 표시 */
  background-repeat: no-repeat;
}
```

---

## 5. `background-position`

- 두가지 값(x, y 값)을 spacing을 이용해서 작성한다.
- `repeat` 속성을 사용해도 `position`은 그대로 적용된다.
- `position`을 `keyword`로 입력할 때 한 가지만 입력한 경우 나머지 값은 무조건 `center`로 들어간다.

```css
.box {
  background-image: url("../images/test.png");
  /* repeat, repeat-x, repeat-y 사용 가능하다. */
  background-repeat: no-repeat;

  background-position: 150px, 200px;

  /* keyword 사용 */
  background-position: top left;

  /* keyword를 한개만 사용했을 때 */
  background-position: top (center);
}
```

---

## 6. `background-origin`

- 배경의 원점을 테두리 시작점(`border`), 테두리 내부, 안쪽 여백 내부(`padding`) 중 하나로 지정한다.
- 기본값 : `padding-box`

```css
.box {
  background-image: url("../images/test.png");
  background-repeat: no-repeat;

  border: 30px dashed blue;
  padding: 30px;
}
```

### `border-box`

```css
.box {
  background-origin: border-box;
}
```

- image의 원점이 border의 시작점과 동일하다.
- 실제로 보여지는 모습은 image가 border의 영역과 겹쳐 보인다.

### `padding-box`

```css
.box {
  background-origin: padding-box;
}
```

- image의 원점이 padding의 시작점과 동일하다.
- border의 width가 30px이고 padding이 30px이 있어도 image의 시작점은 (30, 30)가 된다.

### `content-box`

```css
.box {
  background-origin: content-box;
}
```

- `border-box`와 `padding-box`를 모두 포함해서 image의 원점을 잡게 된다.
- border 30px, padding 30px이므로 image의 원점은 (60, 60)이 된다.

---

## 7. `background-size`

- 배경 이미지의 크기를 설정한다.
- 기본값: auto
  - 배경 이미지의 원본 크기를 유지한다.

```css
.box {
  background-image: url("../images/test.png");
  background-repeat: no-repeat;
}
```

### `contain`

- image의 비율을 유지한다.
- image가 다 보이도록 나타내기 때문에 빈 공간이 생길 수 있다.

```css
.box {
  background-size: contain;
}
```

### `cover`

- image의 비율을 유지한다.
- image가 찌그러지지 않는 한도 내에서 제일 크게 설정한다.
- 빈 공간이 생기지 않는다.

```css
.box {
  background-size: cover;
}
```

### `length`

- 값을 지정할 수 있다.
- `width`, `height` 두 값을 입력하게 되면 비율을 유지하지 않는다.
- 하나의 값만 적용할 경우 비율이 유지가 된다.

```css
.box {
  /* 두 값을 모두 적용했을 경우 */
  background-size: 100px 200px;

  /* 하나의 값만 적용할 경우(1) */
  background-size: 100%;

  /* 하나의 값만 적용할 경우(2) */
  background-size: 100px;
}
```

---

## 8. `background` (shorthand)

- 색상, 이미지, 원점, 크기, 반복 등 여러 배경 스타일을 한 번에 지정할 수 있다.
- 총 8개의 하위속성을 이용할 수 있다. (초기값)
  - `background-attachment: scroll`
  - `background-clip: border-box`
  - `background-color: transparent`
  - `background-image: none`
  - `background-origin: padding-box`
  - `background-position: 0% 0%`
  - `background-repeat: repeat`
  - `background-size: auto auto`

```css
.box {
  background: green;

  background: url("test.jpg") repeat-x;

  background: no-repeat center/80% url("test.jpg") red;
}
```

### Rule

- `background-color`는 제일 마지막에 작성해야 한다.
- `background-position`과 `background-size`는 같이 사용하려면 `position` `/` `size` 형식으로 사용해야 한다. `/` 문자로 구분해야 한다.
- 작성하지 않은 값들은 초기값으로 설정이 된다.
