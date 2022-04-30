
// works in way the same "reduce" method:
function reduceFunc(arr, callback, initialValue) {
    if(!Array.isArray(arr) || typeof callback !== "function"){
        throw new TypeError('Invalid parameter passed to reduce');
    }
    if(arr.length === 0) {
        if(initialValue === undefined){
            throw new TypeError('initialValue should be passed to reduce');
        }
    }
    let isHasInitialValue = initialValue !== undefined;
    let startIndex = isHasInitialValue ? 0 : 1;
    let accumulator = isHasInitialValue ? initialValue : arr[0];

    for(let i = startIndex; i < arr.length; i++) {
       accumulator = callback(accumulator, arr[i], i);
    }
    return accumulator;
}
function sum(a, b){
    return a + b;
}
let result = reduceFunc([1,2,4,5], sum, 0);
console.log(result);


function findMaxByReduce(arr){
    if(!Array.isArray(arr) || arr.length === 0) return undefined;
    
    return arr.reduce((max, number) => max < number ? number : max);
}
console.log(findMaxByReduce([1,3,5,5,67,4,66]));
