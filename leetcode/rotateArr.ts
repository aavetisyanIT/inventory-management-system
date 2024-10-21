/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  let i = k;
  while (i > 0) {
    const lastNum = nums.pop();
    if (lastNum) nums.unshift(lastNum);
    i--;
  }
}
