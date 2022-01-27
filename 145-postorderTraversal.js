/*
 * Author: luffy_ww (ww382361351@gmail.com)
 * Last Modified: 2022-01-27 05:04:15
 */

// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
// 后序遍历: 左右根

// 方案一: 递归

// 方案二: 循环
// 左右根循环无法实现,改用根右左 然后逆序输出

// 方案三: 前序/中序/后序 大一统法
// 后序版
var postorderTraversal = function(root) {
    if (!root) return []
    // WHITE 代表未访问过，grey代表访问过
    const [WHITE, GREY] = ['white', 'grey']
    const stack = [{ node: root, color: WHITE }]
    const res = []
    while (stack.length) {
        let { node, color } = stack.pop()
        if (color === GREY) {
            res.push(node.val)
        } else {
            color = GREY
            // start: 主要是这里,改这里的入栈顺序就可以实现三种遍历
            // 后序: 左右根, 入栈顺序就是根右左
            // 前序: 根左右, 入栈顺序就是右左根
            // 中序: 左根右, 入栈顺序就是右根左
            stack.push({ node, color })
            if (node.right) stack.push({ node: node.right, color: WHITE })
            if (node.left) stack.push({ node: node.left, color: WHITE })
            // end
        }
    }

    return res
};
