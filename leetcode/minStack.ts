class MinStack {
  constructor(private stack: number[] = [], private minStack: number[] = []) {
    this.stack = stack;
    this.minStack = minStack;
  }

  push(val: number): void {
    this.stack.push(val);
    if (this.minStack.length === 0) {
      this.minStack.push(val);
    } else if (val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  }

  pop(): void {
    const removedStackVal = this.stack.pop();
    if (removedStackVal === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
