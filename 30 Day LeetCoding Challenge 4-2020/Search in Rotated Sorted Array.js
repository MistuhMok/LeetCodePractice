/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) return -1; // check empty

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return mid;

        // left sorted
        if (nums[left] <= nums[mid]) {
          // check if in the left sorted part
          if (nums[left] <= target && target < nums[mid]) {
            right = mid - 1;
          } else {
            left = mid + 1;
          }
        // right sorted
        } else {
          // check if in the right sorted part
          if (nums[mid] < target && target <= nums[right]) {
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }
    }

    return -1;
};
