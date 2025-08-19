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

    

## Complie TypeScript
- `tsc` (all file will go for complie)
- `tsc index.ts` (only index.ts file will go for compile)

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
- Any : The Flexible Type
The any type in TypeScript allows us to use a variable as if it could be any data type. 
We can assign any value to a variable of type any, and we can perform any operation on it without any type checking or error.

- Unknown : The Safe Type
The unknown type in TypeScript is similar to the any type, as it can hold any value. 
However, the unknown type is more restrictive than the any type, as it does not allow us to perform any operation on it without first checking its type.