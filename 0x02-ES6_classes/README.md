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

## Explanation of ES6 Classes

### Definition of Classes

In JavaScript, classes are a syntactical sugar over the existing prototype-based inheritance. They are primarily used to create objects and implement inheritance in a more straightforward and intuitive way.

#### Class Declaration

You can define a class using the `class` keyword followed by the class name. Here’s a basic example:

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
```

### Creating Instances

You can create instances of a class using the `new` keyword:

```javascript
const john = new Person('John Doe', 30);
console.log(john.introduce()); // Outputs: Hello, my name is John Doe and I am 30 years old.
```

### Inheritance

Classes can extend other classes using the `extends` keyword. This allows one class to inherit properties and methods from another.

```javascript
class Employee extends Person {
    constructor(name, age, position) {
        super(name, age); // Call the constructor of the parent class
        this.position = position;
    }

    describe() {
        return `${this.introduce()} I work as a ${this.position}.`;
    }
}

const jane = new Employee('Jane Doe', 28, 'Software Engineer');
console.log(jane.describe()); // Outputs: Hello, my name is Jane Doe and I am 28 years old. I work as a Software Engineer.
```

### Static Methods

Static methods are called on the class itself rather than on instances of the class. They are useful for utility functions related to the class.

```javascript
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtils.add(5, 10)); // Outputs: 15
```

## Metaprogramming with Symbols

JavaScript also supports metaprogramming, allowing you to modify the behavior of classes. One common way to do this is by using `Symbols` to create unique property keys.

```javascript
const uniqueKey = Symbol('uniqueKey');

class MyClass {
    constructor() {
        this[uniqueKey] = 'This is a unique value';
    }

    getUniqueValue() {
        return this[uniqueKey];
    }
}

const obj = new MyClass();
console.log(obj.getUniqueValue()); // Outputs: This is a unique value
```

Certainly! Here’s an explanation of JavaScript Symbols and their methods using classes. This will demonstrate how to utilize Symbols to enhance class behavior through metaprogramming techniques.

### 1. **Using `Symbol.hasInstance`**

The `Symbol.hasInstance` method allows you to customize the behavior of the `instanceof` operator for a class.

```javascript
class MyClass {
  static [Symbol.hasInstance](instance) {
    // Custom logic to determine if instance is considered part of MyClass
    return Array.isArray(instance);
  }
}

// Examples
console.log([] instanceof MyClass); // true
console.log({} instanceof MyClass); // false
```

### 2. **Using `Symbol.toStringTag`**

The `Symbol.toStringTag` allows you to customize the string representation of your class instances.

```javascript
class MyClass {
  constructor() {
    this.value = 42;
  }
  
  [Symbol.toStringTag]() {
    return 'CustomClass';
  }
}

// Example
const obj = new MyClass();
console.log(Object.prototype.toString.call(obj)); // "[object CustomClass]"
```

### 3. **Using `Symbol.iterator`**

The `Symbol.iterator` method enables your class instances to be iterable using `for...of`.

```javascript
class MyIterable {
  constructor(data) {
    this.data = data;
  }

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

// Example
const iterable = new MyIterable([1, 2, 3]);
for (const value of iterable) {
  console.log(value); // 1, 2, 3
}
```

### 4. **Using `Symbol.toPrimitive`**

The `Symbol.toPrimitive` method allows you to define how instances of your class are converted to primitive values.

```javascript
class MyNumber {
  constructor(value) {
    this.value = value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return `Value is ${this.value}`;
    } else if (hint === 'number') {
      return this.value;
    }
    return null; // Default case
  }
}

// Examples
const num = new MyNumber(42);
console.log(`${num}`); // "Value is 42"
console.log(+num);      // 42
```

### 5. **Using `Symbol.species`**

The `Symbol.species` allows you to specify a different constructor to be used when creating derived objects.

```javascript
class MyArray extends Array {
  static get [Symbol.species]() {
    return Array; // Return the default Array constructor
  }
}

// Example
const myArray = new MyArray(1, 2, 3);
const newArray = myArray.slice(1); // Returns a new Array
console.log(newArray instanceof MyArray); // false
console.log(newArray instanceof Array); // true
```

### 6. **Using `Symbol.isConcatSpreadable`**

The `Symbol.isConcatSpreadable` allows you to control how your class instances are treated when concatenated with arrays.

```javascript
class MySpreadable {
  constructor(data) {
    this.data = data;
  }

  get [Symbol.isConcatSpreadable]() {
    return true; // Indicate that this instance should be spread
  }
}

// Example
const array = [1, 2, 3];
const spreadable = new MySpreadable([4, 5, 6]);
const result = array.concat(spreadable);
console.log(result); // [1, 2, 3, 4, 5, 6]
```

### 7. **Using `Symbol.match`, `Symbol.replace`, `Symbol.search`, `Symbol.split`**

You can implement these Symbols to customize string matching and manipulation with regular expressions.

#### `Symbol.match`
```javascript
class MyMatcher {
  [Symbol.match](string) {
    return string.includes('Hello');
  }
}

// Example
const matcher = new MyMatcher();
console.log('Hello, world!'.match(matcher)); // true
console.log('Goodbye, world!'.match(matcher)); // false
```

#### `Symbol.replace`
```javascript
class MyReplacer {
  [Symbol.replace](string, replacement) {
    return string.replace('Hello', replacement);
  }
}

// Example
const replacer = new MyReplacer();
console.log('Hello, world!'.replace(replacer, 'Hi')); // "Hi, world!"
```

#### `Symbol.search`
```javascript
class MySearcher {
  [Symbol.search](string) {
    return string.indexOf('Hello');
  }
}

// Example
const searcher = new MySearcher();
console.log('Hello, world!'.search(searcher)); // 0
console.log('Goodbye, world!'.search(searcher)); // -1
```

#### `Symbol.split`
```javascript
class MySplitter {
  [Symbol.split](string) {
    return string.split(' ').reverse();
  }
}

// Example
const splitter = new MySplitter();
console.log('Hello World'.split(splitter)); // ["World", "Hello"]
```

### 8. **Using `Symbol.unscopables`**

This Symbol can be used to specify properties that should not be included in `with` statements.

```javascript
class MyObject {
  constructor() {
    this.a = 1;
    this.b = 2;
  }

  get [Symbol.unscopables]() {
    return { b: true }; // 'b' will be excluded from 'with'
  }
}

// Example
const obj = new MyObject();
with (obj) {
  console.log(a); // 1
  // console.log(b); // ReferenceError: b is not defined
}
```

### Summary

By utilizing Symbols within classes, you can create powerful and flexible objects that exhibit custom behaviors for type checking, iteration, string conversion, and more. These metaprogramming techniques enhance the encapsulation and functionality of your JavaScript classes, allowing for a more expressive coding style. Here’s a quick recap of how Symbols can enhance class behavior:

- **`Symbol.hasInstance`**: Customize `instanceof` behavior.
- **`Symbol.toStringTag`**: Control string representation of class instances.
- **`Symbol.iterator`**: Make instances iterable with `for...of`.
- **`Symbol.toPrimitive`**: Define conversion to primitive values.
- **`Symbol.species`**: Specify constructors for derived objects.
- **`Symbol.isConcatSpreadable`**: Control how instances are concatenated with arrays.
- **`Symbol.match`**, **`Symbol.replace`**, **`Symbol.search`**, **`Symbol.split`**: Customize string manipulation with regex.
- **`Symbol.unscopables`**: Define properties excluded from `with` statements.

Using these methods effectively can lead to cleaner and more maintainable code while leveraging JavaScript’s advanced features.

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


