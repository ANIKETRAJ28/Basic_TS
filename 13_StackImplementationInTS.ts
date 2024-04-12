/**
 * Stack implementation generic class
 */

class Stack<T> {
    private array: T[];
    constructor() {
        this.array = [];
    }

    push(x: T) : void {
        this.array.push(x);
    }

    pop() : void {
        if(this.array.length == 0) return;
        this.array.pop();
    }

    top() : void | T {
        if(this.array.length == 0) return;
        return this.array[this.array.length - 1];
    }
    display() : void {
        console.log(this.array);
    }
}

let stack = new Stack<number>();
stack.push(2);
stack.push(5);
stack.push(3);
stack.display();
stack.pop();
stack.display();
