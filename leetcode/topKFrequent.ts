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

  console.log("map", map);

  for (let key in map) {
    console.log(`${key}: ${map[key]}`);
    const currentNum = Number(key);
    const currentNumFrequency = map[currentNum];
    if (!bucket[currentNumFrequency]) {
      bucket[currentNumFrequency] = [currentNum];
    } else {
      bucket[currentNumFrequency].push(currentNum);
    }
  }
  console.log("AAA bucket", bucket);

  for (let j = nums.length; j >= k; j--) {
    console.log("AAA bucket[j]", bucket[j]);

    if (bucket[j]) {
      result.push(...bucket[j]);
    }
  }

  return result;
}
