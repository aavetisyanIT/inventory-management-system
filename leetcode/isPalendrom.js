class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    const cleanedString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const cleanedArr = cleanedString.split("").reverse();
    return cleanedArr.join("") === cleanedString;
  }
}
