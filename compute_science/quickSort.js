import { pivot } from "./pivot.js";

const testArr = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18];

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotIndex = pivot(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
}

console.log(quickSort(testArr));
