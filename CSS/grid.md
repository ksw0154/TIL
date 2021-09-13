# CSS [grid]

## 1. Grid 개요

- 2차원 레이아웃 시스템
- main axis, cross axis에 item을 나열할 수 있다.
- column, row로 구성되어 있다.
- gutters : 행과 열 사이의 공백

---

## 2. Container - display

```css
.container {
  /* 기본 형식 */
  display: grid;

  /* 외부 레이아웃(inline) + 내부 레이아웃(grid) */
  display: inline-grid;
}
```

- 외부 레이아웃과 내부 레이아웃의 속성을 한 번에 작성할 수 있다.

---

## 3. Container - grid-template-rows, grid-template-columns

- Container와 item에 사용할 수 있는 속성을 구분해서 공부해야 한다.

### grid-template-rows, grid-template-columns

- 몇 개의 row를 가질 것인지 명시한다.
- 갯수를 입력하는 것이 아니라 단위값을 입력한다.
- 입력한 단위값에서 늘어나지 않는다.ㄴ

```css
.container {
  display: grid;
  height: 400px;

  grid-template-rows: 100px 100px;

  /* column의 비율을 1 : 1 : 1로 명시한다. */
  grid-template-columns: 1fr 1fr 1fr;
  /* 1fr을 3번 반복한다. */
  grid-template-columns: repeat(3, 1fr);
}
```

---

## 4. Container - grid-template-areas

- row, column의 범위를 지정할 수 있다.
- 각각의 item의 범위를 지정할 때 사각형으로 지정해야 한다.

### 형식

```css
.container {
  grid-template-areas:
    "hd hd hd hd hd"
    "ma ma ma sb sb"
    "ft ft ft ft ft";
}
```

- 영역을 비우고 싶다면 점(.)으로 표현하면 된다.
- grid-area를 통해서 해당 요소의 이름을 부여한다.

```html
<div class="container">
  <div class="item header">1</div>
  <div class="item main">2</div>
  <div class="item sidebar">3</div>
  <div class="item footer">4</div>
</div>
```

```css
.container {
  width: 400px;
  height: 400px;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repate(5, 1fr);
  grid-template-areas:
    "hd hd hd hd hd"
    "ma ma ma sb sb"
    "ft ft ft ft ft";
}

.item {
  background-color: indianred;
  border: 3px solid indigo;
}

.header {
  grid-area: hd;
}
.main {
  grid-area: ma;
}
.sidebar {
  grid-area: sb;
}
.footer {
  grid-area: ft;
}
```
