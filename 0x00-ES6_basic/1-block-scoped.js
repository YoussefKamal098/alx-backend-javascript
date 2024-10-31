/**
 * Executes a block of code based on a boolean input.
 *
 * This function defines two tasks with boolean values. If the `trueOrFalse`
 * parameter is true, the values of `task` and `task2` are redefined within
 * the block scope.
 *
 * @param {boolean} trueOrFalse - A boolean value to determine the flow of execution.
 * @returns {Array<boolean>} An array containing the values of `task` and `task2`.
 *
 * @example
 * const result = taskBlock(true);
 * console.log(result); // Output: [true, false]
 *
 * const result2 = taskBlock(false);
 * console.log(result2); // Output: [false, true]
 */
function taskBlock(trueOrFalse) {
  const task = false; // Default value for task
  const task2 = true; // Default value for task2

  if (trueOrFalse) {
    const task = true; // Redefining task within the block scope
    const task2 = false; // Redefining task2 within the block scope
  }

  return [task, task2]; // Returning the outer scope values of task and task2
}

export default taskBlock;
