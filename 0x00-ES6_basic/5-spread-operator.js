/**
 * Concatenates two arrays and a string into a new array.
 *
 * This function takes two arrays and a string as arguments and returns a new array
 * containing all elements from the first array, all elements from the second array,
 * and the string as the last element.
 *
 * @param {Array} array1 - The first array to concatenate.
 * @param {Array} array2 - The second array to concatenate.
 * @param {string} string - The string to append to the concatenated result.
 * @returns {Array} A new array containing the elements of array1, array2, and the string.
 *
 * @example
 * const result = concatArrays([1, 2], [3, 4], 'Hello');
 * console.log(result); // Output: [1, 2, 3, 4, 'Hello']
 */
function concatArrays(array1, array2, string) {
  return [...array1, ...array2, string];
}

// Exporting the function at the end of the file
export default concatArrays;
