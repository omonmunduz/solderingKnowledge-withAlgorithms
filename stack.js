/* Class representing the Stack */



class Stack {
    constructor(){
        this._storage = {};
        this._index = 0;
    }
    push(val){
        this._storage[this._index] = val;
        this._index++
    }
    pop(){
        const ans = this._storage[this._index];
        delete this._storage[this._index];
        this._index--;
        return ans;
    }
    peek(){
        return this._storage[this._index];
    }
}