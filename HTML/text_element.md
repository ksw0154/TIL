# HTML [텍스트 요소]

## 1. 제목 - h1 ~ h6

- h : heading
- h1부터 h6까지 존재한다.

```html
<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>
```

> 실제로는 h1이 text 크기가 가장 크며 h6의 가장 작다

### 사용 일람

- 웹 브라우저가 제목의 정보를 사용해 자동으로 문서 콘텐츠의 표(목차)를 만드는 등의 작업을 수행할 수 있다.
  - 내가 작성한 h1 ~ h6를 수집해서 목차를 만드는 작업을 한다.
- 제목 단계를 건너 뛰는 것을 피해라. (ex. h2에서 h4로 이동)

- 글씨 크기를 위해서 사용하지말고 CSS font-size를 이용해라.
  - 정확한 스타일링을 진행할 수 없다.
- 페이지 당 하나의 h1만 사용해라.
  - 스크린 리더 사용자와 SEO에도 더 적합하다.

> 웹 표준과 웹 접근성이 높은 페이지를 만들기 위해서 준수하는 것이 좋다.

```html
<h1>Heading elements</h1>
<h2>Summary</h2>
<p>Some text here...</p>

<h2>Examples</h2>
<h3>Example 1</h3>
<p>Some text here...</p>

<h3>Example 2</h3>
<p>Some text here...</p>

<h2>See also</h2>
<p>Some text here...</p>
```

> 위의 언급한 내용(사용 일람)들을 전부 준수한 형태의 HTML

---

## 2. 본문 - p

- 하나의 문단을 나타낸다.
- 컨테이너의 역할을 하기 때문에 내부에 연관성 있는 데이터들을 그룹화해서 사용해도 상관 없다.
- 블록 레벨 요소이기 때문에 인라인 요소를 담아서 그룹화해서 사용해도 된다.
- 개행을(Enter)를 무시하고 표시되고, 스페이스가 5 ~ 6 개 있어도 하나의 스페이스만 나타난다.
- 모든 브라우저에 호환 가능하다.

```html
<p>Text Content</p>
```

- p 요소는 한 줄 간격으로 분리된다.
- 첫 줄 들여쓰기, p 요소의 간격을 조절하는 것은 CSS를 통해서 바꾸면 된다.

> 문단 다음 여백을 늘리는 CSS

```css
p {
  margin-bottom: 2em;
}
```

#### 접근성 고려사항

- 콘텐츠를 p 요소로 나누면 페이지의 접근성을 높인다.
- 여백을 사용하려고 p 요소를 사용하면 스크린 리더 사용자에게 부정적인 경험을 줄 수 있다.

---

## 3. 본문 - br

- 줄바꿈 요소 (개행을 위한 태그), 빈 요소
- 긴 호흡을 가진 문장을 끊어주는 역할 (line-break)
- 모든 브라우저에서 호환 가능하다.

> br 태그 예시

```html
<p>
  O’er all the hilltops<br />
  Is quiet now,<br />
  In all the treetops<br />
  Hearest thou<br />
  Hardly a breath;<br />
  The birds are asleep in the trees:<br />
  Wait, soon like these<br />
  Thou too shalt rest.
</p>
```

```
O’er all the hilltops
Is quiet now,
In all the treetops
Hearest thou
Hardly a breath;
The birds are asleep in the trees:
Wait, soon like these
Thou too shalt rest.
```

- 실제 사용자가 볼 때는 Enter를 입력한 것과 동일한 모습을 보인다.
- HTML은 개행과 공백을 많이 두어도 1개의 공백으로 인식한다.
- p 요소와 p 요소 사이의 여백을 많이 두고 싶을 때 br 요소를 여러개 쓰는 것이 아닌 CSS를 통해서 여백의 크기를 조절해야 한다.

---

## 4. 본문 - blockquote, q

### blockquote 요소

- 인용 블록 요소
- 안쪽의 텍스트가 긴 인용문에 사용
- 앞 쪽에 여백이 들어간다.

### q 요소

- 인라인 인용문 요소
- 텍스트가 짧은 인라인 인용문
- q 요소에 감싸진 텍스트는 쌍따옴표(")가 들어가 있음

#### cite

- blockqoute, q 요소 공통 속성
- 인용문의 출처 문서나 메시지를 가리키는 URL
- 인용문의 맥락 혹은 출처 정보를 가리킬 용도이다.

> blockquote 예시

```html
<blockquote cite="https://www.huxley.net/bnw/four.html">
  <p>
    Words can be like X-rays, if you use them properly—they’ll go through
    anything. You read and you’re pierced.
  </p>
</blockquote>
```

> q 태그 예시

```html
<p>
  Mozilla 재단의 웹사이트에 따르면,
  <q cite="https://www.mozilla.org/en-US/about/history/details/"
    >Firefox 1.0 은 2004년 처음 공개되어 큰 성공을 거두었습니다.</q
  >
</p>
```

```
Mozilla 재단의 웹사이트에 따르면, "Firefox 1.0 은 2004년 처음 공개되어 큰 성공을 거두었습니다."
```

> git에서 raw를 확인했을 때는 쌍따옴표가 들어가 있지만, 실제로는 쌍따옴표가 들어가지 않는다.  
> 화면에 표시하기 위해 임의로 쌍따옴표를 입력했다.

> p 태그는 자식 요소가 블록 요소이면 자식 요소 이전에 p태그가 닫힌다. (blockquote를 사용할 수 없다.)

---

## 5. 본문 - pre

- 미리 서식을 지정한 텍스트 (preformatted)
- 텍스트는 고정폭 글꼴을 사용해서 렌더링한다.
- HTML에 작성한 내용 그대로 표현한다.

#### '그대로 표현한다'

> 기존의 HTML 문서는 많은 스페이스나 개행 처리도 1개의 공백으로 처리되어 표현된다.  
> 하지만 pre 요소를 이용하면 입력된 스페이스나 개행이 그대로 표현될 수 있다.

#### '고정폭 글꼴을 사용해서 렌더링한다.'

> 서로 다른 문자가 들어와도 동일한 폭과 글꼴을 사용해서 문자를 렌더링한다.

> pre 요소 예시

```html
<pre>
  L          TE
    A       A
      C    V
       R A
       DOU
       LOU
      REUSE
      QUE TU
      PORTES
    ET QUI T'
    ORNE O CI
     VILISÉ
    OTE-  TU VEUX
     LA    BIEN
    SI      RESPI
            RER       - Apollinaire
</pre>
```

```
  L          TE
    A       A
      C    V
       R A
       DOU
       LOU
      REUSE
      QUE TU
      PORTES
    ET QUI T'
    ORNE O CI
     VILISÉ
    OTE-  TU VEUX
     LA    BIEN
    SI      RESPI
            RER       - Apollinaire
```

---

## 6. 본문 - figure, figcaption

### figure

- 독립적인 콘텐츠를 표현한다.
  - ex. pre 요소, blockquote 요소
- 모든 브라우저에 호환 가능하다.
- figure는 구획루트이므로 figure 요소의 콘텐츠는 문서의 주 개요에서 제외된다.
- 보통 figure는 설명을 붙일 때(figcaption과 같이 사용할 때) 사용한다.

### figcaption

- figure 요소 안에서 설명을 붙이는 역할.

#### figure 요소의 자식요소

1.  figcaption + 플로우 컨텐츠
2.  플로우 컨텐츠 + figcaption
3.  플로우 컨텐츠

> figure 요소로 감싸지 않고 플로우 컨텐츠와 figcaption을 p 요소 2개로 표현하면 연관성이 있는 데이터지만 연관성이 없어진다.

> figure 요소 예시

```html
<figure>
  <figcaption><cite>Edsger Dijkstra:</cite></figcaption>
  <blockquote>
    If debugging is the process of removing software bugs, then programming must
    be the process of putting them in.
  </blockquote>
</figure>
```

```
Edsger Dijkstra:
    If debugging is the process of removing software bugs, then programming must be the process of putting them in.
```

> blockquote 요소의 특성 때문에 앞쪽의 여백이 들어가게 된다.  
> 자식 요소는 figcaption + 플로우 컨텐츠

---

## 7. 본문 - hr

- 수평선을 나타내는 태그
- 단독으로 요소 사이를 나눌 때 사용
- 빈 요소
- hr 요소에 스타일을 넣을 때는 속성을 사용하지 말고 CSS를 이용해서 스타일을 넣어주는 것이 좋다.

```html
<p>§1: The first rule of Fight Club is: You do not talk about Fight Club.</p>

<hr />

<p>§2: The second rule of Fight Club is: Always bring cupcakes.</p>
```

---

## 8. 본문 - abbr, address, cite, bdo

### abbr

- 준말, 약어
- title 속성을 이용해서 abbr의 설명을 넣어줄 수 있다.
- abbr로 나타난 텍스트(약어)에 마우스를 올려 놓으면 툴팁으로 원래의 의미(title 속성의 내용)이 나타난다.

> title 속성은 abbr 요소에만 사용되는 속성이 아닌 전역 속성이다.  
> 그렇기 때문에 다른 요소에 title 속성을 이용하면 마우스를 올려 놓았을 때 똑같이 툴팁으로 title의 내용을 볼 수 있다.  
> abbr 요소와 사용했을 때 더욱 효과적으로 title 속성을 사용할 수 있다.

> abbr 요소 예시

```html
<p>
  You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your
  <abbr title="HyperText Markup Language">HTML</abbr>.
</p>
```

> 실제 output에는 CSS와 HTML 텍스트 하단에 도트로 선이 표현되어 있다.  
> 그리고 마우스를 올려 놓으면 툴팁으로 title의 내용을 확인할 수 있다.

### address

- 이전에는 오프라인 주소를 나타낼 때 쓰는 태그
- address 요소 안에 내용이 주소라는 의미가 크다.

> address 요소 예시

```html
<address>
  You can contact author at
  <a href="http://www.somedomain.com/contact"> www.somedomain.com</a>.<br />
  You may also want to visit us:<br />
  Mozilla Foundation<br />
  331 E Evelyn Ave<br />
  Mountain View, CA 94041<br />
  USA
</address>
```

```
You can contact author at www.somedomain.com.
If you see any bugs, please contact webmaster.
You may also want to visit us:
Mozilla Foundation
331 E Evelyn Ave
Mountain View, CA 94041
USA
```

> chrome의 경우에는 address 요소 안에 있는 텍스트의 글꼴은 Italic 글꼴로 나타난다. 이 부분은 브라우저마다 다를 수 있다.  
> address 안에는 웹사이트 주소, 이메일 주소, 위치 주소 등 실제 주소가 들어있다는 의미가 큰 요소이다.

### cite

- 인용의 출처를 나타내는 요소
- q 요소, blockquote 요소와 함께 사용한다.

> cite 요소는 출처가 눈에 보일 수 있게 사용하는 것이 좋다.  
> 인용 요소인 q, blockquote 요소 안에서 사용해도 상관 없다.

> cite 요소 예시

```html
<p>More information can be found in <cite>[ISO-0000]</cite>.</p>
```

> 위의 예시를 보면 cite 요소를 p나 blockquote 요소 안의 속성으로 넣은 것이 아니라 눈에 보일 수 있게 사용했다.  
> 보통 브라우저에서는 기울임꼴로 표현된다.

### bdo

- bidirectional override (양방향 텍스트 재정의 요소)
- 글의 방향을 바꿀 때 사용한다.
- dir 속성에서 속성값을 rtl(right to left) or ltr(left to right) 식으로 변경해서 사용 가능하다.

> bdo 요소 예시

```html
<p>이 글은 왼쪽에서 오른쪽으로 작성합니다.</p>
<p><bdo dir="rtl">이 글은 오른쪽에서 왼쪽으로 작성합니다.</bdo></p>
```

```
이 글은 왼쪽에서 오른쪽으로 작성합니다.

.다니합성작 로으쪽왼 서에쪽른오 은글 이
```

> dir 속성 rtl(오른쪽에서 왼쪽)을 이용해서 텍스트를 오른쪽에서 왼쪽으로 작성할 수 있다.

---

## 9. 포매팅 - b, strong

- b태그와 strong 태그는 페이지에서 봤을 때 동일한 효과를 낸다.
- 스크린 리더에서는 strong 태그를 사용했을 때 더욱 강조해서 읽어준다.

### b 태그

- 요약 키워드, 리뷰의 제품명 (독자의 주의를 끌기 위한 용도)
- 특별한 중요성을 가지지 않지만 굵게 표시될 부분

> b태그 예시

```html
Keywords are displayed with the default style of the
<b>element, likely in bold</b>.
```

> element, likely in bold가 bold처리되어 나타나게 된다.

### strong 태그

- 높은 중요도를 가진 요소
- 참고 또는 경고를 나타내는 단락의 레이블을 표시하는 것

> strong 태그 예시

```html
<p>
  Before proceeding, <strong>make sure you put on your safety goggles</strong>.
</p>
```

> 주의사항

특정 부분을 강조하기 위한 태그이기 때문에 문단 전체를 굵게하기 위해서 b 태그나 strong 태그로 감싸면 안된다.  
그렇게 하기 위해서는 CSS(font-weight)를 사용해서 꾸며줘야 한다.

---

## 10. 포매팅 - i, em

- i, em 태그 모두 기울임꼴로 표시된다.
- b, strong 태그처럼 완전히 다른 의미를 가진 태그이다.
- 스타일링을 위해서 사용하려면 CSS(font-style)를 이용해서 표현해야 한다.

### i 태그

- 구분해야 하는 부분 (초기 HTML에서는 단순히 기울이는 시각적 요소)
- 기술 용어, 외국인 구절, 등장인물의 생각

> i 태그 예시

```html
<p>
  라틴어 문구 <i>Veni, vidi, vici</i>는 음악과 예술, 문학에 자주 등장합니다.
</p>
```

> <p>라틴어 문구 <i>Veni, vidi, vici</i>는 음악과 예술, 문학에 자주 등장합니다.</p>   
> 단순히 기울이는 게 아니라 외국어를 구분하기 위해서 사용됐다.

### em 태그

- 강조가 들어가기 위해서 사용한다.
- em 요소를 중첩하면 더 큰 강세를 나타낸다.
- 강조에 중요도까지 포함된다면 strong 태그를 사용하는 것이 적합하다.

> em 태그 예시

```html
<p>Get out of bed <em>now</em>!</p>
```

> <p>Get out of bed <em>now</em>!</p>

---

## 11. 포매팅 - mark, small, sub, sup

### mark 태그

- 하이라이팅을 해주는 태그 (관심, 검색 결과)
- 인용문에서 사용자가 관심을 가질 텍스트를 강조할 때 사용한다.
- mark 요소는 연관성을 가진 부분, strong 요소는 중요도를 가진 부분에서 사용한다.

> mark 요소 예시

```html
<blockquote>
  During the battle, <mark>Rebel spies managed to steal secret plans</mark> to
  the Empire’s ultimate weapon,
</blockquote>
```

<blockquote>
  During the battle, <mark>Rebel spies managed to steal secret plans</mark> to
  the Empire’s ultimate weapon,
</blockquote>

### small 태그

- 덧붙임 글 요소
- 덧붙이는 글이나 저작권과 법률 표기 등의 작은 텍스트를 나타낸다.

> small 요소 예시

```html
<p>
  This is the first sentence.
  <small>This whole sentence is in small letters.</small>
</p>
```

> <p>This is the first sentence. <small>This whole sentence is in small letters.</small></p>

### sub 태그

- 아래 첨자 요소
- 논문의 각주, 화학식에서 표현될 때 많이 사용한다.

> sub 요소 예시

```html
<p>
  Almost every developer's favorite molecule is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, which is commonly known
  as "caffeine."
</p>
```

> C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>

### sup 태그

- 위 첨자 요소
- 지수를 표기하거나 서수, 변수를 표기할 때 사용한다.

> sup 요소 예시

```html
<p>
  <var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var>
</p>
```

> <p><var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var></p>

---

## 12. 포매팅 - del, ins, code, kbd

### del 태그

- 제거된 텍스트의 범위를 나타낸다.
- cite, datetime 속성을 사용할 수 있다. (ins 태그 동일)

### ins 태그

- 추가된 텍스트의 범위를 나타낸다.

> del, ins 요소 예시

```html
<del>
  <p>“I apologize for the delay.”</p>
</del>
<ins cite="../howtobeawizard.html" datetime="2018-05">
  <p>“A wizard is never late …”</p>
</ins>
```

<del>
  <p>“I apologize for the delay.”</p>
</del>

<ins cite="../howtobeawizard.html" datetime="2018-05">
  <p>“A wizard is never late …”</p>
</ins>

### code 태그

- 짧은 코드 조각을 나타내는 스타일을 사용 (인라인 요소)
- 고정폭글꼴로 나타낸다.
- 여러 줄의 코드를 나타내려면 pre 태그를 사용한다.

> code 요소 예시

```html
<p>함수 <code>selectAll()</code>는 입력 필드의 모든 텍스트를 선택</p>
```

> <p>함수 <code>selectAll()</code>는 입력 필드의 모든 텍스트를 선택</p>

### kbd 태그

- 키보드 입력 요소
- 인라인 요소에 고정폭 글꼴로 나타낸다.

> kbd 요소 예시

```html
<p>
  Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an
  MDN page.
</p>
```

> <p>Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.</p>

---

## 13, 14. a태그와 하이퍼링크

- 앵커(닻) 요소
- 하이퍼 링크를 만드는 태그

### href 속성

- 하이퍼링크가 가리리키는 URL (목적지를 명시해야 한다.)
- 기본적으로 이미 방문한 페이지는 색상을 변경해서 스타일링한다.

### 절대 경로와 상대경로

#### 절대 경로

- 현재의 위치와 관계없이 절대값의 위치로 만들어주는 것

> 절대경로 예시

```html
<a href="https://www.mozilla.com">Mozilla</a>
```

> <a href="https://www.mozilla.com">Mozilla</a>

#### 상대 경로

- 현재의 위치가 경로에 영향을 미치는 것 (다른 파일로 연결할 때)

```html
<a href="another/example.html">다른 예시 파일</a>
```

> <a href="another/example.html">다른 예시 파일</a>

#### E-mail/전화

- 컴퓨터가 이메일을 보내주거나 전화를 걸어주는 것이 아니라 관련 프로그램이 있으면 프로그램을 사용해서 이메일을 보내주거나 전화를 걸어준다.

```html
<a href="mailto:example@gmail.com">Send Email</a>
<a href="tel:123-5890">123-5890</a>
```

> <a href="mailto:example@gmail.com">Send Email</a>  
> <a href="tel:123-5890">123-5890</a>

### target 속성

- 목적지를 어디에 표시할 것인지 결정하는 태그
  - \_self : 현재 브라우징에서 표시된다. (기본 설정값)
  - \_blank : 새로운 브라우징에서 표시된다.

---

## 15. 엔티티(Entity)

- 스페이싱이나 태그 등을 그대로 사용하고 싶을 때 사용하는 개념
- &lt;, &gt;, &amp; 등 여러 특수문자를 그대로 사용하고 싶을 때
- 스페이싱을 입력하는 엔티티 : &nbsp(;)

> 더 많은 엔티티를 확인하고 싶다면
> https://dev.w3.org/html5/html-author/charref 에서 확인할 수 있다.
