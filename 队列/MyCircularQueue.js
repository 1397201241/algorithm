/**
 * 622. 设计循环队列
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.capacity = k + 1;
  this.elements = new Array(this.capacity);
  this.front = 0;
  this.rear = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) {
    return false;
  }
  this.elements[this.rear] = value;
  // 队尾位置向右移动
  this.rear = (this.rear + 1) % this.capacity;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) {
    return false;
  }
  // 对首位置向右移动
  this.front = (this.front + 1) % this.capacity;
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  return this.isEmpty() ? -1 : this.elements[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  return this.isEmpty() ? -1 : this.elements[(this.rear - 1 + this.capacity) % this.capacity];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.front === this.rear;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.front === (this.rear + 1) % this.capacity;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
let arr = new Array(4);
console.log(arr, arr.length, arr[1]);
console.log(-1 % 4);
