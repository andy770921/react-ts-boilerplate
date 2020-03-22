## Installation

`npm install`

## Usage

1. `npm run watch`: typescript watch mode

2. `npm run start`: start dev-server

3. `npm run build`: build file from src folder into dist folder

4. `npm run lint`: use esLint for checking files inside src folder manually

5. install VSCode extensions: ESLint, Prettier

## Details

1. `npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader`

2. `npm install react react-dom --save` and install eslint and relavant eslint-plugins

3. `npm i -D @types/react @types/react-dom`

4. modify tscongfig.json as follows.   
Note: customize our "outDir", delete "rootDir" because webpack will determine where the root file is and take over there

```js
{
    "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "lib": ["es2017", "es7", "es6", "dom"],
      "strict": true,
      "noImplicitAny": false,
      "removeComments": true,
      "preserveConstEnums": true,
      "baseUrl": "./",
      "outDir": "./dist",
      "typeRoots": ["node_modules/@types"],
      "esModuleInterop": true,
      "declaration": true,
      "jsx": "react"
    },
    "include": ["src/*.ts","src/*.tsx"],
    "exclude": ["node_modules", "dist"]
}
```

5. create webpack.config.js as follows

```js
module.exports = {
    mode: 'development',
    entry: './src/app.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: 'dist'
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
        extensions: ['.ts','.js']
    }
};
```

6. `npm install --save-dev clean-webpack-plugin`

7. create webpack.prod-config.js as follows

```js
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/app.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
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
        extensions: ['.ts','.js']
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
};
```

8. modify the script of package.json
```js
  "scripts": {
    "build": "webpack --config webpack.prod-config.js",
    "start": "webpack-dev-server",
    "watch": "tsc -w",
    "lint": "eslint ./src --ext .js,.jsx,.ts,.tsx"
  },
```
9. create and modify eslintrc.js 
 
10. VSCode setting.json:
```js
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
```