
const getApi = 'http://localhost:3000/course'

const nameInput = document.querySelector('input[name = "name"]')
const descriptionInput = document.querySelector('input[name = "description"]')
const getUL = document.querySelector('.list-courses')
const getFrom = document.getElementById('addCourses-Form')

const submitBtn = document.querySelector('.btn')


function renderCourse(courses){
    var htmls = ''
    courses.forEach(course => {

        htmls += 
        `<li data-id = ${course.id}>
            <h3>${course.name}</h3>
            <p>${course.description}</p>
            <button id = "delete-course">Delete</button>
            <button id = "edit-course">Edit</button>
        </li>`
        })
        
    getUL.innerHTML = htmls
}

// Get data
fetch(getApi)
.then(response =>response.json())
.then(data =>{renderCourse(data)})

// Create new Courses: POST
getFrom.addEventListener('submit', (e) =>{
    e.preventDefault()

    fetch(getApi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameInput.value,
            description: descriptionInput.value
        })
    })
    .then(response => response.json())
    .then(data => {
        var dataArray = []
        dataArray.push(data)
        renderCourse(dataArray)
    })
})

getUL.addEventListener('click', (e) => {
    e.preventDefault()
    let liTagNameId = e.target.parentElement.dataset.id
    let btnId = e.target.getAttribute('id')
    
    //Delete the course
    if(btnId == 'delete-course'){
        fetch(`${getApi}/${liTagNameId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(() => location.reload());
    }

    // Edit - Update: PATCH/ PUT
    if(btnId == 'edit-course'){
        let parentElement = e.target.parentElement
        let courseName = parentElement.querySelector('h3')
        let courseDescription = parentElement.querySelector('p')

        nameInput.value = courseName.textContent
        descriptionInput.value = courseDescription.textContent
    }

    submitBtn.addEventListener('click', (e) =>{
        e.preventDefault()

        fetch(`${getApi}/${liTagNameId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameInput.value,
                description: descriptionInput.value
            })
        })
        .then((response) => response.json())
        .then(() => location.reload())
        
    })
})