function isEqual(obj1, obj2){
    let output = false;
    let objLength1 = Object.keys(obj1).length;
    let objLength2 = Object.keys(obj2).length;
    let myNumber = 0;

    if(objLength1 === objLength2){
        for(let key in obj1){
            for(let key2 in obj2){
                if(obj1[key] === obj2[key2]){
                    myNumber += 1;
                }
            }
        }
    }
    if(objLength1 === myNumber) output = true;
    return output;
}
let obj1 = {
    age: 12,
    name: 'foo',
};
let obj2 = {
    name: 'foo',
    age: 12,
};
console.log(isEqual(obj1, obj2));
console.log(isEqual({}, {}));

// let name = 'foo';
// let age = 12;
// let newOb = {
//     name,
//     age,
// }
// console.log(newOb);

let student = {
    name: 'Luong The Anh',
    age: 23,
}
let {name, age} = student;
console.log(name);
console.log(age);


let myArr = [1, 2, 3, 4, 5];
let [first, second, ...rest] = myArr;
console.log(first);
console.log(second);
console.log(rest);

let myFunction = function(){
    console.log('this is a expression function');
}
let myFunction2 = () => {
    console.log('this is a arrow function');
}

function myFunction3(){
    console.log('this is a declaration function');
}