class Node {
    constructor(value = null) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.head !== null) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);

        if (this.head !== null) {
            this.head.next = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
    }

    size() {
        let current = this.head;
        let count = 0;

        while (current !== null) {
            count++;
            current = current.next;
        }

        return count;
    }

}

let list = new LinkedList();
list.append(1);
list.append(2)
console.log(list.size());

console.log(list);