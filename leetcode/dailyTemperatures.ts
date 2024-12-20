function dailyTemperatures(temperatures: number[]): number[] {
  const answer: number[] = [];
  for (let i = 0; i < temperatures.length; i++) {
    let j = i + 1;
    while (temperatures[j] <= temperatures[i] && j < temperatures.length) {
      j++;
    }
    if (j === temperatures.length) {
      answer.push(0);
    } else {
      answer.push(j - i);
    }
  }

  return answer;
}
