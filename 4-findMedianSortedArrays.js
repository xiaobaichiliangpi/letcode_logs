/*
 * Author: luffy_ww (ww382361351@gmail.com)
 * Last Modified: 2022-01-24 05:52:37
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 给定两个有序数组，要求找到两个有序数组的中位数，最直观的思路有以下两种：

// 1.使用归并的方式，合并两个有序数组，得到一个大的有序数组。大的有序数组的中间位置的元素，即为中位数。

// 2. 不需要合并两个有序数组，只要找到中位数的位置即可。由于两个数组的长度已知，因此中位数对应的两个数组的下标之和也是已知的。
// 维护两个指针，初始时分别指向两个数组的下标 00 的位置，每次将指向较小值的指针后移一位（如果一个指针已经到达数组末尾，则只需要移动另一个数组的指针），直到到达中位数的位置。


// 方案一:先合并两个数组 排序 然后找中位数
 var findMedianSortedArrays = function(nums1, nums2) {
    // 快速排序
    const sorted = qickSort([].concat(nums1, nums2))
    const mid = sorted.length % 2 === 0 ? [sorted.length / 2, sorted.length / 2 - 1] : [Math.floor(sorted.length / 2), Math.floor(sorted.length / 2)]
    let res = 0
    for (let i = 0; i < mid.length; i++) {
        res += sorted[mid[i]]
    }

    return res / 2
};

var qickSort = (arr, baseIdx = 0) => {
    if (arr.length < 2) return arr
    let left = []
    let right = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[baseIdx]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return qickSort(left).concat(arr[baseIdx]).concat(qickSort(right))
}

const runTest =  require('./test.js')
// runTest(findMedianSortedArrays, [
//     [2, [1,3], [2]],
//     [2.5, [1,2], [3,4]]
// ])
// console.log(findMedianSortedArrays([1,3], [2]))


runTest(findMedianSortedArrays, [
    [2, [1,3], [2]],
    [2.5, [1,2], [3,4]]
])