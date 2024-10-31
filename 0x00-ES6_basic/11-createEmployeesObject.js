/**
 * Creates an object representing a department and its employees.
 *
 * This function takes a department name and a list of employees,
 * and returns an object where the department name is the key and
 * the value is an array of employees.
 *
 * @param {string} departmentName - The name of the department.
 * @param {Array<string>} employees - An array of employee names.
 * @returns {Object} An object representing the department and its employees.
 *
 * @example
 * const employees = createEmployeesObject('Engineering', ['Alice', 'Bob']);
 * console.log(employees); // Output: { Engineering: ['Alice', 'Bob'] }
 */
function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: [
      ...employees,
    ],
  };
}

export default createEmployeesObject;
