const bubblingSort: Function = function (nums: Array<number>): Array<number> {
    let len: number = nums.length;
    for (let i = len; i > 1; i--) {
        for (let j = 1; j < i; j++) {
            if (nums[i - 1] > nums[i]) {
                [nums[i - 1], nums[i]] = [nums[i], nums[i - 1]];
            }
        }
    }
    return nums;
}
// console.log(bubblingSort([1, 3, 2, 5, 4, 6]));