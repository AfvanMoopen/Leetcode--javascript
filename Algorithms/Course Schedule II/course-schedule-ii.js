// Source : https://leetcode.com/problems/course-schedule-ii/
 
// Date   : 2016-08-28

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  var map = []; // 邻接表
  var indegree = []; // 入度

  for (var i = 0; i < numCourses; i++)
    map[i] = [], indegree[i] = 0;

  prerequisites.forEach(function(item) {
    var from = item[1];
    var to = item[0];

    map[from].push(to);
    indegree[to]++;
  });

  var q = [];
  var finishNum = 0;
  var ans = [];

  for (var i = 0; i < numCourses; i++) {
    // 入度为 0，没有依赖
    if (!indegree[i]) {
      q.push(i);
      finishNum++;
    }
  }

  while (q.length) {
    var from = q.shift();
    ans.push(from);

    map[from].forEach(function(to) {
      if (--indegree[to] === 0) {
        q.push(to);
        finishNum++;
      }
    });
  }

  return finishNum === numCourses ? ans : [];
};