/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num < 2) return true
    
    let l = 2
    let r = num/2
    
    while(l <= r){
        let curr = Math.floor(l + (r - l) / 2)
        
        if(curr * curr === num)  return true
        if(curr * curr > num) r = curr - 1
        else l = curr + 1
    }

    return false
};


var isPerfectSquare=n=>n**.5%1==0
