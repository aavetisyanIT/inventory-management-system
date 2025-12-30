function swap(left, right, arr) {
  const temp = arr[right];
  arr[right] = arr[left];
  arr[left] = temp;
}

export function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotValue = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivotValue) {
      swapIndex++;
      swap(i, swapIndex, arr);
    }
  }
  swap(start, swapIndex, arr);
  return swapIndex;
}
