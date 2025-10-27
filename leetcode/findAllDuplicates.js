function findAllDuplicates(numArr) {
  const map = {};
  const result = [];
  for (let num of numArr) {
    if (!map[num]) {
      map[num] = 1;
    } else if ((map[num] = 1)) {
      result.push(num);
      ++map[num];
    } else {
      ++map[num];
    }
  }
  return result;
}
