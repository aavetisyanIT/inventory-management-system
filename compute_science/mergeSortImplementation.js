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

  while (arr1Index < arr1.length) result[resultIndex++] = arr1[arr1Index++];

  while (arr2Index < arr2.length) result[resultIndex++] = arr2[arr2Index++];

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

console.log(mergeSort([1, 3, 5, 7, 12, 13, 2, 4, 6]));
