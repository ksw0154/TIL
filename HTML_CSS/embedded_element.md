# HTML [임베디드 요소]

- 직접 내용을 코드로 작성하는 것이 아니라 소스를 불러와서 삽입하는 것
- 멀티미디어 요소들이 많이 해당 됨(이미지, 비디오, 오디오 등)

## 1. `img` - src

- `img` 태그 안에 내용이 없이 빈요소로 사용된다.
- `img` 태그의 속성들로 표현할 수 있다.

### `src` 특성

- 필수 속성
- 외부의 url, 파일이 위치한 경로를 나타낸다.

#### 절대경로

- 웹 사이트의 주소를 이용할 수 있다.
- 어떤 위치에서 경로를 불러오더라도 동일한 이미지를 불러 올 수 있다.

#### 상대경로

- 현재 위치에서 이미지가 있는 위치를 나타내고 가리킬 때 사용한다.
- 현재 위치 중심이기 때문에 같은 경로라도 다른 이미지를 가져올 수 있다.
- 해당 이미지의 주소를 복사하게 되면 url과 함께 해당 이미지의 경로를 불러오게 된다.
  - live server의 경우에는 로컬에서 작동되기 때문에 다른 로컬에서 이미지를 불러올 수 없다.

> `img` 절대경로, 상대경로 예시

> 절대 경로

```html
<img
  src="https://elheraldoslp.com.mx/wp-content/uploads/2021/05/spider-man-3-fan-poster-doctor-strange-electro.jpg"
/>
```

<img src="https://elheraldoslp.com.mx/wp-content/uploads/2021/05/spider-man-3-fan-poster-doctor-strange-electro.jpg">

> 상대 경로

```html
<img
  src="images/spiderman_no_way_home_poster.jpg"
  alt="spiderman_no_way_home_poster"
/>
```

<img src="images/spiderman_no_way_home_poster.jpg" alt="spiderman_no_way_home_poster">

## 2. `img` - `alt`, `width`, `height` 속성

### `alt`

- alternative text
  - 대체 텍스트
- 이미지에 대한 설명을 text로 입력하는 속성
- 필수값은 아니지만, 접근성을 올려주는 중요한 역할을 한다.
- 웹사이트에서 서버 오류, 이미지 삭제, 절대 경로 오타 등 이미지가 표시할 수 없을 때 어떤 이미지가 있었는지 알려주는 역할

- `alt` 속성은 툴팁으로 나타나는 속성은 아니다.
  - IE와 같은 브라우저에서는 `alt` 속성에 툴팁 기능이 들어있기도 하다.
  - `title` 속성을 이용하면 툴팁을 사용할 수 있다.

> `alt` 속성 예시

```html
<img
  src="images/spiderman_no_way_home_poster.jpg"
  alt="spiderman_no_way_home_poster"
/>
```

### `width`

- 이미지 픽셀 기준 고유 너비
- 단위 없는 정수로 입력해야 한다.
- `width` 속성을 작성하지 않으면 원본 크기 그대로 이미지가 나온다.

> `width` `height` 속성 예시

```html
<img
  src="https://elheraldoslp.com.mx/wp-content/uploads/2021/05/spider-man-3-fan-poster-doctor-strange-electro.jpg"
  width="200"
  height="200"
/>
```

<img
src="https://elheraldoslp.com.mx/wp-content/uploads/2021/05/spider-man-3-fan-poster-doctor-strange-electro.jpg" width="200" height="200"
/>

> CSS를 이용해서 `width`와 `height` 사이즈를 조정할 수 있다.

## 3. 웹에서 사용하는 이미지 유형

- `img` 태그가 지원하는 이미지 형식은 HTML 표준에 명시하고 있지 않다.

  - 특정 브라우저마다 지원하는 이미지의 유형이 다를 수 있다.

- 웹 페이지의 나오는 이미지는 높은 화질보다는 이미지의 용량을 중요시한다.
  - 웹 페이지의 브라우징 속도, 이미지 로딩 속도 등
  - 이미지의 용량이 적을수록 로딩 속도가 빠르다.

`JPEG`

- MIME Type : `image/jpeg`
- File extension(s) : `.jpg`, `.jpeg`, `.jfif`, `.pjpeg`, `.pjp`
- Summary : 정지 이미지의 손실 압축에 적합하다

  - 현재 가장 많이 사용됨
  - `대부분의 사진`은 `JPEG`를 사용해서 표현한다.

`PNG`

- MIME type : `image/png`
- File extension(s) : `.png`
- Summary
  - 원본 이미지를 보다 정확하게 보여주거나 투명도가 필요한 경우
  - `투명도 적용이 된다.`

`GIF`

- MIME type : `image/gif`
- File extension(s) : `.gif`
- Summary
  - 여러장의 이미지로 이루어진 `애니메이션 표현이 가능`하다.
  - `지원되는 컬러의 범위가 좁다.`

`WEBP`

- MIME type : `image/webp`
- File extension(s) : `.webp`
- Summary
  - `구글이 만든 이미지 포멧`
  - 품질, 압축률 등이 훨씬 우수하나 `지원되는 브라우저가 제한적`이다.
  - `can i use 사이트`를 이용하면 지원되는 브라우저를 편하게 확인할 수 있다.

`SVG`

- MIME type : `image/svg+xml`
- File extension(s) : `.svg`
- Summary
  - `벡터 이미지`
    - 픽셀을 채우는 것이 아닌 직선으로 이어주는 형태를 가졌다.
    - 풍경사진보다는 아이콘이나 UI 요소들에 많이 사용 한다.
  - `래스터 이미지` : `JPEG`, `PNG`, `GIF`, `WEBP`
  - `벡터 이미지와 래스터 이미지와의 차이`
    - 이미지가 클 때 차이가 난다.
    - 래스터 이미지는 확대할수록 이미지가 깨지는 모습을 보인다.
    - 벡터 이미지는 확대를 하더라도 이미지가 깨지지 않는다.
