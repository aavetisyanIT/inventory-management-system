class SolutionTwoSum {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number): number[] {
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      const currentNum = nums[i];
      const currentDif = target - currentNum;
      const currentDifIndex = nums.findIndex(element => currentDif === element);
      if (currentDifIndex !== -1 && currentDifIndex !== i) {
        result.push(i);
        result.push(currentDifIndex);
        break;
      }
    }
    return result;
  }
  twoSumMap(nums: number[], target: number): number[] | undefined {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (map.has(diff)) {
        return [map.get(diff), i];
      }
      map.set(nums[i], i);
    }
  }
}
