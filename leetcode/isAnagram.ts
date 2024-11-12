function isAnagram(s: string, t: string): boolean {
  function sortString(string: string): string {
    return string.split("").sort().join();
  }
  return sortString(s) === sortString(t);
}
