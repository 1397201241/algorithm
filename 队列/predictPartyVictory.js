/**
 * 649. Dota2 参议院
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
  let n = senate.length;
  let radiant  = [];
  let dire  = [];
  // 使用这个方法保持数组元素下标时需要转为数字
  for (let i in senate) {
    if (senate[i] === "R") {
      radiant.push(i - 0);
    } else {
      dire.push(i - 0);
    }
  }

  while (radiant.length && dire.length) {
    if (radiant[0] < dire[0]) {
      radiant.push(radiant[0] + n);
    } else {
      dire.push(dire[0] + n);
    }
    radiant.shift();
    dire.shift();
  }
  return radiant.length ? "Radiant" : 'Dire';
};
console.log(predictPartyVictory("RDD"));

