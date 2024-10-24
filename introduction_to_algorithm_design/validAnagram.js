function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const counter = {};

  for (let letter of str1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }

  for (let letter of str2) {
    if (counter[letter]) {
      counter[letter] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(validAnagram('abbc', 'aabc'));
console.log(validAnagram('abba', 'abab'));
console.log(validAnagram('aasdebasdf', 'adfeebed'));
