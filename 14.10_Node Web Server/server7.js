const http = require(`http`)
const fs = require(`fs`)

const server = http.createServer((req, res)=>{
    fs.readFile(`./server7index.html`, `utf-8` ,(err, data)=>{
        if(err){
            res.writeHead(404)
            res.write(JSON.stringify(err))
            console.log(err);
        }
        else{
            res.write(data)
        }

        res.end()
    })
})

server.listen(8080)