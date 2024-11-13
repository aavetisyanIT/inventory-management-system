function groupAnagrams(strs: string[]): string[][] {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split("").sort().join("");
    if (!map[sortedStr]) {
      map[sortedStr] = [];
    } else {
      map[sortedStr].push(strs[i]);
    }
  }
  return Object.values(map);
}
