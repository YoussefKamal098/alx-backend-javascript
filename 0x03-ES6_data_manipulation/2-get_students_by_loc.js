/**
 * Filters and returns an array of students located in a specified city.
 *
 * @param {Array<Object>} students - Array of student objects, each containing 'location'.
 * @param {String} city - The city to filter students by.
 * @returns {Array<Object>} Array of students located in the specified city.
 */
function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}

export default getStudentsByLocation;
