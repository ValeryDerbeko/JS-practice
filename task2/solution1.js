/**
 * Определяем корректность расставленных скобок на основе учета открытых скобок.
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const openingBrackets = new Set(["(", "{", "["]);

  // map для определения соответствия между закрытыми и открытыми скобками
  const mapOfBrackets = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  // массив учета открытых скобок
  const foundOpeningBrackets = [];

  for (let letter of s) {
    if (openingBrackets.has(letter)) {
      foundOpeningBrackets.push(letter);
    } else {
      // проверка: закрытая скобка должна соответствовать закрытой
      const lastBracket = foundOpeningBrackets.pop();
      const expectedLastBracket = mapOfBrackets.get(letter);
      if (expectedLastBracket !== lastBracket) return false;
    }
  }

  if (foundOpeningBrackets.length > 0) return false;

  return true;
};
