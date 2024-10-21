function romanToInt(s: string): number {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  const romanNumberArr = s.split("");
  let result = 0;
  let i = 0;
  while (i < romanNumberArr.length) {
    const exceptionRomanNum = romanNumberArr[i] + romanNumberArr[i + 1];
    const exceptionNumber = map[exceptionRomanNum];
    if (exceptionNumber) {
      result += exceptionNumber;
      i = i + 2;
    } else {
      result += map[romanNumberArr[i]];
      i++;
    }
  }
  return result;
}
