/**
 * Generates a description of San Francisco's economic status as of 2017.
 *
 * This function returns a string that includes information about San Francisco's income,
 * GDP, and GDP per capita based on the data from the year 2017.
 *
 * @returns {string} A description of San Francisco's economic status.
 *
 * @example
 * const description = getSanFranciscoDescription();
 * console.log(description);
 * // Output: "As of 2017, it was the seventh-highest income county in the United States,
 * // with a per capita personal income of $119,868. As of 2015, San Francisco proper had a
 *    GDP of $154.2 billion,
 * // and a GDP per capita of $178,479."
 */
function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return (
    `As of ${year}, it was the seventh-highest income county in the United States`
      + `, with a per capita personal income of ${budget.income}. As of 2015, San Francisco`
      + ` proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`
  );
}

export default getSanFranciscoDescription;
