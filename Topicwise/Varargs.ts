var product = function (...nums: number[]) {
  var result = 1;

  for (var i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    result *= nums[i];
  }
  return result;
};
console.log(product(2, 4, 5, 6, 7));
