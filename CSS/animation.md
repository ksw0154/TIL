# CSS [애니메이션]

## 1. 애니메이션 개요

- transition과 비슷한 개념을 가지고 있다.
- transition : 특정 action에 의해서 변경된다.
- animation: action이 없어도 요소가 변경될 수 있다.
  - A - B - C - D 상태의 set를 만들 수 있다.
  - time도 제어할 수 있다.

---

## 2. @keyframes

- 애니메이션 중간중간의 특정 지점들을 거칠 수 있는 키프레임들을 설정한다.

```css
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 100%;
  }

  to {
    margin-left: -20%;
    width: 80%;
  }
}
```

- keyframe을 2개만 사용할 때는 from과 to를 사용할 수 있다.

```css
.box {
  animation: first-animation 2s infinite;
}

@keyframes first-animation {
  0% {
    font-size: 20px;
  }
  50% {
    width: 300px;
    font-size: 80px;
  }
  100% {
    font-size: 20px;
  }
}
```

- keyframe을 여러개 사용할 경우 %를 사용해서 표현할 수 있다.
- 지속적으로 반복하기 위해서 infinite 속성을 사용했다.
- animation을 자연스럽게 반복하기 위해서 alternate 속성을 사용할 수 있다.

---

## 3. animation-name, animation-duration

### animation-name

- transition-property와 대응되는 개념
- @keyframes name을 작성하면 된다.

#### name 법칙

- 대소문자를 구분한다.
- a to z, 0 to 9, underscores(\_), dashes(-) 사용 가능
- name을 global values로 지으면 안된다.
  - initial, inherit, revert, unset

```css
.box {
  animation-name: slide;
}

@keyframes slide {
}
```

### animation-duration

- 몇 초에 걸쳐서 animation 할건지 결정한다.
- animation의 한 사이클을 완료하는 데 걸리는 시간을 지정한다.
- 음수 값은 유효하지 않으므로 선언이 무시된다.

```css
.box {
  animation-duration: 500ms;
}
```

---

## 4. animation-delay, animation-timing-function

### animation-delay

- 애니메이션이 시작할 시점을 지정한다.
- 지연시간을 정의한다.
- 음수 값을 지정할 수 있지만, animation이 시작되면 음수 값이 지난 후의 시점으로 시작된다.

### animation-timing-function

- animation의 중간 과정의 효과를 적용한다.
- 기본 값 : ease

```css
.box1 {
  animation: first-animation 1s infinite;
  animation-delay: -0.3s;
  animation-timing-function: ease-in-out;
}

.box2 {
  animation: first-animation 1s infinite;
  animation-delay: 0s;
  animation-timing-function: linear;
}

.box3 {
  animation: first-animation 1s infinite;
  animation-delay: 0.3s;
}
```

---

## 5. animation-iteration-count, animation-direction

### animation-iteration-count

- animation 반복 횟수
- 사용 가능한 값 : `<number>`
- infinite 키워드를 사용해서 지속해서 효과를 줄 수 있다.

```css
.box {
  /* 정수 */
  animation-iteration-count: 2;

  /* 소숫점도 사용 가능하다. */
  animation-iteration-count: 1.5;
}
```

### animation-direction

- animation의 방향성을 작성할 수 있다.

```css
.box {
  animation-name: rotate;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  /* 기본 값 */
  animation-direction: normal;

  /* 반대로 */
  animation-direction: reverse;

  /* 반복할 때 마다 반대로 지정 */
  animation-direction: alternate;
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
```

---

## 6. animation-play-state

### running, paused

- 기본값 : running
- paused : animation을 일시정지할 수 있다.

```css
.box:hover {
  animation-play-state: paused;
}
```

```css
.box {
  animation-play-state: paused;
}

.box:hover {
  animation-play-state: running;
}
```

---

## 7. animation-fill-mode

- animation이 실행 전과 후에 대상에 스타일을 적용하는 방법

### animation 실행 단계

### none

### forwards

- animation이 실행되고 난 후 keyframes의 CSS 모습대로 유지한다.

### backwards

- animation이

### both

---

## 8. animation (shorthand)
