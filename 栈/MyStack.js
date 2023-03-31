let Queue = require("../队列/Queue");

/**
 * 225. 用队列实现栈
 * 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。
 * 实现 MyStack 类：
 * void push(int x) 将元素 x 压入栈顶。
 * int pop() 移除并返回栈顶元素。
 * int top() 返回栈顶元素。
 * boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。
 */
let MyStack = function() {
  this.queue = new Queue();
  this._queue = new Queue();
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  let {queue, _queue} = this;
  if (queue.isEmpty()) {
    queue.push(x)
  } else {
    _queue.push(x);
    while (!queue.isEmpty()) {
      let first = queue.pop();
      _queue.push(first);
    }
    [queue, _queue] = [_queue, queue]
  }
  this.queue = queue;
  this._queue = _queue;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.queue.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.queue.top();
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue.isEmpty();
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
var obj = new MyStack()
obj.push(3)
obj.push(4)
obj.push(6)