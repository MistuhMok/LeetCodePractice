/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let l = 0
    let r = nums.length - 1
    
    while(l < r){
        let m = Math.floor((l+r)/2)
        let evenHalves = (r-m) % 2 === 0
        
        if(nums[m+1] === nums[m]){
            if(evenHalves) l = m + 2
            else r = m - 1
        } else if(nums[m-1] === nums[m]){
            if(evenHalves) r = m - 2
            else l = m + 1
        } else return nums[m]
    }
    
    return nums[l]
};

Code golf - 62 char
var singleNonDuplicate=n=>n.filter((e,i)=>i%2==0&e!=n[i+1])[0]
