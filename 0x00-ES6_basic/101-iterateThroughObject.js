/**
 * Iterates through an iterable object of employees and returns a formatted string.
 *
 * This function takes an iterable `reportWithIterator` object containing employee names,
 * iterates over each employee, and appends each to an array. It then joins the array elements
 * into a single string separated by " | " and returns this string.
 *
 * @param {Iterable} reportWithIterator - An iterable object containing employee names.
 * @returns {string} A string of employee names separated by " | ".
 *
 * @example
 * const report = createIteratorObject({ allEmployees: { ... } });
 * const employeeList = iterateThroughObject(report);
 * // Output: "Employee1 | Employee2 | Employee3"
 */
function iterateThroughObject(reportWithIterator) {
  const employees = [];

  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  return employees.join(' | ');
}

export default iterateThroughObject;
