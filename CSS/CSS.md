# CSS [개요]

## 1. `CSS` 소개

### `CSS` : Cascading Style Sheets

- `CSS` 모듈들은 각자의 버전이 따로따로 업데이트 되고 있다.
- `CSS` 3버전이어도 모듈들은 각자의 버저닝을 가지고 있다.
- 웹 브라우저마다 버전의 지원 범위가 모듈 별로 다를 수 있다.
- 새로운 속성을 알았다면 MDN과 같은 사이트에서 웹 브라우저가 지원하는 범위를 확인해야한다.

### `Cascading`

- 폭포처럼 흐른다.
- 위에서 아래로 흐르는 의미를 가진다.
- 여러 개의 스타일이 하나의 요소에 들어있을 수 있다.
- 위에서 정의한 스타일이 아래의 요소들에도 전파가 된다.

---

## 2. CSS는 어떻게 생겼을까

- 룰 기반(Rule-based)의 언어이다.
- 특정 요소, 특정 요소들의 집합의 스타일 규칙을 정의할 수 있다.

### Rule

```css
h1 {
  color: red;
  font-size: 12px;
}

p {
  color: black;
}
```

### 선택자 (selector)

- 스타일을 지정할 HTML 요소를 선택
- 특정 요소는 1개이거나 집합일 수 있다.

> ex. h1, p

### 중괄호 내부

- 선언부 or 선언블럭
- 내부에는 1개 이상의 선언이 들어갈 수 있다.

### 선언 (declations)

- 프로퍼티(속성)와 값으로 이루어진 쌍
- 속성: 값의 형태로 이루어짐
- 끝났다라는 의미가 있는 세미콜론(;)이 입력되야 한다.

### 주석

- `/* 내용 */`의 형식으로 지정
- 여러 줄로 주석 처리가 가능
  - 개행을 무시한다.

---

## 3. CSS를 적용하는 방법 - 1

### 내부 스타일(embedded)

- 코드를 해석할때 `style` 태그를 만나게 되면 CSS로 해석하게 된다.

```html
<html>
  <head>
    <style>
      h1 {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Welcome!</h1>
  </body>
</html>
```

### 인라인 스타일(inline)

- 하나의 요소에만 style을 적용하고 싶을 때 사용한다.
- `style` 태그를 사용하는 것이 아니라 속성을 사용한다.

```html
<body>
  <h1 style="color:red">Welcome!</h1>
</body>
```

### 외부 스타일(external)

- `link` 요소를 이용해서 `CSS` 파일을 가져온다.
- `rel` : 외부와의 파일의 관계를 명시한다.
- `href` : 파일의 경로를 입력한다.

```html
<head>
  <link rel="stylesheet" href="style/main.css" />
</head>
```

---

## 4. CSS를 적용하는 방법 - 2

- 하나의 요소에 내부(embedded) 스타일과 인라인(inline) 스타일을 동시에 지정하게 되면 인라인(inline) 스타일이 적용된다.
- style을 적용시킬 코드의 위치에 따라 요소에 적용되는 스타일이 달라진다.
  - 제일 마지막에 작성된 선언의 내용이 해당 요소에 적용된다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="style/main.css" />
    <style>
      h1 {
        color: red;
      }

      p {
        color: green;
      }
    </style>

    <title>Document</title>
  </head>
  <body>
    <h1 style="color: rebeccapurple">Welcome!</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
      blanditiis cumque eum excepturi asperiores quo omnis, repellendus nam
      eveniet iste ducimus ullam aliquam autem quam. Eos soluta maxime odio
      nulla.
    </p>
  </body>
</html>
```

> 위의 코드와 같은 경우에는 무조건으로 인라인(inline) 스타일이 적용된다.  
> 인라인(inline) 스타일을 제외하더라도 내부(embedded) 스타일이 외부(external) 스타일보다 아래 입력되었기 때문에 내부(embedded) 스타일의 선언이 해당 요소에 적용된다.

---

## 5. 캐스캐이딩 원칙

### 1. 스타일 우선순위

- 동일한 스타일이라도 선언된 곳에 따라 우선 순위가 정해진다.
  - 브라우저 (User Agent) < 개발자(내부, 인라인, 외부)가 선언한 스타일 < 사용자가 구성한 스타일 (ex. 색약모드)
    - 브라우저는 여러 요소에 대해서 적용된 스타일이 있다.
- 적용범위가 적을 수록 우선시 된다.
  - tag 스타일 < class 스타일 < id 스타일 < 인라인 스타일
- 소스코드의 순서가 뒤에 있으면 덮어쓴다.

### 2. 스타일 상속

- 부모 요소에 있는 스타일 속성들이 자식 요소로 전달된다.
  - 자식 요소에서 재정의할 경우 부모의 스타일을 덮어쓴다.
- 상속이 되지 않는 속성도 있다.
  - ex. 배경 이미지, 배경 색 등

---

## 6. MDN 활용하기

- 브라우저의 지원 범위(호환성)에 대해서 잘 알아보고 사용하자.
- Can I use 사이트를 이용해서 웹 호환성을 확인할 수 있다.
  - caniuse.com
