class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let max = 0;
    for (let i = 0; i < heights.length; i++) {
      let r = heights.length - 1;

      while (i < r) {
        const lowestBar = Math.min(heights[i], heights[r]);
        console.log("AAA lowestBar", lowestBar);

        const currentAria = (r - i) * lowestBar;
        console.log("AAA currentAria", currentAria);
        max = Math.max(max, currentAria);
        r--;
      }
    }

    return max;
  }
}
