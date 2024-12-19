function generateParenthesis(n: number): string[] {
  const stack: string[] = [];
  const result: string[] = [];

  function dfs(openC: number, closedC: number, parenthesis: string) {
    if (openC === n && closedC === n) {
      result.push(parenthesis);
      return;
    }

    if (openC < n) {
      dfs(openC + 1, closedC, parenthesis.concat("("));
    }
    if (closedC < openC) {
      dfs(openC, closedC + 1, parenthesis.concat(")"));
    }
  }
  dfs(1, 0, "(");

  return result;
}
