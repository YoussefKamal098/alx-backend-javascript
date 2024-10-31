# 0x00. ES6 Basics

## JavaScript ES6

## Concepts

For this project, we expect you to look at the following concepts:

- [JavaScript programming](https://intranet.alxswe.com/concepts/852)
- [Software Linter](https://intranet.alxswe.com/concepts/542)

## Resources

Read or watch the following resources to enhance your understanding of the concepts:

- [ECMAScript 6 - ECMAScript 2015](https://www.ecma-international.org/publications/standards/Ecma-262.htm)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#statements_and_declarations)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [JavaScript ES6 — Iterables and Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

---

## Learning Objectives

At the end of this project, you should be able to explain the following concepts without assistance:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and default parameters
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and `for-of` loops

---

## Requirements

### General

- All your files will be executed on **Ubuntu 18.04 LTS** using **NodeJS 12.11.x**.
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All your files should end with a new line.
- A **README.md** file, located at the root of the project folder, is mandatory.
- Your code should use the `.js` extension.
- Your code will be tested using the **Jest Testing Framework**.
- Your code will be analyzed using the **linter ESLint** along with specific rules provided.
- All of your functions must be exported.

## Setup

### Install NodeJS 12.11.x

Run the following commands in your home directory:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Verify the installation:

```bash
nodejs -v
# v12.11.1
npm -v
# 6.11.3
```

### Install Jest, Babel, and ESLint

In your project directory, install Jest, Babel, and ESLint using the supplied `package.json`:

```bash
npm install
```

### Configuration Files

Add the following configuration files to your project directory:

1. **package.json**
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
        "@babel/node": "^7.8.0",
        "@babel/preset-env": "^7.6.0",
        "eslint": "^6.4.0",
        "eslint-config-airbnb-base": "^14.0.0",
        "eslint-plugin-import": "^2.18.2",
        "eslint-plugin-jest": "^22.17.0",
        "jest": "^24.9.0"
      }
    }
    ```

2. **babel.config.js**
    ```javascript
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

3. **.eslintrc.js**
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
        'no-console': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': [
          'error',
          'LabeledStatement',
          'WithStatement',
        ],
      },
      overrides:[
        {
          files: ['*.js'],
          excludedFiles: 'babel.config.js',
        }
      ]
    };
    ```

### Final Steps

Don’t forget to run `npm install` from the terminal in your project folder to install all necessary project dependencies.
