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
}
