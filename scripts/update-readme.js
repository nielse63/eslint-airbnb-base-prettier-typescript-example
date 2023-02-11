/* eslint-disable */
const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');

const root = path.resolve(__dirname, '..');
const files = {
  // package: 'package.json',
  eslint: '.eslintrc.js',
  prettier: '.prettierrc',
  tsconfigEslint: 'tsconfig.eslint.json',
  tsconfig: 'tsconfig.json',
};
const content = Object.entries(files).reduce((output, [key, value]) => {
  return {
    ...output,
    [key]: fs.readFileSync(path.join(root, value), 'utf-8'),
  };
}, {});
// const pkg = JSON.parse(content.package);
const devDependencies = Object.keys(pkg.devDependencies);
const scripts = {
  lint: pkg.scripts.lint,
  build: pkg.scripts.build,
};
const template = `# eslint-airbnb-base-prettier-typescript-example

> Example app using eslint, prettier, airbnb-base, and typescript

- [Install Dependencies](#install-dependencies)
- [Create Config Files](#create-config-files)
  - [1. \`tsconfig.json\`](#1-tsconfigjson)
  - [2. \`tsconfig.eslint.json\`](#2-tsconfigeslintjson)
  - [3. \`.eslintrc.js\`](#3-eslintrcjs)
  - [4. \`.prettierrc\`](#4-prettierrc)
- [Add npm scripts to \`package.json\`](#add-npm-scripts-to-packagejson)
- [Conclusion](#conclusion)

## Install Dependencies

Start by installing the necessary dependencies:

\`\`\`bash
npm install --save-dev \\
${devDependencies
  .map((dep, i) => {
    const sep = i === devDependencies.length - 1 ? '' : '\\';
    return `  ${dep} ${sep}`;
  })
  .join('\n')}
\`\`\`

## Create Config Files

### 1. \`tsconfig.json\`

After the dependencies are installed, create a new \`tsconfig.json\` file at your project's root:

\`\`\`jsonc
// tsconfig.json
${content.tsconfig.trim()}
\`\`\`

This will be your main TypeScript config file that defines your TypeScript project settings.

### 2. \`tsconfig.eslint.json\`

Then create \`tsconfig.eslint.json\`:

\`\`\`jsonc
// tsconfig.eslint.json
${content.tsconfigEslint.trim()}
\`\`\`

This defines is the config that will be read by \`eslint\`.

### 3. \`.eslintrc.js\`

Create your eslint config at \`.eslintrc.js\`:

\`\`\`js
// .eslintrc.js
${content.eslint.trim()}
\`\`\`

### 4. \`.prettierrc\`

Create a new \`.prettierrc\` file and define your own Prettier rule:

\`\`\`jsonc
// .prettierrc
${content.prettier.trim()}
\`\`\`

## Add npm scripts to \`package.json\`

\`\`\`json
{
  "lint": "${scripts.lint}",
  "build": "${scripts.build}"
}
\`\`\`

## Conclusion

With that, your project is configured to use \`eslint\`, \`prettier\`, \`airbnb-base\` and \`typescript\` - setting you up for a successful linting configuration that will maintain a consistent style guide.
`;

fs.writeFileSync(path.resolve(root, 'README.md'), template);
