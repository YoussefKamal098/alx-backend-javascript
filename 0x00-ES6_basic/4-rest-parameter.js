/**
 * Returns the number of arguments passed to the function.
 *
 * @param {...*} args - A variable number of arguments of any type.
 * @returns {number} The number of arguments passed.
 *
 * @example
 * const count1 = returnHowManyArguments(1, 2, 3); // returns 3
 * const count2 = returnHowManyArguments('a', 'b'); // returns 2
 * const count3 = returnHowManyArguments(); // returns 0
 */
function returnHowManyArguments(...args) {
  return args.length;
}

export default returnHowManyArguments;
