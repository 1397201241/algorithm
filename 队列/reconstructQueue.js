/**
 * 406. 根据身高重建队列
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  if(people.length <= 1) {
    return people;
  }
  // 从大到小排序
  people.sort((a, b) => b[0] - a[0]);
  let ans = [];
  for(let i = 0; i < people.length; i++) {
    // 按照身高从大到小插入到其对应的位置
    ans.splice(people[i][1], 0, people[i]);
  }
  return ans;
};
reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]);
