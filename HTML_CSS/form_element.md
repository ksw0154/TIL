# HTML [폼 관련 요소]

## 1. `form` 소개

### `form`

- 정보를 제출하기 위한 대화형 컨트롤을 포함하는 문서 구획
- 사용자에게 정보를 입력할 수 있는 장치를 마련하는 것
- 정보를 입력을 하면 받아서 다른 페이지나 서버에 전송할 수 있게 하는 것
  - 인터렉션이 들어가는 부분
  - 디테일한 체크는 자바스크립트의 영역

> `form` 요소 예시

```html
<form action="" method="get" class="form-example"></form>
```

> `form` 요소를 입력하면 화면에는 아무것도 출력되지 않는다.  
> 내부에 `input`, `button` 요소와 같은 요소들이 포함되어 있어야 한다.

---

## 2. `form` - `action`, `method` 속성

- `form` 요소에는 `action` 속성이 자동으로 들어간다.
- 내부에 `input`이나 `button` 요소를 넣어줘야 한다.

### `action` 요소

- 양식 데이터를 처리할 프로그램의 URI
- `form` 데이터를 보낼 주소
- 다른 파일로 연결한다면 폼 데이터를 전송할 수 있다.
  - ex. action="join.html"

### `method` 요소

- 양식을 제출할 때 사용할 HTTP 메서드
- 어떠한 주소로 `post`, `get` 메서드를 보내줄 수 있다.

#### `get`

- `submit`을 하게 되면 주소 뒤에 보이게 된다.
- URL + ? `input_name=input_value`
  - input 요소가 여러개일 경우 `&`로 연결되어 보내진다.
- 보안에 관련된 정보(패스워드)는 `get` 메소드를 사용하면 안된다.
  - 검색과 같은 부분에서 사용함.

`post`

- 요청을 보낸 데이터를 주소창에 드러나지 않음
- 보안적으로 암호화하는 등의 추가 작업이 필요함

---

## 3. `label`과 `input`

### `label` 요소

- `input` 요소를 설명하는 요소
- 웹 접근성이나 시멘틱 영역에서 중요한 부분

#### `for` 속성

- 어떤 `input`을 가리킬건지 알려주는 속성
- `input`의 `id` 속성을 따라간다.

### `input` 요소

- 사용자가 정보를 입력하는 부분
- 여러가지 항목들의 데이터를 입력받을 수 있다.

#### `name` 속성

- 서버에 전송할 때 form 데이터를 구분하기 위해서 사용

#### `id` 속성

- `input` 요소에서 사용되며 `label` 요소의 `for` 속성과 동일해야 한다.
- 문서 전체에서 중복되는 값을 가져서는 안된다.

#### `label`의 자식요소로 `input` 요소를 입력할 수 있다.

#### `for` 속성을 사용하지 않아도 된다 (`input`의 `id` 속성을 사용하지 않아도 된다.)

> `label` 요소의 자식요소로 `input` 요소가 사용된 경우

```html
<div>
  <label
    >음식 이름 :
    <input type="text" name="food" />
  </label>
</div>
```

> 접근성 측면에서 label 요소에는 input을 설명하는 text를 적어주는 것이 좋다.

---

## 4. `fieldset`, `legend`

### `fieldset`

- 여러 input 요소와 label 요소를 하나로 묶을 때 사용
- 블록 요소

#### `fieldset`의 장점

- `input` 요소를 한 번에 제어 가능하다

```html
<fieldset disabeld></fieldset>
```

> `fieldset`의 `disabled` 속성을 입력하게 되면 `fieldset` 요소 내부에 있는 `input` 요소들은 입력을 할 수 없게 된다.

### `legend`

- `fieldset`의 제목을 붙여주는 요소 범례 (제목)
- `fieldset` 요소의 첫 번째 자식 요소로 입력해줘야 한다.

> `fieldset`, `legend` 요소 사용 예시

```html
<fieldset disabled>
  <legend>범례 1</legend>
  <div>
    <label for="food">음식 이름 :</label>
    <input type="text" name="food" id="food" />
  </div>

  <div>
    <label for="color">색깔 이름 :</label>
    <input type="text" name="color" id="color" />
  </div>
</fieldset>
```

<fieldset disabled>
  <legend>범례 1</legend>
  <div>
    <label for="food">음식 이름 :</label>
    <input type="text" name="food" id="food" />
  </div>

  <div>
    <label for="color">색깔 이름 :</label>
    <input type="text" name="color" id="color" />
  </div>
</fieldset>

---

## 5. input - type 속성 1

type은 여러가지 형태를 가지고 있다.
type에 따라 사용할 수 있는 속성들이 다르다.

### `text` type

- 한 줄의 텍스트만 입력이 가능하다.
- 개행 문자(Enter)를 입력하면 submit 된다.

#### `minlength` 속성

- 입력 가능한 최소 글자수
- 최소 글자수보다 작게 입력하고 submit하게되면 툴팁으로 최소 글자수에 대한 내용을 보여준다.
  - 브라우저에서 툴팁을 제공

#### `maxlength` 속성

- 입력 가능한 최대 글자수
- 최대 글자수를 넘어가면 더 이상 글자가 입력되지 않는다.

### `password` type

- 입력한 값이 마스킹되서 보여진다.
- `get` 요청을 했을 때 마스킹된 값이 입력된 값으로 보이게 된다.
- `minlength`, `maxlength`를 사용가능하다.

### `email` type

- email의 형식에 맞게 작성하도록 한다.
- 모바일에서 email 입력창에 포커싱을 하면 자동으로 영어로 입력하도록 변경되는게 많이 지원되고 있다.

### `tel` type

- 유효성 검사를 자동으로 지원해주지 않는다.
- 포커싱이 되면 자동으로 숫자 키보드가 나올 수 있도록 지원한다.
  - 디바이스와 브라우저마다 상이할 수 있다

---

## 6. input - type 속성 2

### `number` type

- 숫자에 대한 유효성 검사가 진행된다.
- 마우스나 키보드로 숫자를 +-1씩 증감이 가능하다.

```html
<label for="number">NUMBER :</label>
<input type="number" name="number" id="number" />
```

### `range` type

- 숫자를 bar 형태로 움직여서 선택할 수 있다.
- 숫자의 값으로 변환되어 제출된다.

```html
<label for="range">RANGE :</label>
<input type="range" name="range" id="range" />
```

### `date` type

- 시간을 제외한 연, 월, 일 제어가 선택이 가능하다.
- submit하게 되면 문자열 형태(`2021-09-03`)로 제출이 된다.

```html
<label for="date">DATE :</label> <input type="date" name="date" id="date" />
```

### `month` type

- 연, 월 선택이 가능하다.

```html
<label for="month">MONTH :</label>
<input type="month" name="month" id="month" />
```

### `week` type

- 연, 해당 주 선택이 가능하다.

```html
<label for="week">WEEK :</label> <input type="week" name="week" id="week" />
```

### `time` type

- 오전, 오후와 시간을 선택할 수 있다.

```html
<label for="time">TIME :</label> <input type="time" name="time" id="time" />
```

---

## 7. input - type 속성 3

#### 자주 사용되는 중요한 속성 위주로 정리한다.

### `submit` type

- `submit` 요소의 문구를 변경하고 싶을 때는 `value` 속성을 사용하면 변경할 수 있다.

```html
<input type="submit" value="제출" />
```

### `button` type

- 자체로는 기능을 할 수 없는 요소
- 자바스크립트로 기능을 구현해서 사용할 수 있다.

```html
<input type="button" value="빈 버튼" />
```

### `reset` type

- `value` 속성을 사용할 수 있다.
- form 내부에 있는 모든 `input` 요소의 값이 초기화된다.

```html
<input type="reset" value="초기화" />
```

### `checkbox` type

- `checkbox`를 check하고 submit을 하게 되면 전송되는 정보는 `checkbox_name=on` 이라고 URL에 포함되어 전송된다.
- 값을 넘겨주고 싶다면 `value` 속성에 값을 입력하면 `checkbox_name=check_value` 로 URL이 포함되어 전송된다.
- 선택하지 않고 submit하면 아무 값도 포함되지 않는다.
- 기본적으로 check가 된 상태로 보여지고 싶다면 `checked` 속성을 이용하면 된다.

```html
<label for="checkbox">CHECKBOX :</label>
<input type="checkbox" name="check1" id="checkbox" checked />
```

### `radio` type

- `radio` type은 동시 선택이 안되게 하려면 `name` 속성을 동일한 값으로 입력해줘야 한다.
- `name` 속성이 동일하기 때문에 `value` 속성으로 구분할 수 있다. `radio_name=value`로 전송된다.
- `checked` 속성을 사용할 수 있다.

```html
<label for="radio">RADIO :</label>
<input type="radio" name="radiobtn" id="radio" value="r1" />
<input type="radio" name="radiobtn" id="radio" value="r2" checked />
```

---

## 8. input - `name`, `placeholder`, `autocomplete`, `required` 속성

### `name`

- 전체 form 데이터에서 어떤 데이터를 가지고 있는지 구별하는 역할
- form 자체에는 보이지 않지만 전송되는 값에서 사용되는 필드명, 구분자

### `placeholder`

- 어떤 값이 들어갈지 힌트를 주는 역할
  - 입력값의 예시를 보여줄 수 있다.
- 해당 input에 값을 입력하게 되면 `placeholder`는 보이지 않는다.

### `autocomplete`

- 자동 완성 기능이 추가된다.
- 이전에 한번이라도 입력된 값이 있다면 후보값으로 보여준다.
  - 검색창에서 많이 본 기능
- `on`, `off`를 이용해서 속성을 사용할 수 있다.
- 지정하지 않으면 브라우저가 설정한 값을 따라간다.

### `required`

- boolean 속성
- `required` 속성을 사용하면 해당 `input` 요소는 공백으로 제출할 수 없다.

> `name`, `placeholder`, `autocomplete`, `required` 속성 사용 예시

```html
<label for="text">TEXT :</label>
<input
  type="text"
  name="text"
  id="text"
  placeholder="텍스트를 입력하세요."
  autocomplete="on"
  required
/>
```

---

## 9. input - `disabled`, `readonly` 속성

### `disabled`

- input 요소에 커서가 올라가지 않는다.
- input 요소 자체가 비활성화 된다.
  - 값을 사용하지 않는다.
- `disabled` 상태에서 submit을 하게 되면 `input_name` 자체도 넘어가지 않는다.

```html
<input type="text" name="text" id="text" disabled />
```

### `readonly`

- input 요소에 커서가 올라가지 않는다.
- `disabled`와 다르게 포커싱은 가능하다.
- `value` 속성으로 값을 지정을 해놓고 값을 보내고 싶을때 `readonly` 속성을 사용한다.

### `disabled`와 `readonly`의 차이점

#### `disabled`

- 값을 입력하지 못하고 form 데이터에 포함되지 않는다.

#### `readonly`

- 값을 입력하지 못하고 form 데이터에는 포함되어 전송된다.
- `value` 속성을 통해서 기본값을 보낼 수 있다.

```html
<input type="text" name="text" id="text" value="20" readonly />
```

---

## 10. input - `step`, `min`, `max`

### 숫자에 관련된 속성

### `step`

- 우측의 화살표를 눌렀을 때 증가하는 수를 지정할 수 있다.
- `step`에서 지정한 수의 배수만큼 증가한다.

```html
<input type="number" name="score" id="score" step="2" />
```

### `min`, `max`

- 유효값 검사를 진행한다.
- `number`의 최소, 최대값을 지정할 수 있다.

```html
<input type="number" name="score" id="score" min="0" max="10" />
```

> `range`, `number`와 같이 숫자를 입력하는 요소에서 사용이 가능하다.

---

## 11. `button`

### `input`과 `button` 요소

### `input` type : `reset`, `submit`, `button`

- 자식 요소를 가질 수 없음
- `reset`, `submit` type은 기본값을 가지고 있다.
  - `value`에 값을 넣어서 텍스트를 변경할 수 있다.
  - 단순한 텍스트만 넣을 수 있다.

```html
<input type="submit" value="눌러보세요!" />
```

<input type="submit" value="눌러보세요!">

### `button` type : `reset`, `submit`, `button`

- 자식 요소를 가질 수 있음
- 자식요소로 태그를 입력 받아서 스타일링이 용이하다.
- `reset`, `submit`, `button` type 모두 기본값이 없다.

```html
<button type="submit">👏 <b>눌러보세요!</b></button>
```

<button type="submit">👏 <b>눌러보세요!</b></button>

#### 웹 접근성 고려사항

> `button` 요소에 이미지나 이모지 등을 넣더라도 텍스트를 같이 넣어주는 것을 권장한다.

---

## 12. `select`, `option`, `optgroup`

### `select`

- 후보군 중에서 선택된 값을 제출하는 요소
- `option` 요소를 자식 요소로 사용한다.
- `option` 요소가 1개 이상 있어야 한다.

### `option`

- 후보군
- 서버에 보낼 값이 보여지는 값과 다른 값을 보내고 싶을 때는 `value` 속성을 이용한다.
- `value` 속성의 값이 없다면 보여지는 값이 `value`로 사용되어 서버로 보내지게 된다.

```html
<label for="movie">좋아하는 영화 :</label>
<select name="movie" id="movie">
  <option>--Please choose an option--</option>
  <option>토이스토리</option>
  <option value="zootopia">주토피아</option>
  <option value="insideout">인사이드아웃</option>
</select>
```

> 토이스토리를 선택하고 submit을 하게 되면 전송되는 값이 `movie=토이스토리`가 된다.  
> 주토피아를 선택하고 submit을 하게 되면 전송되는 값이 `movie=zootopia`가 된다.

### `required` 속성과 `option value`

```html
<select name="movie" id="movie" required>
  <option value="">choose an option</option>
  <option value="">movie 1</option>
  <option value="">movie 2</option>
</select>
```

1. select 요소에 `required` 속성을 추가한다.
2. 모든 option value의 값을 value=""로 넣어준다.

- 위와 같이 진행했을 때 첫 번째 `option`의 `value`에 대해서만 `required` 속성에 대한 알림이 나온다.
- movie 1을 선택하고 submit을 하면 `movie= `식으로 빈 값이 전달되게 된다.

#### `option` 요소에 보여지는 text를 그대로 값으로 사용하고 `required` 속성을 사용하고 싶다면

```html
<option value="">choose an option</option>
<option>토이스토리</option>
```

> 위의 코드처럼 첫 번째 값만 value="" 로 작성하고 나머지는 `value` 속성을 사용하지 않아도 된다.

#### `selected` 속성

- `option` 요소 중 기본적으로 선택된 `option` 요소를 보여주고 싶을 때 사용한다.
- `disabled` 속성도 사용가능하다.

```html
<option value="toystory">토이스토리</option>
<option value="zootopia" selected>주토피아</option>
```

> 화면에서 토이스토리가 먼저 보이지 않고 주토피아의 `option`이 먼저 보이게 된다.

### `optgroup`

- `option` 요소들을 구분하고 싶을 때 사용
- `optgroup`에 이름을 붙이고 싶을 때는 `label` 속성을 사용한다.

```html
<optgroup label="애니메이션">
  <option>토이스토리</option>
  <option>주토피아</option>
  <option>인사이드아웃</option>
</optgroup>
<optgroup label="SF영화">
  <option value="matrix">매트릭스</option>
</optgroup>
```

---

## 13. input - list 속성과 `datalist`

### `datalist`

- 단독으로 사용되는 요소는 아니다.
- 다른 컨트롤에서 고를 수 있는 가능한, 혹은 `추천하는 선택지`를 나타내는 `option` 요소를 여러개 담는다.
- `input` 요소와 묶을 수 있는 속성이 필요하다.
  - `input`의 `list` 속성과 `datalist`의 `id` 속성과 매칭 된다.
- 선택한 요소의 값을 수정할 수 있다.
  - input type이 `text`이기 때문에
- 작성하는 값이 `datalist` 안에 있는 값이라면 자동으로 하단에 표시를 해준다.

```html
<label for="movie">좋아하는 영화 :</label>
<input type="text" name="movie" id="movie" list="movie-list" />
<input type="submit" />

<datalist id="movie-list">
  <option>쥬라기 공원</option>
  <option>토이스토리</option>
  <option>센과 치히로의 행방불명</option>
  <option>고질라</option>
  <option>킹콩</option>
</datalist>
```

> `select` : 이미 있는 값들 중에서 선택하고 수정이 되지 않는다.  
> `datalist` : 이미 있는 값들 중 선택도 되고 수정도 가능하다. 값을 입력하고 있을 때 추천도 가능하다.

---

## 14. `textarea`

- 멀티라인 일반 텍스트 편집 컨트롤
  - 댓글이나 리뷰를 작성할 때 사용하는 요소
- 내부에 자식 요소를 가질 수 있다.
- `pre` 요소와 동일하게 작동을 한다.

### `rows`, `cols`

- 기본 폰트에 따라 사이즈가 조금 달라질 수 있다.

#### `rows`

- 보여지는 줄의 갯수

#### `cols`

- 보여지는 칸의 갯수

```html
<label for="comment">Comment :</label>
<textarea name="comment" id="comment" cols="30" rows="10"></textarea>
```

> rows, cols 속성을 이용해서 크기를 조절하는 것보다 CSS를 이용해서 크기를 조정하는 것을 권장한다.

#### 사용 가능한 속성

- `disabled`, `readonly`, `placeholder`, `required` + a
