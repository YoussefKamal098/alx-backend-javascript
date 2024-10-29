/**
 * Extracts and returns an array of student IDs from a list of student objects.
 *
 * @param {Array<Object>} students - Array of student objects, each containing an 'id' property.
 * @returns {Array<Number>} Array of student IDs.
 *   Returns an empty array if input is not an array.
 */
function getListStudentIds(students) {
  if (!Array.isArray(students)) return [];
  return students.map((student) => student.id);
}

export default getListStudentIds;
