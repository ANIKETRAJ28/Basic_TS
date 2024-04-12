/**
 * Generic interfaces
 */

interface customInterface<T1, T2> {
    property: T1;
    moreProperty: T2;
}

const customObj : customInterface<string, number> = {
    property : "10",
    moreProperty : 10
}

console.log(customObj);
