let arrs = [[[['a', [['b', ['c']], ['d']]], [['e']], [[['f', 'g', 'h']]]]]];

function collector(arr = []) {
  if (!Array.isArray(arr)) {
    return arr;
  }

  let result = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      result.push(...collector(element));
    } else {
      result.push(element);
    }
  }
  return result;
}

console.log('fin', collector(arrs)); // [a, b, c, d, e, f, g, h]
