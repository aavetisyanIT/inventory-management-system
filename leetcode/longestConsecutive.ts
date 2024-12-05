function longestConsecutive(nums: number[]): number {
  if (!nums.length) return 0;
  const set = new Set(nums.sort((a, b) => a - b));
  const sortedArr = Array.from(set);
  const resultArr: number[] = [];

  let count = 1;
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i + 1] - sortedArr[i] === 1) {
      count++;
    } else {
      resultArr.push(count);
      count = 1;
    }
  }
  return resultArr.sort((a, b) => a - b)[resultArr.length - 1];
}
