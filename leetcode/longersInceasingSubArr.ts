function findLengthOfLCIS(nums: number[]): number {
  let counter = 1;
  let maxLength = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      counter++;
    } else {
      counter = 1;
    }
    if (counter > maxLength) maxLength = counter;
  }
  return maxLength;
}
