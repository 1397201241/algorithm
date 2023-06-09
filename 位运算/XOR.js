/**
 * 136. 只出现一次的数字
 * 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber1 = function (nums) {
  return nums.reduce((a, b) => a ^ b);
};


/**
 * 260. 只出现一次的数字 III
 * 给你一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber2 = function (nums) { // 位运算
  let xorSum = nums.reduce((a, b) => a ^ b);
  let lastOne = xorSum & (~xorSum + 1); // 求出数的最右侧的1，比如00000100
  let singleNumber1 = 0;
  for (let item of nums) {
    if ((item & lastOne) === lastOne) { // 与lastOne的1位同为1的数，比如00000 100 与 11010 101
      singleNumber1 ^= item;
    }
  }
  return [singleNumber1, singleNumber1 ^ xorSum];
};
var singleNumber3 = function(nums) { //暴力求解

  let singleNumber1 = {};
  for (let item of nums) {
    if (singleNumber1.hasOwnProperty(item)) {
      singleNumber1[item]++;
    } else singleNumber1[item]=1;
  }
  let ans = [];
  for (let singleNumber1Key in singleNumber1) {
    if (singleNumber1[singleNumber1Key] === 1) {
      ans.push(singleNumber1Key)
    }
  }
  return ans;
};
singleNumber3([1, 1, 2, 2, 3, 4])