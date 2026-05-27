Taking the example that the client hits the url instagram

->Client hits the url /instagram  
->If you come to this url then what you will do 
(req,res)
res.send("Hitesh")


dono ke bich me kuch check karna hoga 



->Client hits the url /instagram  
->Check if the user is logged in (CHECKING)
->If you come to this url then what you will do 
(req,res)
res.send("Hitesh")

More than 1 middlewares can be used 


->Client hits the url /instagram  
->Check if the user is logged in (CHECKING MIDDLEWARE)
->Check if the user is admin (CHECKING MIDDLEWARE)
->If you come to this url then what you will do 
(req,res)
res.send("Hitesh")


