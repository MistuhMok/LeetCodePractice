/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
    this.numSet = new Set()
    this.uniqueSet = new Set()
    nums.forEach(num=>this.add(num))
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    const arr = [...this.uniqueSet.values()]
    return arr[0] || -1
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    if(this.numSet.has(value)) this.uniqueSet.delete(value)
    else this.uniqueSet.add(value)
    
    this.numSet.add(value)
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
