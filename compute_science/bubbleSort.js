function bubbleSort(arr = [], comparator) {
  function swap(smallIndex, largeIndex, arr) {
    const temp = arr[smallIndex];
    arr[smallIndex] = arr[largeIndex];
    arr[largeIndex] = temp;
  }
  if (typeof comparator !== "function") comparator = (a, b) => a - b;

  for (let i = arr.length; i > 0; i--) {
    let isAnySwap = false;
    for (let j = 0; j < i - 1; j++) {
      if (comparator(arr[j], arr[j + 1]) > 0) {
        swap(j + 1, j, arr);
        isAnySwap = true;
      }
    }
    if (!isAnySwap) break;
  }
  return arr;
}
