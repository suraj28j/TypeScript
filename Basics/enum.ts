// [ enum ] //

/*
Enum in TypeScript are commonly used when you want represent a set of related values and choose one value from multiple options.
Enum provide a convenient way to define a set of named values and associate then with specific meanings.

In TypeScript, when enum constants are not explicitly assigned numeric values, they are  automatically assigned incremental numeric values starting from 0.
The default numeric values for the first enum constant is 0, and subsequent enum constants receive values incremented by 1. 
*/

enum Roles {
    user = "user",
    admin = "admin"
}

type Login = {
    name: string;
    email: string;
    password: string;
    role: Roles
}

const user1: Login = {
    name: "Vivek",
    email: "vivek@gmail.com",
    password: "abc123",
    role: Roles.admin
}

const user2: Login = {
    name: "Hement",
    email: "hement@gmail.com",
    password: "1234",
    role: Roles.user
}

const isAdmin = (user: Login) => {
    return user.role === 'admin' ? `${user.name} allow to modify the products` : `${user.name} not allow to modify the products`;
}

console.log(isAdmin(user1));
console.log(isAdmin(user2));
