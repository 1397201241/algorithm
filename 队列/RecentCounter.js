var RecentCounter = function() {
  this.arr = [];
};

/**
 * 933. 最近的请求次数
 * 写一个 RecentCounter 类来计算特定时间范围内最近的请求。
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.arr.push(t);
  if (this.arr.length !== 1) {
    // 距离所ping时间超过3000ms的出列
    while (t - this.arr[0] > 3000) {
      this.arr.shift();
    }
  }
  return this.arr.length;
};
let rc = new RecentCounter();
console.log(c.ping(1), c.arr);
console.log(c.ping(2), c.arr);
console.log(c.ping(3000), c.arr);
console.log(c.ping(3002), c.arr);
console.log(c.ping(3003), c.arr);
