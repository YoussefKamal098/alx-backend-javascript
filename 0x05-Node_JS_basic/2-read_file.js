const fs = require('fs');

/**
 * Validates the file path and checks if it exists and is a file.
 * @param {String} dataPath The path to the CSV data file.
 * @throws {Error} If the file path is invalid or does not point to a file.
 */
const validateFilePath = (dataPath) => {
  let stats;

  try {
    stats = fs.statSync(dataPath);
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  if (!stats.isFile()) {
    throw new Error('Cannot load the database');
  }
};

/**
 * Parses the CSV file into a structured object.
 * @param {String} dataPath The path to the CSV data file.
 * @returns {Array} Parsed lines from the CSV file.
 */
const parseCSV = (dataPath) => {
  const fileContent = fs.readFileSync(dataPath, 'utf-8');
  return fileContent.trim().split('\n');
};

/**
 * Groups students by their field and formats the result.
 * @param {Array} fileLines The lines from the CSV file.
 * @returns {Object} A grouped object of students by field.
 */
const groupStudentsByField = (fileLines) => {
  const studentGroups = {};
  const dbFieldNames = fileLines[0].split(',');
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];

    if (!studentGroups[field]) {
      studentGroups[field] = [];
    }

    const studentEntries = studentPropNames
      .map((propName, idx) => [propName, studentPropValues[idx]]);
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }
  return studentGroups;
};

/**
 * Logs the student count and groups in a readable format.
 * @param {Object} studentGroups The grouped students by field.
 */
const logStudentGroups = (studentGroups) => {
  const totalStudents = Object.values(studentGroups)
    .reduce((total, group) => total + group.length, 0);

  console.log(`Number of students: ${totalStudents}`);

  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = (dataPath) => {
  try {
    validateFilePath(dataPath);
    const fileLines = parseCSV(dataPath);
    const studentGroups = groupStudentsByField(fileLines);
    logStudentGroups(studentGroups);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = countStudents;
