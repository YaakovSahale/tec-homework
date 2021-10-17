const http = require(`http`)

const article = {
    title: `aria`,
    author: `shame`,
    date: `12/5/2015`
}

const  articleJson = JSON.stringify(article) 
const server = http.createServer((req, res) => {
    res.write(articleJson)
    res.end()
})

server.listen(1001)