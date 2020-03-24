//https://leetcode.com/problems/apply-discount-every-n-orders/

/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function(n, discount, products, prices) {
    this.prices = {}
    this.n = n
    this.discount = discount/100
    this.count = 0
    
    for(let i = 0; i < products.length; i++){
        let product = products[i]
        let price = prices[i]
        
        this.prices[product] = price
    }
};

/** 
 * @param {number[]} product 
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function(product, amount) {    
    this.count++
    
    let total = 0
    for(let i = 0; i < product.length; i++){
        let cost = this.prices[product[i]]
        
        total += cost * amount[i]
    }
    
    return this.count % this.n ? total : total * (1 - this.discount)
};

/** 
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */
