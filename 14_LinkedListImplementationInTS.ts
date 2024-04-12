/**
 * linked list implementation generic class
 */

class node<T> {
    data: T;
    next: node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
};

class LinkedList<T> {
    head: node<T> | null;

    constructor() {
        this.head = null;
    }

    addAtHead(x: T) : void {
        if(this.head == null) {
            this.head = new node(x);
            return;
        }
        let newNode = new node(x);
        newNode.next = this.head;
        this.head = newNode;
    }

    display() : void {
        let temp : node<T> | null = this.head;
        while(temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
        console.log();
    }
}

let ll = new LinkedList<number>();

ll.addAtHead(4);
ll.addAtHead(3);
ll.display();
ll.addAtHead(7);
ll.display();
