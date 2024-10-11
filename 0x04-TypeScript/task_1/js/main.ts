// Task 1: Teacher Interface

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;

    // Index signature for additional properties like 'contract'
    [propName: string]: any;
}

// Example usage of Teacher Interface
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);

// Output:
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"


// Task 2: Directors Interface (Extending Teacher)

interface Directors extends Teacher {
    numberOfReports: number;
}

// Example usage of Directors Interface
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

// Output:
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17


// Task 3: printTeacher Function

// Define the interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implementing the function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage of printTeacher function
console.log(printTeacher("John", "Doe")); // Output: J. Doe


// Task 4: StudentClass
// Interface for the StudentClass methods
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Interface for the StudentClass constructor
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Implementing the StudentClass
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method returning a string for homework status
    workOnHomework(): string {
        return 'Currently working';
    }

    // Method returning the first name of the student
    displayName(): string {
        return this.firstName;
    }
}

// Example usage of StudentClass
const student = new StudentClass('John', 'Doe');
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working

// Using the StudentClassConstructor interface
const Student: StudentClassConstructor = StudentClass; // Assign the class to the interface type
const anotherStudent = new Student('Jane', 'Doe'); // Create another student instance
console.log(anotherStudent.displayName()); // Output: Jane
