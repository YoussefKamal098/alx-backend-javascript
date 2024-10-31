/**
 * Returns the current year.
 *
 * This function creates a new Date object and retrieves the full year from it.
 *
 * @returns {number} The current year.
 *
 * @example
 * const year = getCurrentYear();
 * console.log(year); // Output: 2024 (or the current year)
 */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

/**
 * Creates a budget object for the current year with income, GDP, and capita values.
 *
 * This function takes income, GDP, and capita, and returns an object with these values
 * formatted as properties that include the current year in their keys.
 *
 * @param {number} income - The income value.
 * @param {number} gdp - The GDP value.
 * @param {number} capita - The capita value.
 * @returns {Object} An object containing the budget details for the current year.
 *
 * @example
 * const budget = getBudgetForCurrentYear(50000, 200000, 40000);
 * console.log(budget);
 * // Output: { 'income-2024': 50000, 'gdp-2024': 200000, 'capita-2024': 40000 }
 */
function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}

export default getBudgetForCurrentYear;
