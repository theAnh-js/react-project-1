// using for...i to loop from 1 to n
function getDivisorListV1(n) {
    // your code here
    if (n < 1 || n > 1000) return null;
    let output = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) output.push(i);
    }
    return output;
}
console.log(getDivisorListV1(10));
console.log(getDivisorListV1(1));


// using Array.from() and filter() to loop from 1 to n
function getDivisorListV2(n) {
    // your code here
    if (n < 1 || n > 1000) return null;
    let numberList = Array.from({ length: n }, (u, v) => v + 1);
    let result = numberList.filter((number) => n % number === 0);
    return result;
}
console.log(getDivisorListV2(10));
console.log(getDivisorListV2(7));
console.log(getDivisorListV2(1));



// using Array.from(), forEach and sort() but loop from 1 to square root of n only
function getDivisorListV3(n) {
    // your code here
    if (n < 1 || n > 1000) return null;
    let numberList = Array.from({ length: Math.round(Math.sqrt(n)) }, (u, v) => v + 1);
    return numberList;
}
console.log(getDivisorListV3(10));
console.log(getDivisorListV3(7));
console.log(getDivisorListV3(1));