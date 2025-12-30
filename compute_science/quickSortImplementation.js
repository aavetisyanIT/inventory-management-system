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
