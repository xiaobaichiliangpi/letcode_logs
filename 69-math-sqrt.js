/**
 * 模拟Math.sqrt
 * Math.sqrt(4) => 2
 *
 * @param {*} num
 */

// 最终误差
const deviation = Math.pow(0.0001, 2)

// 以二分法的思路
// 设置左右边界
var mySqrt = (num) => {
    let left = 0
    let right = num
    let isDone = false
    let result
    let half
    while (!isDone) {
        half = (right + left) / 2
        result = Math.pow(half, 2)
        if (num > result + deviation) { // 结果偏小
            left = half
        } else if (num < result - deviation) { // 结果偏大
            right = half
        } else {
            isDone = true
        }
    }

    return half
}

// 递归
// 会爆栈
var mySqrt2 = (num, left, right) => {
    const half = (left + right) / 2
    const result = Math.pow(half, 2)
    // 爆栈了
    if (num > result + deviation) { // 结果偏小
        return mySqrt2(num, half, right)
    } else if (num < result - deviation) { // 结果偏大
        return mySqrt2(num, left, half)
    } else {
        return half
    }
}

var getHalf = (left, right) => (left + right) / 2
var getResult = (left, right) => Math.pow((left + right) / 2, 2)
// 尾递归
// 会爆栈
var mySqrt3 = (num, left, right) => {
    // 改尾递归试试
    // 也不行...
    if (num <= getResult(left, right) + deviation && num >= getResult(left, right) + deviation) return getHalf(left, right)
    return mySqrt2(num, num > getResult(left, right) + deviation ? getHalf(left, right) : left, num < getResult(left, right) - deviation ? getHalf(left, right) : right)
}

// 牛顿迭代法
// val = (num / val + val) / 2
// 牛逼
var mySqrt4 = (num) => {
  let val = num
  // Math.abs(num - Math.pow(val, 2))  改成 num / val - val 防止溢出
  while (Math.abs(num / val - val) > deviation) {
    val = (num / val + val) / 2
  }
  return val
}

console.log(mySqrt4(14252525235), Math.sqrt(14252525235))



// console.log(mySqrt(4), Math.sqrt(4))
// console.log(mySqrt(3), Math.sqrt(3))


// let target = 999999991
// console.log(mySqrt3(target, 0, target), Math.sqrt(target))
// console.log(mySqrt2(target, 0, target), Math.sqrt(target))