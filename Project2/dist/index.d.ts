interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    quantity: number;
}
export declare function displayProducts(products: Products[]): void;
export {};
//# sourceMappingURL=index.d.ts.map