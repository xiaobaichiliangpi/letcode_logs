/*
 * Author: luffy_ww (ww382361351@gmail.com)
 * Last Modified: 2022-01-13 02:42:27
 */

// 描述见 https://leetcode-cn.com/problems/baseball-game/
const runTest =  require('./test.js')

var calPoints = function(ops) {
    const result = []
    return ops.reduce((pre, cur) => {
        const resultLength = result.length
        let val = cur
        switch (cur) {
            case '+':
                val = result[resultLength - 2] + result[resultLength - 1]
                result.push(val)
                pre += val
                break;
            case 'C':
                val = 0
                pre = pre - result.pop()
                break;
            case 'D':
                val = 2 * result[resultLength - 1]
                result.push(val)
                pre += val
                break;
            default:
                val = Number(cur)
                result.push(val)
                pre += val
                break;
        }
        return pre
    }, 0)
}
// calPoints(["5","-2","4","C","D","9","+","+"])
runTest(calPoints, [
    [["5","2","C","D","+"], 30].reverse(),
    [["5","-2","4","C","D","9","+","+"], 27].reverse(),
    [["1"], 1].reverse(),
])