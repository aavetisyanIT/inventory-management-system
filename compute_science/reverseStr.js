function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  const strArr = str.split("");

  const reversedArrResult = [];

  function reverseArr(arr) {
    if (arr.length === 0) return;
    const lastChar = arr.pop();
    reversedArrResult.push(lastChar);
    reverseArr(arr);
  }

  reverseArr(strArr);
  return reversedArrResult.join("");
}

console.log(reverse("rithmschool")); // 'loohcsmhtir'
