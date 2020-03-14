//https://leetcode.com/problems/bulb-switcher-iii/submissions/

/**
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue = function(light) {
    let total = 0;
    let target = 0;
    let moments = 0;
    
    for(let i = 0; i < light.length; i++){
        total += light[i];      
        target += i + 1;        
        
        if(total === target) moments++;
    }    
    
    return moments;
};
