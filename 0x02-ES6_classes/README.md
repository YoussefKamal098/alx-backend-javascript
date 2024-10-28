# 0x02. ES6 Classes

## Project Overview

This project focuses on using ES6 classes in JavaScript to deepen your understanding of object-oriented programming (OOP) principles. Through various exercises, you will learn to define and extend classes, implement methods, utilize static methods, and apply metaprogramming techniques.

### Project Requirements

- **Operating System**: Ubuntu 18.04 LTS
- **Node.js Version**: 12.11.x
- **Editor**: vi, vim, emacs, or Visual Studio Code
- **File Requirements**:
    - JavaScript files with the `.js` extension
    - Files must end with a new line
- **Testing**: Jest is used to test functionality
- **Linting**: ESLint, following Airbnb’s style guide, is used to ensure code quality

## Learning Objectives

Upon completion of this project, you should be able to:

- Define a class in JavaScript
- Add methods to a class and understand their use
- Use and understand static methods in a class
- Extend classes to inherit functionality
- Implement metaprogramming using symbols

## Setup

### 1. Install Node.js 12.11.x

Run the following commands in your home directory to install Node.js:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Verify installation:

```bash
nodejs -v  # Should output v12.11.1
npm -v     # Should output 6.11.3
```

### 2. Install Jest, Babel, and ESLint

In your project directory, install dependencies with the provided `package.json` file:

```bash
npm install
```

### 3. Configuration Files

Ensure you have the following configuration files in your project:

#### `package.json`

The `package.json` file includes scripts for running tests and linting:

```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "@babel/node": "^7.8.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

#### `babel.config.js`

This file configures Babel to work with the current version of Node.js:

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

#### `.eslintrc.js`

The ESLint configuration file with custom rules:

```js
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
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
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
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

## Usage

1. **Run Tests**: Execute tests with Jest by running:
   ```bash
   npm test
   ```

2. **Lint Code**: Check for style issues with ESLint:
   ```bash
   npm run lint
   ```

3. **Run Full Test**: Run both tests and linting:
   ```bash
   npm run full-test
   ```

## Resources

To succeed in this project, refer to the following resources for a deep dive into ES6 classes and related advanced JavaScript concepts:

### 1. **Classes**
- [MDN Web Docs - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes): A thorough guide on JavaScript classes, covering syntax, methods, static methods, inheritance, and more.
- [JavaScript.info - Class Basics](https://javascript.info/class): A beginner-friendly introduction to JavaScript classes, methods, constructors, and inheritance.
- [JavaScript.info - Class Inheritance](https://javascript.info/class-inheritance): An excellent resource for understanding how inheritance works in JavaScript, with examples and explanations on extending classes.

### 2. **Metaprogramming**
- [MDN Web Docs - Metaprogramming](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming): An overview of JavaScript metaprogramming techniques, including proxies and reflection.
- [Symbols in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol): Explanation of symbols, a core aspect of metaprogramming in ES6, used for creating unique object keys and metaprogramming.
- [Eloquent JavaScript - Metaprogramming](https://eloquentjavascript.net/10_modules.html): A chapter that covers modules and metaprogramming in JavaScript, helpful for seeing how to use advanced programming techniques for more complex applications.

### 3. **Static Methods and Advanced Techniques**
- [MDN Web Docs - Static Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static): Explanation of static methods in classes, used for class-level functionality.
- [JavaScript by Example - Static Methods](https://www.javascripttutorial.net/es6/static-method/): A concise guide with examples on defining and using static methods in JavaScript classes.

### 4. **Additional Resources**
- [JavaScript.info - Advanced Working with Functions](https://javascript.info/advanced-functions): Covers advanced function techniques, such as closures and context, which are crucial for understanding class methods.
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript): The style guide used for this project, providing rules and best practices for writing clean, consistent JavaScript code.