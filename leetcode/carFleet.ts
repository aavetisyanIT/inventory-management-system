function carFleet(target: number, position: number[], speed: number[]): number {
  const stack: number[] = [];
  const vehiclesArr: { position: number; speed: number }[] = Array(
    position.length,
  ).fill(0);
  for (let [index, value] of position.entries()) {
    vehiclesArr[index] = { position: value, speed: speed[index] };
  }
  vehiclesArr.sort((a, b) => b.position - a.position);
  for (let [, { position, speed }] of vehiclesArr.entries()) {
    stack.push((target - position) / speed);
    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
  }
  return stack.length;
}
