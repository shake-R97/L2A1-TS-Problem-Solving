const formatValue = (value: string | number | boolean) => {

    if (typeof value === 'string') {
        return value.toUpperCase();
    }

    if (typeof value === 'number') {
        return value * 10;
    }

    if (typeof value === 'boolean') {
        return !value;
    }

    return undefined;
}









const getLength = (value: string | number[]) => {

    if (typeof value === 'string') {
        return value.length;
    }

    if (Array.isArray(value)) {
        return value.length;
    }
    return undefined;
}








class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return (`Name: ${this.name}, Age: ${this.age}`).toString();
    }

}

const person1 = new Person('John Doe', 30);

const person2 = new Person('Alice', 25);








type Books = {
    title: string;
    rating: number;
}


const filterByRating = (books: Books[]): Books[] => {

    const newFilteredArray = books.filter((data) => data.rating >= 4);

    return newFilteredArray


}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];








type Users = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}


const filterActiveUsers = (users: Users[]): Users[] => {

    const findActiveUser = users.filter((user) => user.isActive)
    return findActiveUser;
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];










interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}


const printBookDetails = (param: Book) => {

    const details = `Title: ${param.title}, Author: ${param.author}, Published: ${param.publishedYear}, Available: ${param.isAvailable ? 'Yes' : 'No'}`;

    return details;
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};









type Values = (string | number)[];


const getUniqueValues = (param1: Values, param2: Values): Values => {
    const newArray: Values = [];
    const allArr = [...param1, ...param2];
    for (const value of allArr) {
        if (!newArray.includes(value)) {
            newArray.push(value);
        }
    }
    return newArray;


}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];










interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}


const calculateTotalPrice = (param: Product[]): number => {

    const totalPrice = param.reduce((acc, product) => {
            if(product.discount !== undefined){
                const sumDiscount = product.discount / 100;
                const discountedAmount = (product.price * product.quantity) * sumDiscount;
                return acc + (product.price * product.quantity - discountedAmount)
            }
        
        return acc + product.price * product.quantity
    }, 0);

    return totalPrice;

}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

