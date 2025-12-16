function swap(largerIndex, smallerIndex, arr) {
  const temp = arr[smallerIndex];
  arr[smallerIndex] = arr[largerIndex];
  arr[largerIndex] = temp;
}
let testArr = [1, 2, 3, 12, 0, -2, 4, 2];

function selectionSort(arr) {
  let minIndex = 0;
  let currentIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i; j < arr.length; j++) {
      currentIndex = j;
      if (arr[currentIndex] < arr[minIndex]) {
        minIndex = currentIndex;
      }
    }
    swap(i, minIndex, arr);
  }
}
selectionSort(testArr);
console.log(testArr);
