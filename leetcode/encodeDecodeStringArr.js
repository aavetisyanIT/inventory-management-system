class SolutionEncodeDecode {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encodedString = "";

    for (let word of strs) {
      encodedString += `${word.length}#${word}`;
    }

    return encodedString;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const decodedStrs = [];
    let i = 0;
    const strArr = str.split("");

    while (i < strArr.length) {
      //get wordLength
      let wordLengthStr = "";
      let n = i;
      while (strArr[n] !== "#") {
        wordLengthStr += strArr[n];
        n++;
      }
      const wordLength = Number(wordLengthStr);

      //get word using wordLength push to decodedStrs
      let decodedWord = "";
      let j = i + 1 + wordLength.toString().length;
      while (j < i + wordLength + 1 + wordLength.toString().length) {
        decodedWord += strArr[j];
        j++;
      }

      decodedStrs.push(decodedWord);
      i = i + wordLength + 1 + wordLength.toString().length;
    }
    return decodedStrs;
  }
}
