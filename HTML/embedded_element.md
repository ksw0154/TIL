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

---

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

---

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

---

## 4. 반응형 이미지 - `srcset` 속성

### `srcset`

- source(src) 속성의 set
- 쉼표로 구분하는 한 개 이상의 문자열 목록

  - 너비 서술자(w)와 픽셀 밀도 서술자(x)를 작성한다.

- 여러개의 이미지 경로를 지정할 수 있음
  - 반응형 이미지를 만들기 위해서 사용한다.
  - `사용자의 viewport에 따라서 반응한다.`
    - `sizes` 속성을 이용하지 않으면 브라우저의 크기가 계속 커질 때 이미지가 동일하게 계속 커진다.
- IE에서는 지원하지 않는다.

  - 그렇기 때문에 `src` 속성을 꼭 작성해주도록 하자.

> `srcset` 적용 예시

```html
<img
  src="images/small.png"
  srcset="images/small.png 300w, images/medium.png 450w, images/large.png 600w"
/>
```

<img
  src="images/small.png"
  srcset="images/small.png 300w, images/medium.png 450w, images/large.png 600w" alt="responsive images"
/>

> 브라우저의 크기에 따라서 300px일 때, 450px일 때, 600px 일 때, 나타나는 이미지가 달라지게 된다.  
> `300px 이전에는 small.png`, `450px 이전에는 medium.png`, `450px 이후에는 large.png`가 나타나게 된다.  
> 이미지는 브라우저의 크기에 따라 계속 늘어나게 되는데 이러한 부분을 `sizes` 속성을 통해서 제어할 수 있다.

- Disable Cache

  - `크롬 개발자 도구 - Network`에서 확인 가능
  - 새로고침 이후에 이미지가 변경되지 않을 때 사용한다.

- placeholder.com
  - 이미지를 만들어주는 사이트

---

## 5. 반응형 이미지 - `sizes` 속성

### `sizes` 입력값

1. 미디어 조건 (마지막 항목에서는 생략해야 한다.)
2. 소스 크기 값

```html
<img
  src="images/large.png"
  srcset="images/small.png 300w, images/medium.png 450w, images/large.png 600w"
  sizes="(min-width: 600px) 600px,
        (min-width: 450px) 450px,
        300px"
/>
```

#### (min-width: 600px) 600px,

- 600px보다 브라우저 크기가 큰 상태일 때는 이미지의 크기는 600px로 제한한다.

#### (min-width: 450px) 450px,

- 450px보다 브라우저 크기가 큰 상태일 때는 이미지의 크기는 450px로 제한한다.

#### 300px

- 마지막 항목에는 미디어 조건을 생략해야 하기 때문에 생략한 뒤 소스 크기의 값을 입력해준다.

> 450px보다 작을 때는 small.png, 450px이상 600px 미만에는 medium.png, 600px 이상에는 large.png를 표시한다.  
> 화면 크기가 변경될 때에 이미지의 크기가 같이 변경이 되지 않고, 입력된 소스 크기의 값으로 고정되어서 표시한다.

---

## 6. `video` 요소

- `<video></video>` 내부에 자식 요소를 넣을 수 있다.
  - 자식 요소는 브라우저가 `video` 요소를 정상적으로 지원하지 못할 때 보여진다.
- `src를` 이용해서 경로를 넣는다.

### `src`

- 삽입할 동영상의 주소
- `src` 속성은 옵셔널
  - 자식 요소를 가질 수 있기 때문에 `source` 요소를 이용해서 비디오를 노출시킬 수 있다.

`controls`

- boolean 속성
- 동영상을 재생할 수 있는 패널을 보여준다.

`autoplay`

- 비디오를 자동으로 재생시킬 수 있는 속성
- 새로고침을 누르면 비디오가 재생되지 않는다.
  - 사운드를 가진 비디오는 갑작스런 재생이 사용자에게 좋지않은 경험을 줄 수 있다.
- 사운드가 없이 재생할 수 있다.

`muted`

- boolean 속성
- `autoplay`와 함께 사용하면 새로고침을 해도 다시 재생할 수 있다.
- `controls` 속성을 이용해서 `mute를` 해제 할 수 있다.

`loop`

- boolean 속성
- 동영상이 끝나면 다시 재생할 수 있는 속성

`poster`

- 썸네일과 동일한 개념
- 재생이 되지 않을 때 사용할 표지
- `poster`가 설정되지 않으면 비디오의 첫번째 프레임이 poster로 사용된다.

> `video` 요소와 속성 사용 예시

```html
<video src="video/sample-mp4-file.mp4" controls autoplay muted loop>
  Sorry, your browswer doesn't supprt embedded videos.
</video>
```

 <video src="video/sample-mp4-file.mp4" controls autoplay muted loop>
      Sorry, your browswer doesn't supprt embedded videos.
</video>

> `controls` 속성을 통해 control 패널을 추가한다.  
> `autoplay` 속성을 이용해서 자동으로 재생할 수 있게 설정한다.  
> 새로고침을 했을 때 autoplay가 되지 않기 때문에 `muted` 속성을 통해 새로고침을 해도 autoplay가 될 수 있도록 설정한다.  
> `loop` 속성을 통해 동영상을 계속 다시 재생할 수 있다.

> `video` 속성과 `source` 속성 사용 예시

```html
<video>
  <source src="video/sample-mp4-file.mp4" />
  Sorry, your browswer doesn't supprt embedded videos.
</video>
```

---

## 7. `audio`

- 대부분의 속성이 `video` 속성과 동일하다.
- `autoplay`, `controls`, `muted`, `loop` 등
- `src` 속성을 사용하거나, 자식 요소로 `source` 요소를 사용할 수 있다.

### `audio` multiple `source` 요소

```html
<audio controls>
  <source src="foo.opus" type="audio/ogg; codecs=opus" />
  <source src="foo.ogg" type="audio/ogg; codecs=vorbis" />
  <source src="foo.mp3" type="audio/mpeg" />
</audio>
```

- 문제 없이 재생이 가능하면 첫 번째 소스를 재생하게 된다.
- 문제가 있다면 두 번째 소스를 확인해서 재생하게 된다.
- 모든 형식을 지원하지 않는다면 지원하지 않는 항목이라는 문구를 추가해줄 수 있다.

### `autoplay` 속성

- 반드시 자동 재생을 제공해야 한다면 사용자의 명시적인 동의를 얻어야한다.
- `muted` 속성을 이용해서 `autoplay`를 사용할 수 있다.

### `figure` 요소와 함께 사용하기

```html
<figure>
  <figcaption>Listen to the T-Rex:</figcaption>
  <audio controls src="media/cc0-audio/t-rex-roar.mp3">
    Your Browswer does not support the <code>audio</code> element.
  </audio>
</figure>
```

<figure>
  <figcaption>Listen to the T-Rex:</figcaption>
  <audio controls src="media/cc0-audio/t-rex-roar.mp3">
    Your Browswer does not support the <code>audio</code> element.
  </audio>
</figure>

---

## 8. `canvas`, `iframe`

### `canvas`

- 그래픽 캔버스 요소
  - 그리기 위해서는 `javascript`가 필요하다.
- HTML 만으로 할 수 있는 것은 거의 없다.
- `width`, `height` 정도만 마크업 할 수 있다.

### `iframe`

- 인라인 프레임 요소
- 소스를 프레임 안에 띄워주는 형태로 사용한다.

  - 소스를 띄어줄 수 있는 마크업 요소

- 소스는 다른 HTML 페이지를 삽입한 것
  - 보통은 지도를 삽입할 때 많이 사용한다.
  - `API Key`가 필요하다.

#### `iframe이` 나오지 않는 경우가 있다

- `iframe`은 보안상의 이유로 아무 페이지나 띄울 수 없다.
- 해당 페이지에서 허용한 페이지만 `iframe`으로 보여줄 수 있다.

> `iframe` 요소 사용 예시

```html
<iframe
  id="inlineFrameExample"
  title="Inline Frame Example"
  width="300"
  height="200"
  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
>
</iframe>
```

<iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="300"
    height="200"
    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
</iframe>

> `iframe` 안에 해당 HTML 페이지를 삽입하는 것
