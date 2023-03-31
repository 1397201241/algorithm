/**
 * 设计实现双端队列。
 * 实现 MyCircularDeque 类:
 * @param {number} k
 */
var MyCircularDeque = function(k) {
  this.deque = [];
  this.size = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if (this.isFull()) {
    return false;
  } else {
    this.deque.unshift(value);
    return true;
  }
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.isFull()) {
    return false;
  } else {
    this.deque.push(value);
    return true;
  }
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  if (this.isEmpty()) {
    return false;
  } else {
    this.deque.shift();
    return true;
  }
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  if (this.isEmpty()) {
    return false;
  } else {
    this.deque.pop();
    return true;
  }
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  return this.isEmpty() ? -1 : this.deque[0];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  return this.isEmpty() ? -1 : this.deque[this.deque.length - 1];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  return this.deque.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  return this.deque.length === this.size;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
let k = 3;
var obj = new MyCircularDeque(k);
console.log(obj.insertFront(1));
console.log(obj.insertFront(2));
console.log(obj.getFront());
console.log(obj.getRear());
console.log(obj.insertFront(3));
console.log(obj.getRear());
console.log(obj.isEmpty());