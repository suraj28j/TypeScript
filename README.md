# TypeScript
- TypeScript is a strongly typed programming language that builds on JavaScript, giving us better tooling at any scale.
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

## Watch mode
- Watch mode in TypeScript refers to a feature of the TypeScript compiler (tsc) that automatically recompiles our TypeScript files into JavaScript whenever changes are detected. This eliminates the need to manually run the tsc command after every modification to our source code, streamlining the development workflow.
- The primary way to enable watch mode is by using the `--watch` or `-w` flag with the tsc command in your terminal:
- Example:- tsc --watch

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
- Type annotation is a way of explicitly specifying the type of veriable, function parameter or function return value 
- Examples :-
``` typescript
    let num:number = 28;

    let name:string = "Suraj";

    function sum( a:number, b:number) :number { return a+b; }

    let evenNums:number[] = [2, 4, 6, 8, 10]

    let person:{
    name: string;
    id: number;
    isLogin: boolean;
    address: {
        city: string;
        contry: string;
        }
    } = {
    name: "Suraj",
    id: 101,
    isLogin: false,
    address: {
        city: "Bangalore",
        contry: "India"
        }
    }
```

### 3. Difference between Any Type and Unknow Type ###
- **Any** : The any type is the flexible type in TypeScript. It essentially turn off all type checking for the veriables or expression.

- **Unknown** : The unknown type is a safer-alternative to any because it still enforces type checking and type safety

- Example :- [ Type Checking ]
```javascript
    let favouriteNum = 28;
    favouriteNum = "Suraj"; 
    // ( error :- the 'string' not assignable to type 'number )
```

- Example :- [ Type Safety ]
```javascript
    let favouriteNum = 28;
    favouriteNum.map((num)=>(...)) 
    // ( error :- map does not exist on type 'number' )
```

### 4. Type Interference
- Type Interference in TypeScript refers to the ability of the TypeScript compiler to automatically determine and assign type to variables, expressions and function return values based on their usage and context in the code

### 5. Type Aliases
- In TypeScript, a type alise is a way to give a name to a specific type or combination of types. It allows us to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code. Type aliases provide better readability, organization and abstraction of complex types
- to define a type alias, we use the `type` keyboard folllowed by the alias name and the type definition
- Example: -
```typescript
type Product = {
    name: string;
    price: number;
    quantity: number;
    }

const product: Product = {
    name: "Laptop",
    price: 25000,
    quantity: 5
    }

const totalPrice = (myProduct: Product) => {
    return `${myProduct.name} total cost is ${myProduct.price * myProduct.quantity}`;
    }

console.log(totalPrice(product));
```
### 6. Call Signature 
- The function call signature refers to the declaration or definition of a function, which includes the function's name, parameters and return type.It defines the structure and type information of a function without including the function's implementation or body
- Important Note:- Call signature are typically used inside object type notations to describe the shape of function within object types

```typescript
type Student = {
    name: string;
    age: number;
    gender?: string;
    greet: (country: string) => string  // method call signature
}

const student1: Student = {
    name: "Ravi",
    age: 20,
    greet: (country): string => `My name is ${student1.name} and my age is ${student1.age} and I'm from ${country}`
}

console.log(student1.greet("India"));
```

### 7. Enum
- Enum in TypeScript are commonly used when we want represent a set of related values and choose one value from multiple options.
Enum provide a convenient way to define a set of named values and associate then with specific meanings.
- In TypeScript, when enum constants are not explicitly assigned numeric values, they are  automatically assigned incremental numeric values starting from 0.
The default numeric values for the first enum constant is 0, and subsequent enum constants receive values incremented by 1. 

```typescript
enum Roles {
    user = "user",
    admin = "admin" 
    }

type Login = {
    name: string;
    email: string;
    password: string;
    role: Roles
    }

const user1: Login = {
    name: "suraj",
    email: "suraj@example.com",
    password: "abc123",
    role: Roles.admin
    }

const isAdmin = (user: Login) => {
    return user.role === 'admin' ? `${user.name} allow to modify the products` : `${user.name} not allow to modify the products`;
}
```
### 7. Tuples
- In TypeScript, tuples are a data structure that allows us to store a fixed-size collection of elements of different types. 
They are similar to arrays, but with a key difference: the types of elements in a tuple are fixed and declared at the time of creation, 
whereas arrays can hold elements of the same type, and their size can vary.

```typescript
type PersonInfo = readonly [string, number, boolean];

const person1: PersonInfo = ["Kumar", 17, false];
const person2: PersonInfo = ["Suraj", 34, true]

// person1.push("Lucknow") // not allow becoz we mention readonly in PersonInfo

const displayPersonInfo = (person:PersonInfo) => {
    const [name,age,hasDL] = person;
    console.log(`Person Name : ${name}, Age : ${age}, hasDrivingLicense : ${hasDL ? "Yes" : "NO" }`);
}

displayPersonInfo(person1)
displayPersonInfo(person2)
```

### 8. Unions and Intersections 

 #### Unions 
- Union types allow us to specify that a variable can hold values of multiple types. we use the `'|'` (pipe) symbol to define a union type.
In TypeScript, when using a union type, it is essential to ensure that at least one of the types in the union includes all the required 
properties. Failure to do so will result in a type error during compilation.

- Example 1: -
```typescript
const inputValue = ( values: string | number | boolean ) => {

}
```
- Example 2: -
```typescript
type Person = {
    name: string;
    age: number;
    }

type Employee = {
    emp_id: number;
    department: string;
    }

type EmployeeDetails = Person | Employee;

const employee1: EmployeeDetails = {
    name: "Ramadhir Singh",
    age: 40,
    // department:"IT" // optional
    }
```

 #### Intersections
 - Intersection Types allow us to combine multiple types into a single type. we use the `'&'` (ampersand) symbol to define an Intersections type.

- Example: -
 ```typescript
type Person = {
    name: string;
    age: number;
    }

type Employee = {
    emp_id: number;
    department: string;
    }

type EmployeeDetails = Person & Employee;

const employee1: EmployeeDetails = {
    name: "Sardar Khan",
    age: 30,
    emp_id: 123,
    department: "HR"
    // compulsory to write all data
    }
 ```

 ### 9. Generics 
- Generics in TypeScript allow us to create reusable components or function that can with multiple data types.

- Example 1: -
```typescript
function logAndReturn<T>(value: T): T {
    console.log(T)
     return value;
    }
    // T is a place holder 
    
const numberResult = logAndReturn<number>(28)
```
- Example 2: -
```typescript
function logValues<T, U>(a: T, b: U) {
    console.log(typeof a);
    console.log(typeof b);
    }

logValues<string, number>("Suraj",28)
logValues<string, string>("Suraj","Kumar")
```
- Example 3: -
```typescript
function fun<T, U>(a: T, b: U, c: boolean) {
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    }

fun<string, number>("Suraj",28,true)
```

### 10. Interface

- In TypeScript, an interface is a powerful feature that allows you to define a contract for an object's shape. 
It specifies the properties and their types that an object must have to be considered of that particular interface type. 
Interfaces are primarily used for type-checking during development and do not generate any JavaScript code at runtime.
```typescript
interface Greet {
    name: string
    age: number
    }

const greets: Greet = {
    name: "Suraj",
    age: 35
    }
```