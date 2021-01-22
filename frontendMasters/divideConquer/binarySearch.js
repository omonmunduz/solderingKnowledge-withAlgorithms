
function binarySearch(list, num) {
    let min = 0;
    let max = list.length-1/2;
    let guess;
    while(min < max) {
        guess = min + max / 2;
        if(guess === num){
            return num
        }else if(guess > min) {
            min = guess
        }else {
            max = guess
        }
    }
    return -1;
}
console.log(binarySearch([1,2,3,4,5],5))