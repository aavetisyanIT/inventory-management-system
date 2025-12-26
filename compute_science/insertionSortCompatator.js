function insertionSort(arr, comparator) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && comparator(arr[j], current) >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
