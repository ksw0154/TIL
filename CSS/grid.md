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

- 하나의 item에 대한 정렬을 명시한다.

### justify-items

- 기본값 : justify-items: stretch
- start, end와 같은 속성을 사용하면 item의 크기만큼만 영역을 가질 수 있다.
- item에 직접적으로 justify 속성을 적용하고 싶다면 justify-self를 사용하면 된다.

```css
.container {
  width: 100%;
  height: 500px;

  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);

  justify-items: start;
}

.item:nth-child(1) {
  justify-self: end;
}
```

### align-items

- justify-items와 동일하게 적용된다.

```css
.container {
  width: 100%;
  height: 300px;

  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);

  align-items: center;
}

.item:nth-child(2) {
  align-self: stretch;
}
```

---

## 11. Item - grid-row, grid-column

- 두 속성 모두 shorthand
- grid를 선으로 인식하기 때문에 3칸으로 나눈다면 총 4개의 선이 필요하다.
- grid-row-start, end는 선의 번호를 표현한다.
- 개발자도구를 통해서 보면 grid 선의 번호를 확인할 수 있다.
- -1은 제일 하단의 선을 의미한다.
- 요소가 차지할 부분의 시작(start)와 끝(end)부분을 명시할 수 있다.

### span

- 시작 선과 차지할 칸의 숫자를 명시할 수 있다.

```css
.container {
  width: 100%;
  height: 300px;

  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
}

.item {
  border: 1px solid black;
  background-color: indianred;
}

.item:first-child {
  background-color: indigo;

  /* 첫번째 선부터 세번째 선까지 요소의 크기를 할당한다. (2칸) */
  grid-row-start: 1;
  grid-row-end: 3;

  /* shorthand */
  grid-row: 1 / -1;

  /* 칸의 갯수를 작성하고 싶을 때 */
  /* 첫번째 선부터 세번째 선까지 요소의 크기를 할당한 것과 동일하다. */
  grid-row: 1 / span 2;

  /* -1(grid의 1과 정반대에 위치해있다.) */
  grid-column-start: 1;
  grid-column-end: -1;

  /* shorthand */
  grid-column: 1 / -1;
}
```

---

## 12. Item - grid-area

- grid-row-start, grid-column-start, grid-row-end, grid-column-end를 동시에 설정하는 shorthand
- / 를 이용해서 4가지를 한번에 작성할 수 있다.

```css
.item:first-child {
  grid-row: 4 / span 2;
  grid-column: 2 / -1;

  /* row-start / column-start / row-end / column-end */
  /* 위의 grid-row, grid-column에 작성한 내용과 동일하다. */
  grid-area: 4 / 2 / span 2 / -1;
}
```

---

## 13. Item - order

- 기본값 : 0
- item의 순서를 지정할 수 있다.
- 동일한 order 값을 가지고 있다면 markup 순서대로 순서를 가진다.

```css
/* 제일 마지막 요소의 순서가 맨 앞으로 배치된다. */
.item:last-child {
  order: -1;
}
```

---

## 14. Item - z-index

- 요소의 쌓임의 순서를 제어할 수 있다.
- 기본값 : 0

```css
.item:nth-child(1) {
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;
  z-index: 1;
}

.item:nth-child(2) {
  grid-row: 1 / 2;
  grid-column: 2 / 4;
}
```

- nth-child(1)과 nth-child(2)의 요소의 위치는 겹친다.
- nth-child(2) 요소가 markup의 순서가 뒤에 있기 때문에 nth-child(1) 요소보다 위에 있게 된다.
- z-index의 값이 클수록 요소가 더 앞으로 나오게 된다.

---

## 15. Grid 단위 - fr, min-content, max-content

### fr

- width, height를 비율로 사용해서 나눌 때 사용한다.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 100px;
}
```

- 세번째 행은 100px로 고정되고 나머지 width에서 1 : 2 비율로 나눠가지게 된다.

### min-content

- 더 이상 줄어들 수 없을 때까지 줄어든다.
- 영단어의 경우 자를수 없기 때문에 가장 긴 영단어를 기준으로 min-content가 정해진다.

```css
.container {
  display: grid;
  grid-template-columns: min-content 1fr 2fr;
}
```

### max-content

- 한 줄에 보일 수 있는 형태까지 늘린다.
- content를 자르지 않는 부분까지 max-content가 정해진다.

```css
.container {
  display: grid;
  grid-template-columns: max-content 1fr 2fr;
}
```

- length, min-content, max-content에 할당되고 남은 크기를 fr 요소가 나눠서 가져간다.

---

## 16. Grid 단위 - auto-fill, auto-fit

- 반응형으로 grid를 디자인할 때 유용한 속성
- 남는 공간에 대해서 column이나 row를 채울 수 있다.

### auto-fill

- 남는 공간에 추가적으로 요소가 들어간다.
- 요소가 한 줄로 다 채워진 이후에는 뒷 공간들은 공백으로 나타난다.

```css
.container {
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
```

### auto-fit

- auto-fill로 빈공간을 채웠지만 그래도 남는 공간이 생겼을 때 사용한다.
- 요소를 한 줄로 다 채워진 이후에 뒷 공간들은 요소들이 나눠서 가져간다.

```css
.container {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
```

### minmax(min, max)

- 최소값과 최대값을 지정할 수 있다.
