/*
 * Author: luffy_ww (ww382361351@gmail.com)
 * Last Modified: 2022-01-14 02:45:09
 */

// https://leetcode-cn.com/problems/contains-duplicate/
// 给一个整数数组判断是否有重复元素

const runTest =  require('./test.js')
// 方案一: 数组去重 Pass
// var containsDuplicate = (nums) => {
//     return nums.length !== [...new Set(nums)].length
// }

// 方案二: Pass
var containsDuplicate = (nums) => {
    return nums.some((item, idx) => idx !== nums.lastIndexOf(item))
}

runTest(containsDuplicate, [
    [[1,2,3,1], true],
    [[1,2,3,4], false],
    [[1,1,1,3,3,4,3,2,4,2], true],
])