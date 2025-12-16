function swap(smallIndex, largeIndex, arr) {
  const temp = arr[smallIndex];
  arr[smallIndex] = arr[largeIndex];
  arr[largeIndex] = temp;
}

let count = 0;
function bubbleSort(arr) {
  let noSwap = true;
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwap = true;
    for (let j = 0; j <= i - 1; j++) {
      count++;
      if (arr[j + 1] < arr[j]) {
        swap(j, j + 1, arr);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
}

const testArr = [3, 7, 1, 6, 3, 5, 123, 234, 312435, 356];
bubbleSort(testArr);
console.log(testArr);
console.log("Count: ", count);
