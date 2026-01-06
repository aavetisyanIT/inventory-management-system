const unsortedArr = [3, 2, 1, 12, 0, -2, 4, 2];
let swapCount = 0;
function swap(left, right, arr) {
  swapCount++;
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

selectionSort(unsortedArr);
function insertionSort() {}
function mergeSort() {}
function quickSort() {}

console.log(unsortedArr);
console.log(swapCount);
