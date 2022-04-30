function asyncFunc(){
    return new Promise(function(resolve){
        let name = 'The Anh'
        setTimeout(function(){
            console.log('It is a asynchonous')
            return resolve(name)
        }, 3000)
    })
   
}
let introductions = 'My name is '
asyncFunc().then(name => {
    console.log(introductions + name)
})



async function say(){
    // Ví dụ lấy API qua url thì  await fetch("...")
    // Nhưng lười ko tìm url nên dùng tạm new Promise.
    // Vì fetch() cũng trả về 1 Promise nên logic là như nhau.
    let intro = await new Promise(resolve => {
        setTimeout(() => resolve('Hello'), 5000)
    })
    var done = await intro // nghĩa là đợi thẳng intro 
    // return về kq rồi mói chạy tiếp.
    return done
}

async function run(){
        var result = await say() // say ở trên return ra 1
        // promise chứa done nên ta lại dùng await để đợi 
        // nó trả về done.

        console.log(result)
}
run()

// Ưu tiên dùng cách trên cho đỡ phải .then 
// Còn nếu .then thì kq cũng ko thay đổi.
var result = say().then(resp => console.log(resp))




// BẮt lỗi trong async/await
let asyncFunc2 = async() => {
    var person = 'The Anh'
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(function() {
            reject('Hello ')
        },3000)
    })

    // khi gọi reject trong async/await. 
    // còn khi gọi reject 
    try{
        let resp = await myPromise
    }catch(e){
        console.log(e + person)
    }

    console.log('done')
}
// asyncFunc2()

