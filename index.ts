// [ Basics ] //

// var num:number = 28;
// num = "suraj" // not allow
// console.log(num);

// function sum(a:number,b:number){   // type annotation
//     return a+b;
// }
// // sum(7,"R") // not allow
// console.log(sum(8,6));

// let myNum = 28;
// console.log(myNum.toString());


// ---------------------------------------------------------------- //

// [ number data types ] //
// number type represent numeric values, including integers and floating-point numbers //

// let myAge:number = 35;
// let myName = "Suraj"
// let result:number = myAge+myName // not allow
// let result:number = 120;

// let val:number = Math.sqrt(16)


// ---------------------------------------------------------------- //

// [ string data types ] //

// let firstName = "Suraj";
// let lastName = "Kumar";
// let myName = firstName+lastName;

// let text: string = "My name is Suraj Kumar";
// let textLowerCase: string = text.toLowerCase();
// let textUpperCase: string = text.toUpperCase();
// console.log(textLowerCase, textUpperCase);


// ---------------------------------------------------------------- //

// [ boolean and bigInt data types ] //

// let isMyNameSuraj: boolean = true
// let isDone = true;
// let hasStarted: boolean = false
// hasStarted = 'yes' // invalid


// ---------------------------------------------------------------- //
// difference between Any and Unkown types
// The any type is most flexible type in TypeScript.It essentially turn of all type checking for the variables or expressions it is apllied to.
// we will see any type when we first write the code


// use case
// [ Any ]
// Working with Dynamic data : when dealing with data from dynamic source like user input, network response, or deserialized JSON objects, the any type can be useful.
/* Migration from JavaScript: when migrating an existing JavaScript code to TypeScript,
using the any type can be a convenient way to quickly annotate variable and function without immediately specifying their precise type */

// let myFavNum: any = 5;
// myFavNum = "SK"

// [ Unkown ]
// The unknown type is a safer-alternative to any because it still enforces type checking and type safety
// Variable of type unknown can hold values of any type, but you must perform type checks or type assertions before using them in specific ways.


// let myFavNum2 = 10;

// [ type checking ] //
// let myFavNum2 = true;

// [ type safety ] //
// myFavNum2.map(()=>{
// })


// let num: any;
// num = 4;
// num = "SK";
// num = true;

// if (typeof num === "number")
//     console.log(num + 1);
// else {
//     if (typeof num === 'boolean')
//         console.log(num);
// }


// ---------------------------------------------------------------- //

// [ Function ]

// function isEven(num: number): boolean {
//     if (num % 2 === 0)
//         return true
//     else
//         return false
// }
// console.log(isEven(5));


// function greet(name:string,id:number){
//     console.log(`Welcome ${name} your Id is ${id}`);
// }
// greet("Suraj",28);
// greet("Suraj","28"); // Invalid

// const greet = (name: string, id: number): string => `Welcome ${name} your Id is ${id}`
// console.log(greet("Suraj", 28));


// ---------------------------------------------------------------- //

// [ Type inference ]
/* Type inference in TypeScript refers to the ability of the TypeScript compiler to automatically determine and assign type types to variable,
expressions, and function return values based on their usage and context in the code. */

// let myNum = 28;
// myNum = "Suraj"


// ---------------------------------------------------------------- //
// [ Optional and Default Parameters ]

// const greet = (name: string, id: number = 23): string => `Welcome ${name} your Id is ${id}`
// console.log(greet("Suraj"));


// ---------------------------------------------------------------- //
// [ array ]

// using square brackets
let nums: number[] = [1, 2, 3, 4, 5]
// nums = ["SK"]; // invalid

// using Array contructor
// let evenNums: number[] = new Array(2, 4, 6, 8, 10);

//using Array.of method
// let users: string[] = Array.of("Suraj", "Rahul", "Rohit", "Navneet")

// console.log(nums[2]);
// console.log(users.length);

// let numsMultiBy10: number[] = nums.map((Elm: number) => Elm * 10)
// console.log(numsMultiBy10);


// ---------------------------------------------------------------- //
// [ Object ]

let person: {
    name: string;
    age: number;
    isLogin: boolean;
    address: { city: string; country: string }
} = {
    name: "Suraj",
    age: 35,
    isLogin: true,
    address: {
        city: "Banngalore",
        country: "India"
    }
}

// person.address.city = 35// not allow
