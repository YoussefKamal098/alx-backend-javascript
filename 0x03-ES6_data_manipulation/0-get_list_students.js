/**
 * Returns an array of student objects, each containing id, firstName, and location.
 *
 * @returns {Array<Object>} Array of student objects with properties:
 *   - id {Number}: The student's ID.
 *   - firstName {String}: The student's first name.
 *   - location {String}: The student's location.
 */
function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}

export default getListStudents;
