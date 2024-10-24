function averagePair(arr, num) {
  const result = [];
  let left = 0;
  let right = arr.length - 1;

  while (right >= left) {
    if (arr[left] + arr[right] === num * 2) {
      result.push([arr[left], arr[right]]);
      // 記得加入結果後要更新 pointer 位置
      left++;
      right--;
    } else if (arr[left] + arr[right] > num * 2) {
      right--;
    } else if (arr[left] + arr[right] < num * 2) {
      left++;
    }
  }

  return result;
}

averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);
// The number pair is -11 and 14, 0 and 3, 1 and 2
