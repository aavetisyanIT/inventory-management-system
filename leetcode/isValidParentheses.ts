function isValid(s: string): boolean {
  const stack: string[] = [];
  let i = 0;
  const bracketPairs = "() {} []";

  while (i < s.length) {
    stack.push(s[i]);
    i++;

    const open = stack[stack.length - 2];
    const close = stack[stack.length - 1];
    if (bracketPairs.includes(open + close)) {
      stack.pop();
      stack.pop();
    }
  }

  return !!stack.length;
}
