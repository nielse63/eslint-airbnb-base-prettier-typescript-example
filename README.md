# eslint-airbnb-base-prettier-typescript-example

> Example app using eslint, prettier, airbnb-base, and typescript

## Install Dependencies

Start by installing the necessary dependencies:

```bash
npm install --save-dev \
    @typescript-eslint/eslint-plugin \
    eslint \
    eslint-config-airbnb-base \
    eslint-config-airbnb-typescript \
    eslint-plugin-import \
    eslint-plugin-prettier \
    prettier \
    typescript
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
  extends: 'airbnb-typescript/base',
  plugins: ['import', 'prettier'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
};
```

This config will:

1. Extend the `airbnb-typescript/base` config
2. Use the `import` and `prettier` eslint plugins
3. Read settings defined in `tsconfig.eslint.json` for

### 4. `.prettierrc`

Create a new `.prettierrc` file and define your own Prettier rule:

```json
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

## Conclusion

With that, your project is configured to use `eslint`, `prettier`, `airbnb-base` and `typescript` - setting you up for a successful linting configuration that will maintain a consistent style guide.
