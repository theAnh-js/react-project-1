// using for...i
function createArrayInRangeV1(a, b) {
    // your code here
    if (a > b || a <= -100 || b >= 100) return null;

    let output = [];
    for (let i = a; i <= b; i++) {
        output.push(i);
    }
    return output;
}
console.log(createArrayInRangeV1(1, 7));

// using Array.from()
function createArrayInRangeV2(a, b) {
    // your code here
    if (a > b || a <= -100 || b >= 100) return null;
    let result = Array.from({ length: (b - a) + 1 }, (u, v) => v + a);
    return result.splice(0, b - a + 1);

}
console.log(createArrayInRangeV2(4, 7));
console.log(createArrayInRangeV2(-2, 2));
console.log(createArrayInRangeV2(1, 7));
console.log(createArrayInRangeV2(1, 5));
console.log(createArrayInRangeV2(0, 5));
console.log(Array.from({ length: 5 }, (v, i) => i));

