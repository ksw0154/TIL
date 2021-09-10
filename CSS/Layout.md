# CSS [레이아웃]

## 1. `display` - `inline`, `block`, `inline-block`

- `display`를 이용해서 `inline`을 `block`으로, `block`을 `inline`으로 변경할 수 있다.
- `inline-block` 요소를 통해서 `inline`, `block`의 특징을 다 가지고 올 수 있다.

### `inline` 요소

- 영역의 크기가 내부 콘텐츠 크기를 정해진다.
- `margin`, `padding`의 `top`, `bottom`을 지정할 수 없다.
- 여러 요소가 가로 배치가 된다.

### `block` 요소

- 영역의 크기를 `width`, `height`로 지정할 수 있다.
- `width`를 지정하지 않으면 가로 전체를 차지한다.
- 여러 요소가 세로 배치가 된다.

### inline-block

- ex. `input` 요소
- 영역의 크기를 `width`, `height`로 지정할 수 있다.
- 여러 요소가 가로 배치가 된다.
- `margin`, `padding`의 `top`, `bottom`을 지정할 수 있다.

```css
span {
  display: inline-block;
  width: 30px;
  height: 40px;

  background-color: green;
}
```

> `inline` 요소인 `span` 요소에 `display`를 `inline-block`으로 지정하게 되면 `width`, `height`를 지정할 수 있다.

---

## 2. 요소를 없애는 방법 - `display none`, `visibility hidden`

### `display: none`

- 코드 상으로는 존재하지만 layout에서 표시하지 않는다.
- 요소 내부의 content가 보이지 않을 뿐더러 요소의 자리 또한 차지하지 않는다.

```css
.box {
  display: none;
}
```

### `visibility: hidden`

- layout은 표시가 되고 해당 요소의 content는 보이지 않는다.
- 자리 차지는 하지만 요소 내부의 content가 보이지 않는다.

```css
.box {
  visibility: hidden;
}
```

---

## 3. `float`

- 텍스트 및 `inline` 요소가 그 주위를 감싸는 배치를 할 수 있는 속성
- 요소가 보통 흐름(normal flow)으로부터 빠져나온다.

  - 기존의 `block`, `inline`의 계산방법을 무시한다.
  - 별도의 배치효과를 가지게 된다.

- `float` 속성을 지정한 요소는 기존의 `inline` 요소 위에 떠있는 것처럼 인식하게 된다.

```html
<div class="image"></div>
<p>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis quod
  aspernatur minus laborum nostrum suscipit ex sint veniam, illum soluta maiores
  neque repellendus explicabo in modi magni doloremque? Veritatis, dolorum!
</p>
```

```css
.image {
  width: 100px;
  height: 100px;

  background-color: blanchedalmond;
  margin: 10px;
  float: left;
}
```

- `p` 요소를 개발자도구로 확인하면 사각형의 모습을 볼 수 있다.
- .image 요소가 `p` 요소 위에 떠있는 것처럼 인식되어서 페이지에 표시된다.

---

## 4. position과 Normal Flow

### Normal Flow

- 요소의 레이아웃을 변경하지 않았을 때 웹페이지 요소가 자기 자신을 배치하는 방법
- 기본적으로 적용되는 요소의 block, inline 특징
  - ex. span 요소는 inline 요소로 콘텐츠의 크기가 width이다.

### position - `static`

- 일반적인 Normal Flow를 따라간다.
- top, bottom, left, right 속성을 사용할 수 없다.

---

## 5. position - `relative`

- 일반적인 Normal Flow를 따라간다.
- 자기 자신을 기준으로 `top`, `right`, `bottom`, `left`의 값에 따라 오프셋을 적용한다.
- 입력한 값만큼 원래 위치에서 이동한다.
- `top` - `bottom`, `left` - `right`를 동시에 사용하게 되면 `top`, `left`를 우선시하게 된다.

```css
.image {
  position: relative;

  top: 100px;
  left: 50px;
}
```

- 자기 자신의 원래 위치를 기준으로 위에서 `100px` 만큼 아래로 이동한다.
- 자기 자신의 원래 위치를 기준으로 왼쪽에서 `50px` 만큼 오른쪽으로 이동한다.
- 입력한 위치(`top`, `bottom`, `left`, `right`)에서 값만큼 공백을 준다라고 생각하면 편할 것 같다.

---

## 6. position - `absolute`

- Normal Flow를 따라가지 않는다.
- 레이아웃에 공간도 배정하지 않는다. (공중에 붕 뜬다.)
- 가장 가까운 위치 지정 조상 요소에 대해 상대적으로 배치한다.
  - 조상 중 `position`의 속성 값이 `static`이 아닌 요소가 없다면 `초기 컨테이닝 블록(body)`을 기준으로 삼는다.
  - 부모 요소를 타고 올라가는 형태

```html
<div></div>
<div class="parent">
  <div class="box"></div>
</div>
```

```css
div {
  width: 100px;
  height: 100px;
}

.parent {
  position: relative;
}

.box {
  position: absolute;

  top: 100px;
  left: 20px;
}
```

- 만약 `.parent` 요소의 `position`이 `static`이라면 `.box` 요소는 `body`를 기준으로 `top`에서 `100px`, `left`에서 `20px` 이동하게 된다.
  - `position`이 `absolute` 인 요소는 위치 기준을 잡기 위해서 조상 요소를 탐색한다.
  - 위치 기준이 되는 요소는 `position` 속성의 값이 `static`이 아닌 요소이다.
  - `position` 속성의 값이 `static`이 아닌 요소가 없다면 `초기 컨테이닝 블록(body)` 요소를 위치 기준으로 잡는다.

---

## 7. position - `fixed`

- Normal Flow를 따라가지 않는다.
- 레이아웃에 공간도 배정하지 않는다. (공중에 붕 뜬다.)
- 기준점 : 뷰포트의 초기 컨테이닝 블록을 기준으로 삼는다.
- 스크롤을 해서 내려도 뷰포트는 바뀌지 않기 때문에 위치가 변하지 않는다. (ex. 웹페이지 리모콘)

```css
.box {
  position: fixed;

  right: 40px;
  botton: 40px;
}
```

---

## 8. position - `sticky`

- Normal Flow를 따라간다.
- 가장 가까운, 스크로 되는 조상과 표 관련 요소를 포함한 컨테이닝 블록(가장 가까운 블록 레벨 조상)을 기준으로 오프셋을 적용한다.
- 특정 위치를 지나간 이후에는 `fixed` 속성처럼 동작하고 싶을 때 사용한다.
- `sticky`를 적용하려면 스크롤 하는 대상의 자식 요소이어야 한다.

```css
.box {
  position: sticky;

  top: 100px;
  left: 100px;
}
```

---

## 9. `overflow`

- content 영역이 요소보다 클 때 처리하는 방법

### `visible`

- 요소보다 큰 부분이 그대로 보인다.

### `hidden`

- 요소보다 큰 부분은 보이지 않는다.

### `scroll`

- 요소에 `scroll` 기능을 넣어줄 수 잇다.

### `auto`

- 브라우저가 적용한 요소의 값을 적용한다.

```css
.box {
  overflow: scroll;
}
```

---

## 10. `z-index`

- z축의 순서에 관한 내용
- 요소의 값은 정수값을 넣을 수 있다.
- default value : `auto`
- 코드 순서대로 요소가 앞, 뒤로 쌓인다.
  - 하지만 요소의 `z-index`는 모두 `auto(0)` 값을 가지게 된다.
- `position`이 `static`인 요소보다 `static`이 아닌 요소가 더 위에 올라오게 된다.

```css
.box {
  z-index: 999;
  z-index: 1;
  z-index: -1;
}
```

- 기본적으로 요소들은 `z-index` 값을 `auto(0)`을 가지고 있다.
- 해당 요소만 밑으로 내리기 위해서는 `-1`을 입력해주면 된다.
- 어떤 요소들보다 위에 있어야 한다면 `z-index`의 값을 꼭 999가 아니라 큰 값을 입력해서 제일 앞에 위치할 수 있도록 적용하면 된다.
