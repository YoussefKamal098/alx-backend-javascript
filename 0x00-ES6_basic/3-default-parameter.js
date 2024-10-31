/**
 * Calculates the total sum of neighborhoods based on the initial number and expansions.
 *
 * @param {number} initialNumber - The initial number of neighborhoods.
 * @param {number} [expansion1989=89] - The number of neighborhoods added in 1989 (default is 89).
 * @param {number} [expansion2019=19] - The number of neighborhoods added in 2019 (default is 19).
 * @returns {number} The total sum of neighborhoods.
 *
 * @example
 * const totalHoods = getSumOfHoods(100); // returns 208
 * const totalHoodsWithCustomExpansions = getSumOfHoods(100, 50, 30); // returns 180
 */
function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}

export default getSumOfHoods;
