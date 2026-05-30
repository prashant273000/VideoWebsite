import http from "http"
const server = http.createServer((req,res)=>{
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Headers:",req.headers);
    
    res.setHeader("Content-Type","application/json")
    res.end(
        JSON.stringify(
            {
                method:req.method,
                url:req.url,
                headers:req.headers
            }
        )
    )
})
server.listen(8000, ()=>{
    console.log("Listening on port 8000");
})