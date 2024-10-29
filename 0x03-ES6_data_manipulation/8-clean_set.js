/**
 * Returns a string of all set values that start with a specific string.
 *
 * @param {Set} mySet - The Set containing values to check.
 * @param {string} startString - The string that values should start with.
 * @returns {string} A string of all the values in the Set that start with startString,
 *                  concatenated and separated by a hyphen. If startString is empty,
 *                  an empty string is returned.
 */
function cleanSet(mySet, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const result = [];
  for (const value of mySet) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }

  return result.join('-');
}

export default cleanSet;
