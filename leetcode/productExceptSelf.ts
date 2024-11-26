function productExceptSelf(nums: number[]): number[] {
  const forwardArr: number[] = [];
  let product: number = 1;

  for (let i = 0; i < nums.length; i++) {
    forwardArr.push(product);
    product = nums[i] * product;
  }

  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    forwardArr[i] = product * forwardArr[i];
    product = product * nums[i];
  }

  return forwardArr;
}
