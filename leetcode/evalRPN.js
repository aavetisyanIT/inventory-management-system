class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    let result = 0;
    const stack = [];
    const operators = ["+", "-", "*", "/"];
    for (let element of tokens) {
      if (operators.includes(element)) {
        if (element === "+") {
          if (stack.length === 2) {
            result += Number(stack.pop()) + Number(stack.pop());
          } else {
            result += Number(stack.pop());
          }
        } else if (element === "-") {
          if (stack.length === 2) {
            result = result - Number(stack.pop()) - Number(stack.pop());
          } else {
            result -= Number(stack.pop());
          }
        } else if (element === "*") {
          if (stack.length === 2) {
            result = result * Number(stack.pop()) * Number(stack.pop());
          } else {
            result = result * Number(stack.pop());
          }
        } else if (element === "/") {
          if (stack.length === 2) {
            result = result / Number(stack.pop()) / Number(stack.pop());
          } else {
            result = result / Number(stack.pop());
          }
        }
      } else {
        stack.push(Number(element));
      }
    }
    return result;
  }
}
