
class Tree {
    constructor() {
        this.root = null;
    }
    toObject() {
        return this.root;
    }
    add(value) {
        // no head,create new head
        if(this.root === null){
            this.root = new Node(value);
            return;
        }else{
            let current = this.root;
            while(true) {
                if( current.value > value) {
                    // go left
                    if(current.left){
                        // there is a node on the left side 
                        // repeat the same steps for the left node
                        current = current.left;
                    }else{
                        current.left = new Node(value);
                        return;
                    }
                }else {
                    // go right
                    if (current.right) {
                        current = current.right;
                    }else{
                        current.right = new Node(value);
                        return;
                    }
                }
            }
        }
    }
}

class Node {
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}