/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let buyIndex = 0;
  let sellIndex = 0;

  // перебираем массив, анализируем все возможные сделки
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[sellIndex]) {
      // сдвигаем день продажи, если прибыль будет выше
      sellIndex = i;
    } else if (prices[i] < prices[buyIndex]) {
      // начинаем анализ новой сделки, если купить можно дешевле
      sellIndex = i;
      buyIndex = i;
    }

    // для каждой сделки проверяем прибыль
    const currentProfit = prices[sellIndex] - prices[buyIndex];

    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }
  }

  return maxProfit;
};
