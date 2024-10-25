function uniqueLetterString(str) {
  let left = 0;
  let right = 0;
  let max = -Infinity;

  const map = new Map();

  while (right < str.length) {
    if (!map.has(str[right])) {
      map.set(str[right], 1);
      right++;
      max = Math.max(right - left, max);
    } else {
      map.delete(str[left]);
      left++;
    }
  }

  if (max === -Infinity) return null;
  return max;
}

console.log(uniqueLetterString('thisishowwedoit')); // 6
