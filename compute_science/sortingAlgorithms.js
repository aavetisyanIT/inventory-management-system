let count = 0;
function swap(left, right, arr) {
  count++;
  const temp = arr[right];
  arr[right] = arr[left];
  arr[left] = temp;
  // console.log("swap times: ", count);
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) swap(i, minIndex, arr);
  }
  return arr;
}

const testArr = [64, 34, 25, 12, 22, 11, 90];

let bubbleCount = 0;
function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let isSwap = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        isSwap = true;
        swap(j, j + 1, arr);
      }
    }
    if (!isSwap) break;
  }
  return arr;
}

function insertionSort(arr) {
  return arr;
}

bubbleSort(testArr);
console.log(testArr);
console.log(bubbleCount);
