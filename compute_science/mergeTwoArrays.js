export function mergeArrays(arr1, arr2) {
  const result = new Array(arr1.length + arr2.length);
  let arr1Index = 0;
  let arr2Index = 0;
  let resultIndex = 0;

  while (arr1Index < arr1.length && arr2Index < arr2.length) {
    if (arr1[arr1Index] < arr2[arr2Index]) {
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
