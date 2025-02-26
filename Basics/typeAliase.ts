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
