// [ Generics ]

// Generics in TypeScript allow you to create reusable components or function that can with multiple data types.


// function logAndReturn(value: string | number): number | string | boolean  {
//     console.log(value);
//     return value;
// }

// const numberResult: number | string = logAndReturn(45);
// const stringResult: number | string = logAndReturn("Suraj");
// const booleanResult: number | string | boolean = logAndReturn(true);



function logAndReturn<T>(value: T): T {
    return value;
}

const numberResult = logAndReturn(45);
// const numberResult = logAndReturn<number>(45);
const stringResult = logAndReturn("Suraj");
const booleanResult = logAndReturn(true);

console.log(numberResult);
