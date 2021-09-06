# HTML [메타데이터 요소]

## 1. 메타데이터의 역할

- 메타데이터 : 데이터(HTML)를 설명하는 데이터(정보) (데이터를 위한 데이터)
- 검색 엔진이 검색 결과를 노출 시킬 때 웹 페이지에 대한 정보로 노출을 하고 분류를 한다.
- 웹 페이지에 대한 정보를 수집해서 노출을 하는데 메타 데이터를 사용해서 분류를 한다.

---

## 2. title

- 브라우저의 제목 표시줄이나 페이지 탭에 보이는 문서 제목을 정의한다.
- 텍스트만 포함할 수 있으며 태그를 포함하더라도 무시한다.
  - text formatting이 되지 않음
- head 태그 안에는 하나의 title만 존재한다.
- 즐겨찾기에 추가를 할 때 북마크의 이름으로 나타난다.
- title은 전역 특성만 포함된다.

#### SEO (Search Engine Optimization)

- 검색 엔진 최적화
  - 검색 엔진에서 찾기 쉽도록 사이트를 개선하는 프로세스
- 페이지의 제목(title)은 SEO에 큰 영향을 준다.
  - title은 단어의 나열보다는 짧더라도 문장으로 구성하는 것이 좋다.

#### 전역 특성 (Global Attributes)

- 모든 HTML에서 공통으로 사용할 수 있는 특성
- 표준에 명시되지 않은 요소에도 지정할 수 있다. (HTML5를 준수하지 않음)

```html
<foo></foo> <foo hidden></foo>
```

> foo라는 요소는 유효하지 않지만 그래도 화면에 나타나지 않음

전역 특성 목록

- https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes

전역 특성은 브라우저 호환성을 확인해 봐야한다. 많은 전역 특성이 있기 때문에 특정 브라우저에서는 호환이 되지 않는 전역 특성이 있다.

- title의 경우에는 모든 브라우저에서 호환이 된다.

---

## 3. meta - 문서 정보

### meta 태그

- 빈 요소 (닫는 태그를 사용하지 않는다.)
- 속성을 사용해서 문서의 정보를 작성한다.
- 문서의 정보가 여러개라면 meta 태그를 여러개 사용해서 정보를 작성한다.

#### name과 content

- name과 content는 같이 사용해야 한다.
- 문서의 메타데이터를 이름-값 쌍으로 제공할 수 있다.
- name : 이름
- content : 값

```html
<meta name="" content="" />
```

### 표준 메타데이터 이름

meta의 name 속성으로 사용할 수 있는 name을 제공한다.

- application-name : 웹 페이지에서 구동 중인 애플리케이션의 이름
- referrer
  - 웹페이지에서 다른 웹페이지로 이동할 때 흔적이 남게 됨 (어디서 왔는지)
  - 흔적을 어떻게 남길지에 대한 header

```html
<meta name="application-name" content="youtube" />
```

> author, description, generator, keywords, referrer 등

---

## 4. meta - 문자 인코딩, 뷰 포트

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### 문자 인코딩

- meta 태그에 charset 속성을 가지고 사용한다.
- UTF-8 : 모든 나라의 언어를 지원할 수 있는 인코딩 Set
- head에 첫 번째 정보로 넣거나 title 전에 넣어주는 것을 권장한다.

### 뷰 포트

- 뷰 포트 : 전체 브라우저 중에서 웹페이지를 볼 수 있는 영역
- meta 태그에 name 속성을 가지고 사용한다.
- 모바일 장치에서만 사용한다.
- content : 뷰 포트에 보여지는 부분의 너비나 높이, 비율, 최대 확대 비율 등을 정의한다.

  - 추가 내용이 필요하다면 쉼표를 사용해서 추가로 작성한다.

---

## 6. MIME 타입

> 구조 : type(대분류)/subtype(확장자)

- 클라이언트에게 전송된 문서의 다양성을 알려주기 위한 메커니즘
- 어떤 파일인지 HTML이 모를 때 type을 명시해주는 것
- 가독성을 위해서 소문자로 많이 작성한다.

대표적인 MIME 타입

- text
  - plain, html, css, javascript
- image
  - gif, png, jpeg, bmp, webp
- audio, video, application
- 파일을 불러올 때 MIME 타입을 확인해서 작성해주는 것이 중요하다.

---

## 7. style

- css 문법을 사용해서 HTML에 스타일을 적용하기 위해서 사용하는 태그
- style 요소는 문서의 head 안에 있어야 한다.
- 일반적으로 style은 외부 style 시트에 작성한다.
  - link 요소로 연결하는 것이 좋다.

```html
<head>
  <style>
    p {
      color: red;
    }
  </style>
</head>
```

---

## 8. script

- 인라인으로 script를 작성할 수 있게 사용하거나, 외부의 script 파일을 연결할 때 사용한다.
- HTML 문서를 해석하다가 script를 만나면 script 코드를 먼저 해석한다.  
  -> 기존의 HTML 문서의 렌더링을 중단한다.
- 그러므로 body 요소의 가장 마지막에 쓰는 것을 권장한다.

> 외부에서 script 파일을 가져올 때

```html
<script src="javascript.js"></script>
```

> script 요소 내부에 인라인 스크립트를 작성하는 방법

```html
<script>
  alert("hello World!");
</script>
```
