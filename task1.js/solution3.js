/**
 * Класс для предоставления быстрого доступа к индексу массива nums
 * по значению элемента из массива nums
 */
class MapOfIndexes {
  _map = new Map();

  addIndex(index, value) {
    if (!this._map.has(value)) {
      this._map.set(value, []);
    }

    const indexes = this._map.get(value);

    indexes.push(index);
  }

  getIndexes(value) {
    return this._map.get(value) ?? [];
  }
}

/**
 * Используется map для быстрого доступа  к индексу по значению.
 * Тем самым основной массив перебирается только два раза.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const mapOfIndexes = new MapOfIndexes();

  nums.forEach((value, index) => {
    mapOfIndexes.addIndex(index, value);
  });

  for (let firstIndex = 0; firstIndex < nums.length; firstIndex++) {
    const firstValue = nums[firstIndex];
    const secondValue = target - firstValue;

    // получаем все индексы массива, которым соответствует значение
    const indexes = mapOfIndexes.getIndexes(secondValue);

    const secondIndex = indexes.find((index) => index !== firstIndex);

    if (secondIndex) return [firstIndex, secondIndex];
  }
};
