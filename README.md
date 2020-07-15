## Installation

1. `npm install`

2. Install VSCode extensions: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Usage

1. `npm run watch`: start typescript watch mode

2. `npm run start`: start running dev-server

3. `npm run build`: build bundled JS file from src folder into dist folder

4. `npm run lint`: use ESLint for manually checking files inside src folder

5. Fix format error automatically on save

## Project Setting Details:

1. Install dev dependencies: `npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader`

2. Install dependencies: `npm install react react-dom --save` and install eslint and relavant eslint-plugins

3. Install dev dependencies for TS type: `npm i -D @types/react @types/react-dom`

4. Modify `tscongfig.json` as follows   
Note: customize our "outDir", delete "rootDir" because webpack will determine where the root file is and take over there

```js
{
    "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "lib": ["ES2017", "ES7", "ES6", "DOM"],
      "strict": true,
      "noImplicitAny": false,
      "removeComments": true,
      "preserveConstEnums": true,
      "baseUrl": "./",
      "outDir": "./dist",
      "typeRoots": ["node_modules/@types"],
      "esModuleInterop": true,
      "sourceMap": false,     // not to generate index.js.map file
      "declaration": false,   // not to generate index.d.ts file
      "noEmitOnError": true,  // stop producing bundled file on compilation error
      "jsx": "react"
    },
    "include": ["src/*.ts","src/*.tsx"],
    "exclude": ["node_modules", "dist"]
}
```

5. Create `webpack.config.js` as follows  
Note: `resolve: { extensions: ['.ts','.tsx','.js','.jsx'] }` is for the import syntax like `import App from './app';` without `'./app.tsx'` suffix

```js
const path = require('path'); 

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: "./dist",
    },
    module: {
        rules: [
            {
                test: /\.ts$|\.tsx$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.tsx','.js','.jsx']
    }
};
```

6. `npm install --save-dev clean-webpack-plugin`

7. split `webpack.config.js` into `webpack.common-config.js`, `webpack.dev-config.js`, `webpack.prod-config.js` using `webpack-merge` package

8. Modify the script in `package.json`

```js
  "scripts": {
    "build": "webpack --config webpack.prod-config.js",
    "start": "webpack-dev-server --open --config webpack.dev-config.js",
    "watch": "tsc -w",
    "lint": "eslint ./src --ext .js,.jsx,.ts,.tsx"
  },
```

9. Create and modify `eslintrc.js`
 
10. Add VSCode setting file `setting.json` in `.vscode` folder:

```js
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
```