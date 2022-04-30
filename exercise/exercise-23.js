
function calcAvgOfAllEvenNumbers(numberList) {
    // your code here
    if(!Array.isArray(numberList) || numberList.length === 0) return 0;
    let newArr = numberList.filter((number) => {
        return number % 2 === 0;
    });
    if(newArr.length === 0) return 0;
    let output = newArr.reduce((acc, number) => {
        return (acc + number);
    }, 0)
    return Math.round(output / newArr.length);
   
}
console.log(calcAvgOfAllEvenNumbers([1,5,3]));
console.log(calcAvgOfAllEvenNumbers([1,2,3]));
console.log(calcAvgOfAllEvenNumbers([0,2,3,4,5]));
console.log(calcAvgOfAllEvenNumbers([]));
console.log(calcAvgOfAllEvenNumbers([0]));
console.log(calcAvgOfAllEvenNumbers([1]));
console.log(calcAvgOfAllEvenNumbers([2,4,6,7]));
console.log(calcAvgOfAllEvenNumbers([1,2,4,8]));