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

- flex-container 요소 내부에 할당 가능한 공간의 정도를 선언한다.
- 기본값 : 0
- flex-grow를 선언하면 남은 공간을 형제 요소들이 나눠가진다.
- flex-wrap: wrap으로 선언하면 flex-grow를 했을 때 줄바꿈은 일어나지만, 줄이 바뀐 상태에서 남은 공간을 가진다.
- 음수값은 허용되지 않는다.
- flex-grow를 설정하기 전에 item 요소들의 크기가 다르면, flex-grow를 설정하고 나서도 item 요소들의 크기가 다르다.

```css
.container {
  display: flex;
  /* 줄바꿈이 일어나면서 줄바뀐 상태에서 공간을 할당한다. */
  flex-wrap: wrap;
}

.item {
  /* 남은 공간을 1씩 나눠가진다. */
  flex-grow: 1;
}
```

### flex-grow를 다르게 줬을 때

```css
.container {
  display: flex;
}

.item:nth-child(2) {
  flex-grow: 2;
}

.item:nth-child(3) {
  flex-grow: 1;
}
```

- flex-grow를 2, 1 로 다르게 설정해줬기 때문에 2:1 비율로 공간을 할당한다.

---

## 8. Item - flex-shrink

- flex-item 요소의 크기가 flex-container보다 클 때 사용한다.
- 기본값 : 1
  - 부모 요소가 display: flex; 설정을 가지고 있다면 기본적으로 자식요소는 1의 비율로 가지고 있다.
  - item요소가 화면에 크기에 맞게 작아지는 현상이 기본값 때문에 나타난다.
- 음수값은 허용되지 않는다.

```css
.container {
  display: flex;
}

.item:nth-child(1) {
  width: 200px;
  height: 50px;

  /* 화면에 크기에 요소가 작아지지 않고, 요소의 크기대로(200px) 표현된다. */
  flex-shrink: 0;
}

.item:nth-child(3) {
  /* 요소의 줄어드는 크기가 기본값(1)에 비해 2배로 줄어든다. */
  flex-shrink: 2;
}
```

- flex-grow와 원리는 동일하지만, 작동 방식은 정반대로 작동한다.

---

## 9. Item - flex-basis

- flex-item의 초기 크기를 지정한다.
- flex-basis를 지정하지 않으면 요소의 원래 크기값을 가지게 된다.

```css
.container {
  display: flex;
}

.item {
  flex-grow: 1;
  flex-basis: 0;
}
```

- item요소들이 각각 다른 크기를 가지고 있어도, flex-basis:0을 통해서 요소들이 가지고 있는 크기를 0으로 만들고 flex-grow: 1로 설정했기 때문에 동일하게 나머지 영역을 나눠 가질 수 있다.
- flex-basis를 0으로 작성하고 비율을 정하는 것을 많이 사용한다.

---

## 10. Item - flex (shorthand)

- flex-basis는 작성하지 않는다고 초기값(auto)가 되지 않는다.

### 값이 한 개일 때

- number를 지정하면 flex-grow
- lenth or percentage를 지정하면 flex-basis

### 값이 두 개일 때

- 첫 번째 값은 무조건 number이어야 한다. flex-grow
- 두 번째 값을 숫자를 쓰게 되면 flex-shrink
- 두 번째 값을 length, percentage 또는 auto를 지정하면 flex-basis

### 값이 세 개일때 순서

1. flex-grow number
2. flex-shrink number
3. flex-basis length, percentage

### 주의할 점

- 한 개 또는 두 개의 단위없는 숫자값을 입력하게 되면 flex-basis: 0으로 동작한다. (flex-basis의 기본값 : auto)

```css
.container {
  display: flex;
}

.item {
  /* flex-grow: 1, flex-shrink: 1; flex-basis: 0 */
  flex: 1;
}
```

### keyword

- initial === flex: 0 1 auto
- auto === flex: 1 1 auto
- none === flex: 0 0 auto

---

## 11. Container - justify-content

- 주축을 기준으로 item을 어떻게 정렬할 것인지에 대한 내용

```css
.container {
  flex-direction: row-reverse;

  justify-centent: flex-end;
}
```

- 주축 방향이 반대로 바뀐다.
- 주축이 바뀐 상태에서 주축이 끝나는 위치에서 정렬을 한다.

```css
.container {
  height: 500px;
  display: flex;

  /* 주 축이 시작되는 위치에서 정렬을 시작한다. */
  justify-content: flex-start;

  /* 주 축이 끝나는 위치에서 정렬을 시작한다. */
  justify-content: flex-end;

  /* 주 축을 기준으로 가운데 정렬을 한다. */
  justify-content: center;

  /* 요소 사이의 간격이 동일하게 나눠서 정렬한다. */
  /* flex-start와 flex-end에 여백없이 정렬한다. */
  justify-content: space-between;

  /* flex-start와 요소 사이, flex-end와 요소 사이의 간격이 요소 앞뒤로 들어간다.*/
  /* 앞, 뒤에도 간격이 존재한다. */
  justify-content: space-around;
}
```

---

## 12. Container - align-items

- 교차축에 대한 정렬을 정의한다.
- 기본값 : align-item: stretch
- item 요소가 height를 가지지 않으면 부모 요소의 height만큼 차지한다.
- 한 줄에 대한 교차축의 정렬을 정의한다.
- 내부 요소가 3줄로 나뉘게 되면 3개의 container로 나뉜 것처럼 align-items를 동작한다.

```css
.container {
  height: 500px;
  display: flex;

  /* 교차축의 길이(height)만큼 item 요소가 차지한다 (item 요소의 height가 없을 때) */
  align-items: stretch;

  /* 교차 축이 시작되는 위치에서 정렬을 시작한다. */
  align-items: flex-start;

  /* 교차 축이 끝나는 위치에서 정렬을 시작한다. */
  align-items: flex-end;

  /* 교차 축의 중심 위치에서 정렬을 시작한다. */
  align-items: center;
}
```

---

## 13. Container - align-content

- 여러 줄에 대한 교차축의 정렬을 정의한다.
- 기준 : flex-box의 교차축

```css
.container {
  height: 500px;
  display: flex;
  flex-wrap: wrap;

  /* 교차 축이 시작되는 위치에서 정렬을 시작한다. */
  align-content: flex-start;

  /* 교차 축이 끝나는 위치에서 정렬을 시작한다. */
  align-content: flex-end;

  /* 교처 축의 중심 위치에서 정렬을 시작한다. */
  align-content: center;

  /* flex-start와 flex-end에 여백 없이 요소 사이의 간격이 동일하게 나뉘어서 정렬한다. */
  align-content: space-between;

  /* flex-start와 flex-end의 여백이 요소 앞 뒤로 들어간다 (맨 앞, 맨 뒤에 간격이 존재한다) */
  align-content: space-around;
}
```

---

## 14. Item - align-self

- item에 사용하는 속성
- 특정 item 요소에 align 속성을 적용할 수 있다.

```css
.container {
  display: flex;
  flex-wrap: wrap;

  align-items: center;
}

.item:nth-child(4) {
  align-self: flex-start;
}
```
