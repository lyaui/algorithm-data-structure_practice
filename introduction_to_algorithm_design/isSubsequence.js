// pointer
// function isSubsequence(s, t) {
//   if (s.length === 0) return true;

//   let pointer1 = 0;
//   let pointer2 = 0;

//   while (pointer2 < t.length) {
//     if (s[pointer1] === t[pointer2]) {
//       pointer1++;
//       pointer2++;
//     } else {
//       pointer2++;
//     }
//   }
//   return pointer1 === s.length;
// }

function isSubsequence(s, t) {
  if (s.length === 0) return true;

  let sIndex = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[sIndex]) {
      sIndex++;
    }
  }
  return sIndex === s.length;
}

console.log(isSubsequence('abc', 'ahbgdc')); // true
console.log(isSubsequence('hello', 'hello Dear')); // true
console.log(isSubsequence('book', 'brooklyn')); // true
console.log(isSubsequence('abc', 'bac')); // false
