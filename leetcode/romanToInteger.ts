function romanToInt(s: string): number {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const stringSplit = s.split("");
  let result = 0;

  for (let i = stringSplit.length - 1; i >= 0; i--) {
    if (i === stringSplit.length - 1) {
      result += map[stringSplit[i]];
    } else {
      const currentRomanNum = stringSplit[i];
      const currentNum = map[currentRomanNum];
      const nextRomanNum = stringSplit[i + 1];
      const nextNum = map[nextRomanNum];
      if (currentNum < nextNum) {
        result -= currentNum;
      } else {
        result += currentNum;
      }
    }
  }
  return result;
}
