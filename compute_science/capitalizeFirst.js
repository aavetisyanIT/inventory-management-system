function capitalizeFirst(strArr) {
  const result = [];
  function capitalize(arr) {
    if (!arr.length) return;
    result.push(arr[0][0].toUpperCase() + arr[0].slice(1));
    capitalize(arr.slice(1));
  }
  capitalize(strArr);
  return result;
}
