function findDisappearedNumbers(nums: number[]): number[] {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
  }

  const result: number[] = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!map[i]) result.push(i);
  }
  return result;
}
