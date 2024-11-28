# Node.js Basics Project

## Project Overview

This project introduces you to core concepts and practical skills needed to work with Node.js and related technologies. You'll be building a simple Node.js application that involves creating an HTTP server, working with files, utilizing command-line arguments, using ES6 features, and setting up a development workflow with tools like Babel, Nodemon, ESLint, and Mocha for testing.

### **Learning Objectives**
By the end of this project, you'll be able to:

- Run JavaScript using Node.js
- Use Node.js modules for file handling and environment access
- Create an HTTP server using Node.js and Express
- Develop advanced routes with Express.js
- Use ES6 features in Node.js using Babel
- Develop more efficiently using Nodemon
- Test your code with Jest and Mocha
- Ensure code quality using ESLint

---

## **Resources**
Here are some resources to help you get started and dive deeper into the concepts used in this project:

- **Node JS Getting Started** - [Node.js Documentation](https://nodejs.org/en/docs/)
- **Process API doc** - [Node.js Process API](https://nodejs.org/dist/latest-v16.x/docs/api/process.html)
- **Child Process** - [Node.js Child Process](https://nodejs.org/dist/latest-v16.x/docs/api/child_process.html)
- **Express Getting Started** - [Express Documentation](https://expressjs.com/en/starter/installing.html)
- **Mocha Documentation** - [Mocha](https://mochajs.org/)
- **Nodemon Documentation** - [Nodemon](https://nodemon.io/)
- **ESLint Documentation** - [ESLint](https://eslint.org/docs/user-guide/getting-started)

---

## **Project Setup**

1. **Clone the Repository** (or set up the project folder):
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install Dependencies**:
   Run `npm install` to install all the required dependencies specified in `package.json`.

   ```bash
   npm install
   ```

---

## **Files and Configuration**

### **1. `package.json`**

This is the project’s configuration file that includes dependencies, devDependencies, and scripts.

- **Dependencies**:
  - `chai-http`: For making HTTP requests in tests.
  - `express`: Web framework for building the HTTP server.
- **DevDependencies**:
  - `babel-cli`, `babel-preset-env`: Babel for using ES6 and beyond with Node.js.
  - `nodemon`: Automatically restarts the server during development.
  - `eslint`, `eslint-config-airbnb-base`: Code linter for maintaining code quality.
  - `mocha`: Test framework for running tests.
  - `chai`: Assertion library for tests.
  - `sinon`: Mocking and spying utilities for tests.

**Key Scripts**:
- `lint`: Runs ESLint to check code quality.
- `check-lint`: Checks specific JavaScript files for linting errors.
- `test`: Runs tests using Mocha and Babel.
- `dev`: Starts the development server with Babel and Nodemon.

### **2. `babel.config.js`**

This configuration file for Babel tells it to use the `@babel/preset-env` preset, which allows you to use modern JavaScript (ES6 and beyond). It also ensures compatibility with the current version of Node.js.

```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current', // Ensures compatibility with the current Node.js version
        },
      },
    ],
  ],
};
```

### **3. `.eslintrc.js`**

This file configures ESLint for code linting and maintaining code style.

- **Environment Setup**: Configures for browser (false), ES6 (true), and Jest (true) environments.
- **Airbnb Base Style**: Uses Airbnb's JavaScript style guide as the base configuration.
- **Jest Plugin**: Ensures compatibility with Jest testing.
- **Custom Rules**:
  - `max-classes-per-file`: Disabled.
  - `no-console`: Allowed.
  - `no-shadow`: Disabled.

```javascript
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
};
```

---

## **How to Run the Project**

### **1. Starting the Development Server**:
Use the following command to start the server with live reloading (via Nodemon) and Babel for ES6+ compatibility:

```bash
npm run dev
```

This will start the `server.js` file and use the `database.csv` file. It will automatically restart the server when any changes are made to the files.

### **2. Running Tests**:
The project uses Mocha for testing. To run the tests, simply use the following command:

```bash
npm run test
```

This will run all the tests defined in the project.

To check for linting errors (code style violations), use:

```bash
npm run lint
```

### **3. Full Testing (Tests + Lint)**:
To run the full test suite, including linting and tests, use:

```bash
npm run full-test
```

---

## **How to Structure the Project**

- **`server.js`**: Contains your Express server setup and routes.
- **`database.csv`**: CSV file with sample data (you'll read from this file in your project).
- **Test files**: Mocha tests for verifying the server and functions (e.g., `test/` directory).
- **Configuration files**: `babel.config.js`, `.eslintrc.js`, `package.json` for project setup.

### **Example Express Server (`server.js`)**:

```javascript
const express = require('express');
const app = express();

// Example route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Server listening on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

---

## **Testing with Mocha and Chai**

The tests in this project use Mocha for structuring and running tests, and Chai for assertions. Mocha tests are structured with the following lifecycle methods:

- **`before()`**: Runs once before all tests in the file.
- **`beforeEach()`**: Runs before each individual test.
- **`after()`**: Runs once after all tests in the file.
- **`afterEach()`**: Runs after each individual test.

### **Example Mocha Test**:

```javascript
const chai = require('chai');
const expect = chai.expect;

describe('GET /', () => {
  it('should return Hello World', (done) => {
    // Simulating an HTTP request
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello World');
        done();
      });
  });
});
```

---

## **Conclusion**

This project sets you up with the basic foundations of Node.js, Express, testing, and a modern JavaScript development workflow. You'll use tools like Babel to write ES6 code and Nodemon for automatic server restarts during development. With Mocha, Chai, and ESLint, you'll be able to write and run tests efficiently while keeping your code clean and maintainable.

