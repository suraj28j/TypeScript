// [ typles ]

/*
In TypeScript, tuples are a data structure that allows you to store a fixed-size collection of elements of different types. 
They are similar to arrays, but with a key difference: the types of elements in a tuple are fixed and declared at the time of creation, 
whereas arrays can hold elements of the same type, and their size can vary.

Real-life example of using tuples in TypeScript:
Let's consider a scenario where you want to represent a person's basic information, including their name, age and 
whether they have a driver's license. Using a tuple can be an appropriate choice because these three elements have a specific order and type.
*/

type PersonInfo = readonly [string, number, boolean];

const person1: PersonInfo = ["Kumar", 28, true];
const person2: PersonInfo = ["Ankit", 15, false]

// person1.push("Lucknow") // not allow becoz we mention readonly in PersonInfo

const displayPersonInfo = (person:PersonInfo) => {
    const [name,age,hasDL] = person;
    console.log(`Person Name : ${name}, Age : ${age}, hasDrivingLicense : ${hasDL ? "Yes" : "NO" }`);
}

displayPersonInfo(person1)
displayPersonInfo(person2)