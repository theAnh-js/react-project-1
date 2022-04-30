    var getID = document.getElementById('id')
    var getName = document.getElementById('name')
    var getAge = document.querySelector('input[type = "number"]')
    
    var userInfoList = []

    function handleSubmit() {
        var userInfo = {
            id : getID.value,
            name : getName.value,
            age : getAge.value
        }

        var checkIndex = userInfoList.findIndex(user => user.id === userInfo.id)
        if(checkIndex !== -1) {
            userInfoList.splice(checkIndex, 1, userInfo)
        }else{
            userInfoList.push(userInfo)
        }

        handleRender()
        clear()
    }
    function handleRender() {
        if(userInfoList){
            var table = `
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Actions</th>
            </tr>
            `
            for(var i = 0; i < userInfoList.length; i++){
              
                table += `
                    <tr>
                        <td>${userInfoList[i].id}</td>
                        <td>${userInfoList[i].name}</td>
                        <td>${userInfoList[i].age}</td>
                        <td>
                            <button onclick="handleDelete(${userInfoList[i].id})" >Delete</button>
                            <button onclick="handleEdit(${userInfoList[i].id})" >Edit</button>
                        </id>
                    
                    </tr>
                `
            }
            document.getElementById('table').innerHTML = table

        } 
    }

    function clear(){
        getID.value = '' 
        getName.value = ''
        getAge.value = ''
    }
    
    function handleDelete(id){
        var confirmation = confirm('Are you sure you want to delete')
        if(confirmation){
            for(var i = 0; i < userInfoList.length; i++){
                if(userInfoList[i].id == id){

                    userInfoList.splice(i, 1)

                    handleRender()

                }
            }   
        }
        
    }

    function handleEdit(id){
        for(var i = 0; i < userInfoList.length; i++){
            if(userInfoList[i].id == id){
                getID.value = userInfoList[i].id
                getName.value = userInfoList[i].name
                getAge.value = userInfoList[i].age
            }
        }
    }

    var movies = [
        {
            name: 'Iron Man',
            charactor: 'Robber',
            profits: 100
        },
        {
            name: 'Iron Woman',
            charactor: 'RobberWife',
            profits: 500
        },
        {
            name: 'Spider Man',
            charactor: 'Tom',
            profits: 200
        }
    ]