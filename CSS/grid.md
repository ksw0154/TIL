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
- 입력한 단위값에서 늘어나지 않는다.
- 안에 요소가 없어도 명시된 값들은 유지가 된다.

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

---

## 5. Container - row-gap, column-gap, gap

- gutter의 너비를 결정하는 요소

```css
.container {
  width: 400px;
  height: 400px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);

  row-gap: 20px;
  column-gap: 50px;

  /* shorthand (row, column 순서) */
  gap: 20px 50px;
}
```

---

## 6. Container - grid-auto-rows, grid-auto-columns

- grid-template-rows, columns에서 명시된 것보다 더 많은 요소가 표현될 때 더 많은 요소에 대해서 크기를 지정할 수 있다.

```css
.container {
  width: 400px;
  height: 400px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  grid-auto-rows: 100px;
  grid-auto-columns: 50px;
}
```

- .container 내부에 요소가 9개가 넘어가게 되면, 넘어간 요소들은 요소 자신의 크기를 가지게 된다.
- 요소의 갯수가 넘어갈 때 해당 요소의 크기를 암시적으로 제공하기 위해서 사용된다.
- 요소의 갯수가 넘어가면 해당 요소는 row는 100px, column은 50px의 값을 가지게 된다.
- 요소가 넘어가지 않는다면, 해당 부분은 고정되서 보여지지 않는다.

---

## 7. Container - grid-auto-flow

- 기본값 : grid-auto-flow: row
  - item의 진행 방향이 row이다.

### dense

- 요소 중간에 큰 크기의 요소가 들어갈 때 큰 크기 요소 앞에 공백이 생길 수 있다.
- 큰 요소 뒤의 요소가 큰 요소 앞의 공백에 들어갈 수 있는 크기라면, 공백을 채워서 뒤의 요소가 앞으로 배치된다.

```css
.container {
  grid-auto-flow: row;

  grid-auto-flow: column;

  /* row는 생략 가능하다. */
  grid-auto-flow: row dense;

  grid-auto-flow: column dense;
}
```

---

## 8. Container - grid (shorthand)

### 외재적인 속성 (명시적)

- grid-template-rows
- grid-template-columns
- grid-template-areas

### 내재적인 속성 (암시적)

- grid-auto-rows
- grid-auto-columns
- grid-auto-flow

- row에 대한 속성 / column에 대한 속성으로 구분해서 작성한다.
- row (명시적 or 암시적) / column(명시적 or 암시적) 속성으로 사용 가능하다.

```css
.container {
  width: 400px;
  height: 300px;

  display: grid;

  grid-template-columns: 1fr 2fr;
  grid-template-rows: 100px 200px;

  /* 위의 코드와 동일한 결과를 보여준다. */
  grid: 1fr 2fr / 100px 200px;

  /* auto-flow를 적용할 곳에 작성하면 된다. */
  grid: 1fr 2fr / auto-flow dense 100px 200px;
}
```

---

## 9. Container - justify-content, align-content

### justify-content

- main-axis를 기준으로 정렬하는 방식
- 기본값 : justify-content: start;
- flex와 동일하게 justify-content를 사용할 수 있다.

```css
.container {
  width: 100%;
  height: 300px;

  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);

  justify-content: space-between;
}
```

### align-content

- cross-axis를 기준으로 정렬하는 방식
- 기본값 : align-content: start;
- flex와 동일하게 align-content를 사용할 수 있다.

```css
.container {
  width: 100%;
  height: 300px;

  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);

  align-content: center;
}
```

---

## 10. Container - justify-items, align-items

---
