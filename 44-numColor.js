/*
 * Author: luffy_ww (ww382361351@gmail.com)
 * Last Modified: 2022-01-21 05:02:15
 */

// https://leetcode-cn.com/problems/sZ59z6/
// 二叉树的遍历
// 递归/循环  深度优先/广度优先

// 递归: 深度优先
var deepRecursion = (node) => {
    let result = []
    result.push(node.val)
    if (node.left) result.push(...deepRecursion(node.left))
    if (node.right) result.push(...deepRecursion(node.right))
    return result
}
var numColor = function(root) {
    const result = deepRecursion(root)
    return [...new Set(result)].length
};

// 递归:广度优先 队列先进先出
var bRecursion = (nodeList = []) => {
    if (!nodeList.length) return []
    let result = []
    const curNode = nodeList.shift()
    result.push(curNode.val)
    if (curNode.left) nodeList.push(curNode.left)
    if (curNode.right) nodeList.push(curNode.right)

    result.push(...bRecursion(nodeList))
    return result
}

// 循环 队列和栈实现, 略过了吧.


var numColor = function(root) {
    const result = bRecursion([root])
    return [...new Set(result)].length
};


const runTest =  require('./test.js')
runTest(numColor, [
    [{ val: 1, left: { val: 3, left: null, right: { val: 2, left: null, right: null } }, right: { val: 1, left: null, right: { val: 2, left: null, right: null } }  }, 3].reverse()
])