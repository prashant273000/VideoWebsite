import express from "express";

const app  = express();

app.use(express.json()); //WHEN THE CLIENT SENDS THE JSON IN THE REQUEST BODY THE EXPRESS DOES NOT AUTOMATICALLY READ IT UNLESS YOU ADD THE MIDDLE WARE THE MIDDLEWARE IS 
//app.use(express.json());
//IT TELLS THE EXPRESS IF THE INCOMING REQUEST HAS THE JSON IN THE BODY PARSE IT AND PUT IT INTO req.body
//WITHOUT THIS REQ.BODY WILL BE UNDEFINED
//SO IF THE SERVER HANDLES ONLY THE GET REQUEST THEN THIS IS NOT NEEDED BUT SINCE WE ARE HANDLING ALL THE REQUESTS THIS IS NEEDED

//EXPRESS HAS TWO OBJECTS - REQ AND RES
//REQ IS THE REQUEST COMING FROM THE CLIENT AND RES IS THE RESPONSE WE WANT TO SEND 


// req

// This contains information coming from the client.

// Useful parts:

// req.body → data sent in JSON body
// req.params → route parameters like /users/:id
// req.query → query string like ?page=2
// req.method → GET, POST, PUT, DELETE
// req.url → the requested URL

// res

// This is used to send data back to the client.

// Useful methods:

// res.json(...)
// res.send(...)
// res.status(...)

//USING THE GET METHOD

const users = [];
let nextId = 1;


//CREATING A USER IN THE SERVER USING THE POST METHOD
app.post("/users",(req,res)=>{
    const name = req.body.name;

    if(!name){
        return res.status(400).json( //WE CAN CHAN DIFFERENT METHODS TOGETHER
            {
                message:"Name is required"
            }
        )
        const newUser = {
            id: nextId,
            name:name
        }

        users.push(newUser)
        nextid++;

        res.status(201).json({
            message: "User created successfully",
            user: newUser
        })
    }
});

//IF THE CLIENT WANTS TO GET ALL THE USERS THEN HE CAN GET BY:
app.get("/users",(req,res)=>{
    res.json(users);
})

//GET ONE USER BY ID
app.get("/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const getUser = users.find((u)=>{
        u.id===id;
    });
    if(!getUser){
        return res.status(404).json({
            message:"User not found"
        })
    }

    res.json(getUser)
})


//UPDATE A USER 
app.put("/users/:id",(req,res)=>{
    const id = Number(req.params.id)
    const namee = req.body.name;
    const user = users.find((u)=>{
        u.id===id
    })
    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }
    if(!namee){
        return res.status(400).json({
            message :"Name is required"
        })
    }
    user.name =namee;
    res.json({
    message: "User updated successfully",
    user
    });

});

//DELETE A USER
app.delete("/users/:id", (req,res)=>{
    const id  = Number(req.params.id);
    const index = users.findIndex((u)=>u.id===id)

    if(index=-1){
        return res.status(404).json({
            message:"User not found"
        })
    }
    
    const deletedUser =  users.splice(index,1)

    res.json({
        message:"User deleted successfully",
        deletedUser:deletedUser[0]
    });
})

app.listen(8000,()=>{
    console.log("Server listening on the PORT 8000");
})
