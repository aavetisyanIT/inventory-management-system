function swap(leftIndex, rightIndex, arr) {
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotValue = arr[0];
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivotValue) {
      pivotIndex++;
      swap(i, pivotIndex, arr);
    }
  }
  swap(start, pivotIndex, arr);
  return pivotIndex;
}

function quickSort(arr, leftIndex = 0, rightIndex = arr.length - 1) {
  if (leftIndex < rightIndex) {
    const pivotIndex = pivot(arr, leftIndex, rightIndex);
    quickSort(arr, leftIndex, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, rightIndex);
  }
  return arr;
}

const testArr = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18];

console.log(quickSort(testArr));
console.log(testArr);
