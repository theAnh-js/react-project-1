
// isPrime
function isPrimeV1(n) {
    // your code here
    if (n < 2 || n >= 1000) return false;
    for (let i = 2; i <= n - 1; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrimeV1(2));
console.log(isPrimeV1(7));
console.log(isPrimeV1(8));
console.log(isPrimeV1(11));

function isPrimeV2(n) {
    // your code here
    if (n < 2 || n >= 1000) return false;
    for (let j = 2; j <= Math.round(Math.sqrt(n)); j++) {
        if (n % j === 0) return false;
    }
    return true;
}
console.log(isPrimeV2(2));
console.log(isPrimeV2(7));
console.log(isPrimeV2(8));
console.log(isPrimeV2(11));













