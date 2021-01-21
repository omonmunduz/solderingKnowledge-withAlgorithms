class ArrayList {
    constructor(){
        this.length = 0;
        this.data = {};
    };
    push(value){
        this.data[this.length] = value;
        this.length++
    }
    pop(){
        const ans = this.data[this.length-1];
        delete this.data[this.length-1];
        return ans
    }
    get(index){
        return this.data[index]
    }
};


const arr = new ArrayList();
arr.push(3)
console.log(arr)
arr.get(0)
const ret = arr.pop()
console.log(ret)
console.log(arr)