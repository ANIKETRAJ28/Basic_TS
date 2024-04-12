/**
 * Arrays
 * 
 * let <variable_name> :type[] = [val1, val2, ...];
 */

let ids : number[] = [1,2,3,4,5];
let hetros : any[] = [1,2,'3',false, null];
console.log(ids, hetros);

let a : any = 2;
a = false

// union of data-structures
let data : (number | string | boolean)[] = [1,"2", false];
console.log(data);

let data1 : [number, string, boolean] = [1,"2", false];
console.log(data1);
