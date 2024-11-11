class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums: number[]): boolean {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
      map[nums[i]] = !map[nums[i]] ? 1 : map[nums[i]] + 1;
    }

    for (let num in map) {
      if (map[num] > 1) return true;
    }
    return false;
  }
}
