
async function getUsers(url,apiKey){
    const obj = await fetch(url,
        {
            method:'GET',
            mode:'cors',
            headers:{
                "X-API-KEY":apiKey || "NOT AVAILABLE"
            }
        }
    )
    return obj.json();
}
const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/users"

try{
    const json_data = await getUsers(url)
    console.log(json_data);
}catch(error){
    console.log("Error occured: ",error);
}

//THE PRIMARY USE OF THE HTTP METHODS IS TO INDICATE THE SERVER WHAT WE WANT TO DO
//CRUD - CREATE READ UPDATE DELETE
//CREATE - POST
//READ - GET
//UPDATE - PUT
//DELETE - DELETE