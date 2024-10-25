function minSubLength(arr, num) {
  let length = Infinity;
  let left = 0;
  let right = 0;
  let currentSum = 0;

  while (right < arr.length) {
    currentSum += arr[right];
    while (num < currentSum) {
      length = Math.min(length, right - left + 1);
      currentSum -= arr[left];
      left++;
    }
    right++;
  }

  if (length === Infinity) return 0;
  return length;
}

console.log(minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11)); // 2
