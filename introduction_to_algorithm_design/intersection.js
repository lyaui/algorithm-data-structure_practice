// set

function intersection(nums1, nums2) {
  const result = new Set();
  const set = new Set(nums1);

  for (let value of nums2) {
    if (set.has(value)) {
      result.add(value);
    }
  }

  return [...result];
}

// map
// function intersection(nums1, nums2) {
//   const result = [];
//   const counter = {};

//   // 第一組 for loop 時間複雜度 m
//   for (let value of arrA) {
//     counter[value] = counter[value] ? counter[value] + 1 : 1;
//   }

//   // 第二組 for loop 時間複雜度 n
//   for (let value of arrB) {
//     if (counter[value]) {
//       result.push(value);
//     }
//   }

//   // 避免重複
//   return [...new Set(result)];
// }

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
// [3, 6, 8, 15]
