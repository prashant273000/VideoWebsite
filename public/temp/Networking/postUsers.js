async function createUserr(url,data){
    const obj  = await fetch(url,
        {
            method:'POST',
            mode:'cors',
            headers:{
                'X-API-KEY' : "NOT AVAILABLE",
                'Content-Type':"application/json"
            },
            body:JSON.stringify(data)
        }
    )
    return obj.json();
}
const url = 'http://localhost:8000'
const data ={
    name:"Prashant Prabhakar"
}
try{
    const userCreation = await createUserr(url,data)
    console.log(userCreation);
}catch(error){
    console.log(error);
}
