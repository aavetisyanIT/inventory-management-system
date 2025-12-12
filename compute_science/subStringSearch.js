function subStringSearch(str, subStr) {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < subStr.length; j++) {
      console.log("AAA i: ", i);
      console.log("AAA j: ", j);
      console.log("AAA str[i + j]: ", str[i + j]);

      if (str[i + j] !== subStr[j]) break;
      if (j === subStr.length - 1) result++;
    }
  }

  return result;
}

console.log(subStringSearch("oasadsfoas", "oas"));
