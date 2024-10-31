/**
 * Creates a report object that contains all employees and provides a method to
 * get the number of departments.
 *
 * This function takes an employees list and returns a report object containing:
 * - allEmployees: the employees list
 * - getNumberOfDepartments: a method that returns the number of departments in the employees list.
 *
 * @param {Object} employeesList - An object containing employees categorized by departments.
 * @returns {Object} A report object with all employees and a method to get the number
 *                  of departments.
 *
 * @example
 * const employees = {
 *   engineering: ['Alice', 'Bob'],
 *   marketing: ['Charlie', 'David'],
 * };
 * const report = createReportObject(employees);
 * console.log(report.getNumberOfDepartments(employees)); // Output: 2
 */
function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
}

export default createReportObject;
