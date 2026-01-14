const unsortedArr = [3, 2, 10, 12, 0, -2, 6, 2];
let swapCount = 0;
function swap(left, right, arr) {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}
let bubbleSortCount = 0;
function bubbleSort(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    let isSwap = false;
    for (let j = 0; j < i; j++) {
      bubbleSortCount++;
      if (nums[j] > nums[j + 1]) {
        swap(j + 1, j, nums);
        isSwap = true;
      }
      if (!isSwap) break;
    }
  }

  return nums;
}

function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let lowestNumIndex = i;
    for (let j = i; j < nums.length; j++) {
      const currentNum = nums[j];
      if (currentNum < nums[lowestNumIndex]) {
        lowestNumIndex = j;
      }
      if (i !== lowestNumIndex) swap(i, lowestNumIndex, nums);
    }
  }
  return nums;
}

function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let currentNum = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > currentNum) {
      console.log(nums[j]);
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = currentNum;
  }

  return nums;
}

function merge(arr1, arr2) {
  const result = new Array(arr1.length + arr2.length);

  let arr1Index = 0;
  let arr2Index = 0;
  let resultIndex = 0;

  while (arr1Index < arr1.length && arr2Index < arr2.length) {
    if (arr1[arr1Index] <= arr2[arr2Index]) {
      result[resultIndex++] = arr1[arr1Index++];
    } else {
      result[resultIndex++] = arr2[arr2Index++];
    }
  }

  while (arr1Index < arr1.length) {
    result[resultIndex++] = arr1[arr1Index++];
  }

  while (arr2Index < arr2.length) {
    result[resultIndex++] = arr2[arr2Index++];
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotIndex = start;

  for (let i = start; i <= end; i++) {
    if (arr[i] < arr[start]) {
      pivotIndex++;
      swap(i, pivotIndex, arr);
    }
  }
  swap(start, pivotIndex, arr);
  return pivotIndex;
}

pivot(unsortedArr);

function quickSort(arr, start = 0, end = arr.length - 1) {
  swapCount++;

  if (start < end) {
    const pivotIndex = pivot(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
    return arr;
  }
}

console.log(quickSort(unsortedArr));
console.log(swapCount);
