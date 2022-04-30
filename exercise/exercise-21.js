// kiểm tra mảng có chứa ít nhất một số nguyên tố không? Có return true, không return false.
//  for...i
function hasPrimeV1(numberList) {
    // your code here
    if (!Array.isArray(numberList)) return false;

    for (let i = 0; i < numberList.length; i++) {
        let x = 2;
        for (let j = 2; j <= numberList[i] - 1; j++) {
            if (numberList[i] % j !== 0) {
                x += 1;
            }
        }
        if (x === numberList[i]) return true;
    }
    return false;
}
console.log(hasPrimeV1([6, 7, 2, 13, 17, 4]));
console.log(hasPrimeV1([8, 9, 10, 4]));
console.log(hasPrimeV1([8, 9, 10, 4, 2]));
console.log(hasPrimeV1([0]));
console.log(hasPrimeV1([0, 5]));
console.log(hasPrimeV1([7]));

//  forEach
function hasPrimeV2(numberList) {
    // your code here
    if (!Array.isArray(numberList)) return false;

    let output = false;
    numberList.forEach((number) => {
        let x = 2;
        for (let j = 2; j <= number - 1; j++) {
            if (number % j !== 0) {
                x += 1;
            }
        }
        if(x === number) output = true;
    });
    return output;
}
console.log(hasPrimeV2([6, 7, 2, 13, 17, 4, 6]));// true
console.log(hasPrimeV2([8, 9, 10, 4]));// false
console.log(hasPrimeV2([8, 9, 10, 4, 2]));// true
console.log(hasPrimeV2([0]));// false
console.log(hasPrimeV2([0, 5]));// true
console.log(hasPrimeV2([7]));// true

//  find
function hasPrimeV3(numberList) {
    // your code here
    if (!Array.isArray(numberList)) return false;

    let output = numberList.find((number) => {
        let x = 2;
        for (let j = 2; j <= number - 1; j++) {
            if (number % j !== 0) {
                x += 1;
            }
        }
        return x === number;
    });
    // console.log(output);
    if(output) return true;
    if(!output) return false;

}
console.log(hasPrimeV3([6, 7, 2, 13, 17, 4]));// true
console.log(hasPrimeV3([8, 9, 10, 4]));// false
console.log(hasPrimeV3([8, 9, 10, 4, 2]));// true
console.log(hasPrimeV3([0]));// false
console.log(hasPrimeV3([0, 5]));// true
console.log(hasPrimeV3([7]));// true

//  findIndex
function hasPrimeV4(numberList) {
    // your code here
    if(!Array.isArray(numberList)) return false;

    let output = numberList.findIndex((number) => {
        let x = 2;
        for(let j = 2; j <= number - 1; j++) {
            if(number % j !== 0) x += 1;
        }
        return x === number;
    });
    if(output < 0) return false;
    return true;
}
console.log(hasPrimeV4([6, 7, 2, 13, 17, 4]));// true
console.log(hasPrimeV4([8, 9, 10, 4]));// false
console.log(hasPrimeV4([8, 9, 10, 4, 2]));// true
console.log(hasPrimeV4([0]));// false
console.log(hasPrimeV4([0, 5]));// true
console.log(hasPrimeV4([7]));// true

//  some
function hasPrimeV5(numberList) {
    // your code here
    if(!Array.isArray(numberList)) return false;
    let output = numberList.some((number) => {
        let x = 2;
        for(let j = 2; j <= number - 1; j++){
            if(number % j !== 0) x += 1;
        }
        return x === number;
    });
    if(output) return true;
    return false;
}
console.log(hasPrimeV5([6, 7, 2, 13, 17, 4]));// true
console.log(hasPrimeV5([8, 9, 10, 4]));// false
console.log(hasPrimeV5([8, 9, 10, 4, 2]));// true
console.log(hasPrimeV5([0]));// false
console.log(hasPrimeV5([0, 5]));// true
console.log(hasPrimeV5([7]));// true
