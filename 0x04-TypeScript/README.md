# 0x04. TypeScript Documentation

## Resources

To get started with TypeScript, refer to the following resources:

- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Learning Objectives

By the end of this project, you should be able to explain the following concepts:

1. Basic types in TypeScript
2. Interfaces, Classes, and Functions
3. How to work with the DOM and TypeScript
4. Generic types
5. How to use namespaces
6. How to merge declarations
7. How to use an ambient Namespace to import an external library
8. Basic nominal typing with TypeScript

## Requirements

- **Allowed Editors**: vi, vim, emacs, Visual Studio Code
- All files must end with a new line.
- All TypeScript scripts will be transpiled on Ubuntu 18.04.
- Your TypeScript code will be checked with Jest (version 24.9.*).
- A `README.md` file is mandatory at the root of the project folder.
- Your code should utilize the `.ts` extension when applicable.
- The TypeScript compiler should show no warnings or errors when compiling your code.

## Configuration Files

### 1. package.json

This file manages project dependencies and scripts.

```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.ts",
    "dev": "npx ts-node src/index.ts", // Run TypeScript code directly
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.ts && jest",
    "build": "webpack" // Builds the project using Webpack
  },
  "devDependencies": {
    "typescript": "^4.0.0",
    "ts-node": "^10.0.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "jest": "^24.9.0",
    "@types/jest": "^24.0.0",
    "@typescript-eslint/parser": "^2.0.0",
    "@typescript-eslint/eslint-plugin": "^2.0.0",
    "webpack": "^5.0.0", // Webpack for bundling
    "webpack-cli": "^4.0.0", // Command line interface for Webpack
    "ts-loader": "^9.0.0" // Loader for Webpack to handle TypeScript files
  }
}
```

### 2. .eslintrc.js

This file configures ESLint for your TypeScript project.

```javascript
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/all',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
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
      files: ['*.ts'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

### 3. tsconfig.json

This file configures the TypeScript compiler options.

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["*.ts"],
  "exclude": ["node_modules"]
}
```

### 4. webpack.config.js

This file configures Webpack to bundle your TypeScript files.

```javascript
const path = require('path');

module.exports = {
  mode: 'development', // Use 'production' for optimized builds
  entry: './src/index.ts', // Entry point of your application
  module: {
    rules: [
      {
        test: /\.ts$/, // Process .ts files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve these extensions
  },
  output: {
    filename: 'bundle.js', // Name of the output bundle
    path: path.resolve(__dirname, 'dist'), // Output directory for the bundle
  },
};
```

## Setup Instructions

To set up your project, follow these steps:

1. **Create a New Directory**: Navigate to your terminal and create a new directory for your project.

   ```bash
   mkdir typescript-project
   cd typescript-project
   ```

2. **Initialize `package.json`**: Run the following command to initialize a new `package.json` file:

   ```bash
   npm init -y
   ```

3. **Install Dependencies**: Install the necessary dependencies:

   ```bash
   npm install typescript ts-node eslint eslint-config-airbnb-base eslint-plugin-import jest @types/jest @typescript-eslint/parser @typescript-eslint/eslint-plugin webpack webpack-cli ts-loader --save-dev
   ```

4. **Create Configuration Files**: Create the configuration files (`package.json`, `.eslintrc.js`, `tsconfig.json`, and `webpack.config.js`) with the contents provided above.

5. **Create TypeScript Files**: Create your TypeScript files in a `src` directory:

   ```bash
   mkdir src
   touch src/index.ts
   ```

   Add your TypeScript code to `src/index.ts`.

## Building the Project

To compile your TypeScript code and create a bundled JavaScript file, use the `npm run build` command:

### How `npm run build` Works

1. **Run Webpack**: The command `npm run build` executes the `webpack` command specified in the `scripts` section of `package.json`.
2. **Webpack Entry Point**: Webpack looks for the entry point defined in `webpack.config.js`, which is `src/index.ts`.
3. **Transpile TypeScript**: The `ts-loader` processes the TypeScript files, transpiling them into JavaScript.
4. **Bundle Output**: Webpack outputs the bundled JavaScript file (e.g., `bundle.js`) into the `dist` directory.

### Example Command

To build your project, simply run:

```bash
npm run build
```

After running this command, you can find the bundled output in the `dist` directory.

## Running Your TypeScript Code

1. **Compile TypeScript**: To compile your TypeScript files, run:

   ```bash
   npx tsc
   ```

2. **Run Your TypeScript Code**: You can run your TypeScript code directly using `ts-node`:

   ```bash
   npm run dev
   ```

3. **Run Tests with Jest**: To run your tests with Jest, use:

   ```bash
   npm test
   ```

4. **Lint Your Code**: For linting, use:

   ```bash
   npm run lint
   ```

5. **Full Test (Linting + Jest)**: To run a full test including linting and Jest:

   ```bash
   npm run full-test
   ```