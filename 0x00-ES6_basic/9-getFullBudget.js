import getBudgetObject from './7-getBudgetObject';

/**
 * Creates a full budget object that includes budget details
 * and methods to format income in different currencies.
 *
 * This function takes income, GDP, and capita to create a budget object
 * and adds methods to get income formatted as a dollar or euro value.
 *
 * @param {number} income - The income value.
 * @param {number} gdp - The GDP value.
 * @param {number} capita - The capita value.
 * @returns {Object} A full budget object with budget details and currency formatting methods.
 *
 * @example
 * const fullBudget = getFullBudgetObject(50000, 200000, 40000);
 * console.log(fullBudget.getIncomeInDollars(50000)); // Output: "$50000"
 * console.log(fullBudget.getIncomeInEuros(50000));   // Output: "50000 euros"
 */
function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);

  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}

export default getFullBudgetObject;
