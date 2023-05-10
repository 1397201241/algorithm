/**

* */
/**
 * @param {string[]} strs
 * @return {string}
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 */
const longestCommonPrefix = function(strs: string[]): string {
    if (!strs.length) return "";
    let result = strs[0].split("");
    for (let i = 1; i < strs.length; i++) {
        let currentStr2Arr = strs[i].split("");
        if (currentStr2Arr[0] !== result[0]) {
            return "";
        } else {
            let j = 0;
            let commonStr = [];
            let len = Math.max(currentStr2Arr.length, result.length);
            while (currentStr2Arr[j] === result[j] && j < len) {
                commonStr.push(currentStr2Arr[j]);
                j++;
            }
            result = commonStr;
        }
    }
    return result.join("");
};