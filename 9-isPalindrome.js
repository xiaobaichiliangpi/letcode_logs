/*
 * File Created: 2022-01-12 06:05:42
 * Author: luffy_ww (ww382361351@gmail.com)
 * -----
 * Last Modified: 2022-01-13 09:52:33
 * Modified By: luffy_ww (ww382361351@gmail.com>)
 */


// 示例 1：

// 输入：x = 121
// 输出：true
// 示例 2：

// 输入：x = -121
// 输出：false
// 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3：

// 输入：x = 10
// 输出：false
// 解释：从右向左读, 为 01 。因此它不是一个回文数。
// 示例 4：

// 输入：x = -101
// 输出：false

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/palindrome-number
const runTest =  require('./test.js')

// 方案一: 转成字符串
var isPalindrome = function(x) {
    return x == String(x).split('').reverse().join('')
}

// 方案二: 求从右往左读的数字, 通过取余
var isPalindrome2 = function(x) {
    let left = x
    let result = 0
    let tmp
    while (left > 0) {
        tmp = left % 10
        result = result * 10 + tmp
        left = Math.floor(left / 10)
    }

    return x == result
}

// isPalindrome2(123)
runTest(isPalindrome2, [
    [121, true].reverse(),
    [10, false].reverse(),
    [-101, false].reverse(),
    [9999889999, true].reverse(),
])