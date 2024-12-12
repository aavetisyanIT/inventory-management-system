function maxArea(height: number[]): number {
  let result = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const shorterSide = Math.min(height[l], height[r]);
    result = Math.max((r - l) * shorterSide, result);

    if (height[l] > height[r]) {
      r--;
    } else {
      l++;
    }
  }
  return result;
}
