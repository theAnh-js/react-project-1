// using for...i
function transformNumbersV1(numberList) {
    if (!Array.isArray(numberList)) return null;

    if (numberList.length <= 1) return [...numberList];

    let output = [numberList[1]];
    for (let i = 1; i < numberList.length - 1; i++) {
        output.push(numberList[i - 1] + numberList[i + 1]);
    }

    output.push(numberList[numberList.length - 2]);
    return output;
}
console.log(transformNumbersV1([1, 2, 3, 4, 5])); //[2,4,6,8,4]
console.log(transformNumbersV1([2, 5, 5, 6, 7, 3, 1])); //[5,7,11,12,9,8,3]

// Dùng forEach:
function transformNumbersV2(numberList) {
    if (!Array.isArray(numberList)) return null;

    if (numberList.length <= 1) return [...numberList];

    let output = [numberList[1]];
    numberList.forEach((number, i) => {
        if (i > 0 && i < numberList.length - 1) {
            output.push(numberList[i - 1] + numberList[i + 1])
        }
    });

    output.push(numberList[numberList.length - 2]);
    return output;
}
console.log(transformNumbersV2([1, 2, 3, 4, 5])); //[2,4,6,8,4]
console.log(transformNumbersV2([2, 5, 5, 6, 7, 3, 1])); //[5,7,11,12,9,8,3]
console.log(transformNumbersV2([2])); //[5,7,11,12,9,8,3]
console.log(transformNumbersV2([])); //[5,7,11,12,9,8,3]

// Use map():
function transformNumbersV3(numberList) {
    if (!Array.isArray(numberList)) return null;
    if (numberList.length <= 1) return [...numberList];
    let output = [numberList[1]];
    let mapArr = numberList.map((number, index) => {
        if (index > 0 && index < numberList.length - 1) {
            output.push(numberList[index - 1] + numberList[index + 1]);
        }
    })
    output.concat(mapArr);
    output.push(numberList[numberList.length - 2]);
    return output;
}
console.log(transformNumbersV3([1, 2, 3, 4, 5])); //[2,4,6,8,4]
console.log(transformNumbersV3([2, 5, 5, 6, 7, 3, 1])); //[5,7,11,12,9,8,3]
console.log(transformNumbersV3([2])); //[5,7,11,12,9,8,3]
console.log(transformNumbersV3([])); //[5,7,11,12,9,8,3]