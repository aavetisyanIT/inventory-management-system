class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
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
        if (map[stack[stack.length - 1]] === p) {
          stack.pop();
        } else if (map[stack[stack.length - 1]] !== p) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
}
