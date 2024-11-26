const fs = require('fs').promises;

// Function to validate if the file exists and is a regular file
const validateFile = async (dataPath) => {
  let fileStats;

  try {
    fileStats = await fs.stat(dataPath);
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  if (!fileStats.isFile()) {
    throw new Error('Cannot load the database');
  }
};

// Function to read and parse the CSV file
const readFileLines = async (dataPath) => {
  try {
    const fileContent = await fs.readFile(dataPath, 'utf-8');
    return fileContent.toString('utf-8').trim().split('\n');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

// Function to parse student data from CSV lines
const parseStudentData = (fileLines) => {
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
      propName,
      studentPropValues[idx],
    ]);
    studentGroups[field].push(Object.fromEntries(studentEntries));
  });

  return { studentGroups, studentPropNames };
};

// Function to calculate total number of students
const calculateTotalStudents = (studentGroups) => Object.values(studentGroups).reduce(
    (total, group) => total + group.length,
    0,
);

// Function to log the student counts and names
const logStudentCounts = (studentGroups) => {
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

// Main function to count students, combining all the smaller functions
const countStudents = async (dataPath) => {
  try {
    await validateFile(dataPath);
    const fileLines = await readFileLines(dataPath);
    const { studentGroups } = parseStudentData(fileLines);

    const totalStudents = calculateTotalStudents(studentGroups);
    console.log(`Number of students: ${totalStudents}`);

    logStudentCounts(studentGroups);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = countStudents;
