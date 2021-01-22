function linearSearch(list, num) {
    for(let i=0; i<list.length;i++){
        if(list[i] === num){
            return num
        }
    }
}

console.log(linearSearch([1,2,3,4,5,6],5));


   
    function runFunc(list, num) {
        let counter = 1;
        for(let i=0;i<list.length;i++){
            if(list[i] === num){
                if(counter === 2){
                    return i
                }
                counter++
            }
        }
    }

console.log(runFunc([1,2,3,2,3,2,4],2))