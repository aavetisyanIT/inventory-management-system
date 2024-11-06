function reverseWords(s: string): string {
  const resultArr: string[] = [];
  for (let word of s.split(" ")) {
    const wordArr = word.split("");
    wordArr.reverse();
    resultArr.push(wordArr.join(""));
  }
  return resultArr.join(" ");
}
