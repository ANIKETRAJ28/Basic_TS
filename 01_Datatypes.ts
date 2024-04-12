/**
 * Primitive data types
 * 
 * Types in TS
 * 
 * string -> text
 * number -> integer, real
 * boolean
 * undefined
 * null
 * bigint
 * symbol
 */

/*
    var <variable_name> : number = <value>

*/

let id : number = 5;
let firstName = "Sanket";
// firstName = 4; // will give error
var lastName = "Singh";
// lastName = 2; // will give error
console.log(id, firstName, lastName);

// union of types
let userId : number | string = "26";
userId = 10;
