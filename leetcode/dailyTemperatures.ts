function dailyTemperatures(temperatures: number[]): number[] {
  const answer: number[] = new Array(temperatures.length).fill(0);
  const stack: number[] = [0];

  for (let i = 0; i < temperatures.length; i++) {
    while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const index = stack.pop();
      if (index !== undefined) {
        answer[index] = i - index;
      }
    }
    stack.push(i);
  }

  return answer;
}
