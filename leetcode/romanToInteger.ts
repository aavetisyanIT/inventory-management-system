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

  romanNumberArr.forEach((romanNum, i) => {
    if (map[romanNum] < map[romanNumberArr[i + 1]]) {
      result -= map[romanNum];
    } else {
      result += map[romanNum];
    }
  });

  return result;
}
