/*
 * Author: luffy_ww (ww382361351@gmail.com)
 * Last Modified: 2022-03-09 10:33:55
 */


// 有 3n 堆数目不一的硬币，你和你的朋友们打算按以下方式分硬币：

// 每一轮中，你将会选出 任意 3 堆硬币（不一定连续）。
// Alice 将会取走硬币数量最多的那一堆。
// 你将会取走硬币数量第二多的那一堆。
// Bob 将会取走最后一堆。
// 重复这个过程，直到没有更多硬币。
// 给你一个整数数组 piles ，其中 piles[i] 是第 i 堆中硬币的数目。

// 返回你可以获得的最大硬币数目。

//  

// 示例 1：

// 输入：piles = [2,4,1,2,7,8]
// 输出：9
// 解释：选出 (2, 7, 8) ，Alice 取走 8 枚硬币的那堆，你取走 7 枚硬币的那堆，Bob 取走最后一堆。
// 选出 (1, 2, 4) , Alice 取走 4 枚硬币的那堆，你取走 2 枚硬币的那堆，Bob 取走最后一堆。
// 你可以获得的最大硬币数目：7 + 2 = 9.
// 考虑另外一种情况，如果选出的是 (1, 2, 8) 和 (2, 4, 7) ，你就只能得到 2 + 4 = 6 枚硬币，这不是最优解。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximum-number-of-coins-you-can-get
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} piles
 * @return {number}
 */
 var maxCoins = function(piles) {
    const sorted = piles.sort((a, b) => a - b)
    let res = 0
    for (let i = 1; i <= piles.length / 3; i++) {
        res += sorted[(piles.length / 3) + 2 * (i - 1)]
    }
    return res
}

const runTest =  require('./test.js')
runTest(maxCoins, [
    [9, [2,4,1,2,7,8]],
])