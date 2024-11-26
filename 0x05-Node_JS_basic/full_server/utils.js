const fs = require('fs').promises;

/**
 * Parses the CSV data to organize student records by field.
 * @param {String} data The CSV data as a string.
 * @returns {Object} An object where each key is a field, and the value is an array of students in that field.
 */
const parseStudentData = (data) => {
  const fileLines = data.trim().split('\n');
  const studentGroups = {};
  const dbFieldNames = fileLines[0].split(',');
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  fileLines.slice(1).forEach((line) => {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];

    if (!studentGroups[field]) {
      studentGroups[field] = [];
    }

    const studentEntries = studentPropNames.map((propName, idx) => [
      propName, studentPropValues[idx]
    ]);

    studentGroups[field].push(Object.fromEntries(studentEntries));
  });

  return studentGroups;
};

/**
 * Reads and parses the student data from a CSV file.
 * @param {String} dataPath The path to the CSV data file.
 * @returns {Promise<Object>} A promise that resolves to an object of student groups by field.
 * @throws Will throw an error if the file cannot be read or parsed.
 */
const readDatabase = async (dataPath) => {
  if (!dataPath) {
    throw new Error('Cannot load the database');
  }

  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    return parseStudentData(data.toString('utf-8'));
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};


export default readDatabase;
module.exports = readDatabase;
