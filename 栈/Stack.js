const Stack = function () {
  this.stack = [];
  this.size = this.stack.length;
}

Stack.prototype.push = function (x) {
  this.stack.push(x);
  return true;
}

Stack.prototype.pop = function () {
  return !this.isEmpty() && this.stack.pop();
}

Stack.prototype.top = function () {
  let len = this.stack.length;
  return !this.isEmpty() && this.stack[len - 1];
}

Stack.prototype.isEmpty = function () {
  return this.stack.length === 0;
}

Stack.prototype.size = function () {
  return this.stack.length;
}

module.exports = Stack;