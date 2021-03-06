// Source : https://leetcode.com/problems/power-of-two/
 
// Date   : 2015-08-09

/**
 * @param {number} n
 * @return {boolean}
 */
 
var isPowerOfTwo = function(n) {
  var tmp = ~~(Math.log(n) / Math.log(2));
  return n === (1 << tmp);
};