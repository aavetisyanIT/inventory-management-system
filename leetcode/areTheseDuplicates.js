function areThereDuplicates(...args) {
  const map = {};
  for (let arg of args) {
    console.log(arg);
    if (!map[arg]) {
      map[arg] = 1;
    } else {
      return true;
    }
  }
  return false;
}
