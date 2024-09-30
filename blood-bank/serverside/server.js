const http=require ("http")
const fs=require ("fs")
const url=require ("url")
const { prototype } = require("events")
const PORT=3000
const app=http.createServer(async(req,res)=>{
    const path=url.parse(req.url)
    console.log(path);


    if(path.pathname="/"){
        res.writeHead(200,{"content-type":"text/html"});
        res.end(fs.readFileSync("../clientside/pages/index.html"))
    }
    if(path.pathname="/clientside/css/inde.css"){
        res.writeHead(200,{"content-type":"text/css"});
        res.end(fs.readFileSync("../clientside/css/index.css"))
    }
})
app.listen(PORT)