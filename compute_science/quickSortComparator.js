function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  function swap(left, right, arr) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }

  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }

  const pivotValue = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (comparator(arr[i], pivotValue) < 0) {
      swapIndex++;
      swap(i, swapIndex, arr);
    }
  }
  swap(start, swapIndex, arr);

  return swapIndex;
}

function quickSort(arr, comparator, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotIndex = pivot(arr, comparator, start, end);
    quickSort(arr, comparator, start, pivotIndex - 1);
    quickSort(arr, comparator, pivotIndex + 1, end);
  }
  return arr;
}
