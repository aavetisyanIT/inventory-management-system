const testArr = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18];

function swap(left, right, arr) {
  const temp = arr[right];
  arr[right] = arr[left];
  arr[left] = temp;
}

function pivot(arr) {
  let pivotValue = arr[0];
  let swapIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    console.log("=========================");
    console.log("AAA arr[i]:", arr[i]);
    console.log("AAA arr:", arr);

    if (arr[i] < pivotValue) {
      swapIndex++;
      console.log("AAA swapIndex:", swapIndex);
      swap(i, swapIndex, arr);

      console.log("AAA swapped arr:", arr);
    }

    console.log("=========================");
  }
  swap(0, swapIndex, arr);
  return swapIndex;
}

console.log(pivot(testArr));

console.log(testArr);
