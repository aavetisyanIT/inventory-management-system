function sameFrequency(num1, num2) {
  //create map to store number as key and frequency as value
  const map = {};
  //iterate over num1 and populate map
  for (let num of num1.toString()) {
    map[num] = ++map[num] || 1;
  }
  //iterate over num2
  for (let num of num2.toString()) {
    //check if number in map
    if (map[num]) {
      //if true - reduce count
      --map[num];
    } else {
      //if false - return false
      return false;
    }
  }
  return true;
}
