function longestConsecutive(nums: number[]): number {
  const numsSet: Set<number> = new Set(nums);
  const resultMap: Map<number, number> = new Map();
  for (let number of numsSet) {
    if (!numsSet.has(number - 1)) {
      let sequenceCount = 1;
      while (numsSet.has(number + sequenceCount)) {
        sequenceCount++;
      }
      resultMap.set(number, sequenceCount);
    }
  }
  let result: number = 0;
  for (let entry of resultMap) {
    const sequence = entry[1];
    if (result < sequence) {
      result = sequence;
    }
  }

  return result;
}
