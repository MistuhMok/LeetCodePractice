//https://leetcode.com/problems/24-game/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {
    if (nums.length == 1) {
    return Math.abs(nums[0] - 24) < 0.01;
  }

  let ans = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const rest = [];
      for (let k = 0; k < nums.length; k++) {
        if (k != i && k != j) rest.push(nums[k]);
      }
      
      const target = [
        nums[i] + nums[j],
        nums[i] - nums[j],
        nums[j] - nums[i],
        nums[i] * nums[j]
      ];
        
      if (nums[i] !== 0) target.push(nums[j] / nums[i]);
      if (nums[j] !== 0) target.push(nums[i] / nums[j]);

      for (const t of target) {
        ans = ans || judgePoint24([t, ...rest]);
      }
    }
  }
  
  return ans;
};
