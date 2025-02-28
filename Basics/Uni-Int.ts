// Unions and Intersections //

/* [ Unions ]
Union types allow you to specify that a variable can hold values of multiple types. You use the | (pipe) symbol to define a union type.
In TypeScript, when using a union type, it is essential to ensure that at least one of the types in the union includes all the required 
properties. Failure to do so will result in a type error during compilation.
*/


// Example 1 :-

const inputValue = (values: string | number | boolean) => {

}

// Example 2 :-
// type Person = {
//     name: string;
//     age: number;
// }
// type Employee = {
//     emp_id: number;
//     department: string;
// }
// type EmployeeDetails = Person | Employee;

// const employee1: EmployeeDetails = {
//     name: "Dinesh",
//     age: 30,

//     // department:"IT"
// }



/*  Practice :-
we'll create a function that can accept different types of arguments and perform different actions based on the type of the input. 
Suppose we want to create a function that doubles the value if the input is a number, or converts the input to uppercase if it's a string. 
To achieve this, we can use a union type to allow the function to accept both numbers and strings. 
*/

const userInput = (value: string | number): string | number => {
    if (typeof value === 'number')
        return value * 2;
    else {
        if (typeof value === 'string')
            return value.toUpperCase();
        else
            throw new Error('Invalid input data');
    }
}

// console.log(userInput(15));
// console.log(userInput("Suraj"));


//  ------------------------------------------------------------------------------------------------------- //


/* [ Intersections ]
Intersection Types allow you to combine multiple types into a single type. we use the & (ampersand) symbol to define an Intersections type.
*/

// Example :-

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
    name: "Gulshan",
    age: 31,
    emp_id: 123,
    department: "Softare"
    // [ compulsory to write all data]
}

const myPersonalInfo: Person = {
    name: "Suraj",
    age: 35
}



/* Practice: Create User Profile
You are given two TypeScript types: User and MyLocation. The User type represents basic user information, while the MyLocation type contains 
details about the user's location. Create a function called createUserProfile that takes a User object and a MyLocation object as arguments and 
prints the user's name and the city they are from. 
*/


type User = {
    name: string;
    age: number;
}
type MyLocation = {
    city: string;
    country: string;
}

const user: User = { name: "Suraj", age: 35 }

const myLocation: MyLocation = { city: "Bangalore", country: "India" }

const createUserProfile = (user: User, location: MyLocation) => {
    // return `My name is ${user.name} and I'm living in ${location.city}`
    return { ...user, ...location }
}


const myCompleteInfo: User & MyLocation = createUserProfile(user, myLocation);
console.log(myCompleteInfo);
