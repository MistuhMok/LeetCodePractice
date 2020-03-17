//https://leetcode.com/problems/design-a-stack-with-increment-operation/

/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.stack = [];
    this.maxSize = maxSize;
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.stack.length < this.maxSize)
        this.stack[this.stack.length] = x;
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(this.stack.length !== 0)
        return this.stack.splice(-1,1)[0];
    return -1;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    k = k > this.stack.length ? this.stack.length : k;
    for(let i=0; i<k; i++)
        this.stack[i] += val;
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
