/**
 * 49. 字母异位词分组
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
 *  字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if(strs.length <= 1) {
    return [strs];
  }
  let map = new Map();
  for(let str of strs) {
    let arr = Array.from(str).sort().join().toString();
    map.has(arr) ? map.set(arr, map.get(arr).concat(str)) : map.set(arr, [str])
  }
  return Array.from(map.values());
};