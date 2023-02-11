# eslint-airbnb-base-prettier-typescript-example

> Example app using eslint, prettier, airbnb-base, and typescript

- [Install Dependencies](#install-dependencies)
- [Create Config Files](#create-config-files)
  - [1. `tsconfig.json`](#1-tsconfigjson)
  - [2. `tsconfig.eslint.json`](#2-tsconfigeslintjson)
  - [3. `.eslintrc.js`](#3-eslintrcjs)
  - [4. `.prettierrc`](#4-prettierrc)
- [Add npm scripts to `package.json`](#add-npm-scripts-to-packagejson)
- [Conclusion](#conclusion)

## Install Dependencies

Start by installing the necessary dependencies:

```bash
# eslint-config-airbnb-base and all peerDependencies
npx install-peerdeps --dev eslint-config-airbnb-base

# install all other devDependencies
npm install eslint-config-airbnb-typescript \
    @typescript-eslint/eslint-plugin@^5.13.0 \
    @typescript-eslint/parser@^5.0.0 \
    typescript \
    prettier \
    eslint-plugin-prettier \
    eslint-config-prettier \
    --save-dev
```

## Create Config Files

### 1. `tsconfig.json`

After the dependencies are installed, create a new `tsconfig.json` file at your project's root:

```jsonc
// tsconfig.json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "baseUrl": "./",
    "paths": {
      "*": ["./src/*"]
    },
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

This will be your main TypeScript config file that defines your TypeScript project settings.

### 2. `tsconfig.eslint.json`

Then create `tsconfig.eslint.json`:

```jsonc
// tsconfig.eslint.json
{
  "extends": "./tsconfig.json",
  "include": ["./**/*.ts", "./**/*.js", "./.*.js"]
}
```

This defines is the config that will be read by `eslint`.

### 3. `.eslintrc.js`

Create your eslint config at `.eslintrc.js`:

```js
// .eslintrc.js
module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  extends: [
    'airbnb-typescript/base',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
};
```

### 4. `.prettierrc`

Create a new `.prettierrc` file and define your own Prettier rule:

```json
// .prettierrc
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxSingleQuote": false,
  "arrowParens": "always",
  "proseWrap": "never",
  "htmlWhitespaceSensitivity": "strict",
  "endOfLine": "lf"
}
```

## Add npm scripts to `package.json`

```json
{
  "lint": "eslint --fix . && prettier --write .",
  "build": "tsc"
}
```

## Conclusion

With that, your project is configured to use `eslint`, `prettier`, `airbnb-base` and `typescript` - setting you up for a successful linting configuration that will maintain a consistent style guide.
