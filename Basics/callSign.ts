// [ Call Signatures ] //

/*
The function call signature refers to the declaration or definition of a function, which includes the function's name, parameters and return type.
It defines the structure and type information of a function without including the function's implementation or body
*/

// lets add one function inside the object. It's more like creating a method in object

// Important Note:- call signature are typically used inside object type notations to describe the shape of function within object types

type Student = {
    name: string;
    age: number;
    gender?: string;
    greet: (country: string) => string  // method  call signature
}

const student1: Student = {
    name: "Ravi",
    age: 20,
    greet: (country): string => `My name is ${student1.name} and my age is ${student1.age} and I'm from ${country}`
}

const introduction = (student: Student): string => {
    // return `My name is ${student.name} and my age is ${student.age}`
    const { name, age } = student;
    return `My name is ${name} and my age is ${age}`
}
// console.log(introduction(student1));

// console.log(student1.greet("India"));

