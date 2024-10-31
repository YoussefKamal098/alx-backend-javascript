/**
 * Appends a given string to each value in an array.
 *
 * This function takes an array and a string, and returns a new array
 * where each element has the string appended to it.
 *
 * @param {Array<string>} array - An array of strings to append to.
 * @param {string} appendString - The string to append to each array value.
 * @returns {Array<string>} A new array with the appended strings.
 *
 * @example
 * const newArray = appendToEachArrayValue(['Alice', 'Bob'], ' Engineer');
 * console.log(newArray); // Output: ['Alice Engineer', 'Bob Engineer']
 */
function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const value of array) {
    newArray.push(appendString + value);
  }

  return newArray;
}

export default appendToEachArrayValue;
