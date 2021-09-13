# CSS [flexbox]

## 1. `Flexbox` 개요

- CSS3에 추가된 개념이다.
- block요소를 가로로 나열하기 위해서 inline요소로 변경하거나 float을 사용하기도 했다.

### `display: inline-block`

- inline 요소와 block 요소의 특징을 다 가지고 있기 때문에 가로로 정렬할 수 있다.
- 요소에 여백이 들어간다.
  - 코드 개행에 대한 여백이 HTML에 표현된다.
  - layout을 구성하기에 좋지 않다.

### `float`

- 가로 정렬을 할 수 있고, 요소에 여백이 들어가지 않는다.
- 떠있는 형태이기 때문에 부모 요소안으로 들어가지 않는다.

### `display: flex`

- inline-block, float에 대한 문제를 해결하기 위해 추가된 개념이다.
- 가로, 세로 정렬이 쉽다.
- 1차원 정렬의 형태로 사용한다.
- `정렬하고 싶은 요소의 부모에 flex를 지정해주면 된다.`

```css
.container {
  display: flex;
}

.item {
  width: 50px;

  border: 1px solid black;
}
```

> `item 요소들이 container 내부에 있을 때 flex로 정렬을 할 수 있다.`

---

## 2. 용어 - `flex container`, `flex item`, `main axis`, `cross axis`

- container와 item에 사용할 수 있는 속성이 따로 있다.

### `flex container`

- item들을 감싸고 있는 부모 요소

### `flex item`

- 내부에 정렬을 위해서 담아 놓은 item(들)

### `main axis`

- 주축
- 주축과 교차축은 바뀔 수 있다.
- 별도의 변경이 없을때는 가로, 왼쪽에서 오른쪽

### `cross axis`

- 교차축
- 별도의 변경이 없을 때는 세로, 위에서 아래쪽

---

## 3. Container - `display`

- `<display-outside>` : `block`, `inline`, `inline-block`은 같은 레벨 요소(바깥쪽 요소)에 대해 정렬을 하기 위해서 사용한다..
- `<display-inside>` : `flex`, `grid와` 같이 container 내부 자식 요소(item)에 대해서 정렬하기 위해서 사용한다.
- 바깥쪽 요소에 대한 정렬과 내부 자식 요소에 대한 정렬을 동시에 진행할 수 있다.

```css
/* 바깥쪽 요소에 대한 정렬 */
.container {
  display: block;
}

/* 내부 요소에 대한 정렬 */
.container {
  display: flex;
}

/* 바깥쪽, 안쪽 요소를 동시에 정렬 */
.container {
  display: inline-flex;
}
```

---

## 4. Container - `flex-direction`

- `flex container에 사용할 수 있는 속성`
- item을 배치할 때 사용할 주축 및 방향(정방향, 역방향)을 지정한다.
- 기본값 : `flex-direction`: row
- item의 시작점도 방향에 따라 바뀌게 된다.

```css
.container {
  /* 주축 (가로) 방향(왼쪽에서 오른쪽) */
  flex-direction: row;

  /* 주축 (가로) 방향(오른쪽에서 왼쪽) */
  flex-direction: row-reverse;

  /* 주축 (세로) 방향(위쪽에서 아래쪽) */
  flex-direction: column;

  /* 주축 (세로) 방향(아래쪽에서 위쪽) */
  flex-direction: column-reverse;
}
```

---

## 5. Container - flex-wrap, flex-flow (shorthand)

### flex-wrap

- container에 사용할 수 있는 속성
- 강제로 한 줄에 배치되게 할 것인지, 여러행으로 나누어 표현할 것인지 결정하는 속성
- 기본값 : nowrap

```css
.container {
  display: flex;

  /* 여러 행에 걸쳐서 배치, 위에서 아래로 */
  flex-wrap: wrap;

  /* 시작점과 끝점의 기준이 반대로 배치 */
  flex-wrap: wrap-reverse;
}
```

- .container의 width가 변경될 때 item이 한 줄에서 다 표현이 되지 않을 때 아래 줄로 내려가서 표현된다.
  - item 본연의 width, height를 지킬 수 있다.
- flex-wrap: nowrap 으로 설정하면 .container의 width에 따라서 item이 한 줄에 표현되기 위해서 width가 줄어든다.
- wrap-reverse 로 설정하게 되면, 시작점도 변경된다.
  - 왼쪽 아래에서 시작되며 위로 올라가면서 배치한다.

### flex-flow

- shorthand
- flex-direction, flex-wrap을 한번에 사용할 수 있다.
- 기본값: row, nowrap

```css
.container {
  flex-flow: row wrap;
}
```

---

## 6. Item - order

- item에서 사용하는 속성
- flex or grid container 안에서 현재 요소의 배치 순서를 지정한다.
  - 부모 요소는 무조건 flex나 grid가 적용되어 있어야 한다.
- 기본값 : 0
- 순서가 다 같으면 코드 순서를 따라가게 되있다.
- 오름차순으로 앞에 배치한다.
- 동일 값의 경우에는 소스코드의 순서대로 정렬된다.
- integer 형식이기 때문에 음수도 사용이 가능하다.
- 눈에 보이는 순서에만 영향을 준다
  - tab 키로 이동할 떄는 order의 순서대로 진행되지 않는다.

```css
.item:nth-child(3) {
  /* 기본값보다 앞에 위치하고 싶을 때 */
  order: -1;

  /* 기본값보다 뒤에 위치하고 싶을 때 */
  order: 8;
}
```

- 기본값이 0이기 때문에 특정 요소를 더 앞으로 보내려면 음수로 작성해야 한다.
- 개발자 도구에서 요소를 봤을 때 HTML 코드 그대로 표현된다.

---

## 7. Item - flex-grow

---

## 8. Item - flex-shrink

---

## 9. Item - flex-basis

---

## 10. Item - flex (shorthand)

---

## 11. Container - justify-content

---

## 12. Container - align-items

---

## 13. Container - align-content

---

## 14. Item - align-self
