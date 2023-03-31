const insertionSort = function (nums) {
  if (nums === null || nums.length <= 1) {
    return nums;
  }
  let len = nums?.length;
  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j > 0; j--) {
      if (nums[i] < nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  return nums;
}

// console.log(insertionSort([1, 3, 2, 5, 4, 6]));