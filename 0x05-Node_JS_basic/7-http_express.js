const fs = require('fs').promises;
const express = require('express');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

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

// Function to format the student counts and names
const formatStudentCounts = (studentGroups) => {
  const result = [];
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    result.push(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
  return result.join('\n');
};

// Main function to count students, combining all the smaller functions
const countStudents = async (dataPath) => {
  try {
    await validateFile(dataPath);
    const fileLines = await readFileLines(dataPath);
    const { studentGroups } = parseStudentData(fileLines);

    const totalStudents = calculateTotalStudents(studentGroups);
    const totalStudentsMessage = `Number of students: ${totalStudents}`;

    const studentCountsMessage = formatStudentCounts(studentGroups);

    return `${totalStudentsMessage}\n${studentCountsMessage}`;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Route handler for the root path
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

// Route handler for '/students' path
app.get('/students', async (_, res) => {
  const responseParts = ['This is the list of our students'];

  try {
    const report = await countStudents(DB_FILE);
    responseParts.push(report);
  } catch (err) {
    responseParts.push(err instanceof Error ? err.message : err.toString());
  }

  const responseText = responseParts.join('\n');
  res.status(200).send(responseText); // Send the response as text
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
