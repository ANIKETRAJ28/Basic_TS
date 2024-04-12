/**
 * How to define types for objects
 * - classes -> data member, member functions
 * - interface
 */

// class
class Car {
    name: string
    constructor(name: string) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
};

// interface
// interface do not define implementation whereas class define implementation
interface Product {
    name: string,
    price: number,
    brand: string,
    display() : void
}

let c1 = new Car("santro");
// let p1 = new Product(); // will give error
let p1 : Product = {
    name: "Iphone", 
    price: 1000000,
    brand: "Apple",
    display: () => {
        console.log("display");
    }
}

console.log(p1);
p1.display();
c1.display();
