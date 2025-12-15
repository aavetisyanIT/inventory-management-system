function flatten(nestedArr) {
  const result = [];
  function flat(arr) {
    if (!arr.length) return;
    if (Array.isArray(arr[0])) {
      flat([...arr[0], ...arr.slice(1)]);
    } else {
      result.push(arr[0]);
      flat(arr.slice(1));
    }
  }
  flat(nestedArr);
  return result;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
