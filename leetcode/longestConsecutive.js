class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const numsSet = new Set(nums);

    let longest = 0;

    for (let number of numsSet) {
      console.log("AAA number", number);
      if (!numsSet.get(number - 1)) {
        let consecutive = 1;
        while (numsSet.get(number + consecutive)) {
          consecutive++;
        }
        longest = Math.max(longest, consecutive);
      }
    }
    return longest;
  }
}
