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

```javascript
function answer(str) {
  let week = new Array("일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일");
  let day_index = new Date(str).getDay();
  let day = week[day_index];

  return day;
}
```

---

## 중복 단어 제거 - 종합

```javascript
function answer(arr) {
  let new_arr = [];

  arr.forEach((element) => {
    if (!new_arr.includes(`${element}`)) {
      new_arr.push(element);
    }
  });

  return new_arr;
}

// user code (1)
function answer(arr) {
  let new_arr = [];

  new Set(arr).forEach((item) => {
    new_arr.push(item);
  });
  return new_arr;
}

// user code (2)
function answer(arr) {
  let new_arr = [];

  new_arr = Array.from(new Set(arr));

  return new_arr;
}
```

---

## 배열 내 최댓값 구하기 - 종합

```javascript
function answer(arr) {
  let max;
  // 0으로 초기화하면 배열의 원소가 다 - 값일 때 0이 최대값으로 출력 된다.
  // max = 0;

  // ex1
  max = Number.MIN_SAFE_INTEGER;

  // ex2
  // max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
```

---

## 스팸 메일 - 종합

```javascript
function answer(str) {
  let spam_flag;

  // str = str.toUpperCase();

  // if (str.includes("ADVERT")) {
  //   spam_flag = true;
  // } else {
  //   spam_flag = false;
  // }

  spam_flag = str.toUpperCase().includes("ADVERT");

  return spam_flag;
}
```

---

## 배열 회전 - 종합

```javascript
function answer(user) {
  let reverse = [];

  // user code(1)
  // for (let i = user.length - 1; i >= 0; i--) {
  //   reverse.push(user[i]);
  // }

  // user code(2)
  for (let i = 0; i < user.length / 2; i++) {
    tmp = user[i];
    user[i] = user[user.length - 1 - i];
    user[user.length - 1 - i] = tmp;
  }

  reverse = user;

  return reverse;
}
```

---

## 문자 교정 - 종합

```javascript
function answer(str) {
  let fix_str = "";

  let tmp = str.split(" ");
  for (let i = 0; i < tmp.length; i++) {
    tmp[i] = tmp[i][0].toUpperCase() + tmp[i].slice(1);
  }
  fix_str = tmp.join(" ");

  return fix_str;
}
```

---

## 2차원 배열의 곱셈 합 - 종합

```javascript
function answer(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}
```
