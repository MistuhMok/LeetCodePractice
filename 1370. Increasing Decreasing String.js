//https://leetcode.com/problems/increasing-decreasing-string/

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  const counts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) counts[s.charCodeAt(i) - 97]++;
  const res = new Array(Math.max(...counts)).fill('');
  for (let i = 0; i < 26; i++)
    for (let j = 0; j < counts[i]; j++)
      if (0 === j % 2) res[j] += String.fromCharCode(i + 97);
      else res[j] = String.fromCharCode(i + 97) + res[j];
  return res.join('');
};
