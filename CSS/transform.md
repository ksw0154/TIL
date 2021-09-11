# CSS [transform]

## 1. `transform` (변형) 개요

- 요소에 회전, 크기 조절, 기울이기, 이동효과를 부여한다.
- 원래 요소의 자리, 크기는 유지하지만 효과를 부여하는 것이다.
  - 실제 요소의 width, height, 위치를 바꾸는 것이 아니다.
- `transform: 함수` 형식으로 작성한다.
- 함수는 한 번에 여러 함수를 동시에 사용할 수 있다.
- 함수를 여러개 사용했을 때 오른쪽부터 왼쪽으로 하나씩 적용된다.
- 초기값 : `none`

---

## 2. 크기 - `scale`

- 2D 만을 위한 함수
- 3D를 적용하기 위해서는 `scale3d()`를 이용한다.

### `scale()`

- `scale(sx)`
- `scale(sx, sy)`
- `sx`, `sy`는 `&lt;number&gt;`가 들어간다.

```html
<div class="box"></div>
```

```css
.box {
  width: 400px;
  height: 400px;

  /* 가로의 길이를 0.5배 */
  transform: scale(0.5);

  /* 가로의 길이를 1.4배로 늘린다. */
  transform: scale(1.4);

  /* x, y축 모두 변경 */
  transform: scale(0.4, 1);
}
```

#### `transform: scale(0.5)`

- 기존의 `width`는 입력한 값 400px로 그대로 유지된다.
- 위의 예시 경우에는 요소의 공간은 400px로 그대로 유지되기 때문에 `scale()`을 사용해도 400px 안에는 다른 요소가 들어올 수 없다.
- 보여지는 부분만 `scale()`이 적용된 것이다.

#### `transform: scale(1.4)`

- 기존의 `width`는 그대로 유지되지만 보여지는 크기는 1.4배가 되어서 보여진다.
- 만약 .box 요소 아래에 다른 content가 있다면 크기가 1.4배가 되었기 때문에 아래 content가 가려질 수 있다.

### `scaleX()`

- x축만 증가한다.

```css
.box {
  width: 400px;
  height: 400px;

  transform: scaleX(0.5);
}
```

### `scaleY()`

- y축만 증가한다.

```css
.box {
  width: 400px;
  height: 400px;

  transform: scaleX(1.4);
}
```

---

## 3. 회전 - `rotate`

- 값을 1개만 받을 수 있다.
- 값 형식 : `&lt;angle&gt;`

  - `deg` : 45도(`45deg`), `14.23deg`
  - `turn` : `1turn` === 1바퀴

- 반대로 회전하고 싶으면 - 기호를 사용한다. (시계 반대방향)
- 90도를 표현하고 싶을 때
  `90deg = 100grad = 0.25turn = 1.5708rad(근사값)`

```css
.box {
  width: 200px;
  height: 200px;

  background-color: rebeccapurple;

  transform: rotate(45deg);
}
```

- 원래 위치에서 회전하기 때문에 아래 요소를 가릴 수 있다.

---

## 4. 이동 - `translate`

- 위치를 이동하는 함수
- 값을 1개만 쓰거나 ,를 사용해서 두가지 값을 사용할 수 있다
- 값을 1개만 사용하게 되면 1개만 적용된다 (x, y가 동시에 적용되지 않는다.)

```css
.box {
  width: 200px;
  height: 200px;

  background-color: rebeccapurple;

  /* x, y 축 모두 이동 */
  transform: translate(100px, 150px);

  /* x 축 이동 */
  transform: translateX(-100%);

  /* y 축 이동 */
  transform: translateY(-150px);
}
```

- `%`는 요소의 크기의 `%`를 나타낸다.

---

## 5. 기울이기 - `skew`

- 사용할 수 있는 값의 자료형 : `&lt;angle&gt;`
- `skew(ax)`
- `skew(ax, ay)`
- skew를 이용해서 y축만 기울인다면 `skew(0, ay)`로도 표현할 수 있다.

### `skew()`, `skewX()`, `skewY()`

```css
.box {
  width: 200px;
  height: 200px;

  background-color: rebeccapurple;

  /* x, y 축 모두 이동 */
  transform: skew(20deg, 20deg);

  /* x 축 이동 */
  transform: skewX(45deg);

  /* y 축 이동 */
  transform: skewY(30deg);
}
```

---

## 6. 기준점 - `transform-origin`

- 기본값 : `transform-origin: center;`
- 요소의 중심이 변경되는 것이 아니라 `transform이 실행되는 위치를 정하는 것`이다.

```css
.box {
  width: 200px;
  height: 200px;

  background-color: rebeccapurple;

  transform: rotate(45deg);
  transform-origin: top left;

  /* 숫자값으로 입력하기 */
  transform-origin: 50px 100px;
}
```

- .box 요소의 content가 top left로 이동하는 것이 아니다.
- .box 요소의 `rotate()가 실행되는 위치`가 `top, left`가 되서 중심이 회전하는 것이 아니라 `요소 기준 left,top으로 rotate()가 실행`된다.
