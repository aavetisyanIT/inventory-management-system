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

const testArr = [64, 34, 25, 12, 22, 11, 90];
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentNum = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentNum) {
      console.log("current: ", currentNum);
      console.log("j, arr[j]", j, arr[j]);
      console.log("before swap arr", arr);
      arr[j + 1] = arr[j];
      console.log("after swap arr", arr);
      j--;
    }
    console.log(
      `currentNum is ${currentNum}, j is ${j} doing j+1 = currentNum`,
    );
    arr[j + 1] = currentNum;
  }
  return arr;
}

insertionSort(testArr);
console.log(testArr);
