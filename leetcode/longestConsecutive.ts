function longestConsecutive(nums: number[]): number {
  const numsSet: Set<number> = new Set(nums);
  let longest: number = 0;
  for (let number of numsSet) {
    if (!numsSet.has(number - 1)) {
      let sequenceCount = 1;
      while (numsSet.has(number + sequenceCount)) {
        sequenceCount++;
      }
      longest = Math.max(longest, sequenceCount);
    }
  }
  return longest;
}
