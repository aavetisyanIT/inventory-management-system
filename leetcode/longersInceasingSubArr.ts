function findLengthOfLCIS(nums: number[]): number {
  let lowPointer = 0;
  let highPointer = 1;
  let lowStart = 0;
  let maxLength = 0;

  if (!nums.length) return 0;
  if (nums.length === 2) {
    if (nums[0] < nums[1]) return 2;
    return 1;
  }

  while (highPointer < nums.length) {
    if (nums[highPointer] > nums[lowPointer]) {
      highPointer++;
      lowPointer++;
    } else {
      if (highPointer - lowStart > maxLength) {
        maxLength = highPointer - lowStart;
      }
      lowPointer = highPointer;
      highPointer++;
      lowStart = highPointer;
    }
  }

  return Math.max(maxLength, nums.length);
}
