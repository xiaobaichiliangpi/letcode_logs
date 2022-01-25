/*
 * Author: luffy_ww (ww382361351@gmail.com)
 * Last Modified: 2022-01-14 04:26:56
 */

// https://leetcode-cn.com/problems/find-lucky-integer-in-an-array/

var findLucky = function(arr) {
    const map =  arr.reduce((pre, cur) => {
        pre[cur] = pre[cur] ? pre[cur] + 1 : 1

        return pre
    }, {})

    return Object.keys(map).reduce((pre, cur) => {
        if (+cur === map[cur]) {
            pre = Math.max(pre, map[cur])
        }
        return pre
    }, -1)
};

const runTest =  require('./test.js')
runTest(findLucky, [
    [[2,2,3,4], 2].reverse(),
    [[1,2,2,3,3,3], 3].reverse(),
    [[2,2,2,3,3], -1].reverse(),
    [[5], -1].reverse(),
    [[7,7,7,7,7,7,7], 7].reverse()
])