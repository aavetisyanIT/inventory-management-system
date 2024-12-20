function dailyTemperatures(temperatures: number[]): number[] {
  const answer: number[] = new Array(temperatures.length).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    const currentTemp = temperatures[i];
    while (
      stack.length > 0 &&
      currentTemp > temperatures[stack[stack.length - 1]]
    ) {
      const lastStackTemp = stack.pop();
      answer[i] = i - stack[i];
    }
    stack.push(i);
  }

  return answer;
}
