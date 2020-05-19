var StockSpanner = function() {
    this.prices = []
    this.weights = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let w = 1
    while(this.prices.length && this.prices[this.prices.length - 1] <= price){
        this.prices.pop()
        w += this.weights.pop()
    }
    
    this.prices.push(price)
    this.weights.push(w)
    return w
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

//Code golf - 132
class StockSpanner{constructor(){this.s=[]}next(p,s=1,T=this.s){while(T[0]&&T[T.length-1].p<=p)s+=T.pop().s;T.push({p,s});return s}}



