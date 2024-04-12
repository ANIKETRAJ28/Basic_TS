/**
 * ENUMS or  Enumerations
 */

// enum TicketStatus {
//     INITIALISED,
//     CANCELED,
//     PENDING,
//     CLOSED
// }

// const obj1 = {
//     name: "Abhinav",
//     work: TicketStatus.INITIALISED
// }

// console.log(obj1);
/**
 * If we donot initialise the enums with the values, it will map it to the values [0,1,2,3,...]
 */

enum TicketStatus {
    INITIALISED = "initialized",
    CANCELED = "canceled",
    PENDING = "pending",
    CLOSED = "closed"
}

const obj1 = {
    name: "Abhinav",
    work: TicketStatus.INITIALISED
}

console.log(obj1);
