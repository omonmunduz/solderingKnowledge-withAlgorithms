

class LinkedList {
    constructor(value){
        this.head = {value, next: null};
        this.tail = this.head;
    }
    insert(val){
        const node = {value: val, next: null};
        this.tail.next = node;
        this.tail = node;
    }
        /*
    Deletes a node
    @param {*} node - the node to remove
    @return {*} value - the deleted node's value
    */
    //remove() {

    //}
    /*
    Removes the value at the end of the linked list
    @return {*} - the removed value
    */
    // {
    //   head: {value: 1, next: {value: 2, next: null}}
    //   tail: {value: 2, next: null}
    // }
    removeTail(){
        let currentNode = this.head;
        while(currentNode.next !== this.tail){
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
    }
    contains(val){
        let currentNode = this.head;
        while(currentNode.value !== val) {
            currentNode = currentNode.next;
        }
        return currentNode.value === val;
    }
    isHead(node){
        return  node === this.head
    }
    isTail(node) {
        return node = this.tail
    }
}

const myList = new LinkedList(1);
myList.insert(2)