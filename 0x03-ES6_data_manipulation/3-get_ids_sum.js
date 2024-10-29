/**
 * Calculates and returns the sum of all student IDs.
 *
 * @param {Array<Object>} students - Array of student objects, each containing an 'id'.
 * @returns {Number} Sum of all student IDs.
 */
function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;
