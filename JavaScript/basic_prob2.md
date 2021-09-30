# JavaScript [기초 문제2]

## 대소 비교 - 조건문

```javascript
function answer(x, y) {
  let result = "";

  if (x > y) {
    result = ">";
  } else if (x < y) {
    result = "<";
  } else if (x == y) {
    result = "=";
  }
  return result;
}
```

---

## 나누기와 대소 비교 - 조건문

```javascript
function answer(a, b, c, d) {
  let result = "";
  x = a / b;
  y = c / d;
  if (x > y) {
    result = 1;
  } else if (x < y) {
    result = -1;
  } else if (x == y) {
    result = 0;
  }

  return result;
}
```

---

## 윤년 판별기 - 조건문

```javascript
function answer(year) {
  let result;
  // My Answer
  // if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  //   result = true;
  // } else {
  //   result = false;
  // }

  if (year % 4 == 0 && year % 100 != 0) {
    result = true;
  } else if (year % 400 == 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
```

---

## ATM 기기 - 조건문

```javascript
function answer(withdraw, total) {
  let result;

  if (withdraw % 5 == 0 && total - withdraw - 0.5 >= 0) {
    result = total - withdraw - 0.5;
  } else {
    result = total;
  }

  return result;
}
```

--

## 네번째 좌표 - 조건문

```javascript
// function answer(location) {
//   let result = [];

//   for (let i = 0; i < location.length; i++) {
//     if (location[i][0] == location[i][1]) {
//       result.push(location[i][2]);
//     } else if (location[i][1] == location[i][2]) {
//       result.push(location[i][0]);
//     } else {
//       result.push(location[i][1]);
//     }
//   }

//   return result;
// }

function answer(x_arr, y_arr) {
  let result = [];

  if (x_arr[0] == x_arr[1]) {
    result.push(x_arr[2]);
  } else if (x_arr[1] == x_arr[2]) {
    result.push(x_arr[0]);
  } else {
    result.push(x_arr[1]);
  }

  if (y_arr[0] == y_arr[1]) {
    result.push(y_arr[2]);
  } else if (y_arr[1] == y_arr[2]) {
    result.push(y_arr[0]);
  } else {
    result.push(y_arr[1]);
  }

  return result;
}
```
