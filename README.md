# ES6
## ES6 repository 🚀

## Technologies ##

+ Node ✔
+ Yarn ✔
+ Babel ✔
+ JavaScript ✔
+ HTML ✔

## 01/02 - Configuring the babel

### Step 1 

- Install Node and yarn 
- Install dependencies 

    ___

        yarn add @babel/cli
        yarn add @babel/preset-env
        yarn add @babel/core

    ___

### Step 2

- Create file .babel for all the browsers know the features of ES6, ES7, ES8
- Create script "dev" for run with yarn and test babel file 


## 03/04 - Class

- Parent class 
- Child class
- Construct method
- Static method

## 05 - Const & Let

- Mutation
- Scopo

## 06 - Array Operations

- Map() Go through each item in the array and return some value.
- Reduce() Consumes the array and turns it into a single value. 
- Filter() Get all even or odd items from the array.
- Find() Checks if there are any items in the array.

## 07 - Arrow Function

- Used whenever an anonymous callback / function

    Rules:

    - 1º  Removes the word function.
    - 2º  Insert => before {}.
    - 3º  When there is only 1 parameter, you can remove the parentheses from the parameter.
    - 4º  When it returns only one result and not several lines, it removes the {} and the return.

## 08 - Standard values

- Defines values ​​in the function parameters

## 09 - Destructuring Objects

- How to get values ​​from an object

## 10 - Rest/Spread

- Install plugin-proposal-object-rest-spread

    ___

        yarn add @babel/plugin-proposal-object-rest-spread

    ___

    - add in file .babelrc "plugins": ["@babel/plugin-proposal-object-rest-spread"]


- Using REST operatior in object
- Using REST operatior in array
- Using REST operatior in functions

___

- Using SPREAD for Array Merge
- Using SPREAD for update value in key of object


## 11 - Object Short Syntax
- In ES6, when the variable is the same name as the key, you can remove the value and leave the key alone.

## 12 - Exercise 📜

[EXERCISE MODULE I](https://xesque.rocketseat.dev/platform/1566499229316.pdf) 

## 13/14 - Webpack Server & Import/export

- Webpack config.
    - 1º In package.json file update "dependencies" for "devDependencies"
    - 2º For install webpack, run command: 
    ___

        yarn add webpack webpack-cli -D
    ___

    - 3º Config. the file webpack.config.js
    - 4º Install babel-loader -D
    ___

        yarn add babel-loader -D
    ___

    - 5º Replace the scritp: "dev": "babel ./main.js -o ./bundle.js -w" for "dev": "webpack --mode=development -w" in package.json
    - 6º Create an file called function.js and insert the code:
    ___
        export function soma(a, b) {
            return a + b;
        }
    ___

    - in file main.js insert the code:

    ___

        import { soma } from './funcoes';
        console.log(soma(5,5)); // Output 10

        // OBS: IN THE ARCHIVE WHERE EXPORT FUNCTIONS ARE 
        // DEFAULT CAN BE PLACED IN THE FUNCTION YOU WANT AND THE OTHER DOES NOT HAVE DEFAULT.
    
        // export default function mult(a, b) {
        //     return a * b;
        // }

        export function soma(a, b) {
            return a + b;
        }

        export function sub(a, b) {
            return a - b;
        }
    
    ___

    7º Organize workflow

    In the src folder are all files that the webpack will monitor.
    In the public folder are the files that do not need to be monitored by the webpack.

    then, adjust the file paths in the webpack.config.js file and install the package:

    ___

        yarn add webpack-dev-server -D
    
    ___


    8º To generate the bundle.js in public, add in the package.json file:

    ___

        "build": "webpack --mode=production"
    
    ___

## 15 - Exercise 📜

[EXERCISE MODULE II](https://xesque.rocketseat.dev/platform/1566499288140.pdf) 