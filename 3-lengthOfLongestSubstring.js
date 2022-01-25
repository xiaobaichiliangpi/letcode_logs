// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
// 示例 4:

// 输入: s = ""
// 输出: 0

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

const runTest =  require('./test.js')

/**
 * @param {string} s
 * @return {number}
 * 最简单粗暴的做法,从第一个字符开始遍历,找到不重复为止记住长度,重复后退出,接着从第2个字符开始,一直找到最后.
 * 当剩余的长度已经小于最大长度时,可以直接退出循环了.
 */
//  var lengthOfLongestSubstring = function(s) {
//     const arr = s.split('')
//     let maxStr = ''
//     for (let i=0;i<arr.length && arr.length - i > maxStr.length;i++) {
//         let subArr = arr.slice(i + 1, arr.length)
//         let curStr = ''
//         curStr += arr[i]
//         if (!maxStr) maxStr = curStr
//         subArr.some((str, idx) => {
//             if (curStr.includes(str)) {
//                 maxStr = curStr.length > maxStr.length ? curStr : maxStr
//                 return true
//             } else {
//                 curStr += str
//                 if (idx === subArr.length - 1) {
//                     maxStr = curStr.length > maxStr.length ? curStr : maxStr
//                 }
//                 return false
//             }
//         })
//     }
//     console.log(maxStr)
//     return maxStr.length
// };

/**
 * 方案二
 * @param {string} s
 * @return {number}
 * 设定左右边界left和right,循环移动右边界直到等于字符串长度.将每个字符存到Map中,如果Map中已存在说明重复了,此时移动左边界(因为此时左边界移动一位,当前这个字符串就是不重复的最大子串,然后继续移动右边界)
 * 如果在Map中不存在,则更新max
 * 有一个注意点是: 存在Map中的序号必须大于当前left左边界,因为左边界前面的字符对于当前的子串是没有意义的!
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map()
    let max = 0
    let left = 0
    for (let right = 0; right < s.length; right++) {
        const curStr = s.charAt(right)
        if (map.get(curStr) >= left) {
            left = map.get(curStr) + 1
        } else {
            max = Math.max(max, right - left + 1)
        }
        map.set(curStr, right)
    }
    return max
};

// console.log(lengthOfLongestSubstring("tmmzuxt"))

runTest(lengthOfLongestSubstring, [
    ['abcabcbb', 3].reverse(),
    ['bbbbb', 1].reverse(),
    ['pwwkew', 3].reverse(),
    ['', 0].reverse(),
    [' ', 1].reverse(),
])