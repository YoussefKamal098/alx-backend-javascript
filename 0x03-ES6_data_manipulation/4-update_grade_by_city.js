/**
 * Updates the grades of students in a specific city based on new grades data.
 *
 * @param {Array<Object>} students - Array of student objects containing 'id' and 'location'.
 * @param {String} city - The city to filter students by.
 * @param {Array<Object>} newGrades - Array of grade objects with 'studentId' and 'grade'.
 * @returns {Array<Object>} Array of students in the specified city with updated grades.
 *   If a student has no grade in newGrades, the grade is set to 'N/A'.
 */
function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return { ...student, grade: gradeObj ? gradeObj.grade : 'N/A' };
    });
}

export default updateStudentGradeByCity;
