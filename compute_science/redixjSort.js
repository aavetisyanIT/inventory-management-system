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

function radixSort(numArr) {
  const mostDigitsNum = mostDigits(numArr);

  for (let k = 0; k < mostDigitsNum; k++) {
    const map = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
    };

    for (let num of numArr) {
      const currentNumKthDigit = getDigit(num, k);
      map[currentNumKthDigit].push(num);
    }
    numArr = [];

    for (let key in map) {
      numArr = [...numArr, ...map[key]];
    }
  }
  return numArr;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
