# Node.js Testing with Mocha, Chai, and Sinon

This project demonstrates unit testing, integration testing, and mocks using Mocha, Chai, and Sinon. It covers how to write test suites, how to use assertion libraries, how to apply spies, stubs, and mocks, and how to handle async functions and integration tests.

---

## Learning Objectives

By the end of this project, you should be able to:

- Write test suites using Mocha.
- Use Chai as an assertion library for testing.
- Organize long test suites effectively.
- Understand when to use spies, stubs, and mocks in tests.
- Use hooks (`before`, `after`, etc.) in tests.
- Write unit tests for async functions.
- Write integration tests for a small Node.js server.
- Understand and use Sinon for testing functions and interactions.

---

## Project Requirements

- The code will be executed on **Ubuntu 18.04** with **Node.js version 12.x.x**.
- Editors allowed: **vi**, **vim**, **emacs**, **Visual Studio Code**.
- All files should be written in JavaScript with `.js` extension.
- Every file should end with a new line.
- **README.md** file is required.
- The tests should run using the `npm run test` command with no errors or warnings.

---

## Setting Up the Project

1. **Install Dependencies**:

   First, install the necessary testing libraries:

   ```bash
   npm install mocha chai sinon --save-dev
   ```

2. **Create Test Files**:

   Create test files with the `.test.js` extension inside a `test` folder.

3. **Run Tests**:

   Run the tests with the following command:

   ```bash
   npm run test *.test.js
   ```

   This will run all the tests and you should see all tests passing without errors or warnings.

---

## Mocha, Chai, and Sinon

### Mocha

Mocha is a test framework that allows you to write unit and integration tests for JavaScript applications. It provides a structure for your tests with hooks such as `before`, `beforeEach`, `after`, and `afterEach` to set up and clean up before and after tests.

#### Example Mocha Test:
```javascript
const { expect } = require('chai');

describe('Basic Math Operations', () => {
    it('should add two numbers correctly', () => {
        const sum = 1 + 2;
        expect(sum).to.equal(3);
    });
});
```

### Chai

Chai is an assertion library that works with Mocha for making assertions in tests. You can use `expect`, `should`, or `assert` for making assertions.

#### Chai Assertions:
- **`expect`**: Provides a chainable syntax.
- **`should`**: Adds `should` methods to all objects, enabling a more natural language style.
- **`assert`**: Basic assertion style.

#### Example with Chai:
```javascript
const { expect } = require('chai');

describe('String Tests', () => {
    it('should return the correct string length', () => {
        const str = 'Hello, World!';
        expect(str).to.have.lengthOf(13);
    });
});
```

#### Chai - Assertion Styles:

1. **Expect Style**:
   ```javascript
   expect(actual).to.equal(expected);
   expect(actual).to.have.property('property');
   ```

2. **Should Style**:
   ```javascript
   actual.should.equal(expected);
   actual.should.have.property('property');
   ```

3. **Assert Style**:
   ```javascript
   assert.equal(actual, expected);
   assert.property(actual, 'property');
   ```

---

### Sinon

Sinon is a library for creating spies, stubs, and mocks to test interactions between functions and objects in isolation.

#### Key Features of Sinon:
- **Spies**: Track how a function was called (arguments, call count, etc.) without changing its behavior.
- **Stubs**: Replace functions and specify behavior (e.g., return values, throw errors).
- **Mocks**: Replace functions with additional expectations (e.g., number of calls, arguments).
- **Fake Timers**: Fake timer functions for testing time-related code.

#### Example Sinon Spy:
```javascript
const sinon = require('sinon');
const { expect } = require('chai');

describe('Sinon Spy Example', () => {
    it('should spy on greet function calls', () => {
        const greet = (name) => console.log(`Hello, ${name}`);
        const spy = sinon.spy(greet);

        greet('Alice');
        greet('Bob');

        expect(spy.calledTwice).to.be.true;
        expect(spy.firstCall.args[0]).to.equal('Alice');
    });
});
```

#### Example Sinon Stub:
```javascript
const sinon = require('sinon');
const { expect } = require('chai');

describe('Sinon Stub Example', () => {
    it('should stub fetchData function to return mock data', () => {
        const stub = sinon.stub().returns('Mocked Data');

        const result = stub();
        expect(result).to.equal('Mocked Data');
    });
});
```

#### Example Sinon Mock:
```javascript
const sinon = require('sinon');
const { expect } = require('chai');

describe('Sinon Mock Example', () => {
    it('should mock the callback with expectations', () => {
        const mock = sinon.mock();
        mock.expects('callback').once().withArgs('test');

        function processData(data, callback) {
            callback(data);
        }

        processData('test', mock.callback);
        mock.verify();  // Verifies if expectations are met
    });
});
```

#### Sinon Fake Timers Example:
```javascript
const sinon = require('sinon');
const { expect } = require('chai');

describe('Sinon Fake Timer Example', () => {
    it('should use fake timers to test setTimeout', () => {
        const clock = sinon.useFakeTimers();
        const callback = sinon.spy();

        setTimeout(callback, 1000);
        clock.tick(1000); // Simulate the passage of 1 second

        expect(callback.calledOnce).to.be.true;
        clock.restore(); // Restore the original timers
    });
});
```

---

## Test-Driven Development (TDD) vs Behavior-Driven Development (BDD)

### TDD (Test-Driven Development)

TDD is a software development process in which tests are written before the actual code. The main steps are:
1. **Write a test**: Write a test for the function you are going to implement.
2. **Make it fail**: Run the test to see it fail (since the function is not yet implemented).
3. **Write the code**: Write the minimal code needed to pass the test.
4. **Refactor**: Refactor the code for readability and performance, and ensure tests still pass.

#### TDD Example:
```javascript
const { expect } = require('chai');

// Step 1: Write the test
describe('Sum Function', () => {
    it('should return the sum of two numbers', () => {
        const sum = add(2, 3);
        expect(sum).to.equal(5);
    });
});

// Step 2: Write the minimal code to pass the test
function add(a, b) {
    return a + b;
}
```

### BDD (Behavior-Driven Development)

BDD is a process that emphasizes collaboration between developers, QA, and domain experts. It is more natural and readable in terms of test case writing, making use of terms like `should`, `expect`, etc.

#### BDD Example:
```javascript
const { expect } = require('chai');

describe('Sum Function', () => {
    it('should return the sum of two numbers', () => {
        const sum = add(2, 3);
        sum.should.equal(5);  // using the 'should' style of assertions
    });
});
```

In BDD, tests are written in a more "story-like" format, with an emphasis on what the system *should* do.

---

## Mocha Hooks

Mocha provides hooks to set up and tear down tests. Common hooks include:

- `before()`: Runs once before all tests.
- `beforeEach()`: Runs before each test.
- `after()`: Runs once after all tests.
- `afterEach()`: Runs after each test.

#### Example using hooks:
```javascript
const { expect } = require('chai');

describe('Math Operations', () => {
    let result;

    // Hook to set up before tests
    before(() => {
        result = 10 + 5;
    });

    it('should be 15', () => {
        expect(result).to.equal(15);
    });

    // Hook to clean up after tests
    after(() => {
        console.log('Tests completed');
    });
});
```

---

## Running the Tests

### Run All Tests:
Use `npm run test` to run all your tests. Mocha will automatically look for files with the `.test.js` extension and execute them.

```bash
npm run test *.test.js
```

### Test Output:
You should see output in the console indicating whether all tests have passed or failed. If any test fails, Mocha will display an error message with details about the failure.

---

## Additional Learning Resources

To deepen your understanding of testing in Node.js, here are some great resources:

1 . **Mocha Documentation**: [https://mochajs.org/](https://mochajs.org/)
2. **Chai Documentation**: [https://www.chaijs.com/](https://www.chaijs.com/)
3. **Sinon Documentation**: [https://sinonjs.org/](https://sinonjs.org/)
4. **Test-Driven Development (TDD)**: [https://www.agilealliance.org/glossary/tdd/](https://www.agilealliance.org/glossary/tdd/)
5. **Behavior-Driven Development (BDD)**: [https://cucumber.io/docs/bdd/](https://cucumber.io/docs/bdd/)
6. **Mocha + Chai Tutorial**: [https://www.digitalocean.com/community/tutorials](https://www.digitalocean.com/community/tutorials)
7. **Sinon JS Guide**: [https://sinonjs.org/releases/latest/](https://sinonjs.org/releases/latest/)

---

By using Mocha, Chai, and Sinon together, you can write clean, maintainable, and effective tests for your JavaScript code.