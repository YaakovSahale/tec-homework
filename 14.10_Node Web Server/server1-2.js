const http = require(`http`)

const server = http.createServer((request, response) =>{
    response.write(`<h1 style=\"text-align:center;\">hello</h1>`)
    console.log(request.url);
    console.log(request.method);
    response.end()
})

server.listen(2000)