/**
 * @param {string} s
 * @return {boolean}* 有效的括号
 * []() true
 * [()] true
 * ][  false
 * ()[ false
 * [](( false
 */
const isValid = function(s: string):boolean {
    const bracketMap = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    const leftBracket = ["(", "[", "{"];
    let arr = s.split("");
    if (arr.length % 2) return false;
    for (let i = 0; i < arr.length; i++) {
        // 右括号开头
        if (leftBracket.indexOf(arr[i]) === -1) return false;
        // 一左一右
        if (leftBracket.indexOf(arr[i+1]) === -1) {
            if (bracketMap[arr[i]] !== arr[i+1]) {
                return false;
            } else {
                arr.splice(i, 2);
                // 防止越界
                i = i - 2 < 0 ? -1 : i - 2;
            }
        }
    }
    return true;
};