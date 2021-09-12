# CSS [transition]

## 1. `transition` (전환)

- 기존의 A 상태에서 B 상태로 바뀌는 것
  - A의 CSS가 B의 CSS로 바뀐다.
- 시간의 개념이 들어간다.

---

## 2. `transition-property`, `transition-duration` -1

### `transition-property`

- 어떤 요소를 바꿀 것인지에 대한 내용
- 기본값 : `transition-property`: none;

```css
.box {
  /* 특정 부분을 바꿀 때 */
  transition-property: margin-right, color;

  /* 전체를 바꿀 때 */
  transition-property: all;
}
```

### `transition-duration`

- 시간에 대한 내용
- 값 : &lt;time&gt;
- 단위 : ms, s (0.5s === 500ms)

```css
.box {
  /* transition이 일어나는 시간 (0.5초) */
  transition-duration: 500ms;
  transition-property: margin-right;
}
```

---

## 3. `transition-property`, `transition-duration` -2

```html
<div class="box">Hover me!🌊</div>
```

```css
.box {
  width: 300px;
  background-color: darkslategray;
  font-size: 50px;
  color: white;

  transition-property: all;
  transition-duration: 300ms;
}

.box:hover {
  width: 340px;
  background-color: indianred;
  color: black;
  font-size: 60px;
}
```

- 상태를 바꾸는 함수를 작성하고 `property`와 `duration`을 작성한다.
- `property`와 `duration`을 작성하지 않아도 상태는 변경된다.
- `property`를 통해서 상태를 바꿀 때 어떤 속성을 바꿀지 결정한다.
- `duration`을 통해서 속성이 바뀌는 시간을 설정할 수 있다.

---

## 4. `transition-delay`, `transition-timing-function`

### `transition-delay`

- `transition`을 미룰 수 있다.
- `property`와 `duration` 없이도 사용할 수 있다.
- 요소가 여러개 있을 떄 trigger 시점을 변경해서 사용할 때 많이 사용한다.

```css
.box {
  transition-delay: 500ms;
}
```

### `transition-timing-function`

- `transition`이 되는 중간 과정에 효과를 줄 수 있다.
- 기본값 : `ease`

```css
.box {
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: linear;
}
```

- `linear` : 등속도로 상태가 변경된다.
- `ease`, `ease-in`, `ease-out`, `ease-in-out` 등의 속성을 사용할 수 있다.

---

## 5. `transition` (shorthand)

```css
.box {
  /* 1 property */
  /* property name | duration | timing function | delay */
  transition: margin-left 4s;
  transition: margin-left 4s ease-in-out 1s;

  /* 2 property 콤마(,)를 이용해서 추가한다. */
  transition: margin-left 4s, color 1s;

  /* all property */
  transition: all 4s;
}
```

- shorthand를 작성할 때는 `name`, `duration`, `timing function`, `delay` 순서대로 작성하는 것이 좋다.
- `duration`과 `delay`의 순서는 무조건 지켜줘야 한다. `duration` 후 `delay` 값을 작성한다.

---

## 6. transition - transform 활용 예

```css
.box {
  width: 100px;
  height: 100px;
  border: 10px solid seagreen;
  background-color: rgb(204, 253, 225);
  border-radius: 30px;

  transform-origin: botton right;
  transition: all 1s ease-in-out;
}

.box:hover {
  transform: rotate(360deg);
}
```
