import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors(
    {
        origin : process.env.CORS_ORIGIN,
        credentials: true
    }
))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())



//routes import

import userRouter from './routes/user.routes.js'

//Ye import statement ka manchaha name tabhi de sakte hain jab export default ho rhaa ho

//routes decleration
app.use("/api/v1/users",userRouter)


//Now the user will go to the - http://localhost:8000/api/v1/users/{the thing written in user.routes.js} ex- users/login 

export {app}