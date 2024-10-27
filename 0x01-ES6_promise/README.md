# 0x01. ES6 Promises

## Resources

To deepen your understanding of ES6 Promises, read or watch the following:

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [JavaScript Promise: An Introduction](https://www.sitepoint.com/javascript-promises-beginners-guide/)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

## Learning Objectives

By the end of this project, you should be able to explain the following concepts:

1. **Promises**: Understand how, why, and what they are.
2. **Using Promise Methods**: Use `then`, `resolve`, and `catch` methods.
3. **Every Promise Method**: Be familiar with all methods of the Promise object.
4. **Error Handling**: Implement error handling with `throw` and `try`.
5. **Await Operator**: Use the `await` operator effectively.
6. **Async Functions**: Define and use async functions.

## Requirements

- Your code must be executed on **Ubuntu 18.04 LTS** using **NodeJS 12.11.x**.
- **Allowed Editors**: vi, vim, emacs, Visual Studio Code.
- All files should end with a new line.
- A `README.md` file is mandatory at the root of the project folder.
- Your code should utilize the `.js` extension.
- Your code will be tested using Jest with the command `npm run test`.
- Your code will be verified against lint using ESLint.
- All functions must be exported.

## Setup Instructions

### Install NodeJS 12.11.x

In your home directory, run the following commands:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Verify your installation:

```bash
nodejs -v
# v12.11.1
npm -v
# 6.11.3
```

### Install Jest, Babel, and ESLint

In your project directory, create a `package.json` file or use the supplied one, and install the necessary dependencies by running:

```bash
npm install
```

## Configuration Files

### 1. package.json

This file manages your project dependencies and scripts.

```json
{
  "scripts": {
    "test": "jest",
    "lint": "eslint ."
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "eslint": "^7.32.0",
    "eslint-config-airbnb-base": "^14.2.1",
    "eslint-plugin-import": "^2.22.1",
    "jest": "^27.0.6"
  }
}
```

- **Scripts**: Defines `test` for running Jest tests and `lint` for running ESLint.
- **Dependencies**: Lists the necessary packages for Babel, ESLint, and Jest.

### 2. babel.config.js

This file configures Babel to transpile your JavaScript code to a version compatible with older environments.

```javascript
module.exports = {
  presets: ['env'],
};
```

- **Presets**: Specifies that Babel should use the `env` preset, which automatically determines the Babel plugins and polyfills you need based on your supported environments.

### 3. .eslintrc.js

This file configures ESLint for your project.

```javascript
module.exports = {
  extends: 'airbnb-base',
  env: {
    jest: true,
  },
  rules: {
    'no-console': 'off',
  },
};
```

- **Extends**: Inherits the rules from the Airbnb base configuration.
- **Environment**: Sets the environment for Jest tests.
- **Rules**: Customizes ESLint rules (e.g., allowing `console.log` statements).

### 4. utils.js

This file contains utility functions to be used in tasks that require `uploadPhoto` and `createUser`.

```javascript
const uploadPhoto = () => Promise.resolve({ status: 200, body: 'photo-profile-1' });

const createUser = (firstName, lastName) => 
  Promise.resolve({ firstName, lastName });

module.exports = { uploadPhoto, createUser };
```

- **uploadPhoto**: Returns a resolved Promise with a mock response.
- **createUser**: Returns a resolved Promise with user information based on the provided parameters.

## Running Your Code

### Running Tests

To run the tests using Jest, execute:

```bash
npm run test
```

### Linting Your Code

To check your code for style issues using ESLint, run:

```bash
npm run lint
```

### Example Code

You can create an example JavaScript file (e.g., `index.js`) to demonstrate the use of promises:

```javascript
const { uploadPhoto, createUser } = require('./utils');

const main = async () => {
  try {
    const photoResponse = await uploadPhoto();
    console.log(photoResponse);

    const userResponse = await createUser('Guillaume', 'Salva');
    console.log(userResponse);
  } catch (error) {
    console.error('Error:', error);
  }
};

main();
```

### Running Your Example Code

You can run your example file using Node.js:

```bash
node index.js
```