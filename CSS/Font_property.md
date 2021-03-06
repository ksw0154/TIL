# CSS [폰트 관련 속성]

## 1. `font-size`, `font-style`, `font-weight`

### `font-size`

- 글자의 크기를 변경할 떄 사용한다.
- 단위나 키워드로 사용한다.
- 브라우저의 대부분의 폰트 기본 크기는 16px이다.
- 대부분은 `length value`를 이용해서 표현한다.
  - ex. 12px, 2rem

```css
.text {
  font-size: 24px;
}
```

### `font-style`

- `italic`, `oblique`
  - 두 속성 다 동일하게 기울임꼴로 보여지게 된다.
- default value는 normal이다.
  - 부모 요소에게 상속 받은 것을 초기화하고 싶을 떄 사용
- `font-style`은 대부분 `italic`체를 만들기 위해 사용한다.

```css
.text {
  font-style: italic;
}
```

### `font-weight`

- 100 단위 숫자를 많이 사용한다.
- 폰트의 굵기를 명시한다.
- 기본값은 normal(400)이다.
- bold는 700이다. (키워드와 숫자 둘 다 사용 가능)
- 폰트에 따라서 `font-weight`를 지원하는 범위가 다를 수 있다.

```css
.text {
  font-weight: 400;
}
```

---

## 2. `font-family`

- 글꼴을 설정할 수 있다.
- 사용자의 디바이스에 설치되어 있는 글꼴로 사용 가능하다.
  - 여러 개의 font 이름을 콤마(,)를 이용해서 나열할 수 있다.
- 여러 개의 font를 나열하면 먼저 나열한 font부터 사용자가 가지고 있는지 확인한다.
- font에 `spacing`이 있으면 따옴표로 묶어준다.

```css
.text {
  font-family: "Gill  Sans", sans-serif;
}
```

`sans-serif`, `serif`

- generic font family
  - 브라우저가 대체할 수 있는 폰트가 필요한 경우 선택할 수 있게 한다.

---

## 3. `line-height`

- 행간(줄)의 높이를 조절하는 속성
- `line-height` : font size + 약간의 위 아래의 여백
- font-size가 동일해도 `line-height`가 다를 수 있다.

  - font-family에 따라서 `line-height`가 다를 수 있다.

- `line-height`를 지정해주면 글꼴과 상관없이 동일한 높이를 적용시킬 수 있다.
  - 숫자, 픽셀, 단위 표현 다 가능하다.

```css
p {
  font-size: 24px;
  line-height: 2;
}
```

---

## 4. `font`와 단축속성(shorthand)

- shorthand
- 여러가지 property를 한 줄로 묶어서 표현하는 것

### `font`

- 총 6가지 속성을 한 줄로 나열할 수 있다.
- 필수속성 : `font-size`, `font-family`
- 선택속성 : `font-style`, `font-variant`, `font-weight`, `line-height`

  - 안쓰게 되면 초깃값(default value)을 사용하게 됨

- `font-variant` : 거의 사용하지 않는 특성
  - 굉장히 작은 소문자를 작은 대문자로 바꾸는 것

```css
.text {
  font: 20px "Gill  Sans", sans-serif;

  font-size: 20px;
  font-family: "Gill  Sans", sans-serif;
  font-variant: small-caps slashed-zero;
}
```

> 위의 `font`는 shorthand로 한 줄에 `font-size`와 `font-family`를 나열한 것이다.
> 구분은 spacing으로 할 수 있다.

- `font-style`, `font-weight`는 `font-size`보다 앞에 작성되어야 한다.
- `line-height`는 `font-size`보다 무조건 뒤에 /를 입력한 뒤 숫자로 작성한다.
- `font-family`는 무조건 맨 뒤에 작성한다

작성 순서

- `font-style`, `font-weight`, `font-size`, `line-height`, `font-family` 순

```css
.text {
font-style : italic
font : (italic) 100 24px /30% "Gill Sans", sans-serif
}
```

> 만약 위에 `font-style`을 `italic`으로 작성했기 때문에 아래 font에서 `font-style`을 작성하지 않는다면, `font-style`은 초기값으로 돌아간다.(`italic`이 적용되지 않는다.)  
> 공백으로 뒀을 때 초기값으로 돌아가기 때문에

---

## 5. `letter-spacing`, `word-spacing`

- 기본값은 normal
  - 글꼴마다 기본값은 다른 값을 가지고 있음
  - 기본값 : 가장 최적의 가독성이 좋은 상태
  - 될 수 있으면 이 값은 조절하지 않는 것이 좋다.

### `letter-spacing`

- 글자 사이의 간격을 조정할 수 있다.
- 음수를 적용할 수 있다.
- rem, em 단위도 사용 가능하다.

```css
.text {
  letter-spacing: 5px;
}
```

> 기존 글꼴에 적용된 `letter-spacing`에 5px만큼의 간격 차이를 더한다.

### `word-spacing`

- 단어 사이의 간격을 조정할 수 있다.
- 음수를 적용할 수 있다.
- rem, em 단위도 사용 가능하다.
- 기본값에 대한 %값도 사용이 가능하다.

```css
.text {
  word-spacing: 10px;
}
```

> 기존 글꼴에 적용된 `word-spacing`에 10px만큼의 간격 차이를 더한다.

---

## 6. `text-align`

- text를 정렬하는 방법을 명시하는 속성

```css
.text {
  text-align: center;
  text-align: right;
  text-align: left;
}
```

#### `text-align`이 적용되려면 block 요소만 사용 가능하다.

- 늘어난 가로 길이에서 정렬을 하게 된다.
- `inline` 요소는 좌우의 여백이 없기 때문에 정렬을 할 수 없다.

#### `inline` 요소에 `text-align`을 적용하고 싶다면 부모요소를 block 요소로 둔다.

- 부모요소에 `text-align`을 적용하면 `inline` 요소에도 `text-align`이 적용 된다.

```html
<div class="container">
  <p class="block">block 요소</p>

  <span class="inline">inline 요소</span>
</div>
```

```css
.container {
  text-align: center;
}
```

> 위의 경우는 .container로 인해서 `span` 요소가 `text-align` 속성이 적용될 수 있다.
> inline 요소에 `text-align` 속성을 직접적으로 적용할 수 없다.

---

## 7. `text-indent`

- 들여쓰기에 관련된 속성
- 기본값은 0으로 들여쓰기를 하지 않은 상태
- 음수도 사용할 수 있다.
- 상속이 가능하다. (부모 요소에 적용하면 자식요소에도 그대로 적용된다)
- `block` 요소에만 사용 가능하다.

```html
<div class="container">
  <p class="paragraph1">paragraph1</p>
  <p class="paragraph2">paragraph2</p>
  <span class="inline">inline-span</span>
</div>
```

```css
.paragraph1 {
  text-indent: 20px;
}

.container {
  text-indent: 50%;
}

.inline {
  text-indent: 30px;
}
```

---

## 8. `text-decoration`

- 단축속성 (shorthand)
- property를 따로 사용하는 것보다 shorthand 사용 비율이 높다.
- 4가지 property를 1개로 합친 경우

### `text-decoration-line`

- `underline` : 밑줄
- `overline` : 위에 줄이 적용된다.
- `line-through` : 중간에 취소선으로 적용된다.
- default value : `none`

```css
p {
  text-decoration: underline;
  text-decoration: overline;
  text-decoration-style: dotted;

  text-decoration: underline overline blue 3px double;
  color: red;
}
```

- `text-decoration-style` 속성을 따로 사용해도 된다.
- `color` 속성만 입력해주면 문자열과 `text-decoration`까지 `color`가 적용된다.
- `text-decoration` 안에 `color` 속성을 입력해주면 `text-decoration`의 `color`가 별도로 적용된다.
- 별도의 순서는 없으나 line과 관련된 속성을 붙여서 사용해야 한다.
  - 인접해있지 않으면 line 속성이 모두 적용되지 않는다.

### `text-decoration-style`

- `text-decoration-line`을 꾸며주는 style
- default value : `solid` (실선을 의미)
- `double` : 실선 2개
- `dotted` : 점선
- `dashed` : 조금 더 긴 점선
- `wave` : 물결 표시

---

## 9. `word-break`

- 언어마다 동작하는게 조금씩 다르다.
- default value : normal
- `break-all` : overflow를 방지하기 위해서 어떠한 두 문자 사이에서도 줄 바꿈이 발생할 수 있음 (한,중,일 텍스트 제외)
- `keep-all` : 한중일 텍스트에서는 줄을 바꿀 때 단어를 끊지 않는다.
  - 한중일 텍스트가 아닐 때 normal과 동일하다.

```html
<p class="eng">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
<p class="kor">가나다라마바사아자차카파하</p>
```

```css
p {
  width: 100px;
}

.eng {
  word-break: normal;
}

.kor {
  word-break: keep-all;
}
```

#### `.eng`

- 기본적으로 줄바꿈이 되지 않는다.
- `break-all`을 사용해야 줄바꿈이 가능하다.

#### `.kor`

- 기본적으로 줄바꿈을 제공한다.
- 줄바꿈이 되지 않기 위해서 `keep-all`을 사용한다.
- `keep-all` 속성을 사용하고 spacing이 있으면 spacing 기준으로 줄바꿈이 된다.

---

## 10. `text-transform`

- 사용할 수 있는 언어가 한정적이다.
  - 한글에는 적용할 수 없는 속성이다.
- 영어나 일본어, 독일어, 터키어 등에 사용할 수 있다.
- default value : none

### 대표적인 `text-transform` 속성

```css
p {
  text-transform: uppercase;
  text-transform: lowercase;
  text-transform: capitalize;
}
```

#### `uppercase`

- 모든 문자가 대문자로 변경된다.

#### `lowercase`

- 모든 문자가 소문자로 변경된다.

#### `capitalize`

- 문자열의 첫 번째 문자만 대문자로 변경된다.

> 개발자 도구를 사용해서 `p` 요소를 확인해서 보면 기존에 작성한 모습대로 나와있다.(데이터가 변경되지 않는다.)  
> 사용자가 페이지를 확인할 때만 CSS 처리가 되어서 보여진다.
