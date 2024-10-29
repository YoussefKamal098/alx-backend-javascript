/**
 * Checks if all elements in the array exist within the provided set.
 *
 * @param {Set} set - A Set containing unique values.
 * @param {Array} array - An array of values to check against the set.
 * @returns {boolean} True if all elements in the array exist in the set, otherwise false.
 */
function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}

export default hasValuesFromArray;
