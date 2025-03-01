// [ Generics ]

// Generics in TypeScript allow you to create reusable components or function that can with multiple data types.


// function logAndReturn(value: string | number): number | string | boolean  {
//     console.log(value);
//     return value;
// }

// const numberResult: number | string = logAndReturn(45);
// const stringResult: number | string = logAndReturn("Suraj");
// const booleanResult: number | string | boolean = logAndReturn(true);


// Example [1]
// function logAndReturn<T>(value: T): T {
//     return value;
// }

// const numberResult = logAndReturn(45);
// // const numberResult = logAndReturn<number>(45);
// const stringResult = logAndReturn("Suraj");
// const booleanResult = logAndReturn(true);
// console.log(numberResult);


// Example [2]

// function add<T, U>(a: T, b: U) {
//     console.log(typeof a);
//     console.log(typeof b);
// }

// const result1 = add<string, number>("Sk", 28)
// const result2 = add<string, string>("Suraj", "Kumar")


// Example [3]

function fun<T, U>(a: T, b: U, c: boolean) {
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}

const result3 = fun<string, number>("Sk", 28, true)
