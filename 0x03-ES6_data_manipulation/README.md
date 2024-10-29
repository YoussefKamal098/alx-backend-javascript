# ES6 Data Manipulation

This project focuses on ES6 data manipulation concepts and techniques, including advanced array methods, Typed Arrays, and new data structures like Set, Map, and WeakMap. By the end of this project, you will be able to confidently use these data manipulation tools in JavaScript to improve code readability, performance, and efficiency.

## Table of Contents
- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Resources](#resources)

## Learning Objectives

By completing this project, you will learn how to:
- Use `map`, `filter`, and `reduce` methods on arrays for data manipulation.
- Work with Typed Arrays in JavaScript.
- Utilize `Set`, `Map`, and `WeakMap` data structures for better data organization and performance.

## Requirements

- Files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Supported editors include `vi`, `vim`, `emacs`, and Visual Studio Code.
- Each file should end with a newline.
- A `README.md` file is required at the root of the project folder.
- Code files should have a `.js` extension.
- Project will be tested with `Jest` and verified against `ESLint` for linting.
- Code must pass all tests and lint checks.

## Setup

1. **Install Node.js 12.11.x**  
   Run the following commands to install Node.js:
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```

   Verify installation:
   ```bash
   nodejs -v   # Expected output: v12.11.1
   npm -v      # Expected output: 6.11.3
   ```

2. **Install Project Dependencies**  
   Use the provided `package.json` file and install Jest, Babel, and ESLint:
   ```bash
   npm install
   ```

3. **Configuration Files**  
   Ensure these configuration files are present in the project directory:

    - `package.json` - Defines scripts and dependencies.
    - `babel.config.js` - Babel configuration for ES6 compatibility.
    - `.eslintrc.js` - ESLint configuration for code linting.

## Usage

To execute any JavaScript files, use the Babel Node CLI:
```bash
npx babel-node <filename.js>
```

To run tests, execute:
```bash
npm run test
```

## Project Structure

The project includes:
- `package.json`: Manages project dependencies and scripts.
- `babel.config.js`: Babel configuration for transpiling ES6 code.
- `.eslintrc.js`: Configuration for linting JavaScript code.
- `src/`: Directory containing the project files and scripts.

## Available Scripts

- `npm run lint`: Lints JavaScript files in the project.
- `npm run check-lint`: Checks the linting for JavaScript files.
- `npm run dev`: Runs files using Babel in development mode.
- `npm run test`: Runs tests using Jest.
- `npm run full-test`: Runs both linting and tests.

## Resources

For more information, refer to the following resources:
- [Array in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Typed Arrays in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
- [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

