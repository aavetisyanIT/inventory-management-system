function isPalindrome(s: string): boolean {
  let left: number = 0;
  let right: number = s.length - 1;

  function isAlphanumeric(char) {
    return (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    );
  }

  while (left < right || left === right) {
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
