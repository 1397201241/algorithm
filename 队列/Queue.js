let Queue = function () {
  this.arr = [];
}
/**
 * @return {boolean}
 */
Queue.prototype.push = function(value) {
  this.arr.push(value);
  return true;
};

/**
 * @return {number}
 */
Queue.prototype.pop = function() {
  return this.arr.shift();
};

/**
 * @return {number}
 */
Queue.prototype.peek = function() {
  return this.isEmpty() ? -1 : this.arr[0];
};

/**
 * @return {number}
 */
Queue.prototype.size = function() {
  return this.arr.length;
};

/**
 * @return {boolean}
 */
Queue.prototype.isEmpty = function() {
  return this.arr.length === 0;
};

module.exports = Queue;