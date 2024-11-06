function reverseWords(s: string): string {
  const resultArr: string[] = [];
  for (let word of s.split(" ")) {
    const reversedWord = word
      .split("")
      .reduce((prev, current) => current + prev);
    resultArr.push(reversedWord);
  }
  return resultArr.join(" ");
}
