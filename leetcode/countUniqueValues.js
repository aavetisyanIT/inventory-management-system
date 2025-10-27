function countUniqueValues(arr) {
  if (!arr.length) return 0;
  if (arr.length === 1) return 1;

  let left = 0;
  let right = 1;
  let count = 1;
  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      count++;
      left = right;
      right++;
    } else {
      right++;
    }
  }
  return count;
}
