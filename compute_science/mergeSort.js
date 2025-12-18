import { mergeArrays } from "./mergeTwoArrays.js";

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, middle));
  const rightArr = mergeSort(arr.slice(middle));

  return mergeArrays(leftArr, rightArr);
}

console.log(mergeSort([3, 2, 1, 12, 0, -2, 4, 2]));
