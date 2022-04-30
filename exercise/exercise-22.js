// for...i: return false if found number is not perfect
function isAllPerfectNumbersV1(numberList) {
    // your code here
    if (!Array.isArray(numberList) || numberList.length === 0) return false;

    let myNumber = 0;
    for (let i = 0; i < numberList.length; i++) {
        if(myNumber > 0) myNumber = 0;

        for (let j = 1; j <= numberList[i] - 1; j++) {
            if (numberList[i] % j === 0) {
                myNumber += j;
            }
        }
        if (myNumber !== numberList[i] || numberList[i] === 0) return false;
    }
    return true; 
}
console.log(isAllPerfectNumbersV1([]));
console.log(isAllPerfectNumbersV1([0]));
console.log(isAllPerfectNumbersV1([1]));
console.log(isAllPerfectNumbersV1([1, 6]));
console.log(isAllPerfectNumbersV1([6, 1]));
console.log(isAllPerfectNumbersV1([1, 2, 3]));
console.log(isAllPerfectNumbersV1([6, 28, 496, 8128, 4, 9]));
console.log(isAllPerfectNumbersV1([6]));
console.log(isAllPerfectNumbersV1([28]));
console.log(isAllPerfectNumbersV1([6, 28]));
console.log(isAllPerfectNumbersV1([6, 28, 496, 8128]));

console.log('-------------------------------------------------------------')

// reduce: check if the number of perfect numbers is equal to length
// optional: you can practice more to use forEach or filter :)
function isAllPerfectNumbersV2(numberList) {
    // your code here
    if (!Array.isArray(numberList) || numberList.length === 0) return false;

    let output = numberList.reduce((previousValue, currentValue) => {
        let x = 0;
        if(x > 0) x = 0;
        for(let i = 0; i <= currentValue -1; i++){
            if(currentValue % i === 0) x += i;
        }
        if(x === currentValue && currentValue !== 0) previousValue.push(currentValue);
        return previousValue;
    }, []);
    return output.length === numberList.length;
}
console.log(isAllPerfectNumbersV2([]));
console.log(isAllPerfectNumbersV2([0]));
console.log(isAllPerfectNumbersV2([1]));
console.log(isAllPerfectNumbersV2([1, 6]));
console.log(isAllPerfectNumbersV2([6, 1]));
console.log(isAllPerfectNumbersV2([1, 2, 3]));
console.log(isAllPerfectNumbersV2([6, 28, 496, 8128, 4, 9]));
console.log(isAllPerfectNumbersV2([6]));
console.log(isAllPerfectNumbersV2([28]));
console.log(isAllPerfectNumbersV2([6, 28]));
console.log(isAllPerfectNumbersV2([6, 28, 496, 8128]));

console.log('-------------------------------------------------------------')

// every
function isAllPerfectNumbersV3(numberList) {
    // your code here
    if (!Array.isArray(numberList) || numberList.length === 0) return false;

    let output = numberList.every((number) => {
        let x = 0;
        if(x > 0) x = 0;
        for(let i = 0; i <= number - 1 ; i++) {
            if(number % i === 0 ) x += i;
        }
        return x === number && number !== 0;
    })
    return output;
}
console.log(isAllPerfectNumbersV3([]));
console.log(isAllPerfectNumbersV3([0]));
console.log(isAllPerfectNumbersV3([1]));
console.log(isAllPerfectNumbersV3([1, 6]));
console.log(isAllPerfectNumbersV3([6, 1]));
console.log(isAllPerfectNumbersV3([1, 2, 3]));
console.log(isAllPerfectNumbersV3([6, 28, 496, 8128, 4, 9]));
console.log(isAllPerfectNumbersV3([6]));
console.log(isAllPerfectNumbersV3([28]));
console.log(isAllPerfectNumbersV3([6, 28]));
console.log(isAllPerfectNumbersV3([6, 28, 496, 8128]));