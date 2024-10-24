class MinStack {
  private stack: number[];
  constructor(stack = []) {
    this.stack = stack;
  }

  push(val: number): void {
    this.stack.push(val);
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack.pop();
  }

  getMin(): number {
    return this.stack[0];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 * 
 * Explanation
    MinStack minStack = new MinStack(); => []
    minStack.push(-2); => [-2]
    minStack.push(0); => [-2,0]
    minStack.push(-3); => [-3, -2, 0]
    minStack.getMin(); // return -3 => [-3, -2, 0]
    minStack.pop(); => [ -2, 0]
    minStack.top();    // return 0 => [ -2, 0]
    minStack.getMin(); // return -2 => [ -2, 0]

 */
