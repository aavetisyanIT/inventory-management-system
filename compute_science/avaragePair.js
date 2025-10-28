function averagePair(arr, targetNum) {
  if (!arr.length) return false;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentAvg = (arr[left] + arr[right]) / 2;
    if (currentAvg === targetNum) {
      return true;
    } else if (currentAvg < targetNum) {
      ++left;
    } else {
      --right;
    }
  }
  return false;
}
