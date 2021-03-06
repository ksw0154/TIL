# CSS [선택자(셀렉터)]

## 1. 선택자의 종류

- 요소 이름 뿐만 아니라 다양한 형태로 selector를 작성한다.
- `JavaScript`에서도 특정 요소를 선택할 때도 selector 개념을 사용한다.
- HTML 코드를 보면서 CSS를 작성하는 식으로 연습하면 좋다.

---

## 2. 주요 선택자 - `Type`, `Class`, `ID`

### `Type` Select (요소 선택자)

- 요소의 이름을 통해서 요소를 선택하는 것
- 요소의 이름을 명시해준다.
- 하나의 HTML의 있는 모든 `Type`에 적용
  - 특정 `Type`에 적용하기 위해서 `Type` selector를 사용하면 안된다.
  - 일관적인 적용을 할 때 사용한다.

```css
h2 {
  color: purple;
}
```

### `ID` Selector

- 전역속성 중 `ID` 속성을 사용한다.
- 유니크한 이름을 사용해야 한다.
  - `ID`의 값은 중복되서는 안된다.

```css
#welcome-title {
  color: red;
}
```

```html
<h1 id="welcome-title">Welcome!</h1>
```

### `Class` Selector

- 중복이 가능하다.
- spacing을 사용하면 두 개 이상의 `class` 명을 가질 수 있다.

```css
.movie {
  color: blue;
}

.japan {
  color: red;
}
```

```html
<p class="movie">토이스토리</p>
<p class="movie">주토피아</p>
<p class="movie japan">센과 치히로의 행방불명</p>
```

> 동일한 `class` 이름을 가진 요소들의 글씨 색상은 blue가 된다.  
> 동일한 요소에 두 개의 스타일링이 적용되면 캐스캐이딩 원칙의 의해서 마지막에 적용된 스타일링을 따라간다.  
> `movie`와 `japan`을 둘 다 가진 `p` 요소는 글씨 색상이 red가 된다.

---

## 3. 속성 선택자 - `[attr]`, `[attr=value]`

- 특정한 속성을 가진 요소만 선택하고 싶을 때 사용한다.

### `[attr]`

```css
a[target] {
  color: red;
}
```

```html
<a href="http://example.com" target="_blink" />
<a href="http://example.org" target="_blink" />

<a href="http://example.com" />
<a href="https://example.org" />
```

> target 속성을 가진 요소만 글씨 색상이 red로 바뀐다.

### `[attr=value]`

- 특정한 속성을 가지고 해당 속성의 값이 같은 요소를 선택하고 싶을 떄 사용한다.
- 특정한 요소에서 다른 속성을 가진 요소들의 스타일링을 할 때 용이하다.
- 해당 속성의 값이 정확하게 일치해야 한다.

> 특정한 속성의 값이 같은 요소를 선택할 때

```css
a[href="https://example.org"]
{
  color: blue;
}
```

> 특정한 요소에서 다른 속성을 가진 요소들의 스타일링

```css
input[type="submit"] {
  color: red;
}

input[type="reset"] {
  color: black;
}
```

---

## 4. 속성 선택자 - `[attr^]`, `[attr$]`, `[attr*]`

- 부분적이 문자열이 일치하더라도 선택을 할 수 있다.

### `[attr^]` (캐럿)

- 캐럿 뒤에 있는 value으로 시작되는 요소를 선택

```css
a[href^="http://"]
{
  color: blue;
}
```

> `a` 요소의 `href` 속성의 값중에 'http://'로 시작되는 요소의 스타일링을 변경하는 것이다.

### `[attr$]`

- 달러 뒤에 있는 value로 끝나는 요소를 선택

```css
a[href$=".com"] {
  color: white;
}
```

> `a` 요소의 `href` 속성의 값중에 '.com'으로 끝나는 요소의 스타일링을 변경하는 것

### `[attr*]`

- 속성 안에 value라는 문자열이 적어도 하나 이상 존재한다면 이 요소를 선택한다.

```css
a[href*="example"] {
  color: green;
}
```

> `href` 속성의 값중에 "example"이라는 값이 있는 요소를 스타일링 하는 것

---

## 5. 가상클래스 선택자 (Pseudo-Class Selector) - `first-child`, `last-child`, `nth-child`

- select 뒤에 :을 입력하고 조건을 작성한다.

```css
selector: ___ {

}
```

### `first-child`

```css
li:first-child {
  color: green;
}
```

```css
.movie:first-child {
  font-size: 42px;
}
```

> `li` 요소를 먼저 찾은 후 요소들의 형제 중에서 첫 번째 자식 요소  
> 요소만 사용하는 것이 아니라 `class`, `id`도 가능하다.

#### 특정 상황

```css
.movie:first-child {
  font-size: 32px;
}
```

```html
<ul>
  <li>Toy Story</li>
  <li class="movie">Zootopia</li>
  <li class="movie">Inside Oup</li>
  <li class="movie">Coco</li>
</ul>
```

- `class selector`를 이용하는 경우 무조건 `class selector`에 선택된 요소 중에서 첫 번째 요소가 스타일이 적용되는 것이 아니다.
  - Zootopia는 `font-size`가 변경되지 않는다.
  - `font-size`의 영향을 받는 요소가 아무도 없다.

> `class selector`의 선택된 요소들은 `li` 요소이지만, 해당 요소의 부모 요소는 `ul` 요소이고 `ul` 요소의 첫 번째 자식 요소는 Toy Story이다.

### `last-child`

- 사용 방식은 `first-child`와 동일하다.
- 해당 요소들의 형제 중에서 마지막 자식 요소를 선택한다.

```css
span:last-child {
  color: black;
}
```

### `nth-child`

- n 번째 자식 요소를 선택한다.

```css
li:nth-child(3) {
  color: white;
}
```

> 3 번째 자식요소가 선택되어서 스타일링이 된다.

```css
li:nth-child(2n) {
  color: green;
}
```

> 자연수만 들어가는 것이 아니라 특정 매개변수를 이용해서 사용할 수 있다.  
> `odd` : 홀수, `even` : 짝수와 같은 값도 들어갈 수 있다.

---

## 6. 가상클래스 선택자 - `first-of-type`, `last-of-type`, `nth-of-child`

```html
<section>
  <div>Toy Story</div>
  <p>Zootopia</p>
  <p>Inside Out</p>
  <div>Coco</div>
  <p>Finding Nemo</p>
</section>
```

```css
p:first-child {
  color: red;
}
```

> 위와 같이 `first-child`를 사용하게 되면 `p`의 부모 요소인 `section`요소의 첫 번째 자식 요소는 `div` 요소가 된다.  
> 그렇기 때문에 CSS에 해당하는 요소는 존재하지 않는다.

### `first-of-type`

- 위의 `first-child`를 보완할 수 있다.
- type(해당 요소)들 중에서 첫 번째 요소
- 특정 type들만 모아서 첫 번째 요소를 찾는다.
- 대부분의 경우에는 `first-child`보다는 `first-of-type`을 쓰는게 오류를 줄일 수 있다.

```css
p:first-of-type {
  color: red;
}
```

#### 특정상황

```html
<section>
  <div class="movie">Toy Story</div>
  <p class="movie">Zootopia</p>
  <p class="movie">Inside Out</p>
  <div class="movie">Coco</div>
  <p class="movie">Finding Nemo</p>
</section>
```

```css
.movie:first-of-type {
  color: red;
}
```

- 위와 같은 상황이라면 Toy Story와 Zootopia 두 요소가 모두 color가 red로 바뀐다.
- `first-of-type`은 type들 중에서 첫 번째 요소
- 위의 코드의 경우에는 `div`, `p` 둘 다 첫 번째 요소를 가져온다.
- `first-child`의 경우에는 Toy Story만 color가 red로 바뀐다.

### `last-of-type`

- `first-of-type`과 동일하게 사용이 가능하다.
- type들 중에서 마지막 요소
- 위의 특정상황도 동일하게 작동한다.

### nth-of-type

```css
p:nth-of-type() {
  color: green;
}
```

---

## 7. 가상클래스 선택자 - `not`

```css
selector:not(selctor) {
}
```

- 부정 가상클래스 선택자

```html
<form action="">
  <input type="text" placeholder="name" />
  <input type="email" />
  <input type="password" name="" id="" />
  <input type="submit" value="" />
</form>
```

```css
input:not([type="submit"]) {
  background-color: green;
}
```

- `input` 요소에서 type이 `submit`이 아닌 `input` 요소에만 background-color가 적용된다.

```css
input:not([placeholder]) {
  background-color: blue;
}
```

- `input` 요소에서 `placeholder`가 있는 `input` 요소에만 background-color가 적용된다.

---

## 8. 가상클래스 선택자 - `link`, `visited`

- 동적 가상클래스 선택자
- 사용자의 동작에 따라서 요소의 스타일링을 변경하는 것
- 하이퍼링크에 적용할 수 있는 선택자

### `link`

- link가 있는 웹 사이트에 한 번도 방문하지 않았을 경우

### `visited`

- 한 번이라도 방문한 적이 있을 때

### 기준

- 크롬 브라우저의 경우는 방문기록을 통해서 `link`, `visited`를 구분하게 된다.

```css
a:link {
  color: green;
}

a:visited {
  color: tomato;
}
```

---

## 9. 가상클래스 선택자 - `hover`, `active`, `focus`

- 동적 가상클래스 선택자
- 사용자가 마우스를 올리거나, 클릭을 하는 동작을 할 때 요소의 상태가 바뀐다.
- 상태에 따라서 스타일링을 변경할 수 있다.

### `hover`

- 마우스를 올렸을 때 동작하는 선택자

```css
input[type="button"]:hover {
  background-color: skyblue;
  color: white;
}
```

### `active`

- 마우스를 클릭하고 떼기 전 까지의 상태를 표현하는 선택자
- `mousedown event`가 발생하고 있을 때

```css
input[type="button"]:active {
  background-color: red;
}
```

#### 동적 가상클래스 선택자를 사용할 때 주의사항

- `active` 선택자를 제일 먼저 사용하게 된 경우 `link`, `hover`, `visited` 선택자가 작동하지 않음
- LVHA 순서로 작성한다
  - `link`, `visited`, `hover`, `active`

### `focus`

- Tab키를 누르게 되면 키보드를 사용해서 요소를 이동할 수 있다.
- 요소가 focusing 됐을 때 사용한다.
- `input` 요소의 `type`을 `text`로 지정했을 때
  - 글자를 입력하기 위해서 클릭을 하게 되면 `input` 요소가 focusing이 된 것이다.
- 마우스를 다른 곳에 클릭하게 되면 focusing이 해제된다.

```css
input[type="button"]:focus {
  background-color: blue;
}
```

---

## 10. 가상클래스 선택자 - `enabled`, `disabled`, `checked`

### `enabled`

- disabled 가 아닐 때 == default 값
- disabled 선택자가 없는 요소에 스타일링을 적용하고 싶을 때

```css
input[type="text"]:enabled {
  background-color: yellow;
}
```

### `disabled`

- boolean 속성
- 해당 선택자가 있으면 선택을 할 수 없다.

```css
input[type="text"]:disabled {
  background-color: green;
}
```

### `checked`

- boolean 속성
- check가 되어있는 요소에 스타일링을 할 수 있다.
- 대표적으로 radio button, checkbox에 사용 가능하다.

```css
input[type="radio"]:checked {
  outline: 3px solid red;
}
```

---

## 11. 가상요소 선택자 - `before`, `after`

- CSS3부터 가상선택자와 가상요소 선택자를 구분하기 위해서 가상요소 선택자는 콜론을 2개 사용하는 것을 권고한다.

- 가상클래스 선택자 : 상태에 따라서(첫 번재 자식, 방문했던 링크) 존재하지 않는 상태에 스타일링을 할 수 있다.
- 가상요소 선택자 : CSS로 실제로 존재하지 않는 요소를 만들어서 스타일링을 할 수 있다.
  - 꾸밈의 요소로 컨텐츠를 넣을 때 사용된다.
  - 드래그했을 때 선택이 되지 않는다.

### `before`

- 꾸밈의 요소로 컨텐츠를 요소의 value 앞에 넣을 때 사용

```html
<div class="movie">Toy Story</div>
<div class="movie favorite">Coco</div>
<div class="movie">Car</div>
<div class="movie favorite">Inside Out</div>
<div class="movie">X-man</div>
```

```css
.favorite::before {
  content: "🌊";
}
```

-

### `after`

- 꾸밈의 요소로 컨텐츠를 요소의 value 뒤에 넣을 때 사용

```css
.favorite::after {
  content: "🌊";
}
```

---

## 12. 가상요소 선택자 - `first-letter`, `first-line`, `selection`

### `first-letter`

- 첫 번째 글자에 스타일링을 할 수 있다.
- 가상요소 선택자 `before`를 사용하게 되면 `before` 선택자의 content에 `first-letter` 선택자가 적용된다.

```html
<p class="lorem">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam blanditiis
  cumque eum excepturi asperiores quo omnis, repellendus nam eveniet iste
  ducimus ullam aliquam autem quam. Eos soluta maxime odio nulla.
</p>
```

```css
.lorem::first-letter {
  color: red;
}

.lorem::before {
  content: "BEFORE";
}
```

> `<p>` 요소 안의 Lorem의 'L'의 color가 변하는 것이 아니라 content의 'B'의 color가 red로 바뀐다.

### `first-line`

- 첫 번째 줄에 스타일링이 적용된다.
- 첫 번째 줄은 브라우저의 크기에 따라 달라질 수 있다.

```css
.lorem::first-line {
  color: indianred;
}
```

### `selection`

- 선택 영역에 대한 스타일링
- 드래그 된 영역에 스타일링을 적용할 수 있다.

```css
.lorem::selection {
  background-color: beige;
  color: darkgreen;
}
```

---

## 13. 선택자 결합 - 하위, 자식

- 선택자 결합을 함으로써 범위를 좁혀서 요소를 선택할 수 있다.

### 하위 선택자

- Spacing을 사용해서 구분한다.
- `Class`, `ID` Selector 사용 가능하다.

```css
selector selector {
  content
}
```

```html
<ul>
  <li>리스트1</li>
  <ol>
    <li>리스트1</li>
    <li>리스트2</li>
  </ol>
  <li>리스트2</li>
  <li>리스트3</li>
  <li>리스트4</li>
</ul>
```

```css
ul li:last-child {
  color: red;
}

.movie li:last-of-type {
  color: darkgreen;
}
```

> `ul` 요소안에서 `li`의 모든 `last-child`는 color가 red로 적용된다.  
> 하위의 자식 요소까지 모두 포함하여 `last-child`를 찾게 된다.

### 자식 선택자

- 부등호(닫는 꺽새)를 사용해서 구분한다.
- 바로 아래 자식들만 탐색할 수 있다.
- 자식 요소의 자식요소까지 탐색하지 않는 것이 하위 선택자와의 차이점.

```css
ul > li:last-child {
  color: red;
}
```

---

## 14. 형제 선택자, 그룹화

### 일반 형제 선택자 결합

- `~` 기호를 사용해서 결합한다.
- 같은 level의 요소이어야 한다. (같은 부모 요소를 가지고 있어야 한다.)
- 앞의 selector의 뒤에 있는 selector들만 탐색이 가능하다.

```html
<div>
  <p>Coco</p>
  <div>Coco</div>
  <span class="content">Coco</span>
  <div class="content">Coco</div>
  <div>Coco</div>
  <p>Coco</p>
</div>
```

```css
p ~ p {
  color: red;
}
```

> `p ~ p` 같은 경우 맨 앞에 있는 `p` 요소는 color가 변경되지 않는다. (본인은 포함하지 않는다)

```css
p ~ div {
  color: blue;
}

p ~ .green {
  color: green;
}
```

### 인접 형제 선택자 결합

- `+` 기호를 사용해서 결합한다.
- selector1 + selector2
  - selector1의 바로 뒤에 selector2가 있을 때 적용된다.

```html
<div>
  <p>Coco</p>
  <div>Coco</div>
  <span class="green">Coco</span>
  <div>Coco</div>
  <div class="green">Coco</div>
  <p>Coco</p>
</div>
```

```css
div + p {
  background-color: antiquewhite;
}
```

> `div` 요소 뒤에 `p` 요소가 있을 때 `background-color`를 변경한다.

```css
.green + div {
  background-color: green;
}
```

> `Class selector` 뒤에 `div` 요소가 있을 때 `div` 요소의 `background-color`를 변경한다.

### 그룹화

- selector가 여러개이지만 동일한 스타일링을 하고 싶을 때 사용한다.
- 콤마(,)를 사용해서 구분할 수 있다.

```css
p,
span,
div {
  color: green;
}
```

---

## 15. 범용 선택자(\_)

- 전체 선택자(Universal Selector)
- `html`의 모든 요소들이 선택이 된다.
- 맨 위에 작성하는 것이 좋다.
  - 왜 이 스타일링이 적용됐는지 찾기가 수월하다.

```css
* {
  color: blue;
}

(*).red {
  color: red;
}

p + * {
  color: green;
}
```

- 기존에 `class selector`, `ID selector`의 경우에는 앞에 전체 선택자가 생략된 것이다.

---

## 16. 상속 제어하기 - `initial`

- 상속 : 부모로부터 어떠한 값을 전달받는 것이다.
- 자식 요소가 해당 속성을 가지고 있지 않을 때, 부모 요소가 해당 속성의 값이 있으면 자식 요소에게도 해당 속성이 적용된다.
- 상속이 되지 않는 속성들이 있다.

```html
<div class="parent">
  parent
  <div class="child1">child1</div>
  <div class="child2">child2</div>
</div>
```

```css
.parent {
  color: blue;
  font-size: 7px;
}

.child2 {
  color: red;
}
```

- 자식 요소가 부모 요소보다 속성의 값을 먼저 지정했어도 적용이 된다.
  - `.child2`의 `color`는 red로 유지된다.

#### 자식 요소에 상속된 모든 속성을 기본값으로 돌리고 싶다면

```css
.child2 {
  all: initial;
}
```

- 모든 속성을 초기화한다.
- 부모 요소에서 상속된 것 뿐만 아니라 요소(ex.div)에 별도로 적용된 속성까지도 초기화한다.

#### 개발자 도구

- 크롬 개발자도구에서 상속된(inherited) 속성들을 볼 수 있다.
- 해당 요소에 대한 모든 정보를 styles에서 확인할 수 있다.

---

## 17. 상속 제어하기 - `inherit`, `unset`

### `inherit`

- initial과 정반대로 적용된다.
- 모든 상속을 받는다.

```css
.parent {
  color: blue;
}

.child1 {
  color: red;
}

.parent * {
  all: inherit;
}
```

- .parent의 모든 자식 요소들은 모든 속성(all)을 상속받는다.

### `unset`

1. 부모로부터 상속받을 값이 존재할 때 : `inherit`
2. 부모로부터 상속받을 값이 존재하지 않을 때 : `initial`

- 다양한 속성이 적용됐을 때, 부모 요소의 속성만 상속받고 나머지는 재정의하고 싶을 때 사용한다.

```css
.parent {
  color: blue;
}

.parent .child {
  all: unset;
}
```

- 부모 요소로 상속받을 값을 제외하고는 모든 속성을 `initial` 한다.

---

## 18. 우선순위

1. 선언된 곳
2. 명시도 (적용범위가 적을수록 명시도가 높은 것)

- !important : 명시도가 제일 높다.
- `inline Style` &gt; `ID Selector` &gt; `Class` / `Attribute` / `Pseudo Selector` &gt; `Type(tag) Selector` &gt; `*` &gt; `inherited`

> `p` 요소에 속성을 작성한 것보다 `Class Selector`, `ID Selector`를 통해서 속성을 작성한 것이 명시도가 높다.

```html
<div id="box" class="class-box" style="color: green">Box</div>
```

```css
#box {
  color: blue;
}

.class-box {
  color: red;
}

div {
  color: purple !important;
}
```

3. 코드 위치

> 뒤 쪽에 선언된 코드가 적용된다. (브라우저가 코드를 위에서부터 읽기 때문이다.)
