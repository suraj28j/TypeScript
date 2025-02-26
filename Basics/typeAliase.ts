// [ Type Aliases ] //

/*
In TypeScript, a type alise is a way to give a name to a specific type or combination of types.
It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code.
Type aliases provide better readability, organization and abstraction of complex types

to define a type alias, you use the type keyboard folllowed by the alias nmae and the type definition
*/

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

const calculateTotalPrice = (myProduct: Product) => {
    return `${myProduct.name} total cost is ${myProduct.price * myProduct.quantity}`;
}

console.log(calculateTotalPrice(product));
