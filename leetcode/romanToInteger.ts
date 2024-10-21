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

  const romanNumberArr = s.split("");
  let result = 0;

  for (let i = romanNumberArr.length - 1; i >= 0; i--) {
    if (i === romanNumberArr.length - 1) {
      result += map[romanNumberArr[i]];
    } else {
      const currentRomanNum = romanNumberArr[i];
      const currentNum = map[currentRomanNum];
      const nextRomanNum = romanNumberArr[i + 1];
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
