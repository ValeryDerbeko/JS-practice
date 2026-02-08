/**
 * Не оптимизированное решение, выполняющее перебор
 * массива nums внутри перебора массива nums.
 * Это приводит к сложности O(n²)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
