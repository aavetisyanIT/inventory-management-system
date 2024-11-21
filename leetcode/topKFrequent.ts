function topKFrequent(nums: number[], k: number): number[] {
  const map = {};
  const result: number[] = [];
  const bucket: number[][] = [];

  //loop over array and map each element to its frequency
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] = map[nums[i]] += 1;
    }
  }

  for (let key in map) {
    const currentNum = Number(key);
    const currentNumFrequency = map[currentNum];
    if (!bucket[currentNumFrequency]) {
      bucket[currentNumFrequency] = [currentNum];
    } else {
      bucket[currentNumFrequency].push(currentNum);
    }
  }

  for (let i = nums.length; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }

  return result;
}
