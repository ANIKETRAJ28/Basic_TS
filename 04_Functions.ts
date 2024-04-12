// functions

function sum(a: number, b: number) : number {
    return a+b;
}

function sum1(a: number, b?: number) : number {
    return a+(b||0);
}

console.log(sum(1,2));
console.log(sum1(1));
