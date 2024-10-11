// Interface for Director with required methods
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Interface for Teacher with required methods
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Class implementing DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

// Class implementing TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

// Function to create an employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

// Type predicate to check if the employee is a Director
function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on the employee type
function executeWork(employee: DirectorInterface | TeacherInterface): void {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

// String literal type for subjects
type Subjects = 'Math' | 'History';

// Function to teach a class based on the subject
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    if (todayClass === 'History') {
        return 'Teaching History';
    }
    return 'Invalid subject';
}

// Example usage
console.log(executeWork(createEmployee(200)));   // Output: Getting to work
console.log(executeWork(createEmployee(1000)));  // Output: Getting to director tasks

console.log(teachClass('Math'));     // Output: Teaching Math
console.log(teachClass('History'));  // Output: Teaching History
