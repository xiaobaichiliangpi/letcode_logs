/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let left = 0
    let right = 0
    let pre
    const result = []
    while (left < m || right < n) {
       if (left < m && right < n) {
           if (nums1[left] <= nums2[right]) {
               pre = nums1[left++]
           } else {
               pre = nums2[right++]
           }
       } else { // 有一个越界了
            if (left >= m) {
                pre = nums2[right++]
            } else {
                pre = nums1[left++]
            }
       }
       result.push(pre)
    }

    return result
}

const runTest =  require('./test.js')
console.log(merge([1,2,3,0,0,0], 3, [2, 5, 6], 3))
// runTest(merge, [
//     [[1,2,2,3,5,6], [1,2,3,0,0,0], 3, [2,5,6],3],
// ])

// 方案二: 使用Nums1返回
var merge2 = function(nums1, m, nums2, n) {
    let right = 0
    let left = 0
    let nums1Pre = []
    for (let i = 0; i < m + n; i++) {
        if (left < m) {
            nums1Pre.push(nums1[i])
            left++
        }
        if (right < n && nums1Pre[0] > nums2[right] || !nums1Pre.length) {
            nums1[i] = nums2[right++]
        } else {
            nums1[i] = nums1Pre.shift()
        }
    }
    return nums1
}
console.log(merge2([1,2,3,0,0,0],3,[2,5,6],3))

// 逆向双指针
var merge3 = function(nums1, m, nums2, n) {
    let left = m - 1
    let right = n - 1
    let tail = m + n - 1

    while (left >= 0 || right >= 0) {
        if (left === -1) {
            nums1[tail--] = nums2[right--]
        } else if (right === -1) {
            nums1[tail--] = nums1[left--]
        } else if (nums1[left] > nums2[right]) {
            nums1[tail--] = nums1[left--]
        } else {
            nums1[tail--] = nums2[right--]
        }
    }

    return nums1
}
console.log(merge3([4,5,6,0,0,0],3,[1,2,3],3))