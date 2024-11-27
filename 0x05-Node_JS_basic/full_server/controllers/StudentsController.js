import readDatabase from '../utils';

/**
 * The list of supported majors.
 */
const VALID_MAJORS = ['CS', 'SWE'];

/**
 * Contains the student-related route handlers.
 */
class StudentsController {
  /**
     * Get a list of all students sorted by their field.
     * @param {Object} request The HTTP request object.
     * @param {Object} response The HTTP response object.
     */
  static async getAllStudents(request, response) {
    try {
      const dataPath = process.argv[2] || '';
      const studentGroups = await readDatabase(dataPath);

      const responseParts = ['This is the list of our students'];
      const sortedGroups = Object.entries(studentGroups).sort(StudentsController.sortFields);

      sortedGroups.forEach(([field, group]) => {
        responseParts.push(StudentsController.formatFieldResponse(field, group));
      });

      return responseParts.join('\n');
    } catch (err) {
      return StudentsController.handleError(response, err);
    }
  }

  /**
     * Get a list of students filtered by their major.
     * @param {Object} request The HTTP request object.
     * @param {Object} response The HTTP response object.
     */
  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!VALID_MAJORS.includes(major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const dataPath = process.argv[2] || '';
      const studentGroups = await readDatabase(dataPath);
      const group = studentGroups[major];

      if (!group) {
        return response.status(500).send(`Cannot find students for major ${major}`);
      }

      const responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
      return response.status(200).send(responseText);
    } catch (err) {
      return StudentsController.handleError(response, err);
    }
  }

  /**
     * Sort fields alphabetically (case insensitive).
     * @param {Array} a First field entry.
     * @param {Array} b Second field entry.
     * @returns {number} Comparison result for sorting.
     */
  static sortFields([fieldA], [fieldB]) {
    return fieldA.toLowerCase().localeCompare(fieldB.toLowerCase());
  }

  /**
     * Format the response for a given field and its students.
     * @param {String} field The name of the field (major).
     * @param {Array} group The list of students in that field.
     * @returns {String} The formatted response for this field.
     */
  static formatFieldResponse(field, group) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    return `Number of students in ${field}: ${group.length}. List: ${studentNames}`;
  }

  /**
     * Handle errors and send a response.
     * @param {Object} response The HTTP response object.
     * @param {Error} err The error to handle.
     */
  static handleError(response, err) {
    response.status(500).send(err instanceof Error ? err.message : err.toString());
  }
}

export default StudentsController;
module.exports = StudentsController;
