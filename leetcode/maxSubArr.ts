function maxSubArray(nums: number[]): number {
  let currentMax = nums[0];
  let maxima = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    maxima = Math.max(maxima, currentMax);
  }
  return maxima;
}
