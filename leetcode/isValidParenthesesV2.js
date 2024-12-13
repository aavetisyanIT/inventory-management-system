/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  for (let p of s) {
    if (p in map) {
      stack.push(p);
    } else {
      if (stack.length === 0) return false;
      if (map[stack.pop()] === p) {
        continue;
      }
      return false;
    }
  }
  return stack.length === 0;
};
