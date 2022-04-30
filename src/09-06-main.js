const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numberList.splice(4, 1, 'x'));
console.log(numberList);
console.log(numberList.pop());// trả về phần tử bị xóa
console.log(numberList.shift());// trả về phần tử bị xóa
console.log(numberList.unshift('x'));//  trả về độ dài mảng sau khi đã thêm 
console.log(numberList.push('y'));// trả về độ dài mảng sau khi đã thêm

console.log(numberList);
//expected output: ['x', 2, 3, 4,'x', 6, 7, 8, 'y']
for (let index of numberList) {
    console.log(index);
}

// works in way the same "every" method
//v1:
function checkIfAllNumberEven(numberList) {
    if (!Array.isArray(numberList)) return null;

    let output = true;
    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] % 2 !== 0) {
            output = false;
            break;
        }
    }
    return output;
}
console.log(checkIfNumberEven([1, 2, 3, 4, 5]));
console.log(checkIfNumberEven([2, 4, 6, 8]));
//v2:
function checkIfNumberEven2(numberList) {
    if (!Array.isArray(numberList)) return null;

    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] % 2 !== 0) return false;
    }
    return true;
}
console.log(checkIfNumberEven2([1, 2, 3, 4, 5]));
console.log(checkIfNumberEven2([2, 4, 6, 8]));



// works in way the same "some" method:
function checkIfSomeNumberEven(numberList) {
    if (!Array.isArray(numberList)) return null;

    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] % 2 === 0) return true;
    }
    return false;
}
console.log(checkIfSomeNumberEven([1, 2, 3, 4, 5]));
console.log(checkIfSomeNumberEven([2, 4, 6, 8]));
console.log(checkIfSomeNumberEven([3, 5, 7, 9]));


// works in way the same "indexOf" method:
function getIndexIfNumberEven(numberList) {
    for (let i = 0; i < numberList.length; i++) {
        if(numberList[i] % 2 === 0) return i;
    }
    return -1;
}
console.log(getIndexIfNumberEven([1, 2, 3, 4, 5]));
console.log(getIndexIfNumberEven([2, 4, 6, 8]));
console.log(getIndexIfNumberEven([3, 5, 7, 9]));


// works in way the same "lasIndexOf" method:
function checkLastIndexIfNumberEven(numberList){
    let lasIndexOfEven = -1;
    for(let i = 0; i < numberList.length; i++){
        if(numberList[i] % 2 === 0) lasIndexOfEven = i;
    }
    return lasIndexOfEven;
}
console.log(checkLastIndexIfNumberEven([1, 2, 3, 4, 5]));
console.log(checkLastIndexIfNumberEven([2, 4, 6, 8]));
console.log(checkLastIndexIfNumberEven([3, 5, 7, 9]));


// works in way the same "includes" method:
function checkIfHasEvenNumber(numberList, number){
    
    for(var i=0; i<numberList.length; i++){
        if(numberList[i] === number) return true;
    }
    return false;
}
console.log(checkIfHasEvenNumber([1, 2, 3, 4, 5], 3));
console.log(checkIfHasEvenNumber([1, 2, 3, 4, 5], 30));


// works in way the same "find" method: 
function findFunc(somethingList, callback){
    if(!Array.isArray(somethingList))return null;

    for(let i = 0; i < somethingList.length; i++) {
        if(callback(somethingList[i])){
            return somethingList[i];
        }
    }
    return undefined;
}
console.log(findFunc([1, 2, 3, 4, 5], (number) => number % 2 === 0));
console.log(findFunc([1, 7, 3, 9, 5], (number) => number % 2 === 0));
console.log(findFunc(['javascript', 'react', 'php'], (language) => language === 'javascript'));

// works in way the same "findIndex" method:
function findIndexFunc(somethingList, callback) {
    if(!Array.isArray(somethingList)) return -1;

    for(let i = 0; i < somethingList.length; i++) {
        if(callback(somethingList[i])) return i;
    }

    return -1;
}
console.log(findIndexFunc(['javascript', 'react', 'php'], (language) => language === 'javascript'));
function checkValue(value) {
    return value > 50;
}
console.log(findIndexFunc([10, 40, 70, 90, 100], checkValue));
console.log(findIndexFunc([1, 4, 7, 9, 10], checkValue));