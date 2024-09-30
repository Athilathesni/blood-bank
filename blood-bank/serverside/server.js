const http=require ("http")
const fs=require ("fs")
const url=require ("url")
const PORT=3000;
const app=http.createServer(async(req,res)=>{
    const path=url.parse(req.url)
    // console.log(path);


    if(path.pathname="/"){
        res.writeHead(200,{"content-type":"text/html"});
        res.end(fs.readFileSync("../clientside/pages/index.html"))
    }
    else if(path.pathname=='/css/index.css'){
        res.writeHead(200,{"content-type":"text/css"});
        res.end(fs.readFileSync("../clientside/css/index.css"))
    }
    else if(path.pathname=='/add'){
        res.writeHead(200,{"content-type":"text/html"});
        res.end(fs.readFileSync("../clientside/pages/add.html"))
    }
    else if(path.pathname=='/css/add.css'){
        res.writeHead(200,{"content-type":"text/css"});
        res.end(fs.readFileSync("../clientside/css/add.css"))
    }
    else if(path.pathname=='/clientside/js/custom.js'){
        res.writeHead(200,{"content-type":"text/js"});
        res.end(fs.readFileSync("../clientside/js/custome.js"))
    }
    else if(path.pathname=='/clientside/js/add.js'){
        res.writeHead(200,{"content-type":"text/js"});
        res.end(fs.readFileSync("../clientside/js/add.js"))
    }
})
app.listen(PORT)