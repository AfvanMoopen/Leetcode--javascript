// Source : https://leetcode.com/problems/number-complement/
 
// Date   : 2017-01-10

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let ans = 0
    , add = 1;

  while (num) {
    if (!(num & 1))
      ans += add;
    num >>= 1;
    add <<= 1;
  }

  return ans;
};
