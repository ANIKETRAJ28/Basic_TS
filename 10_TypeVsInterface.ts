// type vs interface
type text = string;

// for defining custom types for arrays, type keyword is more easy
type stringArray = string[];

// using an interface we will define an object which will be always having keys if type
// number and value to be of type of the array
interface numberArray {
    [index: number]: number
}

type logger = (msg: string, errorCode: number) => void;

interface loggerInterface {
    (msg: string, errorCode: number): void;
}

// Defining union is possible with type but not interfaces

type unionOfStrAndNum = number | string;

interface ComplexNumber {
    real: number,
    imaginary: number
};

interface ComplexNumber {
    add: (num: ComplexNumber) => ComplexNumber
}

/**
 * The above interfaces will not get unioned else they will be combined
 * so the above code will be equivalent to this...
 * 
 * interface ComplexNumber {
 *     real: number,
 *     imaginary: number
 *     add: (num: ComplexNumber) => ComplexNumber
 * };
 */

let schoolName: "DAV" | "DPS" = "DAV";
let anotherName = "KV";
// schoolName = anotherName; // will give error
anotherName = schoolName;

console.log(anotherName);

type Complex = {
    real: number,
    imag: number
};

interface IComplex {
    real: number,
    imag: number
    num: (c: Complex) => void
};

let comp1: Complex = {
    real : 10,
    imag: 9
};

let comp2: IComplex = {
    real : 9,
    imag: 9,
    num: (c) => console.log(c)
};

comp1 = comp2; // TS will consider them same as the comp2 have the properties of comp1.
// It doesn't matter of there are extra properties.
// Although the name of the class and interface are different but it doesn't matter
console.log(comp1);
// comp1.num(comp1) // will give error because the Complex class's object doesn't contain num function
comp2.num(comp1);
// So, bare minimum properties are required to assign an object to other object.
