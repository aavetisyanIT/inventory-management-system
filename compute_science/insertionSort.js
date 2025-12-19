let testArr = [3, 2, 1, 12, 0, -2, 4, 2];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;

    while (arr[j] > currentValue && j >= 0) {
      console.log("arr[j + 1]: ", arr[j + 1], j + 1);
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

insertionSort(testArr);
console.log("sorted:", testArr);
