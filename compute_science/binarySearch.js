function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === val) return middle;
    if (val < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));
