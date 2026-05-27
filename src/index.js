import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/mongodb_connect.js";

const app = express();

connectDB() //returns the promise
.then(()=>{//When the promise is returned and is successful then do this
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((error)=>{//If the promise is rejected then do this 
    console.log("MongoDB connection failed. Server not started. Error is ",error);
})











/*
PROMISE IN JAVASCRIPT:

In JS a promise is an object that represents a value that will be available later.
Think of it like ordering food online:
->You place the order - promise created
->Food arrives - promise resolved(then)
->Delivery fails - promise rejected(catch)

Any function marked with async automatically returns a promise as the connectDB funciton is marked with async it returns a promise.



async function hello(){
    return "Hello";
}

hello()
.then(()=>{
    console.log("Hello was printed on the screen");
}

)
.catch((error) =>{
    console.log(error)
}
)

.then runs when the promise is successful (resolved)
ex -promise.then((value) => {
   console.log(value)
})

.catch() runs when Promise fails (rejected).
ex-promise.catch((error) => {
   console.log(error)
})

connectDB()
.then(() => {})
.catch(() => {})

    is similar to:

try {
   await connectDB()
} catch(error) {

}
*/


























// function connectDB(){

// }
// connectDB()   can be made more professional using iife

// ;( async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        application.on("error",(error)=>{
//         console.log("Error",error);
//         throw error
//        })

//        app.listen(process.env.PORT,()=>{
//         console.log(`Application is listening on port ${process.env.PORT}`);
//        })
//     }
//     catch(error){
//         console.error("ERROR:", error)
//         throw error
//     }
// })