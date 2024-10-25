// naive
// function maxSum(arr, size) {
//   let max = -Infinity;
//   for (let i = 0; i < arr.length - size + 1; i++) {
//     let currentSum = 0;
//     for (let j = i; j < i + size; j++) {
//       currentSum += arr[j];
//       max = Math.max(max, currentSum);
//     }
//   }
//   return max;
// }

function maxSum(arr, size) {
  let max = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < size; i++) {
    currentSum += arr[i];
  }

  // 記得要設定
  max = Math.max(max, currentSum);

  for (let i = size; i < arr.length; i++) {
    currentSum = currentSum + arr[i] - arr[i - size];
    max = Math.max(max, currentSum);
  }

  return max;
}

console.log(maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)); // 12

// naive
// function minSum(arr, size) {
//   let min = Infinity;
//   for (let i = 0; i < arr.length - size + 1; i++) {
//     let currentSum = 0;
//     for (let j = i; j < i + size; j++) {
//       currentSum += arr[j];
//       min = Math.min(min, currentSum);
//     }
//   }
//   return min;
// }

function minSum(arr, size) {
  let min = Infinity;
  let currentSum = 0;

  for (let i = 0; i < size; i++) {
    currentSum += arr[i];
  }

  min = Math.min(currentSum, min);

  for (let i = size; i < arr.length; i++) {
    currentSum = currentSum + arr[i] - arr[i - size];
    min = Math.min(currentSum, min);
  }

  return min;
}

console.log(minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)); // -28
