import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
    username:{
        type:string,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true // optimizes searching
    },
    watchHistory:{
        type: Schema.Types.ObjectId,
        ref:"Video"
    },
    email:{
        type:string,
        required:true,
        unique:true,
        lowercase:true,
        trim:true, // removes the leading and trailing whitespaces from a value before it is saved in the database
    },
    fullName:{
        type:string,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:string, //cloudinary url
        required:true
    },
    coverImage:{
        type:string,
    },
    password:{
        type:string, //a challange is that password should be encrypted because the databases are often leaked
        required:[true,'Password is required']
    },
    refreshToken:{
        type:string //a long token
    }
},
{
    timestamps:true
})





userSchema.pre("save", async function (next){
    if(!this.isModified("password"))
        return next();// checks if the password is modified

    this.password = bcrypt.hash(this.password,10)
    next()
}) //write any code here
//like we can inject hooks we can make methods also

userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password, this.password)
}//we can write userSchema.methods.{addannumberofmethods followed by dot}
//ex-userschema.methods.method1
//                      .method2

userSchema.methods.generateAccessToken = function(){
    jwt.sign(
        {
            _id:this.id,
            email:this.email,
            username=this.username,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    jwt.sign(
        {
            _id:this.id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.REFRESH_TOKEN_EXPIRY
        }
    )
}

 //encrytpion and all are complex so written as async and as it is middleware next is used becuase next passes the flag forward
//hooks are that kind of thing like apka data save hone jaraha hai just usse phele kuch karna hai like data encrypt kardo . usse just phele code dalkar run karwa sakte ho and which methods we can use is given in middle ware documentation of mongoose



export const User =  mongoose.model("User",userSchema)



//JWT is a bearear token - Asked in interviews. MTLB - Ye token jo bhe mereko bhejega main usko data bhejdunga. Chabhi ke thara hai. SEE JWT GITHUB DOCS (Very easy)