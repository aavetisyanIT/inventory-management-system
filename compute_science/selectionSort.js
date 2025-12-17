function swap(largerIndex, smallerIndex, arr) {
  const temp = arr[smallerIndex];
  arr[smallerIndex] = arr[largerIndex];
  arr[largerIndex] = temp;
}
let testArr = [1, 2, 3, 12, 0, -2, 4, 2];

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

console.log(selectionSort(testArr));
