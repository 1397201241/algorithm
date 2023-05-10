/**
 * 罗马数转整数
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 示例 3:
 * 输入: s = "IX"
 * 输出: 9
 * 示例 4:
 * 输入: s = "LVIII"
 * 输出: 58
 * 解释: L = 50, V= 5, III = 3.
 * 示例 5:
 * 输入: s = "MCMXCIV"
 * 输出: 1994
 * 解释: M = 1000, CM = 900, XC = 90, IV = 4.
* */
const romanToInt = function(s: string) {
    const arr = s.split("");
    const len = arr.length;
    if (len === 0) {
        return 0;
    }
    enum romanMap {
        I = 1,
        V = 5,
        X = 10,
        L = 50,
        C = 100,
        D = 500,
        M = 1000
    }
    let result = 0;
    for (let i = len - 1; i >= 0; i--) {
        console.log(i);
        if (romanMap[arr[i]] > romanMap[arr[i-1]]) {
            result += (romanMap[arr[i]] - romanMap[arr[i-1]]);
            i--;
        } else {
            result += romanMap[arr[i]];
        }
    }
    return result;
};
console.log(romanToInt("LVIII"));