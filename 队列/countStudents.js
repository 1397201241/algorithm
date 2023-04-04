/**
 * 1700. 无法吃午餐的学生数量
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  for (let i of sandwiches) {
    if(students.indexOf(i) > -1) {
      let index = students.indexOf(i);
      students.splice(index, 1);
    } else {
      break;
    }
  }
  return students.length;
};

console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]));