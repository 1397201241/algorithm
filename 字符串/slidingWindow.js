/**
 * 3. 无重复字符的最长子串
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 我们不妨以示例一中的字符串 abcabcbb 为例，
 * 找出从每一个字符开始的，不包含重复字符的最长子串，那么其中最长的那个字符串即为答案。
 * 对于示例一中的字符串，我们列举出这些结果，其中括号中表示选中的字符以及最长的字符串：
 以 (a)bcabcbb 开始的最长字符串为 (abc)abcbb；
 以 a(b)cabcbb 开始的最长字符串为 a(bca)bcbb；
 以 ab(c)abcbb 开始的最长字符串为 ab(cab)cbb；
 以 abc(a)bcbb 开始的最长字符串为 abc(abc)bb；
 以 abca(b)cbb 开始的最长字符串为 abca(bc)bb；
 以 abcab(c)bb 开始的最长字符串为 abcab(cb)b；
 以 abcabc(b)b 开始的最长字符串为 abcabc(b)b；
 以 abcabcb(b) 开始的最长字符串为 abcabcb(b)。
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length || 0;
  }
  let len = s.length;
  let end = -1;
  let subStr = new Set();
  let max = 0;

  for (let i = 0; i < len; ++i) {
    // 左指针向右移动，移除一个元素
    if (i !== 0) {
      subStr.delete(s[i - 1]);
    }
    // 不断地移动右指针，添加一个元素
    while (end + 1 < len && !subStr.has(s[end + 1])) {
      subStr.add(s[end + 1]);
      ++end;
    }
    max = Math.max(max, end - i + 1)
  }
  return max;
};
console.log(lengthOfLongestSubstring("pwwkew"));