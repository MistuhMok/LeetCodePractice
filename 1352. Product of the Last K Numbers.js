//https://leetcode.com/problems/product-of-the-last-k-numbers/

var ProductOfNumbers = function() {
    this.nums = []
    this.zero = undefined
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    this.nums.push(num)

    if(num === 0) this.zero = 1
    else if(this.zero){
        this.zero++
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    let prod = 1
    
    if(k >= this.zero) return 0
    
    for(let i = this.nums.length - k; i < this.nums.length; i++ ){
        prod *= this.nums[i]
    }
    
    return prod
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
