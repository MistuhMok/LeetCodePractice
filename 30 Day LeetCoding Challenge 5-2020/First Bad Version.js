/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0
        let end = n
        while(start <= end){
            let mid = Math.floor((start + end) / 2)
            let check = isBadVersion(mid)
            let checkBefore = isBadVersion(mid - 1)
            if(check && checkBefore === false)  return mid
            
            if(check) end = mid - 1
            else start = mid + 1   
        }
        
        return false
    };
};
