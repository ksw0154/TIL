# JavaScript [기초 문제3]

## 최솟값 구하기 - 종합

```javascript
function answer(x, y) {
  let min = x < y ? x : y;

  return min;
}
```

---

## 제곱 구현 - 종합

```javascript
function answer(x, y) {
  let result = 1;

  for (let i = 0; i < y; i++) {
    result *= x;
  }

  return result;
}
```

---

## 놀이기구 입장 제한 - 종합

```javascript
function answer(user) {
  let permit = false;

  // if (user.height >= 150) {
  //   permit = true;
  // }

  permit = user.height >= 150;
  return permit;
}
```

---

## 요일 구하기 - 종합

---

## 중복 단어 제거 - 종합

---

## 배열 내 최댓값 구하기 - 종합

---

## 스팸 메일 - 종합

---

## 배열 회전 - 종합

---

## 문자 교정 - 종합

---

## 2차원 배열의 곱셈 합 - 종합
