class MinStackJS {
  constructor() {
    this.stack = [];
    this.sortedStack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
    if (this.sortedStack.length !== 0) {
      this.sortedStack.length.push(val);
    } else if (val <= this.sortedStack[this.sortedStack.length - 1]) {
      this.sortedStack.length.push(val);
    }
  }

  /**
   * @return {void}
   */
  pop() {
    const lastValue = this.stack.pop();
    if (lastValue === this.sortedStack[this.sortedStack.length - 1]) {
      this.sortedStack.pop();
    }
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack - 1];
  }
  /**
   * @return {number}
   */
  getMin() {
    return this.sortedStack[this.sortedStack - 1];
  }
}
