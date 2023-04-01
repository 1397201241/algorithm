const Stack = require("../栈/Stack")
/**
 * 232. 用栈实现队列
 * 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）
 */
var MyQueue = function() {
  this.stack = new Stack();
  this._stack = new Stack();
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  let {stack, _stack} = this;
  if (stack.isEmpty()) {
    stack.push(x);
  }else {
    while (!stack.isEmpty()) {
      let top = stack.pop();
      _stack.push(top);
    }
    stack.push(x);
    while (!_stack.isEmpty()) {
      let top = _stack.pop();
      stack.push(top);
    }
  }
  this.stack = stack;
  this._stack = _stack;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.stack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.stack.top();
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stack.isEmpty();
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
var obj = new MyQueue()
obj.push(1)
obj.push(2)
obj.push(3)
var param_2 = obj.pop()
var param_3 = obj.peek()
var param_4 = obj.empty()
console.log(param_2, param_3, param_4);