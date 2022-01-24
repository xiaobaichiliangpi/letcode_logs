/*
 * Author: luffy_ww (ww382361351@gmail.com)
 * Last Modified: 2022-01-24 02:49:26
 */

// https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    let top = 0
    let bottom = matrix.length - 1
    let left = 0
    let right = matrix[0].length - 1
    let result = []

    const getRowVal = (start, end, rowIdx) => {
        let res = []
        const isLeftToRight = start < end
        while (isLeftToRight ? start <= end : start >= end) {
            res.push(matrix[rowIdx][start])
            start += isLeftToRight ? 1 : -1
        }
        return res
    }

    const getColVal = (start, end, colIdx) => {
        let res = []
        const isTopToBottom = start < end
        while (isTopToBottom ? start <= end : start >= end) {
            res.push(matrix[start][colIdx])
            start += isTopToBottom ? 1 : -1
        }
        return res
    }

    let isDone = false

    while (!isDone) {
        if (top <= bottom) {
            // 第一行
            result.push(...getRowVal(left, right, top))
            top++
        }
        if (top > bottom) {
            isDone = true 
            return result
        }
        if (left <= right) {
            // 第一列
            result.push(...getColVal(top, bottom, right))
            right--
        }
        if (left > right) {
            isDone = true 
            return result
        }
        if (top <= bottom) {
            // 最后一行
            result.push(...getRowVal(right, left, bottom))
            bottom--
        }
        if (top > bottom) {
            isDone = true 
            return result
        }
        if (left <= right) {
            // 最后一列
            result.push(...getColVal(bottom, top, left))
            left++
        }
        if (left > right) {
            isDone = true 
            return result
        }
    }

    return result
}

var spiralOrder = function(matrix) {
    if (!matrix.length) return []
    let top = 0
    let bottom = matrix.length - 1
    let left = 0
    let right = matrix[0].length - 1
    let result = []


    while (true) {
        // 从左到右
        for (let i = left; i <= right; i++) result.push(matrix[top][i])
        if (++top > bottom) break;

        // 从上到下
        for (let i = top; i <= bottom; i++) result.push(matrix[i][right])
        if (--right < left) break;

        // 从右到左
        for (let i = right; i >= left; i--) result.push(matrix[bottom][i])
        if (top > --bottom) break;

        // 从下到上
        for (let i = bottom; i >=top; i--) result.push(matrix[i][left])
        if (right < ++left) break;
    }

    return result
}
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
// const runTest =  require('./test.js')
// runTest(spiralOrder, [
//     [[[1,2], [3,4]], [1,2,4,3]],
//     [[[2,5],[8,4],[0,-1]], [2,5,4,-1,0,8]],
// ])


