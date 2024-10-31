/**
 * Returns a string indicating a preference for using `const`.
 *
 * @returns {string} A message about variable declaration preference.
 *
 * @example
 * const message = taskFirst();
 * console.log(message); // Output: "I prefer const when I can."
 */
function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
 * Returns a string indicating that something is okay.
 *
 * @returns {string} A message indicating that something is okay.
 *
 * @example
 * const lastPart = getLast();
 * console.log(lastPart); // Output: " is okay"
 */
function getLast() {
  return ' is okay';
}

/**
 * Combines a string about using `let` with a last message.
 *
 * @returns {string} A combination message about variable declaration preferences.
 *
 * @example
 * const combinationMessage = taskNext();
 * console.log(combinationMessage); // Output: "But sometimes let is okay"
 */
function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}

export { taskFirst, getLast, taskNext };
