/*  METHOD 2 - PROMISES METHOD 

const asyncHandler = (function) =>{
    (req,res,next) =>{
            Promise.resolve(function(req,res,next)).
            catch((error)=>next(error))
        
        }
    
    }


*/


export {asyncHandler}

//Method 1 - Try Catch method
const asyncHandler = (func) => async(req,res,next)=>{
    try{
        await func(req,res,next)
    } catch (error) {
        res.status(error.code || 500).json(
            {
                success:false,
                message: error.message
            }
        )
    }

}



/*
1)const asyncHandler = ()=>{} //Basic kam
2)const asyncHandler = (func) =>{} //Funciton ko pass kardiya 
3)const asyncHandler = (func) =>{()=>{}} //Passing funciton to a function


In 3 rd one remove curly braces and make it async because async karna hai
const asyncHandler = (func) => async()=>{}


Why we are doing this?
Harek funciton jo mai lunga uske upar wrapper lagana hai async and try catch ka
*/