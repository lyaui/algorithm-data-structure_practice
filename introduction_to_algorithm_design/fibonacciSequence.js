// naive
// function fs(n) {
//   const arr = [];
//   for (let i = 0; i < n; i++) {
//     if (i === 0 || i === 1) {
//       arr.push(i);
//     } else {
//       arr.push(arr[i - 2] + arr[i - 1]);
//     }
//   }

//   return arr[arr.length - 1];
// }

function memoryFs(n, cache = {}) {
  if (n === 0 || n === 1) {
    return n;
  }
  cache[n] = cache[n] || fs(n - 2) + fs(n - 1);
  return cache[n];
}

function fs(n) {
  return memoryFs(n);
}

console.log(fs(0));
console.log(fs(1));
console.log(fs(2));
console.log(fs(3));
console.log(fs(4));
console.log(fs(5));
console.log(fs(6));
console.log(fs(7));
console.log(fs(8));
