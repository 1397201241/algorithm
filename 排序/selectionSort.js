const selectionSort = function (nums) {
  if (nums === null || nums.length <= 1) {
    return nums;
  }
  let len = nums?.length;
  for (let i = 0; i < len - 1; i++) {
    let min = nums[i];
    let flag = i;
    for (let j = i; j < len; j++) {
      if (nums[j] < min) {
        min = nums[j];
        flag = j;
      }
    }
    [nums[i], nums[flag]] = [nums[flag], nums[i]];
  }
  return nums;
}

// console.log(selectionSort([1, 3, 2, 5, 4, 6]));