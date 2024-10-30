function majorityElement(nums: number[]): number {
  const map = new Map();
  let majorityElement = nums[0];

  for (let element of nums) {
    map[element] ? map.set(element, map[element] + 1) : 1;
    if (map.get(element) > map.get(majorityElement)) majorityElement = element;
  }

  return majorityElement;
}
