/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let seen = new Set();
  let current = n;
  
    while(current !== 1) {
        current = String(current).split('').reduce((acc, number) => (acc + number**2), 0)
        if(seen.has(current)) return false;
        else seen.add(current);
    }
    
    return true;
}
