function rob(nums: number[]): number {
  let optionOne = 0;
  let optionTwo = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      optionOne = optionOne + nums[i];
    } else {
      optionTwo = optionTwo + nums[i];
    }
  }
  return Math.max(optionOne, optionTwo);
}
