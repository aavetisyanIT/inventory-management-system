const testArr = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18];

function swap(left, right, arr) {
  const temp = arr[right];
  arr[right] = arr[left];
  arr[left] = temp;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotValue = arr[start];
  let swapIndex = start;

  for (let i = 1; i <= end; i++) {
    if (arr[i] < pivotValue) {
      swapIndex++;
      swap(i, swapIndex, arr);
    }
  }
  swap(0, swapIndex, arr);
  return swapIndex;
}

console.log(pivot(testArr));

console.log(testArr);
