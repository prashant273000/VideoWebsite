//CREATE User 

async function createUser(name,url){
    const create = await fetch(url,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name:"Prashant"
        })
    })
}

// createUser("Prashant",'http://localhost:8000')

async function displayUsers(url){
    const displayUsers = await fetch(url,{
        method:'GET'
    })
    console.log(displayUsers.json());
}

displayUsers('http://localhost:8000')
