function swap(smallIndex, largeIndex, arr) {
  const temp = arr[smallIndex];
  arr[smallIndex] = arr[largeIndex];
  arr[largeIndex] = temp;
}

function bubbleSort(arr, comparator) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    };
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (comparator(arr[i], arr[i + 1]) > 0) {
        swap(arr[i], arr[i + 1], arr);
      }
    }
  }
}
