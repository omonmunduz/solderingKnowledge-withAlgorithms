

function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    return stitch(sortedLeft, sortedRight)
};

function stitch(left, right) {
 
    const arr = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            arr.push(left.shift())
        }else{
            arr.push(right.shift())
        }
    }
    return arr.concat(left, right)
};

console.log(mergeSort([2,4,3,5,87,34]));