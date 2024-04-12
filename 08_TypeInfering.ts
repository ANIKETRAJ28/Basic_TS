/**
 * Type Infering
 */

// const result = {
//     name: "Sanket",
//     marks: 98
// }
/**
 * The above object is infered as {name: String, marks: number}
 * something like the object given below
 * const result: {name: String, marks: number} = {
 *  name: "Sanket",
 *  marks: 98
 * }
 */

// updating the old record
// result.marks = 99;

// adding new record
// result.address = "xyz" // will give error in TS because we never mentioned address

// const result: {name: String, marks: number, address?: String} = {
//   name: "Sanket",
//   marks: 98
// }
// console.log(result);
// result.marks = 99;
// result.address = "xyz"
// console.log(result);
