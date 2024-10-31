/**
 * Returns a string indicating a preference for using `const`.
 *
 * @returns {string} A message about variable declaration preference.
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
 * Returns a string indicating that something is okay.
 *
 * @returns {string} A message indicating that something is okay.
 */
export function getLast() {
  return ' is okay';
}

/**
 * Combines a string about using `let` with a last message.
 *
 * @returns {string} A combination message about variable declaration preferences.
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
