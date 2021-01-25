/** Class representing a Linked list */
class LinkedList {
    constructor(value){
        this.head = {value, next: null};
        this.tail = this.head;
    }
    insert(value) {
        const node = {value: value, next: null};
        this.tail.next = node;
        this.tail = node;
    };
    removeTail() {
        let currentNode = this.head;
        while(currentNode.next !== this.tail){
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
    };
    contains(val) {
        let currentNode = this.head;
        while(currentNode.value !== val){
            currentNode = currentNode.next
        }
        return currentNode.value === val;
    };
    isHead(node) {
        return node === this.head;
    }
    isTail (node) {
        return node === this.tail;
    }
};

const myList = new LinkedList(1);
myList.insert(2)


