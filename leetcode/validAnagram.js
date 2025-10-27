function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const map = {};
  for (let char of str1) {
    map[char] = ++map[char] || 1;
  }

  for (let char2 of str2) {
    if (!map[char2]) return false;
    if (map[char2]) {
      --map[char2];
    }
  }
  return true;
}
