function change(a, b) {
    a = 5;
    b = 6;
    console.log(a, b);
}
let value1 = 1;
let value2 = 2;
change(value1, value2);
console.log(value1, value2);

function myFunc(object) {
    object.name = 'react';
    object.age = 12;
    console.log(object.name, object.age);
}
let myOb = {
    name: 'javascript',
}
myOb.name = 'not javascript';
console.log(myOb.name)
// myFunc(myOb);
// console.log(myOb.name, myOb.age);

// let clonedObject = {
//     ...myOb,
// }
let clonedObject = Object.assign({}, myOb);
clonedObject.name = 'clonedObject';
console.log(clonedObject.name);

let originalObject = {
    name: 'Luong The Anh',
    address: 'Viet Nam, Ha Noi',
    favorites: {
        food: 'fish',
        drink: 'juice'
    }
}
// originalObject.favorites.drink = 'beer';
// console.log(originalObject.favorites.drink);
let clonedObject2 = {
    ...originalObject,
    favorites:{
        ...originalObject.favorites,
    }
}
clonedObject2.favorites.drink = 'water';
console.log(originalObject.favorites.drink);
console.log(clonedObject2.favorites.drink);


//
let js = {
    name: 'javascript',
    version: '2030',
    language: 'english'
}
let jsKey = Object.keys(js);
// way 1
for(let i = 0; i < jsKey.length; i++) {
    let key = jsKey[i];
    console.log(js[key]);
}
// way 2
jsKey.forEach((key) => console.log(js[key]));
// way 3
for(let key in js) {
    console.log(js[key]);
}



let jss = {};
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
console.log(isEmpty(js));
console.log(isEmpty(jss));


// 
let food = {};
food.seaFood = 'fish';
food.meat = 'pork';
console.log(food);


// get average mark of an object
function getAverageMark(obj) {
    let isEmpty = Object.keys(obj).length;
    if(!obj || isEmpty === 0) return -1;

    let subjectCount = Object.keys(obj).length;
    let mark = 0;
    for(let subject in obj) {
        mark += obj[subject];
    }
    return mark/subjectCount;
}
let myMark = {
    english: 10,
    math: 10,
    art: 10,
    music: 10,
}
console.log(getAverageMark(myMark));
console.log(getAverageMark({}));




