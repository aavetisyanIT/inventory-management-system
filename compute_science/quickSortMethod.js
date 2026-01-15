const unsortedArr = [3, 2, 10, 12, 0, -2, 6, 2];

function swap(leftIndex, rightIndex, arr) {
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotIndex = start;

  for (let i = 1; i <= end; i++) {
    if (arr[i] <= arr[start]) {
      pivotIndex++;
      swap(i, pivotIndex, arr);
    }
  }
  swap(start, pivotIndex, arr);

  return pivotIndex;
}

pivot(unsortedArr);
