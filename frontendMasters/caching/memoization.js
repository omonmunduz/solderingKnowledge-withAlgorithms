
const joinStrings = (str,addStr) => {
    function recurse(index,result){
        result += str[index];

        if (index === str.length-1){
            return result
        }else{
            return recurse(index+1, result + addStr)
        }
    }
    return recurse(0,'')
};

console.log(joinStrings(['s', 'cr', 't'],'e'));

const joinLoop = (str, addStr) => {
    let result = '';
    for(let i=0; i < str.length-1; i++){
        result += str[i] + addStr
    }
    return result + str[str.length-1]
};


console.log(joinLoop(['s','cr','t'],'e'));


function memoize(cb) {
    const cache = {};
    return (...args) => {
        let num = args[0];
        if(num in cache) {
            return cache[num]
        }else{
            const result = cb(num);
            cache[num] = result;
            return result
        }
    }
}

const factorial = memoize(
    (x) => {
        if(x === 1){
            return 1
        }else{
            return x * factorial(x-1)
        }
    }
)

console.log(factorial(5))