/**
 * 30. 串联所有单词的子串
 * 给定一个字符串 s 和一个字符串数组 words。 words 中所有字符串 长度相同。
 * s 中的 串联子串 是指一个包含  words 中所有字符串以任意顺序排列连接起来的子串。
 * 例如，如果 words = ["ab","cd","ef"]，
 * 那么 "abcdef"， "abefcd"，"cdabef"， "cdefab"，"efabcd"， 和 "efcdab" 都是串联子串。 "acdbef" 不是串联子串，
 * 因为他不是任何 words 排列的连接。
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring1 = function(s, words) {
  if(s.length === 0 || words.length ===0) {
    return [];
  }

  let wordLength = words[0]?.length || 0;
  let wordsNum = words?.length || 0;
  let strLength = s.length;
  let subStrArr = [];
  // 分割
  for(let i = 0; i < strLength; i++) {
    if(i + wordLength * wordsNum <= strLength) {
      subStrArr.push(s.slice(i, i + wordLength * wordsNum));
    }
  }

  let ans = [];
  const wordsToStr = words.sort().join("");
  // 再分割
  for (let i in subStrArr) {
    subStrArr[i] = strSplit(subStrArr[i], wordLength);
    if (wordsToStr === subStrArr[i].sort().join("")){
      ans.push(Number(i));
    }
  }
  return ans;
};

// 试图通过滑动窗口实现
var findSubstring2 = function(s, words) {
  if(s.length === 0 || words.length ===0) {
    return [];
  }

  let wordLength = words[0]?.length || 0;
  let wordsNum = words?.length || 0;
  const wordsMap = new Map();
  for (let word of words) {
    wordsMap.has(word) ? wordsMap.set(word, wordsMap.get(word) + 1) : wordsMap.set(word, 1);
  }
  let strLength = s.length;
  // 分割
  let ans = [];
  for (let j = 0; j + wordLength * wordsNum - 1 < strLength; j++) {
    let wordTest = s.slice(j, strLength);
    const wordsMapTemp = new Map();
    for (let key of wordsMap.keys()) {
      wordsMapTemp.set(key, wordsMap.get(key));
    }
    let end = -1;
    console.log(wordsMapTemp);
    for(let i = 0; i < strLength; i++) {
      if (i !== 0) {
        let wordSelect = wordTest.slice((i - 1) * wordLength, i * wordLength);
        wordsMapTemp.has(wordSelect) ? wordsMapTemp.set(wordSelect, wordsMapTemp.get(wordSelect) + 1) : "无匹配项";
      }
      while((end + 1) * wordLength <= strLength && end - i  < wordsNum) {
        let wordSelect = wordTest.slice(end * wordLength, (end + 1) * wordLength);
        wordsMapTemp.has(wordSelect) ? wordsMapTemp.set(wordSelect, wordsMapTemp.get(wordSelect) - 1) : "无匹配项";
        end++;
      }
      console.log(wordsMapTemp, 22);
      if (Array.from(wordsMapTemp.values()).every(a => a === 0)) {
        ans.push(j + i * wordLength);
      }
    }
  }
  return Array.from(new Set(ans));
};

// 按长度分割字符串
const strSplit = function (str, wordLength) {
  let ans = [];
  for (let i = 0; i < str.length; i += wordLength) {
    ans.push(str.slice(i, i + wordLength))
  }
  return ans;
}
let s = "a", words = ["a"];
findSubstring2(s, words);