export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('name must be a String');
    }

    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError('length must be a Number');
    }

    this._length = length;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw TypeError('students must be an Array');
    }

    students.forEach((student) => {
      if (typeof student !== 'string') {
        throw TypeError('student must be a String');
      }
    });

    this._students = students;
  }
}
