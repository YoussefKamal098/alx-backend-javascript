/**
 * Creates an iterator object that yields all employees from the report.
 *
 * This function takes a report object that contains all employees grouped by departments.
 * It returns a generator function that iterates over each department and yields each employee.
 *
 * @param {Object} report - The report object containing all employees.
 * @returns {Generator} A generator that yields employee names.
 *
 * @example
 * const report = {
 *   allEmployees: {
 *     department1: ['Alice', 'Bob'],
 *     department2: ['Charlie', 'David']
 *   }
 * };
 * const iterator = createIteratorObject(report);
 * for (const employee of iterator) {
 *   console.log(employee); // Outputs: Alice, Bob, Charlie, David
 * }
 */
function createIteratorObject(report) {
  return (function* _() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }());
}

export default createIteratorObject;
