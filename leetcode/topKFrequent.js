/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};

  //loop over array and map each element to its frequency
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] = map[nums[i]] += 1;
    }
  }
  const keyValueArr = Object.entries(map);
  const sortedKeyValueArr = keyValueArr.sort((a, b) => {
    console.log("AAA a", a);
    console.log("AAA b", b);

    return b[1] - a[1];
  });
  console.log("AAA sortedKeyValueArr", sortedKeyValueArr);
  const result = [];
  for (let j = 0; j < k; j++) {
    result.push(Number(sortedKeyValueArr[j][0]));
  }

  return result;
};
