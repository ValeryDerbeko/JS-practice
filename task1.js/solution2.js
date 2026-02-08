/**
 * Используется map для быстрого доступа  к индексу по значению.
 * Тем самым основной массив перебирается только два раза.
 * Однако, код стал менее понятным.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const mapOfNums = new Map();

  nums.forEach((value, index) => {
    if (!mapOfNums.has(value)) mapOfNums.set(value, []);

    const indexes = mapOfNums.get(value);

    indexes.push(index);
  });

  for (let i = 0; i < nums.length; i++) {
    const firstValue = nums[i];
    const secondValue = target - firstValue;

    if (mapOfNums.has(secondValue)) {
      const indexes = mapOfNums.get(secondValue);
      const secondIndex = indexes[0] !== i ? indexes[0] : indexes[1];

      if (secondIndex !== undefined) {
        return [i, secondIndex];
      }
    }
  }
};
