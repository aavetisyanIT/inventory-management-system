function getDigit(num, i) {
  const reversedArr = num.toString().split("").reverse();
  return reversedArr[i] ? reversedArr[i] : 0;
}

function digitCount(num) {
  if (num === 0) return 1;
  return num.toString().length;
}

function mostDigits(numArr) {
  let result = digitCount(numArr[0]);
  for (let i = 0; i < numArr.length; i++) {
    if (result < digitCount(numArr[i])) {
      result = digitCount(numArr[i]);
    }
  }

  return result;
}
