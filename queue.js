
/* Class implememntation of Queue */

class Queue{
    constructor(){
        this._storage = {};
        this._index1 = 0;
        this._index2 = 0;
    };

    enqueue(val){
        this._storage[this_index1] = val;
        this._index1++
    };
    dequeue() {
        const ans = this._storage[this._index2];
        delete this._storage[this._index2];
        this._index2++;
        return ans;
    }
    peek() {
        return this._storage[this._index2];
    }
};