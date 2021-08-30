# CSS Preprocessor

> CSS 전처리기(CSS Preprocessor)는 CSS 문서의 작성에 도움을 주는 도구

- CSS 전처리기는 모듈별로 특별한 Syntax를 가지고 있음
  - 믹스인(mixin), 중첩 셀렉터(nesting selector), 상속 셀렉터(inheritance selector) 등
  - 전처리기 자체만으로는 웹 서버가 인지하지 못하기 때문에 Compiler를 사용해야 한다.

### CSS 전처리기는 왜 나왔는가?
CSS 문서를 작성할 때 많은 반복작업을 요구한다.   
 클래스의 상속과 같은 사항으로 점점 CSS 문서는 양이 많아지고 이로 인해 이후 유지관리에 많은 영향을 준다.   
이러한 부분을 변수, 함수, 상속 등의 개념을 사용하여 해결하기 위해서 CSS 전처리기가 나왔다.

#### 대표적인 CSS 전처리기
- Sass, Less, Stylus
  - 서로의 특징에 맞게 Syntax만 조금 다를 뿐 개념 자체는 동일하다.

---

### 장점
- 재사용성 : 공통 요소 또는 반복적인 항목을 변수 또는 함수로 대체
- 시간적 비용 감소 : 임의 함수 및 내장(Bulit-in) 함수로 인해 개발 시간적 비용 절약
- 유지 관리 - 중첩, 상속과 같은 요소로 인해 구조화된 코드로 유지 및 관리가 용이

> 재사용성 예시
```css
$primary-color: #fff

.class-A
  background-color: $primary-color

.class-B
  background-color: $primary-color
```

> 시간적 비용 감소 예시
```css
$color: #2ecc71
$buttonDark: darken($buttonColor, 10%)

button 
  background: $color
  box-shadow: 0px 5px 0px $buttonDark
```

- darken : 내장 함수로 색상과 %를 지정해주면 알맞는 값을 출력해 준다.   
- 내장함수를 이용함으로써 시간적 비용을 감소할 수 있다.   
  - 하지만 내장함수에 대해서 공부하는 시간적 비용이 생긴다.

> 유지관리 예시

> 중첩(Nesting)
```css
.class-A 
    width: 100%

    .A-child-1 
        color: red
    

    .A-child-2 
        color: blue
```

```css
.class-A {
    width: 100%
}

.class-A .A-child-1 {
    color: red
}

.class-A .A-child-2 {
    color: blue
}
```

Sass로 nesting을 나타낸 코드와 compile 한 뒤의 css코드이다.

> 상속(Extend)
```css
.class-A 
    color: red
    padding: 10px

.class-B 
    @extend .class-A
    border: 1px solid red
```

```css
.class-A, .class-B {
    color: red
    padding: 10px
}

.class-B {
    border: 1px solid red
}
```
확실히 중첩과 상속을 사용했을 때 유지 및 관리가 용이하다.   
특히 상속과 같이 교집합 되는 부분을 관리하고 나머지 부분을 자유롭게 작성하는 것이 매력적인 부분이다.

---

### 단점

실무에서는 대부분 CSS 작업은 퍼블리셔나 디자이너가 진행하게 된다.   
퍼블리셔나 디자이너가 개발에 대한 역량과 요소를 알아야 진행이 가능하다.

---

## Sass, Less, Stylus 비교
- 가장 대표적인 전처리기

### Sass (Syntactically Awesome Style Sheets)
- 최초에는 Ruby 기반으로 구동되었지만, node-sass(Node.js 기반의 라이브러리)가 나오면서 Sass를 많이 사용하고 있다.
- 다른 전처리기에 비해 다양한 기능이 제공되고 지속적인 업데이트가 진행 중이다.
- 가장 오래 된 전처리기(2006년)

### Less
- Twitter의 Bootstrap에서 사용되면서 전파되기 시작했다.
- Node.js 기반으로 구동된다.
- Sass에 비해 컴파일 속도가 빠른 것이 장점이었으나 Sass가 캐쉬를 적용한 뒤로부터는 큰 차이가 없다.

### Stylus
- 가장 나중에 나온 전처리기로 Node.js로 구동된다.
- 최근에는 많은 open-project에서 사용되고 있다.

---

## Sass와 Scss의 차이
### Scss
- Sass의 3버전에서 새롭게 등장했다.
- CSS구문과 완전 호환되도록 새로운 구문을 도입함.
- Sass의 모든 기능을 지원하는 CSS의 상위 집합
  - 간단하게 구문의 차이가 가장 크다. ({}와 ;의 유무)


### Sass와 Scss 구문 차이

> Sass
```css
.list
  width: 100px
  float: left
  li
    color: red
    background: url("./image.jpg")
    &:last-child
      margin-right: -10px
```

> Scss
```css
.list {
  width: 100px;
  float: left;
  li {
    color: red;
    background: url("./image.jpg");
    &:last-child {
      margin-right: -10px;
    }
  }
}
```

- Sass보다 Scss가 구분도 더 잘되고 파악하기 쉽다고 느꼈다. Sass가 코드가 훨씬 깔끔한 모습을 보이고 있지만, 확실히 Scss가 CSS와 유사한 문법을 가지고 있기 때문에 사용적인 면에서 훨씬 편할 것 같다.

---

## Scss

### 데이터 종류
- Numbers : 숫자 (숫자에 단위가 있거나 없음)
- Strings : 문자 (문자에 따옴표가 있거나 없음)
- Colors : 색상 표현
- Booleans : 논리
- Nulls : 아무것도 없음 (속성값으로 null이 사용되면 컴파일 하지 않음)
- Lists : 공백이나 콤마(,)로 구분된 값의 목록 (괄호를 붙이거나 붙이지 않음)
- Maps : 값이 Key : Value 형태로 이루어짐 (괄호를 꼭 사용해야 힘)

### 변수

#### 변수를 사용할 때는 다음과 같은 조건을 충족할 때 생성하자.
1. 값이 적어도 두 번 반복될 때
2. 값이 적어도 한 번은 수정될 가능성이 크다고 판단될 때
3. 우연에 의한 것이 아니라 값이 정해지는 것이 변수와 관련되어 있을 때

> 절대 수정되지 않거나, 오직 한 곳에서만 사용되는 변수는 변수의 의미가 없다.

```css
$font-color: red;
.content{
    color: $font-color;
    float:left;
    .title{
        color: $font-color;
        font-size: 18px;
    }
}
```


### @mixin
- 공통된 속성의 묶음을 재활용 할수 있다.

```css
@mixin box-style{
    width: 100px;
    height: 50px;
    background-color: red;
}
.section{
    position: absolute;
    top: 0;
    .box{
        @include box-style;
    }
}
```
> @mixin은 과설계 되지 않아야 한다. document에서는 만약 mixin이 20줄 이상되면 더 작은 mixin으로 나뉘거나 수정되야 한다고 말한다.

이외에도 선택자, 조건문, 반복문 등의 내용들을 확인할 수 있다.   

---

HTML과 CSS 이전에 조금씩 알고 있었지만, CSS Preprocessor에 대한 내용은 이번에 처음 접하게 되었다.   
CSS에 대한 내용을 조금 더 공부하고 Scss에 대해서 더 알아보려고 한다.

css를 이용해서 웹사이트를 만든 뒤 Scss를 적용하는 것이 좋을 것 같다.