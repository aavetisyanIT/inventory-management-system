function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (let element of tokens) {
    if (["+", "-", "*", "/"].includes(element)) {
      // Pop the top two elements for the operation
      const b = stack.pop()!;
      const a = stack.pop()!;
      if (element === "+") {
        stack.push(a + b);
      } else if (element === "-") {
        stack.push(b - a);
      } else if (element === "*") {
        stack.push(a * b);
      } else if (element === "/") {
        stack.push(Math.trunc(b / a));
      }
    } else {
      stack.push(Number(element));
    }
  }

  return stack[0];
}
