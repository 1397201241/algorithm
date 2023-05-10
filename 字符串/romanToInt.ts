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