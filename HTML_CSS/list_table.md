# HTML [목록과 표]

## 1 ~ 2. 목록 - ul. ol, li

### Ordered List

- 순서가 있는 목록 (정렬된 목록, 보통 숫자 목록)
- 순위를 나타내거나, 단계적으로 수행하는 요리 레시피 같은 경우에 사용한다.

#### type 속성

- 기본값은 숫자 1

#### start

- 순서가 있기 때문에 시작하는 수를 변경할 수 있다.
- 다른 방법은 li 태그에 value 속성을 이용한다.

#### reversed

- boolean 속성으로 기본값은 false로 되어 있다.
- 사용을 하게 되면 true값이 된다.

> reversed 속성 사용 예시

```html
<ol reversed>
  <li>Content</li>
  <li>Content</li>
  <li>Content</li>
</ol>
```

<ol reversed>
  <li>Content</li>
  <li>Content</li>
  <li>Content</li>
</ol>

### li

- List Item
- List 각각의 아이템
- ol or ul 둘 중 어떤걸로 묶느냐에 따라 순서가 있는지 없는지 결정된다.

#### value (Ordered List에서 사용)

- ol 태그의 start 속성처럼 시작하는 수를 변경할 수 있다.
- ol 태그는 start 속성의 값을 지정하기 때문에 첫 번째 li 태그부터 값이 변경되지만, value 속성은 중간부터 지정할 수 있다.

> li 태그 value 속성 사용 예시

```html
<ol>
  <li>Content</li>
  <li value="3">Content</li>
  <li>Content</li>
</ol>
```

<ol>
  <li>Content</li>
  <li value="3">Content</li>
  <li>Content</li>
</ol>

위의 예시처럼 value는 중간의 li도 지정해서 사용할 수 있다. 첫 번째 li 태그는 ol의 start 속성을 따라가기 때문에 1을 표시하고 두 번째 li 태그는 value 값을 3으로 바꿔줬기 때문에 그 이후에 3부터 1씩 추가되어 li 태그가 진행되는 것을 볼 수 있다.

> 숫자가 아닌 알파벳과 같이 다른 기호를 사용하고 싶을 때도 value의 값은 숫자로 작성해야 한다.

```html
<ol type="A" start="4">
  <li>Content</li>
  <li value="3">Content</li>
  <li>Content</li>
</ol>
```

<ol type="A" start="4">
  <li>Content</li>
  <li value="3">Content</li>
  <li>Content</li>
</ol>

대문자 알파벳으로 순서를 나타낸다고 가정했을 때, type="A"가 들어간다. 그렇다면 start 속성에도 시작하는 알파벳으로 해야할 것 같지만 숫자값이 들어간다. li 태그의 value 속성도 마찬가지로 숫자 값이 들어가는 것을 볼 수 있다.

### Unordered List

- 순서가 없는 목록
- 메뉴에 사용한다.
- ol 태그와 동일하게 li 태그를 감싸서 사용한다.

> ul 태그 사용 예시

```html
<ul>
  <li>Content</li>
  <li>
    Content
    <ul>
      <li>
        Content
        <ul>
          <li>Content</li>
          <li>Content</li>
        </ul>
      </li>
      <li>Content</li>
    </ul>
  </li>
</ul>
```

<ul>
  <li>Content</li>
  <li>Content
    <ul>
      <li>Content
        <ul>
          <li>Content</li>
          <li>Content</li>
        </ul>
      </li>
      <li>Content</li>
    </ul>
  </li>
</ul>

### ol과 ul 태그 섞어서 사용하기

<ol>
  <li>Content</li>
  <li>Content</li>
  <li>Content
    <ul>
      <li>ul Content</li>
      <li>ul Content</li>
      <li>ul Content</li>
    </ul>
  </li>
</ol>

---

## 3. 정의 목록 - dl, dt, dd

### dl

- 용어를 정의하거나 설명하는 목록
- 주로 용어사전 구현이나 메타데이터(키-값 쌍 목록)를 표시할 때 사용한다.

### dt (term)

- 용어에 대한 태그

### dd (description)

- 설명에 대한 태그

### dt와 dd와의 관계

- 1 : 1, 1 : M, N : 1, N : M 관계가 다 성립한다.

> dl, dt, dd 요소 사용 예시

```html
<dl>
  <!-- 1 : 1 관계 -->
  <dt>term</dt>
  <dd>description</dd>

  <!-- 1 : M 관계 -->
  <dt>term</dt>
  <dd>description 1</dd>
  <dd>description 2</dd>

  <!-- N : 1 관계 -->
  <dt>term 1</dt>
  <dt>term 2</dt>
  <dd>description</dd>

  <!-- N : M 관계 -->
  <dt>term 1</dt>
  <dt>term 2</dt>
  <dd>description 1</dd>
  <dd>description 2</dd>
</dl>
```

<dl>
  <!-- 1 : 1 관계 -->
  <dt>term</dt>
  <dd>description</dd>

  <!-- 1 : M 관계 -->
  <dt>term</dt>
  <dd>description 1</dd>
  <dd>description 2</dd>

  <!-- N : 1 관계 -->
  <dt>term 1</dt>
  <dt>term 2</dt>
  <dd>description</dd>

  <!-- N : M 관계 -->
  <dt>term 1</dt>
  <dt>term 2</dt>
  <dd>description 1</dd>
  <dd>description 2</dd>
</dl>

> dt와 dd를 하나의 div로 감쌀 수 있다. 스타일을 적용할 때, 그룹에 전역 특성을 적용할 때, 마이크로데이터를 사용할 때 유용하다.

> 주의 사항

- 웹표준에 의거하여 dt, dd 태그의 형제 요소로 div를 사용하면 안된다.
- 기본적으로 dt, dd의 형제 요소는 dt와 dd만 가능하다.

---

## 4. 표 - table, tr, th, td

### table

- 복잡한 형태의 데이터를 행렬의 모양으로 나타낼 수 있는 요소
- 이전에는 table 태그로 layout을 만들었다. (현재는 지양한다.)
- 현재는 CSS의 flex나 grid를 통해서 layout을 구현할 수 있다.

### tr

- table row
- 테이블의 행

### th

- table head
- 행이나 열을 대표하는 명칭

#### scope

- th가 어떤 것(row or column)을 대표하는지 작성한다.
- 보여지는 것이 변경되는 속성이 아니고, 웹 접근성을 향상시킬 수 있는 속성이다.

### td

- table data

> table, tr, th, td 요소 사용 예시

```html
<table>
  <tr>
    <th scope="col">나라이름</th>
    <th scope="col">수도</th>
    <th scope="col">인구</th>
  </tr>
  <tr>
    <th scope="row">한국</th>
    <td>서울</td>
    <td>5100만</td>
  </tr>
  <tr>
    <th scope="row">미국</th>
    <td>워싱턴 D.C</td>
    <td>3억</td>
  </tr>
  <tr>
    <th scope="row">태국</th>
    <td>방콕</td>
    <td>3000만</td>
  </tr>
  <tr>
    <td colspan="2">합계</td>
    <td>3억 8100만</td>
  </tr>
</table>
```

<table>
  <tr>
    <th scope="col">나라이름</th>
    <th scope="col">수도</th>
    <th scope="col">인구</th>
  </tr>
  <tr>
    <th scope="row">한국</th>
    <td>서울</td>
    <td>5100만</td>
  </tr>
  <tr>
    <th scope="row">미국</th>
    <td>워싱턴 D.C</td>
    <td>3억</td>
  </tr>
  <tr>
    <th scope="row">태국</th>
    <td>방콕</td>
    <td>3000만</td>
  </tr>
  <tr>
    <td colspan="2">합계</td>
    <td>3억 8100만</td>
  </tr>
</table>

- th를 이용해서 열을 대표하는 값들을 th 태그로 표현했다.
  - 나라이름, 수도, 인구
- th를 이용해서 행을 대표하는 국가 이름 값을 th 태그로 표현했다.
  - 한국, 미국, 태국
- scope 속성을 이용해서 row를 대표하는 것인지, column을 대표하는 것인지 명시해준다.
- colspan 속성을 이용해서 셀을 병합하는 효과를 낼 수 있다.

---

## 5. thead, tbody, tfoot

- table도 header, body, footer의 구획를 나눌 수 있다.
- header 예시 : 첫 번째 row의 columns
- footer 예시 : 합계
- thead, tbody, tfoot 태그 모두 table의 자식 태그로 사용해야 한다.
- thead, tbody, tfoot의 형제 태그로 tr이나 th를 사용할 수 없다.
- 스타일링의 변경은 없지만, CSS를 이용해서 일관성 있는 스타일링의 용이해진다.

- tbody 태그의 경우에는 여러개가 있을 수 있다.

> thead, tbody, tfoot 태그 사용 예시

```html
<table>
  <thead>
    <tr>
      <th scope="col">품목</th>
      <th scope="col">지출</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2">식재료</th>
    </tr>
    <tr>
      <th scope="row">대파</th>
      <td>3,000</td>
    </tr>
    <tr>
      <th scope="row">달걀</th>
      <td>4,000</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="2">기타 품목</th>
    </tr>
    <tr>
      <th scope="row">고양이 간식</th>
      <td>12,000</td>
    </tr>
    <tr>
      <th scope="row">종이 봉투</th>
      <td>300</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Totals</th>
      <td>33,300</td>
    </tr>
  </tfoot>
</table>
```

<table>
  <thead>
    <tr>
      <th scope="col">품목</th>
      <th scope="col">지출</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2">식재료</th>
    </tr>
    <tr>
      <th scope="row">대파</th>
      <td>3,000</td>
    </tr>
    <tr>
      <th scope="row">달걀</th>
      <td>4,000</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="2">기타 품목</th>
    </tr>
    <tr>
      <th scope="row">고양이 간식</th>
      <td>12,000</td>
    </tr>
    <tr>
      <th scope="row">종이 봉투</th>
      <td>300</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Totals</th>
      <td>33,300</td>
    </tr>
  </tfoot>
</table>

수업에서 진행한 테이블을 구현된 모습만 보고 작성해보았다.  
나중에 CSS를 통한 스타일링의 용이성을 얻을 수 있고, 보다 좋은 웹 접근성을 가질 수 있다.  
지금 당장 보여지는 부분에 신경쓰기보다는 하나의 depth를 더 생각해서 구현하는 것이 추후에 더 좋은 결과를 보여줄 수 있을 것 같다.

---

## 6. caption

- table 태그의 내부에 들어갈 수 있는 caption 요소
- caption 요소는 표의 설명 또는 제목을 나타냅니다.
- caption 요소는 table 요소의 첫 번째 자식이어야 한다.

  - 무조건 table 요소 바로 아래
  - table의 caption을 아래에 위치하고 싶다면 CSS로 스타일링을 해줘야 한다.

- figure 요소의 유일한 자식이 table 요소라면
  - caption 요소를 사용하는 것이 아니라 figcation 요소를 사용할 수 있다.

> caption 요소 사용 예시

```html
<table>
  <caption>
    가계부
  </caption>
  <tr>
    <th scope="col">품목</th>
    <th scope="col">지출</th>
  </tr>
  <tr>
    <th scope="row">대파</th>
    <td>3,000</td>
  </tr>
  <tr>
    <th scope="row">달걀</th>
    <td>4,000</td>
  </tr>
</table>
```

<table>
  <caption>가계부</caption>
  <tr>
    <th scope="col">품목</th>
    <th scope="col">지출</th>
  </tr>
  <tr>
    <th scope="row">대파</th>
    <td>3,000</td>
  </tr>
  <tr>
    <th scope="row">달걀</th>
    <td>4,000</td>
  </tr>
</table>
