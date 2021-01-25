/** Class representing a Binary Search Tree */


class Tree {
    constructor(){
        this.root = null;
    }
    toObject(){
        return this.root;
    }
    add(value){
        if(this.root === null){
            this.root = new Node(value);
            return;
        }else{
            let current = this.root;
            while(true){
                if(current.value > value) {
                    if(current.left){
                        current = current.left;
                    }else{
                        current.left = new Node(value);
                        return;
                    }
                }else{
                    if(current.right){
                        current = current.right;
                    }else{
                        current.right = new Node(value);
                        return;
                    }
                }
            }
        }
    }
};


class Node{
    constructor(value, left=null,right=null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}