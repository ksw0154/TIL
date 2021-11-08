// function solution(n, lost, reserve) {
//   var answer = 0;

const { end } = require("cheerio/lib/api/traversing");

//   let std = new Array(n).fill(1);

//   for (let i = 0; i < lost.length; i++) {
//     std[lost[i] - 1]--;
//   }

//   for (let i = 0; i < reserve.length; i++) {
//     std[reserve[i] - 1]++;
//   }

//   for (let i = 0; i < std.length; i++) {
//     if (std[i] === 0) {
//       if (std[i - 1] === 2) {
//         std[i]++;
//         std[i - 1]--;
//       } else if (std[i + 1] === 2) {
//         std[i]++;
//         std[i + 1]--;
//       }
//     }

//     if (std[i] >= 1) {
//       answer++;
//     }
//   }
//   return answer;
// }

function solution(n, lost, reserve) {
  const realLost = lost.filter((element) => !reserve.includes(element));

  let realReserve = reserve.filter((element) => !lost.includes(element));

  return (
    n -
    realLost.filter((lost) => {
      const lend = realReserve.find((element) => Math.abs(element - lost) == 1);

      if (!lend) return lost;

      realReserve = realReserve.filter((element) => element !== lend);
    }).length
  );
}

console.log(solution(5, [2, 3, 4], [1, 3, 5]));
// console.log(solution(5, [2, 4], [3]));
// console.log(solution(3, [3], [1]));
