/**
 * Creates a budget object with income, GDP, and capita values.
 *
 * This function takes income, GDP, and capita as parameters and returns an object
 * containing these values.
 *
 * @param {number} income - The income value.
 * @param {number} gdp - The GDP value.
 * @param {number} capita - The capita value.
 * @returns {Object} An object representing the budget.
 *
 * @example
 * const budget = getBudgetObject(50000, 200000, 40000);
 * console.log(budget); // Output: { income: 50000, gdp: 200000, capita: 40000 }
 */
function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}

export default getBudgetObject;
