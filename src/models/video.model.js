import mongoose, { plugin } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new mongoose.Schema(
    {
        id:{
            type:String,
            required:true,
            unique:true
        },
        videoFile:{
            type:String, //CLOUDINARY URL
            required:true
        },
        thumbnail:{
            type:String,
            require:true,
        },
        owner:{
            type:Schema.types.ObjectId,
            ref:"User",
            unique:true
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        duration:{
            type:Number, //SENT BY THE CLOUDINARY URL
            required:true,
        },
        views:{
            type:Number,
            required:true,
            default:0
        },
        isPublished:{
            type:Boolean,
            default:true,
        }
    },
    {
        timestamps:true
    }
)


videoSchema.plugin(mongooseAggregatePaginate) //videoSchema has many methods so many middlewares can be written and plugins can also be injected. Now we can write queries on moongooseaggergatepaginate

export const video = new mongoose.model("video",videoSchema)