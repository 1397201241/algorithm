/**
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 * */
function firstUniqChar1(str) {
  let arr = str.split("");
  if (arr.length === 0) return " ";

  let only = [];
  let notOnly = [];

  for (let i = 0; i < arr.length; i++) {
    let index = only.indexOf(arr[i]);
    let notIndex = notOnly.indexOf(arr[i]);
    if (index === -1) { // 不存在
      if (notIndex === -1) {
        only.push(arr[i]);
      }
    } else {
      notOnly.push(arr[i]);
      only.splice(index, 1);
    }
  }
  return only.length ? only[0] : " ";
}

function firstUniqChar2(str) {
  let arr = str.split("");
  if (arr.length === 0) return " ";
  // 重复字符
  let dupStrList = arr.filter((item, index) => arr.indexOf(item) !== index);
  if(dupStrList.length === 0) {
    return arr[0];
  }
  for (let i = 0; i < arr.length; i++) {
    let index = dupStrList.indexOf(arr[i]);
    if (index !== -1) { // 不存在
      return arr[i]
    }
  }
  return " ";
}
console.log(firstUniqChar1("1211"));
console.log(firstUniqChar2("1211"));