// [ Interface ] //

/* 
In TypeScript, an interface is a powerful feature that allows you to define a contract for an object's shape. 
It specifies the properties and their types that an object must have to be considered of that particular interface type. 
Interfaces are primarily used for type-checking during development and do not generate any JavaScript code at runtime.
*/


interface Greet {
    name: string
    age: number
}

const greets: Greet = {
    name: "Suraj",
    age: 35
}

// Practice :- 
/* Define an interface or type representing a product with properties for name, price, and quantity. 
Create a product object with the following data:
Name: "Laptop"
Price: 1000
Quantity: 5
Calculate Total Price:

Given the product object from the previous question, write a function called calculate Total Price that calculates and returns the total price
(price *quantity) of the product.
*/

interface Products {
    name: string;
    price: number;
    quantity: number;
}

const product1: Products = {
    name: "Laptop",
    price: 1000,
    quantity: 5
}

const totalPrice = (product: Products): number => {
    const { price, quantity } = product;
    return price * quantity;
}

console.log(totalPrice(product1));
