/**
 * Linear Search
 */

// type pairOfNumber = [number, number];

// function linearSearch(array: number[], x: number) : pairOfNumber {
//     for(let i = 0 ; i < array.length ; i++) {
//         if(array[i] == x) {
//             return [i, array[i]];
//         }
//     }
//     return [NaN, NaN];
// }

// const array = [1,4,7,3,1,-5,2,5,1,74,-36,-7,32,-73,0];
// console.log(linearSearch(array, 5));

/**
 * Generic linear search
 */

function linearSearch<T>(array: T[], x: T) : [number, T] {
    for(let i = 0 ; i < array.length ; i++) {
        if(array[i] == x) {
            return [i, array[i]];
        }
    }
    return [NaN, x];
}

const numberArray = [1,4,7,3,1,-5,2,5,1,74,-36,-7,32,-73,0];
console.log(linearSearch<number>(numberArray, 5));

const stringArray = ["ab","sde","fedsa","fwer","ergf"];
console.log(linearSearch<string>(stringArray, "fedsa"));
