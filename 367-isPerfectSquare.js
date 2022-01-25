/*
 * Author: luffy_ww (ww382361351@gmail.com)
 * Last Modified: 2022-01-14 02:58:18
 */

// https://leetcode-cn.com/problems/valid-perfect-square/
// 有效的完全平方数
// num = 16 => true
// num = 14 => false

const runTest =  require('./test.js')
// 方案一: Math.sqrt 判断是否是整数 Pass
// var isPerfectSquare = (num) => {
//     return Number.isInteger(Math.sqrt(num))
// }

// 方案二: 禁止使用math.sqrt 和求平方根类似 用二分法
// Pass
var isPerfectSquare = (num) => {
    let left = 1
    let right = num
    let res
    while (true) {
        res = Math.floor((right + left) / 2)
        let result = num / res - res
        if (result > 0) { // 偏小
            left = res
        } else if (result < 0) {
            right = res
        } else {
            break;
        }

        // 如果left和right只相差1了,上面算过了Left,再算一次right
        if (right - left === 1) {
            if (num / right === right) {
                res = right
            } else {
                res = null
            }
            break
        }
    }

    return Number.isInteger(res)
}

runTest(isPerfectSquare, [
    [16, true].reverse(),
    [14, false].reverse()
])