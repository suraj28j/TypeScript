# TypeScript
- TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- It is a free and open-source high-level programming language developed by Microsoft

## Why TypeScript ?
- **Type Safety** 
- **Easy to Write Code** 
- **Catch Error at Compile Time**
- **Default for Angular**
- **Impotant for Enterprise Project** 

## Setup for TypeScript 
1. Use `npm init` to set up the `package.json` file.
2. `npm install typescript` (install TypeScript locally)

    or

    `npm install -g typescript` (install TypeScript globally)
3. Create a file `index.ts`

## Execute TypeScript
- `node index.ts`

## Complie TypeScript
- `tsc` (all file will go for complie)
- `tsc index.ts` (only index.ts file will go for compile)

    or
- `npx tsc index.ts`

## TypeScript File Configuration (tsconfig file)
- tsc --init

## Core Type
- **number**
- **string**
- **boolean**
- ***any and unknown***
- **array**
- **object**
---
 ![alt types](./types.png)
 ---


##  Important Questions

### 1. Advantage of TypeScript ###
- It helps the TypeScript compiler to enforce type checking and provide type safety during development

### 2. What is type annotation ###
- Type annotation is a way of explicitly specifying the type of veriable,function parameter or function return value 
- Examples :-

    let num:`number` = 28;

    let name:`string` = "Suraj";

    function sum( a: `number`, b: `number`) : `number` { return a+b; }

### 3. Difference between Any Type and Unknow Type ###
- **Any** : The any type is the flexible type in TypeScript. It essentially turn off all type checking for the veriables or expression.

- **Unknown** : The unknown type is a safer-alternative to any because it still enforces type checking and type safety

- Example :- [ Type Checking ]

    let favouriteNum = 28;
    favouriteNum = "Suraj"; ( error :- the 'string' not assignable to type 'number )

- Example :- [ Type Safty ]

    let favouriteNum = 28;
    favouriteNum.map((num)=>(...)) ( error :- map does not exist on type 'number' )


### 4. Type Interference
- Type Interference in TypeScript refers to the ability of the TypeScript compiler to automatically determine and assign type to variables, expressions and function return values based on their usage and context in the code